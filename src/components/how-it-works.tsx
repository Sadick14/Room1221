"use client"
import {
  Smartphone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useChat } from "@/context/ChatProvider";

export default function HowItWorks() {
  const { setIsChatOpen } = useChat();
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Choose Your Platform",
      description:
        "Access Room 1221 through WhatsApp, Telegram, SMS, or web chat - whatever works best for you.",
      details: [
        "No app download required",
        "Works on any device",
        "Multiple platform options",
      ],
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Start Anonymous Chat",
      description:
        "Begin your confidential conversation. No registration, no personal details - just safe, private support.",
      details: [
        "100% anonymous",
        "No personal info needed",
        "Available in local languages",
      ],
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Get Verified Information",
      description:
        "Receive medically accurate SRH information, education, and referrals to local healthcare providers.",
      details: [
        "Medically verified content",
        "Local clinic referrals",
        "Personalized responses",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 px-6 bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-[#1E1E1E] rounded-full border border-[#6366FF] dark:border-[#8B5CF6] mb-6">
            <span className="font-inter font-medium text-sm text-[#6366FF] dark:text-[#8B5CF6]">
              How It Works
            </span>
          </div>

          <h2 className="font-inter font-bold text-3xl md:text-4xl lg:text-5xl text-[#111111] dark:text-white mb-6 leading-tight">
            Getting Help is{" "}
            <span className="text-[#6366FF] dark:text-[#8B5CF6]">Simple</span>
          </h2>

          <p className="font-inter text-lg text-[#6B7280] dark:text-white dark:text-opacity-70 max-w-3xl mx-auto leading-relaxed">
            In just three easy steps, you can access confidential, medically
            verified sexual and reproductive health support.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-0">
          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-[#6366FF] dark:hover:border-[#8B5CF6] hover:shadow-lg transition-all duration-300 max-w-xs">
                  {/* Step Number */}
                  <div className="text-[#6366FF] dark:text-[#8B5CF6] font-inter font-bold text-sm mb-4">
                    STEP {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#6366FF]/10 dark:bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-6">
                    <step.icon
                      size={28}
                      className="text-[#6366FF] dark:text-[#8B5CF6]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-inter font-semibold text-xl text-[#111111] dark:text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-[#6B7280] dark:text-white dark:text-opacity-70 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle
                          size={14}
                          className="text-[#6366FF] dark:text-[#8B5CF6] flex-shrink-0"
                        />
                        <span className="font-inter text-xs text-[#6B7280] dark:text-white dark:text-opacity-70">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="mx-6">
                    <ArrowRight
                      size={24}
                      className="text-[#6366FF] dark:text-[#8B5CF6]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Layout - Vertical */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#6366FF] dark:bg-[#8B5CF6] rounded-full flex items-center justify-center">
                    <span className="font-inter font-bold text-white text-lg">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#6366FF]/10 dark:bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-6 ml-8">
                    <step.icon
                      size={28}
                      className="text-[#6366FF] dark:text-[#8B5CF6]"
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-8">
                    <h3 className="font-inter font-semibold text-xl text-[#111111] dark:text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="font-inter text-[#6B7280] dark:text-white dark:text-opacity-70 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle
                            size={16}
                            className="text-[#6366FF] dark:text-[#8B5CF6] flex-shrink-0"
                          />
                          <span className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-70">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-2 top-full w-0.5 h-8 bg-[#6366FF] dark:bg-[#8B5CF6] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#6366FF] to-[#8B5CF6] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-inter font-bold text-2xl md:text-3xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of Ghanaian youth who trust Room 1221 for
              confidential, judgment-free sexual and reproductive health
              support.
            </p>
            <button
              onClick={() => setIsChatOpen(true)}
              className="inline-flex items-center space-x-2 bg-white text-[#6366FF] font-inter font-semibold text-lg px-8 py-4 rounded-[20px] hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Start Your Conversation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
