import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";

import ExperienceSection from "@/components/home/ExperienceSection";
import ProofBand from "@/components/home/ProofBand";
import CredibilitySection from "@/components/sections/CredibilitySection";

import LocationMarquee from "@/components/sections/LocationMarquee";
import ProtocolObservatory from "@/components/home/ProtocolObservatory";
import NADExperience from "@/components/sections/NADExperience";
import ConsumerExperience from "@/components/sections/ConsumerExperience";

import Testimonials from "@/components/sections/Testimonials";
import Memberships from "@/components/sections/Memberships";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import DecodeVial from "@/components/home/DecodeVial";
import EvidenceResearch from "@/components/sections/EvidenceResearch";
import BuildingPartnership from "@/components/sections/BuildingPartnership";
import SignatureProtocols from "@/components/sections/SignatureProtocols";

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

     
      {/* 07 — Decode a vial */}
      <DecodeVial />

      {/* 08 — NADx flagship */}
      <NADExperience />

      {/* 09 — Human experience */}
      <ConsumerExperience />

      {/* 10 — Evidence & research */}
      <EvidenceResearch />

      <SignatureProtocols />

       {/* 06 — Geographic presence */}
      <LocationMarquee />



      {/* 12 — Social proof */}
      <Testimonials />

      {/* 13 — Circle / membership */}
      <Memberships />

      {/* 14 — Partnerships */}
      <BuildingPartnership />
      
      

      {/* 15 — Final conversion */}
      <FinalCTA />

      {/* 16 — Global footer */}
      <Footer />
    </main>
  );
}