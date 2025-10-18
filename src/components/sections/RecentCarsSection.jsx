"use client";

import { ChevronRight } from "lucide-react";
import { recentCars } from "../data/mockData";
import CarCard from "../ui/CarCard";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function RecentCarsSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ once: true });
  const [gridRef, gridVisible] = useScrollAnimation({
    once: true,
    threshold: 0.05,
  });

  return (
    <section id="ostatnio-skupione" className="py-20 bg-white">
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
            Ostatnio Skupione Auta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz jakie pojazdy ostatnio trafiły do naszego skupu
          </p>
        </div>

        {/* Cars Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentCars.map((car, index) => (
            <div
              key={car.id}
              className={`transition-all duration-700 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            gridVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
            <span>Zobacz wszystkie auta</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
