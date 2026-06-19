import { Phone, Clock, MapPin } from "lucide-react";
import Logo from "../Logo";
import { WHATSAPP_DISPLAY, buildWhatsAppLink } from "@/lib/whatsapp";

const IG = "https://www.instagram.com/oxdzitya";
const FB = "https://www.facebook.com/share/1DrcqH7tr4/";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.6 3.6 0 00-.88-1.35 3.6 3.6 0 00-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 1.62a3.68 3.68 0 100 7.36 3.68 3.68 0 000-7.36zm5.5-.4a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-grafito text-marfil">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Logo variant="wordmark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-marfil/55">
              Donde la tecnología se convierte en calidad de vida. Residencias
              boutique inteligentes en Dzityá, Mérida.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-oro-300">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-marfil/70">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-marfil"
                >
                  <Phone size={17} className="shrink-0 text-oro-300" aria-hidden="true" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={17} className="shrink-0 text-oro-300" aria-hidden="true" />
                Lunes a Sábado · 9:00 a 18:00 h
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={17} className="shrink-0 text-oro-300" aria-hidden="true" />
                Dzityá, Mérida, Yucatán
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-oro-300">
              Síguenos
            </h3>
            <div className="mt-5 flex gap-3">
              <a
                href={IG}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de OX Residencial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-marfil/15 text-marfil/70 transition-colors hover:border-oro/50 hover:text-oro-300"
              >
                <InstagramIcon />
              </a>
              <a
                href={FB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de OX Residencial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-marfil/15 text-marfil/70 transition-colors hover:border-oro/50 hover:text-oro-300"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-marfil/10 pt-6 text-xs text-marfil/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OX Tres Residencias Privadas. Todos los derechos reservados.</p>
          <p>Un desarrollo de OSTECH Desarrolladora.</p>
        </div>
      </div>
    </footer>
  );
}
