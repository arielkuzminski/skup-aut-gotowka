"use client";

import { MapPin, ChevronRight } from "lucide-react";
import { recentCars } from "../data/mockData";
import CarCard from "../ui/CarCard";

export default function RecentCarsSection() {
  return (
    <section id="ostatnio-skupione" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ostatnio Skupione Auta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz jakie pojazdy ostatnio trafiły do naszego skupu
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
            <span>Zobacz wszystkie auta</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
