import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/renders/fachada.webp"
        alt="Fachada de residencia OX al atardecer en Dzityá, Mérida"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-grafito/70 via-grafito/45 to-grafito/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-grafito/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-oro-300">
            <span className="h-px w-8 bg-oro-300" />
            Donde la tecnología se convierte en calidad de vida
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-display text-marfil sm:text-6xl lg:text-7xl">
            Vive inteligente.
            <br />
            Vive OX.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-marfil/90 sm:text-xl">
            Residencias boutique en Mérida que integran tecnología, seguridad y
            eficiencia para una nueva forma de vivir.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-marfil/70">
            Imagina llegar a un hogar diseñado para simplificar tu día, brindarte
            tranquilidad y acompañar el estilo de vida que siempre has querido para
            ti y tu familia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-verde px-8 text-sm font-medium tracking-wide text-marfil shadow-lg shadow-black/20 transition-all duration-200 hover:bg-verde-700 hover:shadow-xl"
            >
              Agenda una visita
            </a>
            <a
              href="#hogar"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-marfil/40 px-8 text-sm font-medium tracking-wide text-marfil transition-colors duration-200 hover:bg-marfil/10"
            >
              Conoce el desarrollo
            </a>
          </div>
        </div>
      </div>

      <a
        href="#por-que-ox"
        aria-label="Desplázate para ver más"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-marfil/70 transition-colors hover:text-marfil"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
