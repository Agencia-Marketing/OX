"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import CTAButton from "../CTAButton";
import Carousel from "../Carousel";

type Shot = { src: string; alt: string };

const SHOTS: Shot[] = [
  { src: "/renders/fachada-principal.webp", alt: "Fachada principal del conjunto residencial OX" },
  { src: "/renders/cocina.webp", alt: "Cocina con isla y comedor integrados" },
  { src: "/renders/recamara-principal.webp", alt: "Recámara principal con acceso a terraza" },
  { src: "/renders/bano-principal.webp", alt: "Baño principal con vestidor" },
  { src: "/renders/lateral-1.webp", alt: "Vista lateral de la residencia OX" },
  { src: "/renders/fachada-posterior.webp", alt: "Fachada posterior con área de alberca" },
  { src: "/renders/recamara-pb.webp", alt: "Recámara en planta baja" },
  { src: "/renders/bano-pb.webp", alt: "Baño en planta baja" },
  { src: "/renders/lateral-2.webp", alt: "Vista lateral alterna de la residencia OX" },
  // TODO: agregar 1–2 fotos de stock de pareja joven (con llaves / firmando — no IA dentro de casa).
  // Soltar archivos en /public/stock/ y descomentar:
  // { src: "/stock/pareja-1.jpg", alt: "Pareja joven recibiendo las llaves de su nuevo hogar" },
  // { src: "/stock/pareja-2.jpg", alt: "Pareja joven firmando la compra de su residencia" },
];

export default function Galeria() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + SHOTS.length - 1) % SHOTS.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % SHOTS.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section id="galeria" className="bg-marfil py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galería"
          title="Imagina tu nueva vida en OX"
          intro="Espacios donde la tecnología, el diseño y el bienestar conviven de forma natural."
        />

        {/* Carrusel 1×1 con auto-slide; click abre el lightbox, hover muestra "Ver" */}
        <div className="mt-12">
          <Carousel
            slides={SHOTS}
            aspect="16/9"
            interval={4000}
            hoverCue
            onSlideClick={(i) => setIndex(i)}
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-lg font-light leading-snug text-carbon/80">
          Una residencia diseñada para disfrutar la vida de una manera más cómoda y moderna.
        </p>

        <div className="mt-8 text-center">
          <CTAButton>Agenda una visita y conoce OX</CTAButton>
        </div>
      </div>

      {/* Lightbox */}
      {open && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-grafito/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-marfil/10 text-marfil hover:bg-marfil/20"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-marfil/10 text-marfil hover:bg-marfil/20 sm:left-6"
          >
            <ChevronLeft size={26} />
          </button>
          <div
            className="relative h-[78vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={SHOTS[index].src}
              alt={SHOTS[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute -bottom-9 left-0 right-0 text-center text-sm text-marfil/70">
              {SHOTS[index].alt}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-marfil/10 text-marfil hover:bg-marfil/20 sm:right-6"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
