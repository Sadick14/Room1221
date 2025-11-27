"use client"
import { Shield } from "lucide-react";
import Image from "next/image";
import { BotIcon } from "./icons/bot-icon";


export default function Hero() {

  return (
    <section id="home" className="relative w-full bg-white dark:bg-[#121212] py-16 md:py-20 lg:py-24 overflow-hidden">
      <Image 
        src="/5855218229494615033.jpg"
        alt="Floating decorative image 1"
        width={300}
        height={300}
        className="absolute top-10 -left-20"
      />
      <Image 
        src="/5855218229494615034.jpg"
        alt="Floating decorative image 2"
        width={300}
        height={300}
        className="absolute top-1/2 -translate-y-1/2 -right-20"
      />
       <Image 
        src="/5855218229494615035.jpg"
        alt="Floating decorative image 3"
        width={200}
        height={200}
        className="absolute bottom-10 left-1/4"
      />
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Hero Content - Stacked and Centered */}
        <div className="text-center space-y-8">
          {/* Room 1221 Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366FF] to-[#8B5CF6] flex items-center justify-center overflow-hidden">
            <Image 
              src="/5855218229494615035.jpg"
              alt="Room 1221 Logo"
              width={40}
              height={40}
              className="object-cover"
            />
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
            <a
              href="https://blurb-civil-63223200.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#6366FF] dark:bg-[#8B5CF6] text-white font-inter font-semibold text-lg px-8 py-4 rounded-[20px] hover:bg-[#5856FF] dark:hover:bg-[#7C3AED] active:bg-[#4F46E5] dark:active:bg-[#6D28D9] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60 min-h-[56px] shadow-lg"
            >
              <BotIcon className="w-5 h-5" />
              <span>Get Started</span>
            </a>
            <a href="#privacy" className="inline-flex items-center space-x-2 bg-white dark:bg-[#1E1E1E] text-[#6366FF] dark:text-[#8B5CF6] font-inter font-semibold text-lg px-8 py-4 rounded-[20px] border-2 border-[#6366FF] dark:border-[#8B5CF6] hover:bg-[#6366FF] dark:hover:bg-[#8B5CF6] hover:text-white active:bg-[#4F46E5] dark:active:bg-[#6D28D9] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60 min-h-[56px]">
              <Shield size={20} />
              <span>Learn About Privacy</span>
            </a>
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

      </div>
    </section>
  );
}
