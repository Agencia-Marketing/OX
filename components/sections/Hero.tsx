import { ArrowDown, MapPin, BedDouble, Waves, Sun, Cpu } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import HeroVideo from "../HeroVideo";

// FALLBACK: si el video vertical no luce bien, importar HeroCarousel
// y reemplazar <HeroVideo /> por <HeroCarousel /> abajo (un solo cambio).
// import HeroCarousel from "../HeroCarousel";

const SPECS = [
  { icon: BedDouble, label: "3 Recámaras" },
  { icon: Waves, label: "Alberca" },
  { icon: Sun, label: "Paneles Solares" },
  { icon: Cpu, label: "Smart Home" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Fondo: video oficial de OX (fallback: HeroCarousel) */}
      <HeroVideo />

      {/* Overlay claro: gradiente sutil solo abajo para legibilidad sin apagar la imagen */}
      <div className="absolute inset-0 bg-gradient-to-t from-grafito/75 via-grafito/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-marfil/95">
            <MapPin size={16} className="text-oro-300" aria-hidden="true" />
            Zona Norte de Mérida, Yucatán
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-display text-marfil sm:text-6xl lg:text-7xl">
            Vive en una Smart Home
            <br />
            diseñada para el futuro.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-marfil/90 sm:text-lg">
            Tecnología, seguridad y eficiencia energética en residencias
            contemporáneas ubicadas en la Zona Norte de Mérida.
          </p>

          {/* Precio + diferenciadores: visibles desde la portada */}
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3">
            <span className="rounded-full bg-oro px-5 py-2 text-sm font-semibold text-grafito shadow-sm">
              Desde $4.2 MDP*
            </span>
            <div className="flex flex-wrap gap-2">
              {SPECS.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-marfil/30 bg-grafito/30 px-3.5 py-2 text-xs font-medium text-marfil backdrop-blur-sm"
                >
                  <s.icon size={15} className="text-oro-300" aria-hidden="true" />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-verde px-8 text-sm font-medium tracking-wide text-marfil shadow-lg shadow-black/20 transition-all duration-200 hover:bg-verde-700 hover:shadow-xl"
            >
              Agenda una Visita y Conoce OX
            </a>
          </div>
        </div>
      </div>

      <a
        href="#smart-living"
        aria-label="Desplázate para ver más"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-marfil/70 transition-colors hover:text-marfil"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
