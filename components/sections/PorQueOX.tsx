import {
  Cpu,
  ShieldCheck,
  Sun,
  Sparkles,
  Gem,
  MapPin,
  Workflow,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const DIFERENCIALES = [
  { icon: Cpu, label: "Smart Homes" },
  { icon: ShieldCheck, label: "Seguridad Inteligente" },
  { icon: Sun, label: "Paneles Solares" },
  { icon: Sparkles, label: "Diseño Contemporáneo" },
  { icon: Gem, label: "Proyecto Boutique" },
  { icon: MapPin, label: "Zona Norte de Mérida" },
  { icon: Workflow, label: "Tecnología Integrada" },
  { icon: TrendingUp, label: "Alta Plusvalía" },
];

export default function PorQueOX() {
  return (
    <section id="por-que-elegir" className="bg-marfil py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="¿Por qué elegir OX?"
          title="Una propuesta diferente para una nueva forma de habitar."
        />

        {/*
          FALLBACK DEL VIDEO: si el video del Hero no luce bien, mover aquí el
          recorrido. Descomentar el bloque y poblar /media/video-ox.mp4:
          <Reveal className="mt-12">
            <video controls playsInline preload="metadata"
              poster="/renders/fachada-principal.webp"
              className="aspect-video w-full rounded-2xl">
              <source src="/media/video-ox.mp4" type="video/mp4" />
            </video>
          </Reveal>
        */}

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {DIFERENCIALES.map((d, i) => (
            <Reveal key={d.label} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-greige/40 bg-white/50 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-verde/10 text-verde">
                  <d.icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug text-grafito">
                  {d.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-carbon/80">
            En un mercado donde muchas opciones se parecen entre sí, OX propone una
            experiencia residencial más moderna, eficiente y preparada para el futuro.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
