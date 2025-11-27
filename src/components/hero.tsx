"use client"
import { Shield, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-[#121212] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Hero Content - Stacked and Centered */}
        <div className="text-center space-y-8">
          {/* Room 1221 Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366FF] to-[#8B5CF6] flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div className="text-left">
                <h1 className="font-inter font-bold text-2xl text-[#111111] dark:text-white">
                  Room 1221
                </h1>
                <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                  Your Safe Space for SRH
                </p>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="font-inter font-bold text-[#111111] dark:text-white leading-[1.15] text-4xl md:text-5xl lg:text-[54px] max-w-4xl mx-auto">
            Confidential Sexual & Reproductive Health Support{" "}
            <span className="text-[#6366FF] dark:text-[#8B5CF6]">24/7</span> for{" "}
            <span className="text-[#6366FF] dark:text-[#8B5CF6]">
              Ghanaian Youth
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="font-inter text-[#525252] dark:text-white dark:text-opacity-70 text-lg leading-[1.6] max-w-[70ch] mx-auto">
            Access medically verified information, education, and local
            referrals without fear of judgment. Available in English, Twi, Ewe,
            and Ga through WhatsApp, Telegram, SMS, and web chat.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="inline-flex items-center space-x-2 bg-[#6366FF] dark:bg-[#8B5CF6] text-white font-inter font-semibold text-lg px-8 py-4 rounded-[20px] hover:bg-[#5856FF] dark:hover:bg-[#7C3AED] active:bg-[#4F46E5] dark:active:bg-[#6D28D9] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60 min-h-[56px] shadow-lg">
              <MessageCircle size={20} />
              <span>Get Started</span>
            </button>
            <button className="inline-flex items-center space-x-2 bg-white dark:bg-[#1E1E1E] text-[#6366FF] dark:text-[#8B5CF6] font-inter font-semibold text-lg px-8 py-4 rounded-[20px] border-2 border-[#6366FF] dark:border-[#8B5CF6] hover:bg-[#6366FF] dark:hover:bg-[#8B5CF6] hover:text-white active:bg-[#4F46E5] dark:active:bg-[#6D28D9] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60 min-h-[56px]">
              <Shield size={20} />
              <span>Learn About Privacy</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                100% Anonymous
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                Medically Verified
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                Local Language Support
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative">
          {/* Main Chat Interface Mockup */}
          <div className="relative bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E7EB] dark:border-gray-700 shadow-[0_8px_16px_0_rgba(16,24,40,0.08)] dark:shadow-[0_8px_16px_0_rgba(0,0,0,0.3)] overflow-hidden max-w-4xl mx-auto">
            {/* Chat Header */}
            <div className="flex items-center px-6 py-4 bg-[#6366FF] dark:bg-[#8B5CF6] text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg">
                    Room 1221
                  </h3>
                  <p className="font-inter text-sm text-white/80">
                    Your confidential health assistant
                  </p>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="font-inter text-sm">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 bg-gray-50 dark:bg-[#1A1A1A] min-h-[300px]">
              {/* Bot Welcome Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#6366FF] dark:bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div className="bg-white dark:bg-[#2A2A2A] rounded-xl px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="font-inter text-[#111111] dark:text-white">
                    Welcome to Room 1221! 👋 I'm here to provide confidential,
                    judgment-free sexual and reproductive health information.
                    You can call me whatever makes you comfortable - Kofi, Ama,
                    Doc, or anything else!
                  </p>
                  <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70 mt-2">
                    How can I help you today?
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-[#6366FF] dark:bg-[#8B5CF6] rounded-xl px-4 py-3 max-w-[80%] text-white">
                  <p className="font-inter">
                    Hi! I have questions about family planning options. Can you
                    help?
                  </p>
                </div>
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
              </div>

              {/* Bot Response */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#6366FF] dark:bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div className="bg-white dark:bg-[#2A2A2A] rounded-xl px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="font-inter text-[#111111] dark:text-white">
                    Absolutely! I can provide information about various family
                    planning methods, their effectiveness, and help you find
                    youth-friendly clinics near you. What specific aspects would
                    you like to know about?
                  </p>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#6366FF] dark:bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div className="bg-white dark:bg-[#2A2A2A] rounded-xl px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#6B7280] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
