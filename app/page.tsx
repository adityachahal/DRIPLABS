import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import CredibilitySection from "@/components/sections/CredibilitySection";
import LocationMarquee from "@/components/sections/LocationMarquee";
import TailoredTherapy from "@/components/sections/TailoredTherapy";
import NADExperience from "@/components/sections/NADExperience";
import BrandStatement from "@/components/sections/BrandStatement";
import NourishStatement from "@/components/sections/NourishStatement";
import ConsumerExperience from "@/components/sections/ConsumerExperience";
import WellnessProfile from "@/components/sections/WellnessProfile";
import FeaturedTreatment from "@/components/sections/FeaturedTreatment";
import Testimonials from "@/components/sections/Testimonials";
import Memberships from "@/components/sections/Memberships";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#f4f1eb] text-[#171714]">
      <Navbar />

      {/* 01 â€” Hero */}
      <Hero />

      <CredibilitySection />

      <LocationMarquee />

      {/* 02 â€” Tailored IV Therapy */}
      <TailoredTherapy />

      {/* 03 â€” Interactive treatment discovery */}
      <WellnessProfile />

      <NADExperience />

      <ConsumerExperience />

      {/* 04 â€” Nourish / Recharge / Restore */}
      <NourishStatement />

      {/* 05 â€” Featured treatment */}
      <FeaturedTreatment />

      {/* 06 â€” Guest experience / results */}
      <Testimonials />

      {/* 07 â€” Memberships */}
      <Memberships />

      {/* 08 â€” Locations */}
      <Locations />

      {/* 09 â€” FAQ */}
      <FAQ />

      {/* 10 â€” Final CTA */}
      <FinalCTA />

      {/* 11 â€” Footer */}
      <Footer />
    </main>
  );
}

