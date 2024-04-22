"use client";
import React from "react"; // Import React agar bisa menggunakan JSX
import closeBtn from "../../Assets/closeBtn.svg";
import Image from "next/image";
import {
  ChatSession,
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { KeyboardEvent, useEffect, useState } from "react";
import showdown from "showdown";

interface InputModalChatProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const converter = new showdown.Converter();

export default function InputModalChat({
  modal,
  setModal,
}: InputModalChatProps) {
  const toggleModal = () => {
    setModal(!modal); // Mengubah nilai modal menjadi kebalikan dari nilai saat ini
  };
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
          scrollToBottom()
        }
      } else {
        const botMessage = {
          text: "Halo, Anda dapat mengunjuki link berikut untuk list dan alamat langsung lokasi bengkel yang sudah bekerja sama dengan kami : https://www.google.com/maps/search/Ahass+motor/@-6.2241668,106.7634056,12.79z?entry=ttu",
          role: "bot",
          timeStamp: new Date(),
          parts: [
            {
              text: "Halo, Anda dapat mengunjuki link berikut untuk list dan alamat langsung lokasi bengkel yang sudah bekerja sama dengan kami : https://www.google.com/maps/search/Ahass+motor/@-6.2241668,106.7634056,12.79z?entry=ttu",
              role: "bot",
            },
          ],
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        scrollToBottom()
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
  const { primary, secondary, accent, text } = getThemeColors;

  // Fungsi untuk scroll ke bawah
  function scrollToBottom() {
    const container = document.querySelector(".overflow-y-scroll");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 h-full flex items-end justify-end bg-gray-800 bg-opacity-75">
          <div className="bg-white w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3 mb-20 mr-10">
            {/* Isi Modal */}
            <div className="flex justify-between items center border-b border-gray-200 py-3 -mt-2">
              <div className="flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800">
                  Customer Service
                </p>
              </div>
              <div
                onClick={toggleModal}
                className="w-8 h-8 flex items-center justify-center"
              >
                {/* Memanggil toggleModal saat tombol "x" diklik */}
                <Image
                  src={closeBtn}
                  alt="Close"
                  className="h-8 w-8 btn-ghost"
                />
              </div>
            </div>
            {/* Isi Body Modal */}
            <div className="my-">
              <div className="bg-white rounded-lg shadow-md p-4">
                {/* Chat Messages */}
                <div className="space-y-4 overflow-y-scroll h-96 text-sm">
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
                          <div className="chat-footer">
                            {msg.role === "bot" ? "Bot" : "You"} -{" "}
                            <time className="text-xs opacity-50">{msg.timeStamp.toLocaleTimeString()}</time>
                          </div>
                        </div>
                      </>
                    )
                  )}
                </div>
                {/* Chat Input */}
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 py-2 px-3 rounded-full focus:outline-none border"
                  />
                  <button
                    onClick={handleSendMessages}
                    className="text-white px-4 py-2 rounded-full ml-3 hover:bg-black-200 hover:text-black"
                    style={{ backgroundColor: "#EB8D00" }}
                  >
                    Send
                  </button>
                </div>
              </div>
              {/* Konten Modal */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
