"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Carousel, { type Slide } from "./Carousel";

type GaleriaCarouselProps = {
  slides: Slide[];
};

/**
 * Carrusel de fotos con lightbox: click amplía la imagen, teclado navega.
 * Aísla el estado del cliente para que la sección que lo usa siga en el servidor.
 */
export default function GaleriaCarousel({ slides }: GaleriaCarouselProps) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + slides.length - 1) % slides.length)),
    [slides.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % slides.length)),
    [slides.length]
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
    <>
      {/* Carrusel 1×1 con auto-slide; click abre el lightbox, hover muestra "Ver" */}
      <Carousel
        slides={slides}
        aspect="16/9"
        interval={4500}
        hoverCue
        onSlideClick={(i) => setIndex(i)}
        sizes="(max-width: 1280px) 100vw, 1200px"
      />

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
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
            <p className="absolute -bottom-9 left-0 right-0 text-center text-sm text-marfil/70">
              {slides[index].alt}
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
    </>
  );
}
