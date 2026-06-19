import {
  Lightbulb,
  Camera,
  Workflow,
  Sun,
  Gauge,
  Wifi,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Control inteligente",
    text: "Administra iluminación y funciones del hogar de forma simple y práctica.",
  },
  {
    icon: Camera,
    title: "Seguridad inteligente",
    text: "Sistema de vigilancia para mayor tranquilidad de toda tu familia.",
  },
  {
    icon: Workflow,
    title: "Automatización residencial",
    text: "Tecnología diseñada para hacer tu vida más fácil y cómoda.",
  },
  {
    icon: Sun,
    title: "Paneles solares",
    text: "Menor consumo energético y mayor eficiencia desde el primer día.",
  },
  {
    icon: Gauge,
    title: "Ahorro energético",
    text: "Recursos optimizados para un estilo de vida más eficiente y sustentable.",
  },
  {
    icon: Wifi,
    title: "Conectividad",
    text: "Una vivienda preparada para las necesidades actuales y futuras.",
  },
];

export default function SmartLiving() {
  return (
    <section
      id="smart-living"
      className="relative overflow-hidden bg-carbon py-24 text-marfil sm:py-32"
    >
      {/* Textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--oro) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Smart Living by OSTECH"
          title="La tecnología al servicio de tu tranquilidad."
          intro="En OX, la innovación no es un lujo; es parte de tu vida diaria. Cada residencia integra soluciones inteligentes que mejoran tu experiencia, optimizan recursos y te permiten disfrutar un hogar más cómodo, seguro y eficiente."
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-oro/30 bg-oro/10 text-oro-300">
                  <f.icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-marfil">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-marfil/65">
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-6 border-t border-marfil/15 pt-10 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl font-display text-xl font-light leading-snug text-marfil/90">
              Porque el verdadero lujo hoy es disfrutar un hogar que combina
              tecnología, bienestar y una mejor forma de vivir.
            </p>
            <CTAButton variant="light" className="shrink-0">
              Agenda una visita
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
