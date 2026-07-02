"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const NAV = [
  { href: "#smart-living", label: "Smart Living" },
  { href: "#hogar", label: "Tu Nuevo Hogar" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#galeria", label: "Galería" },
  { href: "#ostech", label: "Ostech" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-greige/30 bg-marfil/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" aria-label="Inicio — OX Residencial" className="shrink-0">
          <Logo className="h-28 sm:h-32" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-carbon/80 hover:text-verde"
                  : "text-marfil/90 hover:text-marfil"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center rounded-full bg-verde px-5 text-sm font-medium text-marfil transition-colors hover:bg-verde-700 sm:inline-flex"
          >
            Conoce OX
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled ? "text-carbon" : "text-marfil"
            }`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav
          className="border-t border-greige/30 bg-marfil/95 backdrop-blur-md lg:hidden"
          aria-label="Menú móvil"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-greige/20 py-3 text-base font-medium text-carbon last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-full bg-verde px-5 text-sm font-medium text-marfil"
            >
              Agenda una visita
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
