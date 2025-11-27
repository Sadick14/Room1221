"use client"
import { Lock, Eye, Trash2, ExternalLink, CheckCircle } from "lucide-react";

export default function TrustSection() {
  const privacyFeatures = [
    {
      icon: Eye,
      title: "Anonymous Sessions",
      description:
        "No registration required. Chat without revealing your identity.",
      highlight: "100% Anonymous",
    },
    {
      icon: Trash2,
      title: "Auto-Delete History",
      description:
        "Configure automatic deletion of conversation history for peace of mind.",
      highlight: "Your Control",
    },
    {
      icon: ExternalLink,
      title: "Panic Exit Button",
      description:
        "Quick escape to a neutral website if you need to exit immediately.",
      highlight: "Emergency Safe",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description:
        "All conversations are secured with industry-standard encryption.",
      highlight: "Fully Encrypted",
    },
  ];

  const trustIndicators = [
    "Medically verified information from certified health professionals",
    "GDPR compliant data handling and privacy protection",
    "Partnership with DKT International for reliable SRH support",
    "Local expertise and cultural sensitivity for Ghanaian youth",
    "No data collection beyond what's necessary for service delivery",
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-white dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/20 rounded-full border border-green-300 dark:border-green-700 mb-6">
            <Lock
              size={16}
              className="text-green-600 dark:text-green-400 mr-2"
            />
            <span className="font-inter font-medium text-sm text-green-600 dark:text-green-400">
              Privacy & Security First
            </span>
          </div>

          <h2 className="font-inter font-bold text-3xl md:text-4xl lg:text-5xl text-[#111111] dark:text-white mb-6 leading-tight">
            Your Privacy is{" "}
            <span className="text-green-600 dark:text-green-400">
              Our Priority
            </span>
          </h2>

          <p className="font-inter text-lg text-[#6B7280] dark:text-white dark:text-opacity-70 max-w-3xl mx-auto leading-relaxed">
            We understand that seeking sexual and reproductive health
            information requires absolute trust. That's why Room 1221 is built
            with privacy-first design principles to ensure your safety and
            confidentiality.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {privacyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon
                    size={24}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-inter font-semibold text-xl text-[#111111] dark:text-white">
                      {feature.title}
                    </h3>
                    <span className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                      {feature.highlight}
                    </span>
                  </div>

                  <p className="font-inter text-[#6B7280] dark:text-white dark:text-opacity-70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="font-inter font-bold text-2xl md:text-3xl text-[#111111] dark:text-white mb-4">
              Why You Can Trust Room 1221
            </h3>
            <p className="font-inter text-[#6B7280] dark:text-white dark:text-opacity-70 max-w-2xl mx-auto">
              Built with the highest standards of privacy, security, and medical
              accuracy to serve Ghana's youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle
                  size={20}
                  className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                />
                <p className="font-inter text-[#374151] dark:text-white dark:text-opacity-87 leading-relaxed">
                  {indicator}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Promise */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 border-2 border-green-200 dark:border-green-800 shadow-lg">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={32} className="text-green-600 dark:text-green-400" />
            </div>

            <h3 className="font-inter font-bold text-2xl text-[#111111] dark:text-white mb-4">
              Our Privacy Promise
            </h3>

            <p className="font-inter text-[#6B7280] dark:text-white dark:text-opacity-70 text-lg leading-relaxed max-w-3xl mx-auto">
              We will never ask for your name, phone number, or any identifying
              information. Your conversations remain completely private, and you
              have full control over your data. We're here to support you, not
              to track you.
            </p>

            <button className="mt-6 inline-flex items-center space-x-2 text-green-600 dark:text-green-400 font-inter font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200">
              <span>Read our full Privacy Policy</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
