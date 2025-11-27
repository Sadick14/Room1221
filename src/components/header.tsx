"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "@/context/ChatProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsChatOpen } = useChat();

  const navLinks = [
    { href: "#", text: "Home" },
    { href: "#how-it-works", text: "How It Works" },
    { href: "#privacy", text: "Privacy" },
    { href: "#features", text: "Features" },
  ];

  return (
    <header className="bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366FF] to-[#8B5CF6] flex items-center justify-center">
            <MessageCircle size={20} className="text-white" />
          </div>
          <span className="font-inter font-bold text-xl text-[#111111] dark:text-white">
            Room 1221
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="font-inter font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-[#6366FF] dark:hover:text-[#8B5CF6] transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsChatOpen(true)}
            className="hidden sm:inline-flex items-center space-x-2 bg-[#6366FF] dark:bg-[#8B5CF6] text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#5856FF] dark:hover:bg-[#7C3AED] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60"
          >
            <span>Chat Now</span>
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-inter font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                {link.text}
              </a>
            ))}
            <button
              onClick={() => {
                setIsChatOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 inline-flex items-center justify-center space-x-2 bg-[#6366FF] dark:bg-[#8B5CF6] text-white font-inter font-semibold text-sm px-5 py-3 rounded-lg hover:bg-[#5856FF] dark:hover:bg-[#7C3AED] active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6366FF] dark:focus:ring-[#8B5CF6] focus:ring-opacity-60"
            >
              <span>Chat Now</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
