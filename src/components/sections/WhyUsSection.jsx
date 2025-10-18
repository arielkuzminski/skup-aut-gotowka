"use client";

import { Banknote, Clock, Shield, Car } from "lucide-react";
import { whyUsFeatures } from "../data/mockData";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

// Mapowanie ikon ze stringa na komponenty
const iconMap = {
  banknote: Banknote,
  clock: Clock,
  shield: Shield,
  car: Car,
};

export default function WhyUsSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dlaczego Auto-Bart?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesjonalny skup samochodów w Gdyni z ponad 20-letnim
            doświadczeniem
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const [cardRef, cardVisible] = useScrollAnimation({ once: true });

            return (
              <div
                key={feature.id}
                ref={cardRef}
                className={`group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  cardVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: cardVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
