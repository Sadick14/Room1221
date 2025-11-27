
"use client"
import {
  MessageCircle,
  Shield,
  Phone,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Footer() {
  const [isSmsAlertOpen, setIsSmsAlertOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number when available
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleTelegramClick = () => {
    // Replace with actual Telegram username when available
    window.open("https://t.me/Room1221Bot", "_blank");
  };

  const handleSMSClick = () => {
    setIsSmsAlertOpen(true);
  };

  return (
    <>
      <footer className="w-full py-16 md:py-20 px-6 bg-[#02042E] dark:bg-[#0A0A0A]">
        <div className="max-w-[1240px] mx-auto">
          {/* Main footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Column 1 - Brand Details */}
            <div className="space-y-6 lg:col-span-2">
              {/* Logo and Brand Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366FF] to-[#8B5CF6]">
                  <div className="w-full h-full flex items-center justify-center rounded-lg">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <span className="font-inter font-bold text-white text-xl">
                    Room 1221
                  </span>
                  <p className="font-inter text-sm text-white/60">
                    Your Safe Space for SRH
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="space-y-3 font-inter text-sm text-white/70 max-w-lg">
                <p>
                  Room 1221 provides confidential, judgment-free sexual and
                  reproductive health support for Ghanaian youth. Available 24/7
                  through multiple platforms with complete anonymity.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs">100% Anonymous</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs">Medically Verified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Access */}
            <div className="space-y-4">
              <h3 className="font-inter font-semibold text-sm text-white">
                Quick Access
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Privacy Policy", href: "#" },
                  { name: "How It Works", href: "#" },
                  { name: "Supported Languages", href: "#" },
                  { name: "Find Local Clinics", href: "#" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-inter text-sm transition-all duration-200 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] rounded text-white/70"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 - Get Support */}
            <div className="space-y-4">
              <h3 className="font-inter font-semibold text-sm text-white">
                Get Support Now
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Anonymous Web Chat", href: "#" },
                  { name: "Story Mode", href: "#" },
                  { name: "Myth Busters", href: "#" },
                  { name: "Emergency Resources", href: "#" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-inter text-sm transition-all duration-200 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] rounded text-white/70"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Platform Access Buttons */}
          <div className="mb-12">
            <h3 className="font-inter font-semibold text-white text-lg mb-6 text-center">
              Start Your Confidential Conversation
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#1ea952] text-white font-inter font-semibold px-6 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-60 active:scale-95 shadow-lg"
              >
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <MessageCircle size={16} className="text-[#25D366]" />
                </div>
                <span>Chat on WhatsApp</span>
                <ExternalLink
                  size={16}
                  className="opacity-75 group-hover:opacity-100"
                />
              </button>

              {/* Telegram Button */}
              <button
                onClick={handleTelegramClick}
                className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#0088cc] hover:bg-[#006ba3] text-white font-inter font-semibold px-6 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:ring-opacity-60 active:scale-95 shadow-lg"
              >
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <MessageCircle size={16} className="text-[#0088cc]" />
                </div>
                <span>Chat on Telegram</span>
                <ExternalLink
                  size={16}
                  className="opacity-75 group-hover:opacity-100"
                />
              </button>

              {/* SMS Button */}
              <button
                onClick={handleSMSClick}
                className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#6366FF] hover:bg-[#5856FF] text-white font-inter font-semibold px-6 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366FF] focus:ring-opacity-60 active:scale-95 shadow-lg"
              >
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <Phone size={16} className="text-[#6366FF]" />
                </div>
                <span>Send SMS</span>
                 <span className="text-xs font-semibold opacity-80">(Coming Soon)</span>
              </button>
            </div>

            <p className="text-center font-inter text-xs text-white/60 mt-4 max-w-2xl mx-auto">
              All platforms provide the same level of privacy and anonymity.
              Choose what's most convenient for you.
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-white/5 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Shield size={20} className="text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-inter font-semibold text-white mb-2">
                  Privacy Guarantee
                </h4>
                <p className="font-inter text-sm text-white/70 leading-relaxed">
                  Room 1221 never stores personal information. All conversations
                  are anonymous and can be auto-deleted based on your preferences.
                  Your privacy and safety are our top priorities.
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Info */}
          <div className="text-center mb-8">
            <p className="font-inter text-sm text-white/60 mb-2">
              Powered by DKT International Ghana
            </p>
            <p className="font-inter text-xs text-white/50">
              Supporting informed choices and safer communities
            </p>
          </div>

          {/* Footer Bottom - Copyright */}
          <div className="pt-8 text-center border-t border-white/20">
            <p className="font-inter text-xs text-white/50">
              © 2024 Room 1221. All rights reserved. | Confidential Sexual &
              Reproductive Health Support for Ghanaian Youth
            </p>
          </div>
        </div>
      </footer>
      <AlertDialog open={isSmsAlertOpen} onOpenChange={setIsSmsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>SMS Service Coming Soon!</AlertDialogTitle>
            <AlertDialogDescription>
              We're working hard to bring you SMS support. For now, you can reach us on our short code:
              <br />
              <strong className="text-lg text-foreground">1221</strong>
              <br />
              Please check back later for full SMS chat functionality.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsSmsAlertOpen(false)}>Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
