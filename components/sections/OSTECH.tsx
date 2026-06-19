import Image from "next/image";
import { Building2, ShieldCheck, Lightbulb, HeartHandshake } from "lucide-react";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

const PILARES = [
  { icon: ShieldCheck, label: "Calidad constructiva" },
  { icon: Lightbulb, label: "Innovación integrada" },
  { icon: Building2, label: "Visión de largo plazo" },
  { icon: HeartHandshake, label: "Compromiso con cada familia" },
];

export default function OSTECH() {
  return (
    <section id="ostech" className="bg-verde py-24 text-marfil sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/renders/lateral-1.webp"
                alt="Detalle arquitectónico de un desarrollo OSTECH"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-oro-300">
              <span className="h-px w-8 bg-oro-300" />
              Respaldado por OSTECH Desarrolladora
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-display sm:text-4xl">
              Detrás de un gran hogar, hay un desarrollador en quien puedes confiar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-marfil/75">
              OX es un desarrollo de OSTECH Desarrolladora, una empresa comprometida
              con crear espacios residenciales que integran innovación, calidad
              constructiva y una visión de largo plazo. Cada proyecto se concibe para
              ofrecer hogares funcionales, contemporáneos y preparados para las
              necesidades de hoy y del futuro.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PILARES.map((p) => (
                <li key={p.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-oro/30 bg-oro/10 text-oro-300">
                    <p.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-marfil/90">{p.label}</span>
                </li>
              ))}
            </ul>

            <CTAButton
              variant="light"
              className="mt-9"
              context="Hola, me gustaría conocer más sobre OX Residencial y OSTECH Desarrolladora, y agendar una visita."
            >
              Conoce OX, desarrollado por OSTECH
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
