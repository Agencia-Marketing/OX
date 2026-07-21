const DESTINATARIOS = ["oherrera@grupohergo.mx", "programacionagencia2@gmail.com"];
const REMITENTE =
  process.env.CONTACTO_FROM ?? "OX Residencial <ox@notify.programacionconecta.com>";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  intent?: unknown;
  website?: unknown; // honeypot
};

function clean(value: unknown, max = 200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: los bots llenan campos ocultos, las personas no.
  if (clean(body.website)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const city = clean(body.city, 120);
  const intent = clean(body.intent, 40);

  if (!name || !phone) {
    return Response.json({ error: "Nombre y teléfono son obligatorios." }, { status: 400 });
  }
  if (!/^[\d\s()+-]{7,}$/.test(phone)) {
    return Response.json({ error: "Teléfono no válido." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Correo no válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Falta RESEND_API_KEY: no se envió el correo de contacto.");
    return Response.json({ error: "El envío no está disponible por ahora." }, { status: 500 });
  }

  const filas: [string, string][] = [
    ["Nombre", name],
    ["Teléfono", phone],
    ["Correo", email || "No proporcionado"],
    ["Ciudad", city || "No proporcionada"],
    ["Busca para", intent || "No especificado"],
  ];

  const html = `
    <h2 style="font-family:sans-serif">Nueva solicitud de visita — OX Residencial</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${filas
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0"><strong>${k}</strong></td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: REMITENTE,
      to: DESTINATARIOS,
      subject: `Nueva solicitud de visita — ${name}`,
      html,
      text: filas.map(([k, v]) => `${k}: ${v}`).join("\n"),
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!res.ok) {
    console.error("Resend respondió con error:", res.status, await res.text());
    return Response.json({ error: "No pudimos enviar tu solicitud." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
