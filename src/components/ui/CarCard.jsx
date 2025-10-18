"use client";

import { MapPin, ChevronRight } from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {car.year}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {car.title}
        </h3>

        {/* Engine */}
        {car.engine && (
          <p className="text-sm text-blue-600 font-medium mb-3">{car.engine}</p>
        )}

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span>{car.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {car.description}
        </p>

        {/* CTA */}
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2 group/btn">
          <span>Zobacz więcej</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
