import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import RecentCarsSection from "@/components/sections/RecentCarsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <HeroSection />

      <WhyUsSection />

      <RecentCarsSection />

      <FAQSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
