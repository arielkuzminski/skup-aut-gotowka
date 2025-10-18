"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "../data/mockData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Opinie naszych klientów
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz co mówią o nas zadowoleni klienci
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">Lat doświadczenia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600">Skupionych aut</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Zadowolonych klientów</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2-3h</div>
            <div className="text-gray-600">Czas dojazdu</div>
          </div>
        </div>
      </div>
    </section>
  );
}
