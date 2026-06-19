import { buildWhatsAppLink } from "@/lib/whatsapp";

type Variant = "primary" | "outline" | "light";

const STYLES: Record<Variant, string> = {
  // Verde de marca, alto contraste sobre marfil
  primary:
    "bg-verde text-marfil hover:bg-verde-700 shadow-sm hover:shadow-md",
  // Contorno sobre fondos claros
  outline:
    "border border-greige/70 text-grafito hover:border-verde hover:text-verde",
  // Para fondos oscuros
  light: "bg-marfil text-grafito hover:bg-oro-300",
};

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  context?: string;
  className?: string;
};

/** Botón CTA que abre WhatsApp prellenado. */
export default function CTAButton({
  children,
  variant = "primary",
  context,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={buildWhatsAppLink({ context })}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition-all duration-200 ${STYLES[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
