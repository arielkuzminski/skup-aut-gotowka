"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "../data/mockData";

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jesteśmy dostępni 7 dni w tygodniu. Zadzwoń lub odwiedź nas
            osobiście.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {companyInfo.phoneDisplay}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Kliknij aby zadzwonić
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-700 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-lg text-gray-700">{companyInfo.email}</p>
                  <p className="text-sm text-gray-600 mt-1">Odpowiemy w 24h</p>
                </div>
              </a>

              {/* Address */}
              <a
                href={companyInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                  <p className="text-lg text-gray-700">{companyInfo.address}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Zobacz na mapie →
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                <div className="bg-green-600 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Godziny otwarcia
                  </h3>
                  <p className="text-gray-700">
                    Poniedziałek - Piątek: 9:00 - 18:00
                  </p>
                  <p className="text-gray-700">Sobota: 10:00 - 16:00</p>
                  <p className="text-gray-700">Niedziela: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                Obszar działania
              </h3>
              <p className="text-gray-600 mb-3">
                Skupujemy samochody na terenie całego województwa pomorskiego:
              </p>
              <div className="flex flex-wrap gap-2">
                {companyInfo.serviceArea.slice(0, 12).map((city) => (
                  <span
                    key={city}
                    className="text-sm bg-white px-3 py-1 rounded-lg text-gray-700 border border-gray-200"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-3">
                i wiele innych miejscowości...
              </p>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.2488986709795!2d18.534957564652753!3d54.51683887177518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72f907501f3%3A0x8db58d95e7d3fb75!2zT2Jyb8WEY8OzdyBXeWJyemXFvGEgMTQsIDgxLTM5NyBHZHluaWE!5e0!3m2!1spl!2spl!4v1760784724524!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Auto-Bart Skup Aut Gdynia"
                ></iframe>
              </div>

              {/* Map Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">
                  {companyInfo.name}
                </p>
                <p className="text-sm text-gray-600">{companyInfo.address}</p>
                <a
                  href={companyInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
                >
                  Otwórz w Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Gotowy do sprzedaży samochodu?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Zadzwoń teraz i otrzymaj bezpłatną wycenę w 24h. Profesjonalna
            obsługa i gotówka od ręki!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("quick-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105"
            >
              Wypełnij formularz online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
