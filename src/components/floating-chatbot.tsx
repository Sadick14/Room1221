
"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  X,
  ExternalLink,
  Shield,
  ChevronRight,
} from "lucide-react";
import WebChat from "./web-chat";

export default function FloatingChatbot() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowMoreOptions(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
    handleCloseModal();
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/room1221bot", "_blank");
    handleCloseModal();
  };

  const handleSMSClick = () => {
    window.location.href = "sms:+1234567890";
    handleCloseModal();
  };

  const handleWebChatClick = () => {
    setIsModalOpen(false);
    setIsChatOpen(true);
  };

  if (isChatOpen) {
    return <WebChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />;
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleOpenModal}
          className="group w-16 h-16 bg-gradient-to-r from-[#6366FF] to-[#8B5CF6] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6366FF]/30 active:scale-95 flex items-center justify-center"
        >
          <div className="relative">
            <MessageCircle
              size={24}
              className="group-hover:scale-110 transition-transform duration-200"
            />
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl max-w-sm w-full">
            {/* Modal Header */}
            <div className="p-6 text-center border-b border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6366FF] to-[#8B5CF6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} />
              </div>
              <h2 className="font-inter font-bold text-xl text-[#111111] dark:text-white">
                Hello! I am your safe room for SRH support.
              </h2>
              <p className="font-inter text-sm text-[#6B7280] dark:text-white/70 mt-1">
                Got questions? I've got you covered.
              </p>
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Privacy Reminder */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Shield
                    size={20}
                    className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-inter font-semibold text-green-800 dark:text-green-300 text-sm mb-1">
                      100% Anonymous & Confidential
                    </h3>
                    <p className="font-inter text-xs text-green-700 dark:text-green-400 leading-relaxed">
                      No registration required. Your conversations are private.
                    </p>
                  </div>
                </div>
              </div>

              {!showMoreOptions ? (
                <div className="space-y-4 text-center">
                  <button
                    onClick={handleWebChatClick}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#6366FF] dark:bg-[#8B5CF6] text-white font-inter font-semibold text-lg px-6 py-4 rounded-xl hover:bg-[#5856FF] dark:hover:bg-[#7C3AED] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60 shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>Chat Now</span>
                  </button>
                  <button
                    onClick={() => setShowMoreOptions(true)}
                    className="font-inter font-medium text-sm text-[#6366FF] dark:text-[#8B5CF6] hover:underline"
                  >
                    More Options
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="font-inter font-semibold text-[#111111] dark:text-white text-base text-center mb-4">
                    Or connect with us on:
                  </h3>
                  {/* WhatsApp */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#25D366] dark:hover:border-[#25D366] transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center">
                        <MessageCircle size={20} className="text-[#25D366]" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-inter font-semibold text-sm text-[#111111] dark:text-white">
                          WhatsApp
                        </h4>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-[#6B7280] dark:text-white/70 group-hover:text-[#25D366] transition-colors"
                    />
                  </button>

                  {/* Telegram */}
                  <button
                    onClick={handleTelegramClick}
                    className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#0088cc] dark:hover:border-[#0088cc] transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 bg-[#0088cc]/10 rounded-lg flex items-center justify-center">
                        <MessageCircle size={20} className="text-[#0088cc]" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-inter font-semibold text-sm text-[#111111] dark:text-white">
                          Telegram
                        </h4>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-[#6B7280] dark:text-white/70 group-hover:text-[#0088cc] transition-colors"
                    />
                  </button>

                  {/* SMS */}
                  <button
                    onClick={handleSMSClick}
                    className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#6366FF] dark:hover:border-[#6366FF] transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#6366FF]/10 rounded-lg flex items-center justify-center">
                        <Phone size={20} className="text-[#6366FF]" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-inter font-semibold text-sm text-[#111111] dark:text-white">
                          SMS
                        </h4>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-[#6B7280] dark:text-white/70 group-hover:text-[#6366FF] transition-colors"
                    />
                  </button>
                   <button
                    onClick={() => setShowMoreOptions(false)}
                    className="w-full text-center font-inter font-medium text-sm text-[#6B7280] dark:text-white/70 hover:underline mt-4"
                  >
                    Back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
