"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

type PlanoViewerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ZOOM = 2.4;

export default function PlanoViewer({ src, alt, width, height }: PlanoViewerProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const close = useCallback(() => {
    setOpen(false);
    setZoom(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }

  return (
    <>
      {/* Miniatura — abre el popup */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ampliar plano arquitectónico"
        className="group relative mx-auto mt-10 block max-w-3xl overflow-hidden rounded-2xl border border-greige/40 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-8"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          sizes="(max-width: 768px) 90vw, 700px"
          className="mx-auto h-auto w-full max-w-xl"
        />
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-grafito/80 px-3 py-1.5 text-xs font-medium text-marfil opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ZoomIn size={14} aria-hidden="true" />
          Ampliar plano
        </span>
      </button>

      {/* Popup con zoom al pasar el ratón */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Plano arquitectónico"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-grafito/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-marfil/10 text-marfil hover:bg-marfil/20"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-h-[88vh] max-w-4xl overflow-hidden rounded-xl bg-white"
            onMouseMove={onMove}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onClick={(e) => {
              e.stopPropagation();
              setZoom((z) => !z); // toque en móvil
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[88vh] w-auto select-none"
              draggable={false}
              style={{
                transform: zoom ? `scale(${ZOOM})` : "scale(1)",
                transformOrigin: `${pos.x}% ${pos.y}%`,
                transition: zoom ? "none" : "transform 0.2s ease-out",
                cursor: zoom ? "zoom-out" : "zoom-in",
              }}
            />
          </div>

          <p className="pointer-events-none absolute bottom-5 left-0 right-0 text-center text-xs text-marfil/60">
            Pasa el cursor para hacer zoom · toca la imagen en móvil
          </p>
        </div>
      )}
    </>
  );
}
