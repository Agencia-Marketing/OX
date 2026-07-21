@AGENTS.md

# OX Residencial — landing

Landing de una sola página para OX Residencial: residencias boutique con
domótica en Dzityá, Mérida. Desarrolla OSTECH. El objetivo del sitio es un
único conversión: que el visitante agende una visita.

Público: compradores en México. **Todo el texto visible va en español (es-MX)**,
igual que los comentarios del código.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4.
Sin librería de UI. Animación con framer-motion, iconos con lucide-react.

Tailwind v4 se configura **dentro de `app/globals.css`** con `@theme inline`,
no en `tailwind.config.js` — ese archivo no existe y no debe crearse.

```bash
npm run dev     # localhost:3000
npm run build   # valida tipos también
npm run lint
```

## Estructura

- `app/page.tsx` — arma la página completa. El orden de las secciones vive aquí.
- `components/sections/` — una sección de la landing por archivo.
- `components/` — piezas reutilizables (Header, carruseles, CTAButton, Reveal…).
- `lib/whatsapp.ts` — generador de links de WhatsApp.
- `scripts/*.mjs` — utilidades de una sola vez (optimizar imágenes, rasterizar
  el brochure PDF, screenshots con puppeteer). No forman parte del build.
- `public/renders/` — renders en WebP. `public/media/` — video del hero.

## Design tokens

La paleta y las fuentes son tokens CSS en `app/globals.css`, expuestos como
utilidades Tailwind. Usa `text-verde`, `bg-marfil`, `font-display`, etc.
**Nunca escribas hex sueltos en los componentes.**

| Token | Uso |
|---|---|
| `marfil` `greige` `chukum` | fondos y neutros |
| `carbon` `grafito` | texto |
| `verde` / `verde-700` | acento principal, botones |
| `oro` / `oro-300` | acento secundario, eyebrows |

Tipografía: `font-display` = Outfit (títulos), `font-sans` = Inter (cuerpo).

## Dos rutas de conversión

**WhatsApp** — todos los CTA salvo el formulario. Construye los links siempre
con `buildWhatsAppLink()` de `lib/whatsapp.ts`, que prellena el mensaje con los
datos del prospecto. Nunca armes una URL `wa.me` a mano. El número está
centralizado ahí.

**Formulario de contacto** — `components/sections/Formulario.tsx` hace POST a
`app/api/contacto/route.ts`, que envía el lead por correo vía la API de Resend
(con `fetch`, sin SDK). Detalles que importan:

- Destinatarios fijos en el módulo: ventas + una copia de monitoreo.
- Remitente configurable con `CONTACTO_FROM`. El default usa
  `notify.programacionconecta.com`, dominio ya verificado en Resend (DKIM en
  Cloudflare). Cambiarlo a un dominio sin verificar rompe el envío.
- Requiere `RESEND_API_KEY`. Sin ella la route responde 500 a propósito.
- Valida en servidor además del cliente, escapa el HTML del correo y trae un
  campo honeypot (`website`) contra bots.
- Este formulario **ya no abre WhatsApp**. Fue decisión explícita.

## Deploy

Vercel, sobre `github.com/Agencia-Marketing/OX`. Push a `main` despliega a
producción directo — no hay staging. Las variables de entorno se administran en
el dashboard de Vercel; `.env*` está en `.gitignore` y nunca se commitea.
