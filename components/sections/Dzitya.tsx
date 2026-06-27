import {
  ShoppingBag,
  Route,
  TrendingUp,
  Building,
  Leaf,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

const BENEFICIOS = [
  { icon: ShoppingBag, label: "Cercanía con servicios y comercios" },
  { icon: Route, label: "Conectividad hacia las principales vialidades" },
  { icon: Building, label: "Entorno residencial en crecimiento" },
  { icon: TrendingUp, label: "Alta demanda y plusvalía" },
  { icon: Leaf, label: "Calidad de vida y tranquilidad" },
];

export default function Dzitya() {
  return (
    <section id="ubicacion" className="bg-white/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Ubicación · Zona Norte de Mérida"
              title="Vive en la Zona Norte de Mérida."
              intro="Una de las zonas con mayor crecimiento, conectividad y plusvalía de la ciudad."
            />

            <Reveal delay={0.1}>
              <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {BENEFICIOS.map((b) => (
                  <li key={b.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-verde/10 text-verde">
                      <b.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-carbon/85">
                      {b.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-display text-lg font-light leading-snug text-carbon/85">
                La ubicación de una casa también define gran parte de su valor futuro.
              </p>
              <CTAButton className="mt-7">Agenda una visita y conoce OX</CTAButton>
            </Reveal>
          </div>

          {/* Mapa interactivo */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-greige/40 shadow-sm">
              <iframe
                title="Ubicación de OX Tres Residencias Privadas, Dzityá, Mérida"
                src="https://www.google.com/maps?q=OX+Tres+Residencias+Privadas,+C.+63B,+Bellavista,+97302+Dzity%C3%A1,+Yuc.&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full lg:h-[520px]"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
