import Image from "next/image";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import CTAButton from "../CTAButton";

const CARDS = [
  {
    img: "/media/smarthome.webp",
    title: "Smart Home",
    text: "Integración y automatización para una experiencia de vida más práctica.",
  },
  {
    img: "/media/seguridad.webp",
    title: "Seguridad Inteligente",
    text: "Mayor tranquilidad para ti y tu familia.",
  },
  {
    img: "/media/paneles.webp",
    title: "Paneles Solares",
    text: "Mayor eficiencia y mejor aprovechamiento energético.",
  },
  {
    img: "/media/conectividad.webp",
    title: "Conectividad",
    text: "Espacios preparados para las nuevas formas de vivir y trabajar.",
  },
  {
    img: "/media/iluminacion.webp",
    title: "Iluminación Inteligente",
    text: "Mayor confort y funcionalidad en cada ambiente.",
  },
  {
    img: "/media/contemporaneo.webp",
    title: "Diseño Contemporáneo",
    text: "Arquitectura pensada para el estilo de vida actual.",
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
          eyebrow="Smart Living"
          title="Mucho más que una casa. Una forma más inteligente de vivir."
          intro="Una residencia diseñada para ofrecer mayor comodidad, seguridad y eficiencia todos los días."
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              {/* Tarjeta NO interactiva: sin cursor pointer ni estilo de botón */}
              <article className="group overflow-hidden rounded-2xl border border-marfil/10 bg-grafito/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-marfil">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-marfil/70">
                    {c.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-6 border-t border-marfil/15 pt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl font-display text-2xl font-light leading-snug text-marfil/95">
              Una propuesta diferente para una forma de habitar en el mercado
              donde muchas opciones se parecen entre sí, OX, por una
              experiencia residencial más moderna, eficiente y preparada
              para el futuro
            </p>
            <CTAButton variant="light" className="shrink-0">
              Conoce OX
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
