"use client";

import { Phone, Car, Shield, Banknote } from "lucide-react";
import { processSteps } from "../data/mockData";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

// Mapowanie ikon
const iconMap = {
  phone: Phone,
  car: Car,
  shield: Shield,
  banknote: Banknote,
};

export default function ProcessSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [stepsRef, stepsVisible] = useScrollAnimation({
    once: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
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
            Jak to działa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prosty i bezpieczny proces sprzedaży samochodu w 4 krokach
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 transform -translate-y-1/2 -z-0"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];

              return (
                <div key={index} className="relative">
                  {/* Card */}
                  <div
                    className={`bg-white border-4 border-blue-600 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-2 relative z-10 ${
                      stepsVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                    style={{
                      transitionDelay: stepsVisible
                        ? `${index * 150}ms`
                        : "0ms",
                    }}
                  >
                    {/* Number Badge */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Mobile Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            stepsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Cały proces trwa zazwyczaj{" "}
            <strong className="text-blue-600">30-60 minut</strong>
          </p>
          <a
            href="tel:+48604976543"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Rozpocznij teraz
          </a>
        </div>
      </div>
    </section>
  );
}
