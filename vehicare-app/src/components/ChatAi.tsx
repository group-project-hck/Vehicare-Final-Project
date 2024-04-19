"use client";

import {
  ChatSession,
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { KeyboardEvent, useEffect, useState } from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

export default function Chat() {
  const [messages, setMessages] = useState<
    { text: string; role: string; timeStamp: Date }[]
  >([]);
  const [userInput, setUserInput] = useState<string>("");
  const [chat, setChat] = useState<ChatSession | null>(null);
  const [theme, setTheme] = useState<string>("light");
  const [error, setError] = useState<any>(null);
  const API_KEY = "AIzaSyBCJH01fHTDuwPTbECe4qhScg4cxdixvYQ";
  const MODEL_NAME = "gemini-pro";
  const genAi = new GoogleGenerativeAI(API_KEY);
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 512,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat: ChatSession = await genAi
          .getGenerativeModel({ model: MODEL_NAME })
          .startChat({
            generationConfig,
            safetySettings,
            history: messages.map((msg: { text: string; role: string }) => ({
              text: msg.text,
              role: msg.role,
              parts: [{ text: msg.text, role: msg.role }],
            })),
          });
        setChat(newChat);
      } catch (error) {
        setError("Failed to initialize chat");
      }
    };
    initChat();
  }, []);
  const handleSendMessages = async () => {
    try {
      const userMessage = {
        text: userInput,
        role: "user",
        timeStamp: new Date(),
        parts: [{ text: userInput, role: "user" }],
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserInput("");
      if (chat) {
        const result = await chat.sendMessage(userInput);
        const markdownContent = result.response.text();
        const resultchat = converter.makeHtml(markdownContent);
        const botMessage = {
          text: resultchat,
          role: "bot",
          timeStamp: new Date(),
          parts: [{ text: result.response.text(), role: "bot" }],
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      setError("Failed to send message");
      window.location.href = "/";
    }
  };
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };
  const getThemeColors = () => {
    switch (theme) {
      case "light":
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-blue-500",
          text: "bg-gray-800",
        };
      case "dark":
        return {
          primary: "bg-gray-900",
          secondary: "bg-gray-800",
          accent: "bg-yellow-500",
          text: "text-gray-100",
        };
      default:
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-blue-500",
          text: "bg-gray-800",
        };
    }
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessages();
    }
  };
  const { primary, secondary, accent, text } = getThemeColors();
  return (
    <div className={`flex flex-col p-4 h-screen ${primary}`}>
      <div className={`flex justify-between items-center mb-4`}>
        <h1 className={`text-2xl font-bold ${text}`}>Gemini Chat</h1>
        <div className="flex space-x-2">
          <label htmlFor="theme" className={`text-sm ${text}`}>
            Theme :
          </label>
          <select
            defaultValue={theme}
            id="theme"
            onChange={handleThemeChange}
            className={`p-1 rounded-md border ${text}`}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
      <div className={`flex-1 overflow-y-auto ${secondary} rounded-md p-2`}>
        {messages.map(
          (
            msg: { text: string; role: string; timeStamp: Date },
            index: number
          ) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  msg.role === "user"
                    ? `${accent} text-white`
                    : `${primary} ${text}`
                }`}
              >
                <span dangerouslySetInnerHTML={{__html: msg.text}} />
              </div>
              <p className={`text-xs ${text} mt-1`}>
                {msg.role === "bot" ? "Bot" : "You"} -{" "}
                {msg.timeStamp.toLocaleTimeString()}
              </p>
            </div>
          )
        )}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className={`flex-1 p-2 rounded-l-md border-t border-b border-l focus:outline-none focus:border-${accent}`}
          />
          <button
            onClick={handleSendMessages}
            className={`p-2 ${accent} text-white rounded-r-md hover:bg-opacity-80 focus:outline-none`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
