"use client";

import { Phone, ChevronDown, Shield, Check } from "lucide-react";
import QuickForm from "../ui/QuickForm";
import { companyInfo } from "../data/mockData";

export default function HeroSection() {
  const scrollToForm = () => {
    document
      .getElementById("quick-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                Zaufany skup od {companyInfo.since} roku
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Skup Aut
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                Gdynia
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Profesjonalny skup samochodów za gotówkę od ręki. Bezpłatna
              wycena, przyjazd w 2-3h, bezpieczna transakcja.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Gotówka od ręki", "Każdy stan", "Bez opłat"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                >
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Wycena Online 24h</span>
                <ChevronDown className="w-5 h-5" />
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:block">
            <QuickForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
