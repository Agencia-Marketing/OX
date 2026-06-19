import {
  TrendingUp,
  Hospital,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
  Route,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

const CERCANIAS = [
  { icon: Route, label: "Principales vialidades" },
  { icon: Hospital, label: "Hospitales y servicios médicos" },
  { icon: GraduationCap, label: "Universidades y colegios" },
  { icon: ShoppingBag, label: "Centros comerciales" },
  { icon: UtensilsCrossed, label: "Restaurantes y servicios" },
  { icon: TrendingUp, label: "Zona de alta plusvalía" },
];

export default function Dzitya() {
  return (
    <section id="dzitya" className="bg-white/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Ubicación · Dzityá, Mérida"
              title="Vive en una de las zonas con mayor proyección de Mérida."
              intro="Elegir dónde vivir es tan importante como elegir la casa correcta. Dzityá se ha consolidado como una de las zonas con mayor crecimiento y plusvalía de Mérida gracias a su conectividad, desarrollo y calidad de vida."
            />

            <Reveal delay={0.1}>
              <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CERCANIAS.map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-verde/10 text-verde">
                      <c.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-carbon/85">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base leading-relaxed text-carbon/75">
                Todo lo que necesitas para vivir hoy y construir patrimonio para el
                futuro.
              </p>
              <CTAButton className="mt-7">Agenda una visita</CTAButton>
            </Reveal>
          </div>

          {/* Mapa */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-greige/40 shadow-sm">
              <iframe
                title="Mapa de Dzityá, Mérida, Yucatán"
                src="https://www.google.com/maps?q=Dzity%C3%A1,%20M%C3%A9rida,%20Yucat%C3%A1n&z=13&output=embed"
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
