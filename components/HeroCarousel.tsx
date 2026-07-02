"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SLIDES = [
  { src: "/renders/fachada-principal.webp", alt: "Fachada principal de OX al atardecer" },
  { src: "/renders/lateral-1.webp", alt: "Vista lateral de la residencia OX" },
  { src: "/renders/fachada-posterior.webp", alt: "Fachada posterior con área de alberca" },
  { src: "/renders/lateral-2.webp", alt: "Vista lateral alterna de la residencia OX" },
];

/**
 * Carrusel de fondo a pantalla completa para el Hero.
 * Fallback del video: usar cuando el video vertical no luzca bien.
 * Transición fade automática. Respeta prefers-reduced-motion.
 */
export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: "linear" } }}
        >
          <Image
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
