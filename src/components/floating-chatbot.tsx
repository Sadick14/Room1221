"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Phone,
  X,
  ExternalLink,
  Shield,
} from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleOpenModal = () => {
    setIsOpen(true);
    setShowWelcome(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number when available
    window.open("https://wa.me/1234567890", "_blank");
    setIsOpen(false);
  };

  const handleTelegramClick = () => {
    // Replace with actual Telegram username when available
    window.open("https://t.me/room1221bot", "_blank");
    setIsOpen(false);
  };

  const handleSMSClick = () => {
    // Replace with actual SMS number when available
    window.location.href = "sms:+1234567890";
    setIsOpen(false);
  };

  const handleWebChatClick = () => {
    // This would open the web chat interface
    // For now, we'll just show an alert
    alert("Web chat interface would open here");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Welcome Tooltip */}
        {showWelcome && (
          <div className="absolute bottom-full right-0 mb-4 max-w-xs">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-600 relative">
              {/* Arrow pointing to button */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white dark:bg-[#1E1E1E] border-r border-b border-gray-200 dark:border-gray-600 transform rotate-45"></div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#6366FF]/10 dark:bg-[#8B5CF6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart
                    size={16}
                    className="text-[#6366FF] dark:text-[#8B5CF6]"
                  />
                </div>
                <div>
                  <p className="font-inter text-sm text-[#111111] dark:text-white font-semibold mb-1">
                    Welcome to Room 1221! 👋
                  </p>
                  <p className="font-inter text-xs text-[#6B7280] dark:text-white dark:text-opacity-70 mb-3">
                    Get confidential SRH support anytime, anonymously
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="w-full bg-[#6366FF] dark:bg-[#8B5CF6] text-white font-inter font-medium text-xs px-3 py-2 rounded-lg hover:bg-[#5856FF] dark:hover:bg-[#7C3AED] transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </div>
                <button
                  onClick={() => setShowWelcome(false)}
                  className="text-[#6B7280] dark:text-white dark:text-opacity-70 hover:text-[#111111] dark:hover:text-white transition-colors duration-200"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={handleOpenModal}
          className="group w-16 h-16 bg-gradient-to-r from-[#6366FF] to-[#8B5CF6] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6366FF]/30 active:scale-95 flex items-center justify-center"
        >
          <div className="relative">
            <Heart
              size={24}
              className="group-hover:scale-110 transition-transform duration-200"
            />

            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
          </div>

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#6366FF] to-[#8B5CF6] text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-inter font-bold text-xl">
                      Start Your Conversation
                    </h2>
                    <p className="font-inter text-sm text-white/80">
                      Choose your preferred platform
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Privacy Reminder */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
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
                      No registration required. Your conversations are private
                      and can be auto-deleted.
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform Options */}
              <div className="space-y-3">
                <h3 className="font-inter font-semibold text-[#111111] dark:text-white text-lg">
                  Choose Your Platform
                </h3>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-between p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#25D366] dark:hover:border-[#25D366] transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#25D366] rounded"></div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-inter font-semibold text-[#111111] dark:text-white">
                        WhatsApp
                      </h4>
                      <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                        Most popular messaging platform
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[#6B7280] dark:text-white dark:text-opacity-70 group-hover:text-[#25D366] transition-colors"
                  />
                </button>

                {/* Telegram */}
                <button
                  onClick={handleTelegramClick}
                  className="w-full flex items-center justify-between p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#0088cc] dark:hover:border-[#0088cc] transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#0088cc]/10 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#0088cc] rounded"></div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-inter font-semibold text-[#111111] dark:text-white">
                        Telegram
                      </h4>
                      <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                        Enhanced privacy and security
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[#6B7280] dark:text-white dark:text-opacity-70 group-hover:text-[#0088cc] transition-colors"
                  />
                </button>

                {/* SMS */}
                <button
                  onClick={handleSMSClick}
                  className="w-full flex items-center justify-between p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#6366FF] dark:hover:border-[#6366FF] transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#6366FF]/10 rounded-xl flex items-center justify-center">
                      <Phone size={20} className="text-[#6366FF]" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-inter font-semibold text-[#111111] dark:text-white">
                        SMS
                      </h4>
                      <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                        Works on any phone, including basic phones
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[#6B7280] dark:text-white dark:text-opacity-70 group-hover:text-[#6366FF] transition-colors"
                  />
                </button>

                {/* Web Chat */}
                <button
                  onClick={handleWebChatClick}
                  className="w-full flex items-center justify-between p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#8B5CF6] dark:hover:border-[#8B5CF6] transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                      <MessageCircle size={20} className="text-[#8B5CF6]" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-inter font-semibold text-[#111111] dark:text-white">
                        Web Chat
                      </h4>
                      <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                        Full-featured chat right here
                      </p>
                    </div>
                  </div>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded-full font-inter font-medium">
                    Recommended
                  </span>
                </button>
              </div>

              {/* Language Support */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <p className="font-inter text-xs text-[#6B7280] dark:text-white dark:text-opacity-70 text-center">
                  Available in:{" "}
                  <span className="font-semibold">
                    English • Twi • Ewe • Ga
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}