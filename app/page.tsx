import Header from "@/components/Header";
import WhatsappFloat from "@/components/WhatsappFloat";
import Hero from "@/components/sections/Hero";
import SmartLiving from "@/components/sections/SmartLiving";
import ConoceHogar from "@/components/sections/ConoceHogar";
import Dzitya from "@/components/sections/Dzitya";
import Galeria from "@/components/sections/Galeria";
import PorQueOX from "@/components/sections/PorQueOX";
import OSTECH from "@/components/sections/OSTECH";
import Formulario from "@/components/sections/Formulario";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SmartLiving />
        <ConoceHogar />
        <Dzitya />
        <Galeria />
        <PorQueOX />
        <OSTECH />
        <Formulario />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
