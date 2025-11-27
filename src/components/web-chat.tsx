
"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  User,
  Shield,
  Languages,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { handleChat } from "@/lib/actions";
import type { Message, Language } from "@/lib/definitions";

interface WebChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function WebChat({ isOpen, setIsOpen }: WebChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I am your safe room for SRH support. I'm here to provide confidential, judgment-free sexual and reproductive health information. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    const formData = new FormData();
    formData.append("message", input);
    formData.append("language", language);

    const result = await handleChat(formData);

    if (result.success) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: result.response,
      };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Sorry, I couldn't process that. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsSending(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl max-w-sm w-full h-[70vh] flex flex-col border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6366FF] to-[#8B5CF6] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h2 className="font-inter font-bold text-base">Room 1221</h2>
                  <p className="font-inter text-xs text-white/80 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${
                    message.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-[#6366FF] text-white rounded-br-none"
                        : "bg-gray-100 dark:bg-[#2A2A2A] text-[#111111] dark:text-white rounded-bl-none"
                    }`}
                  >
                    <p className="font-inter text-sm leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                  {message.sender === "user" && (
                     <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-gray-700 dark:text-gray-200" />
                    </div>
                  )}
                </div>
              ))}
               {isSending && (
                <div className="flex items-end gap-2">
                   <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="bg-gray-100 dark:bg-[#2A2A2A] rounded-2xl p-3 rounded-bl-none">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                    </div>
                </div>
                )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
               <div className="flex items-center gap-2 mb-2">
                 <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                    <SelectTrigger className="w-auto bg-gray-100 dark:bg-gray-800 border-none h-8 text-xs">
                        <Languages className="w-3.5 h-3.5 mr-1" />
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="tw">Twi</SelectItem>
                        <SelectItem value="ee">Ewe</SelectItem>
                        <SelectItem value="ga">Ga</SelectItem>
                    </SelectContent>
                 </Select>
                 <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Shield size={12} className="mr-1" />
                    <span>Anonymous Chat</span>
                 </div>
               </div>
              <div className="relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      onSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="pr-20 min-h-[40px] max-h-24 resize-none"
                  rows={1}
                  disabled={isSending}
                />
                <Button
                  onClick={onSend}
                  disabled={isSending || input.trim() === ""}
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#6366FF] hover:bg-[#5856FF]"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
