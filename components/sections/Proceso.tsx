import { MessageCircle, CalendarCheck, Home, KeyRound } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const PASOS = [
  {
    icon: MessageCircle,
    title: "Solicita información",
    text: "Escríbenos por WhatsApp y resolvemos todas tus dudas.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda tu visita",
    text: "Coordinamos el día y la hora que mejor te convenga.",
  },
  {
    icon: Home,
    title: "Conoce el desarrollo",
    text: "Recorre la residencia, la ubicación y cada detalle en persona.",
  },
  {
    icon: KeyRound,
    title: "Aparta tu residencia",
    text: "Asegura tu hogar y comienza una nueva forma de vivir.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="bg-marfil py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Proceso de compra"
          title="Un camino claro hacia tu nuevo hogar."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="relative flex flex-col items-center text-center">
                {/* Conector */}
                {i < PASOS.length - 1 && (
                  <span className="absolute left-1/2 top-8 hidden h-px w-full bg-greige/50 lg:block" />
                )}
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-oro/40 bg-marfil text-verde">
                  <p.icon size={26} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-oro">
                  Paso {i + 1}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-grafito">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-carbon/70">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
