import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function VideoOX() {
  return (
    <section id="video" className="bg-carbon py-24 text-marfil sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recorrido"
          title="Vive OX en movimiento."
          intro="Recorre el desarrollo y descubre el diseño, los espacios y el entorno de OX Residencial."
          tone="light"
          align="center"
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-marfil/10 shadow-xl shadow-black/30">
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="none"
              poster="/renders/fachada-principal.webp"
            >
              <source src="/media/video-ox.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
