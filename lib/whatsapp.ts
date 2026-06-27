// Helper central para generar enlaces de WhatsApp prellenados.
// Todos los CTA del sitio usan esto. Sin backend.

export const WHATSAPP_NUMBER = "5219996500077"; // +52 999 650 0077
export const WHATSAPP_DISPLAY = "+52 999 650 0077";

const BASE_MESSAGE =
  "Hola, me gustaría recibir información sobre OX Residencial y agendar una visita.";

type LeadInfo = {
  name?: string;
  phone?: string;
  /** Ciudad de origen del prospecto */
  city?: string;
  /** Intención: "Vivir" o "Invertir" */
  intent?: string;
  /** Mensaje base alternativo (p. ej. contexto de un CTA específico) */
  context?: string;
};

export function buildWhatsAppLink(info: LeadInfo = {}): string {
  const { name, phone, city, intent, context } = info;
  let text = context?.trim() || BASE_MESSAGE;

  const extra: string[] = [];
  if (name?.trim()) extra.push(`Mi nombre es ${name.trim()}.`);
  if (phone?.trim()) extra.push(`Mi teléfono es ${phone.trim()}.`);
  if (city?.trim()) extra.push(`Soy de ${city.trim()}.`);
  if (intent?.trim()) extra.push(`Busco para ${intent.trim().toLowerCase()}.`);
  if (extra.length) text = `${text} ${extra.join(" ")}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
