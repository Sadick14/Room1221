"use client"
import { Clock, Shield, Globe, MapPin, BookOpen, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Accessibility",
      description:
        "Access confidential SRH support anytime, anywhere through WhatsApp, Telegram, SMS, and web chat.",
      color: "text-[#10B981]",
      bgColor: "bg-[#10B981]/10",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Anonymous sessions with auto-delete history and panic exit button for maximum security and trust.",
      color: "text-[#6366FF]",
      bgColor: "bg-[#6366FF]/10",
    },
    {
      icon: Globe,
      title: "Local Languages",
      description:
        "Support in English, Twi, Ewe, and Ga with natural language understanding for inclusive communication.",
      color: "text-[#8B5CF6]",
      bgColor: "bg-[#8B5CF6]/10",
    },
    {
      icon: MapPin,
      title: "Local Referrals",
      description:
        "Accurate matching to nearby verified youth-friendly clinics, pharmacies, and service providers.",
      color: "text-[#F59E0B]",
      bgColor: "bg-[#F59E0B]/10",
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description:
        "Story Mode and Myth Busters to improve knowledge and correct misconceptions about safe practices.",
      color: "text-[#EF4444]",
      bgColor: "bg-[#EF4444]/10",
    },
    {
      icon: Users,
      title: "Personalized Experience",
      description:
        "Rename your chatbot (Kofi, Ama, Doc) for a comfortable and personal interaction experience.",
      color: "text-[#06B6D4]",
      bgColor: "bg-[#06B6D4]/10",
    },
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-[#1E1E1E] rounded-full border border-[#6366FF] dark:border-[#8B5CF6] mb-6">
            <span className="font-inter font-medium text-sm text-[#6366FF] dark:text-[#8B5CF6]">
              Why Choose Room 1221
            </span>
          </div>

          <h2 className="font-inter font-bold text-3xl md:text-4xl lg:text-5xl text-[#111111] dark:text-white mb-6 leading-tight">
            Safe, Confidential, and{" "}
            <span className="text-[#6366FF] dark:text-[#8B5CF6]">
              Accessible
            </span>
          </h2>

          <p className="font-inter text-lg text-[#6B7280] dark:text-white dark:text-opacity-70 max-w-3xl mx-auto leading-relaxed">
            Designed specifically for Ghanaian youth, Room 1221 prioritizes your
            privacy while providing medically verified sexual and reproductive
            health information when you need it most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-[#6366FF] dark:hover:border-[#8B5CF6] hover:shadow-lg dark:hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.3)] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={24} className={feature.color} />
              </div>

              {/* Content */}
              <h3 className="font-inter font-semibold text-xl text-[#111111] dark:text-white mb-4">
                {feature.title}
              </h3>

              <p className="font-inter text-[#6B7280] dark:text-white dark:text-opacity-70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Access Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:border-[#25D366] hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-[#25D366] rounded"></div>
            </div>
            <h4 className="font-inter font-semibold text-lg text-[#111111] dark:text-white mb-2">
              WhatsApp
            </h4>
            <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
              Most popular messaging
            </p>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:border-[#0088cc] hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#0088cc]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-[#0088cc] rounded"></div>
            </div>
            <h4 className="font-inter font-semibold text-lg text-[#111111] dark:text-white mb-2">
              Telegram
            </h4>
            <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
              Enhanced privacy
            </p>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:border-[#6366FF] hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#6366FF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-[#6366FF] rounded"></div>
            </div>
            <h4 className="font-inter font-semibold text-lg text-[#111111] dark:text-white mb-2">
              SMS
            </h4>
            <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
              Basic phones supported
            </p>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:border-[#8B5CF6] hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-[#8B5CF6] rounded"></div>
            </div>
            <h4 className="font-inter font-semibold text-lg text-[#111111] dark:text-white mb-2">
              Web Chat
            </h4>
            <p className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
              Full features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}