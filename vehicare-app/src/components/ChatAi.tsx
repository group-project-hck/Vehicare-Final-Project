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
      if (userInput !== "Lokasi Bengkel") {
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
      } else {
        const botMessage = {
          text: "Halo, Anda dapat mengunjuki link berikut untuk list dan alamat langsung lokasi bengkel yang sudah bekerja sama dengan kami : https://www.google.com/maps/search/Ahass+motor/@-6.2241668,106.7634056,12.79z?entry=ttu",
          role: "bot",
          timeStamp: new Date(),
          parts: [{ text: "Halo, Anda dapat mengunjuki link berikut untuk list dan alamat langsung lokasi bengkel yang sudah bekerja sama dengan kami : https://www.google.com/maps/search/Ahass+motor/@-6.2241668,106.7634056,12.79z?entry=ttu", role: "bot" }]
        }
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      setError("Failed to send message");
      window.location.href = "/";
    }
  };
  const getThemeColors = {
    primary: "bg-gray-900",
    secondary: "bg-gray-800",
    accent: "bg-yellow-500",
    text: "text-gray-100",
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessages();
    }
  };
  const { primary, secondary, accent, text } = getThemeColors
  return (
    <div className={`flex flex-col p-4 h-screen ${primary}`}>
      <div className={`flex justify-between items-center mb-4`}>
        <h1 className={`text-2xl font-bold ${text}`}>Gemini Chat</h1>
      </div>
      <div className={`flex-1 overflow-y-auto ${secondary} rounded-md p-4 mb-20`}>
        {messages.map(
          (
            msg: { text: string; role: string; timeStamp: Date },
            index: number
          ) => (
            <>
              <div
                key={index}
                className={`mb-4 ${msg.role === "user" ? "chat chat-end" : "chat chat-start"
                  }`}
              >
                {/* AVATAR */}
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="avatar" src={msg.role === "user" ? 'user_12641598.png' : 'profile_3135715.png'} />
                  </div>
                </div>
                {/* BODY */}
                <div
                  className={`${msg.role === "user"
                    ? `${accent} text-white`
                    : `${primary} ${text}`
                    } chat-bubble`}
                >
                  <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
                <p className={`text-xs ${text} mt-1`}>
                </p>
                <div className="chat-footer text-white">
                  {msg.role === "bot" ? "Bot" : "You"} -{" "}
                  <time className="text-xs opacity-50">{msg.timeStamp.toLocaleTimeString()}</time>
                </div>
              </div>  
            </>
          )
        )}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="flex justify-center">
          <div className="absolute bottom-7 flex w-full px-10">
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
    </div>
  );
}
