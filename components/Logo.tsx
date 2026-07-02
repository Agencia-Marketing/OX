import Image from "next/image";

type LogoProps = {
  /** Variante para fondos oscuros (footer) usa wordmark en marfil */
  variant?: "image" | "wordmark";
  className?: string;
};

/**
 * Logo OX. Por defecto usa el archivo de marca (public/logo-ox.png).
 * En fondos oscuros usa `variant="wordmark"` (texto en marfil).
 */
export default function Logo({ variant = "image", className = "" }: LogoProps) {
  if (variant === "wordmark") {
    return (
      <span className={`font-display leading-none ${className}`}>
        <span className="block text-2xl font-semibold tracking-display text-marfil">
          OX
        </span>
        <span className="mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.35em] text-oro-300">
          Tres Residencias
        </span>
      </span>
    );
  }

  return (
    <Image
      src="/logo-ox.png"
      alt="OX Tres Residencias Privadas — Dzityá, Mérida"
      width={1150}
      height={704}
      priority
      className={`w-auto object-contain ${className}`}
    />
  );
}
