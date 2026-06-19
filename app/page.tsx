import Header from "@/components/Header";
import WhatsappFloat from "@/components/WhatsappFloat";
import Hero from "@/components/sections/Hero";
import PorQueOX from "@/components/sections/PorQueOX";
import SmartLiving from "@/components/sections/SmartLiving";
import ConoceHogar from "@/components/sections/ConoceHogar";
import Dzitya from "@/components/sections/Dzitya";
import Galeria from "@/components/sections/Galeria";
import VideoOX from "@/components/sections/VideoOX";
import OSTECH from "@/components/sections/OSTECH";
import Proceso from "@/components/sections/Proceso";
import Formulario from "@/components/sections/Formulario";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PorQueOX />
        <SmartLiving />
        <ConoceHogar />
        <Dzitya />
        <Galeria />
        <VideoOX />
        <OSTECH />
        <Proceso />
        <Formulario />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
