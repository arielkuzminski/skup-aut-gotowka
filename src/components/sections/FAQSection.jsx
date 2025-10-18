"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/mockData";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [faqsRef, faqsVisible] = useScrollAnimation({
    once: true,
    threshold: 0.05,
  });

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Najczęściej zadawane pytania
          </h2>
          <p className="text-xl text-gray-600">
            Wszystko czego potrzebujesz wiedzieć o sprzedaży samochodu
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={faqsRef} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-700 hover:shadow-lg ${
                  faqsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: faqsVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            faqsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-600 mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a
            href="tel:+48604976543"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Zadzwoń do nas
          </a>
        </div>
      </div>
    </section>
  );
}
