"use client";

import { Phone, Mail, MapPin, Car, Facebook, Instagram } from "lucide-react";
import { companyInfo } from "../data/mockData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                <p className="text-sm text-gray-400">
                  Od {companyInfo.since} roku
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesjonalny skup samochodów w Gdyni i województwie pomorskim.
              Gotówka od ręki, bezpłatna wycena.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Strona główna
                </a>
              </li>
              <li>
                <a
                  href="#ostatnio-skupione"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ostatnio skupione
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{companyInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <MapPin className="w-4 h-4 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{companyInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Obszar działania</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Skupujemy samochody na terenie całego województwa pomorskiego:
            </p>
            <div className="flex flex-wrap gap-2">
              {companyInfo.serviceArea.slice(0, 6).map((city) => (
                <span
                  key={city}
                  className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2">i wiele innych...</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyInfo.fullName}. Wszelkie prawa zastrzeżone.
          </p>

          {/* Social Media - PLACEHOLDER */}
          <div className="flex items-center space-x-4">
            <a
              href={companyInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
