import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";

import ExperienceSection from "@/components/home/ExperienceSection";
import ProofBand from "@/components/home/ProofBand";
import CredibilitySection from "@/components/sections/CredibilitySection";

import LocationMarquee from "@/components/sections/LocationMarquee";
import ProtocolObservatory from "@/components/home/ProtocolObservatory";
import NADExperience from "@/components/sections/NADExperience";
import ConsumerExperience from "@/components/sections/ConsumerExperience";

import BrandStatement from "@/components/sections/BrandStatement";
import NourishStatement from "@/components/sections/NourishStatement";
import FeaturedTreatment from "@/components/sections/FeaturedTreatment";
import Testimonials from "@/components/sections/Testimonials";
import Memberships from "@/components/sections/Memberships";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import NADFeature from "@/components/home/NADFeature";

export default function Home() {
  return (
    <main className="bg-[#F7F4EC] text-[#111318]">
      <Navbar />

      {/* 01 — Cinematic opening */}
      <Hero />

      {/* 02 — Choose how you experience DRIPLABS */}
      <ExperienceSection />

      {/* 03 — Immediate proof */}
      <ProofBand />

      {/* 04 — The trust moat */}
      <CredibilitySection />

      

      {/* 05 — Protocol system */}
      <ProtocolObservatory />

      {/* 06 — Geographic presence */}
      <LocationMarquee />

      <NADFeature />

      <DecodeVial />

      {/* 07 — NADx flagship */}
      <NADExperience />

      {/* 08 — Human experience */}
      <ConsumerExperience />

      {/* 09 — Brand philosophy */}
      <BrandStatement />

      <NourishStatement />

      {/* 10 — Featured protocol */}
      <FeaturedTreatment />

      {/* 11 — Social proof */}
      <Testimonials />

      {/* 12 — Circle / membership */}
      <Memberships />

      {/* 13 — Locations */}
      <Locations />

      {/* 14 — Questions */}
      <FAQ />

      {/* 15 — Final conversion */}
      <FinalCTA />

      {/* 16 — Global footer */}
      <Footer />
    </main>
  );
}