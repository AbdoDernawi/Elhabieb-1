"use client";

// REACT
import { useState } from "react";

// COMPONENTS
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

// IMAGES
import userAvatar from "@/public/images/admin1.png";
import { Avatar, Button } from "@nextui-org/react";

type Message = {
  id: number;
  sender: "me" | "other";
  text: string;
  timestamp: string;
};

const initialMessages: Message[] = [
  { id: 1, sender: "me", text: "Hello, how are you?", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "other",
    text: "I'm good, thanks! How about you?",
    timestamp: "10:05 AM",
  },
  {
    id: 3,
    sender: "me",
    text: "I'm doing well, thank you!",
    timestamp: "10:10 AM",
  },
];

export default function Chat({ params }: { params: { slug: string } }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "me",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="flex-1 flex flex-col mr-1">
          <NavBar />

          <div className="bg-[var(--content)] mt-1 mb-0.5 p-4 flex items-center">
            <Avatar
              src={
                "data:image/jpeg;base64,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"
              }
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-lg font-semibold hover:cursor-pointer">
              mohamed ali & AbdElmen3am
            </div>
          </div>

          <div className="flex-1 p-4 pt-10 overflow-auto bg-[var(--content)]">
            <div className="flex flex-col space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-4 rounded-2xl ${
                      message.sender === "me"
                        ? "bg-[var(--mainColor)]"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="text-xs text-gray-500">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-200 p-4 flex items-center border-t border-gray-300">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="input"
              placeholder="Type a message ..."
            />
            <Button
              onClick={handleSendMessage}
              className="ml-4 px-4 py-2 h-14 bg-[var(--IconArrow)] rounded-lg"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
