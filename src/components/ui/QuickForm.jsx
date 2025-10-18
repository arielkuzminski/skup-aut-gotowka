"use client";

import { useState } from "react";
import { Camera, Upload } from "lucide-react";

export default function QuickForm() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formularz wysłany! (Mock - w produkcji będzie wysyłka do backendu)");
    console.log("Form data:", formData);
  };

  return (
    <div
      id="quick-form"
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Camera className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Szybka Wycena</h3>
          <p className="text-gray-600">Odpowiemy w 24h</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Marka i Model */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="make"
            placeholder="Marka"
            value={formData.make}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
        </div>

        {/* Rok i Przebieg */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="year"
            placeholder="Rok"
            value={formData.year}
            onChange={handleChange}
            required
            min="1990"
            max={new Date().getFullYear() + 1}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
          <input
            type="text"
            name="mileage"
            placeholder="Przebieg (km)"
            value={formData.mileage}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
        </div>

        {/* Telefon */}
        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{9,}"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
        />

        {/* Upload zdjęć */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Dodaj zdjęcia (opcjonalnie)</p>
          <p className="text-xs text-gray-400 mt-1">Przeciągnij lub kliknij</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          Wyślij zapytanie
        </button>

        {/* Privacy */}
        <p className="text-xs text-gray-500 text-center">
          Klikając wyślij, akceptujesz naszą politykę prywatności
        </p>
      </form>
    </div>
  );
}
