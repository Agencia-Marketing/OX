import Image from "next/image";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/renders/fachada-posterior.webp"
        alt="Vista posterior de residencia OX con área de alberca"
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-grafito/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-oro-300">
            OX Residencial · Dzityá, Mérida
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-display text-marfil sm:text-5xl">
            El hogar que imaginas para tu familia puede comenzar aquí.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-marfil/80">
            Tecnología, diseño, seguridad y calidad de vida integrados en una
            residencia pensada para las necesidades de hoy y el patrimonio del mañana.
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton variant="light" className="px-10 text-base">
              Agenda tu visita
            </CTAButton>
          </div>
          <p className="mt-5 text-sm text-marfil/60">
            Conoce OX Residencial y descubre una nueva forma de vivir en Mérida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
