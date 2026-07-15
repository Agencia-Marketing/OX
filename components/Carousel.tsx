"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export type Slide = { src: string; alt: string };

type CarouselProps = {
  slides: Slide[];
  /** Aspect ratio CSS, p. ej. "16/9" o "4/3". */
  aspect?: string;
  /** Avance automático. */
  auto?: boolean;
  /** Intervalo de avance en ms. */
  interval?: number;
  /** Al hacer click en el slide (p. ej. abrir lightbox). */
  onSlideClick?: (index: number) => void;
  /** Muestra señal "Ver" al pasar el mouse (cuando es clickable). */
  hoverCue?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Carrusel de imágenes 1×1 con auto-slide y transición suave (fade).
 * Reutilizable; GaleriaCarousel lo envuelve para añadir lightbox.
 * Respeta prefers-reduced-motion.
 */
export default function Carousel({
  slides,
  aspect = "16/9",
  auto = true,
  interval = 5000,
  onSlideClick,
  hoverCue = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 1100px",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = slides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  // Auto-avance
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (!auto || paused || count <= 1) return;
    timer.current = setInterval(() => go(1), interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [auto, paused, count, interval, go]);

  if (count === 0) return null;
  const clickable = !!onSlideClick;
  const current = slides[index];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: aspect }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {clickable ? (
            <button
              type="button"
              onClick={() => onSlideClick(index)}
              aria-label={`Ampliar imagen: ${current.alt}`}
              className="group absolute inset-0 h-full w-full"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes={sizes}
                className="object-cover"
                priority={false}
              />
              {hoverCue && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-grafito/0 opacity-0 transition-all duration-300 group-hover:bg-grafito/25 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-marfil/95 px-5 py-2.5 text-sm font-medium text-grafito shadow-lg">
                    <Eye size={18} aria-hidden="true" /> Ver
                  </span>
                </span>
              )}
            </button>
          ) : (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes={sizes}
              className="object-cover"
              priority={false}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-marfil/80 text-grafito shadow-sm backdrop-blur transition-colors hover:bg-marfil"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-marfil/80 text-grafito shadow-sm backdrop-blur transition-colors hover:bg-marfil"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-marfil" : "w-2 bg-marfil/50 hover:bg-marfil/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
