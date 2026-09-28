import Locations from "@/components/sections/Locations";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Locations | DRIPLABS",
  description:
    "Explore DRIPLABS locations across India and discover physician-supervised wellness experiences.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#020812] text-[#F7FAFF]">
      <Navbar />

      <Locations />

      <Footer />
    </main>
  );
}