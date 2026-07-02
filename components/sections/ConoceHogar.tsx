import {
  Ruler,
  Maximize,
  BedDouble,
  Waves,
  Car,
  Briefcase,
  Check,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";
import PlanoViewer from "../PlanoViewer";
import Carousel from "../Carousel";

const SPECS = [
  { icon: Ruler, value: "281.40 m²", label: "Construcción" },
  { icon: Maximize, value: "8 × 30 m", label: "Terreno" },
  { icon: BedDouble, value: "3 recámaras", label: "Amplias y confortables" },
  { icon: Briefcase, value: "Home office", label: "Espacio para trabajar" },
  { icon: Waves, value: "Alberca", label: "Privada" },
  { icon: Car, value: "2 autos", label: "Cochera techada" },
];

// Carrusel de espacios (auto-rota). Renders existentes.
const ESPACIOS = [
  { src: "/renders/cocina.webp", alt: "Cocina integral con isla y comedor" },
  { src: "/renders/recamara-principal.webp", alt: "Recámara principal con acceso a terraza" },
  { src: "/renders/recamara-pb.webp", alt: "Recámara en planta baja" },
  { src: "/renders/bano-principal.webp", alt: "Baño principal con vestidor" },
  { src: "/renders/fachada-posterior.webp", alt: "Área de alberca privada" },
];

const DESTACADOS = [
  "Cocina integral",
  "Jardín",
  "Paneles solares",
  "Diseño contemporáneo",
  "Sistema Smart Home",
];

export default function ConoceHogar() {
  return (
    <section id="hogar" className="bg-marfil py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Conoce tu nuevo hogar"
          title="Espacios diseñados para la vida que quieres construir."
          intro="Cada detalle de OX fue concebido para responder a las necesidades de la vida actual: compartir en familia, trabajar desde casa, descansar, disfrutar y crecer."
        />

        {/* Carrusel de espacios con movimiento automático */}
        <Reveal className="mt-14">
          <Carousel
            slides={ESPACIOS}
            aspect="16/9"
            interval={4500}
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </Reveal>

        {/* Specs + destacados + CTA */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          <Reveal className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SPECS.map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl border border-greige/40 bg-white/40 p-5"
                >
                  <s.icon
                    size={22}
                    strokeWidth={1.6}
                    className="text-oro"
                    aria-hidden="true"
                  />
                  <p className="mt-3 font-display text-lg font-semibold leading-tight text-grafito">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-carbon/65">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col">
            <ul className="grid grid-cols-1 gap-3">
              {DESTACADOS.map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-sm text-carbon/85">
                  <Check size={17} className="shrink-0 text-verde" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <CTAButton className="w-full sm:w-auto lg:w-full">
                Agenda una visita y conoce OX
              </CTAButton>
            </div>
          </Reveal>
        </div>

        {/* Distribución — planta arquitectónica */}
        <Reveal className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-oro">
              <span className="h-px w-8 bg-oro" />
              Distribución
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-display text-grafito sm:text-3xl">
              Conoce la distribución de tu residencia.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-carbon/75">
              Dos niveles pensados para la vida actual: convivencia y servicios en planta
              baja, descanso y privacidad en planta alta.
            </p>
          </div>

          <PlanoViewer
            src="/renders/planta.webp"
            alt="Plano arquitectónico de la residencia OX: planta baja con alberca, terraza, sala, comedor, cocina, recámara 1, baño y cochera para 2 autos; planta alta con recámara principal, walking closet, family room, recámara 2, baño y vestidor."
            width={2000}
            height={2832}
          />
          <p className="mt-4 text-center text-sm text-carbon/60">
            Planta baja y planta alta · 281.40 m² de construcción · Toca para ampliar y hacer zoom
          </p>
        </Reveal>
      </div>
    </section>
  );
}
