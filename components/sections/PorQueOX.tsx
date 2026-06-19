import { Cpu, ShieldCheck, Workflow, Leaf, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

const PILARES = [
  {
    icon: Cpu,
    title: "Tecnología inteligente",
    text: "Administra las funciones de tu hogar de forma simple, cómoda y eficiente.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    text: "Mayor tranquilidad para ti y para quienes más te importan.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    text: "Sistemas integrados pensados para hacer tu vida más fácil cada día.",
  },
  {
    icon: Leaf,
    title: "Eficiencia energética",
    text: "Menor consumo y mayor ahorro con un estilo de vida más sustentable.",
  },
  {
    icon: Sparkles,
    title: "Diseño contemporáneo",
    text: "Espacios funcionales y elegantes diseñados para el bienestar.",
  },
];

export default function PorQueOX() {
  return (
    <section id="por-que-ox" className="bg-marfil py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="¿Por qué OX?"
          title="Más que una casa, una forma inteligente de vivir."
          intro="OX nace para las personas que esperan más de su hogar. Aquí, la tecnología se integra con el diseño y la funcionalidad para crear espacios pensados para vivir mejor, disfrutar más y construir un patrimonio que evoluciona contigo."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-greige/40 bg-white/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-oro/50 hover:shadow-lg hover:shadow-greige/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-verde/10 text-verde transition-colors group-hover:bg-verde group-hover:text-marfil">
                  <p.icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-grafito">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-carbon/75">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}

          {/* Tarjeta de cierre + CTA */}
          <Reveal delay={0.3} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-verde p-7 text-marfil">
              <p className="font-display text-lg font-medium leading-snug">
                Porque hoy, vivir bien significa vivir inteligentemente.
              </p>
              <CTAButton variant="light" className="mt-6 self-start">
                Quiero conocer OX
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
