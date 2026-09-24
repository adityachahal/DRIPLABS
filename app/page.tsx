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

      {/* 01 â€” Cinematic opening */}
      <Hero />

      {/* 02 â€” Choose how you experience DRIPLABS */}
      <ExperienceSection />

      {/* 03 â€” Immediate proof */}
      <ProofBand />

      {/* 04 â€” The trust moat */}
      <CredibilitySection />

      

      {/* 05 â€” Protocol system */}
      <ProtocolObservatory />

      {/* 06 â€” Geographic presence */}
      <LocationMarquee />

      <NADFeature />

      {/* 07 â€” NADx flagship */}
      <NADExperience />

      {/* 08 â€” Human experience */}
      <ConsumerExperience />

      {/* 09 â€” Brand philosophy */}
      <BrandStatement />

      <NourishStatement />

      {/* 10 â€” Featured protocol */}
      <FeaturedTreatment />

      {/* 11 â€” Social proof */}
      <Testimonials />

      {/* 12 â€” Circle / membership */}
      <Memberships />

      {/* 13 â€” Locations */}
      <Locations />

      {/* 14 â€” Questions */}
      <FAQ />

      {/* 15 â€” Final conversion */}
      <FinalCTA />

      {/* 16 â€” Global footer */}
      <Footer />
    </main>
  );
}
