import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import RecentCarsSection from "@/components/sections/RecentCarsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <HeroSection />

      <WhyUsSection />

      <RecentCarsSection />

      <FAQSection />

      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <p className="text-xl text-gray-600">
            Sekcja w budowie - dodamy za chwilę
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
