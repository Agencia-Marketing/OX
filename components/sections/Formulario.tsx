"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Errors = { name?: string; phone?: string; email?: string };

export default function Formulario() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [intent, setIntent] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function validate(): Errors {
    const e: Errors = {};
    if (!name.trim()) e.name = "Ingresa tu nombre.";
    if (!phone.trim()) e.phone = "Ingresa tu teléfono.";
    else if (!/^[\d\s()+-]{7,}$/.test(phone.trim()))
      e.phone = "Teléfono no válido.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = "Correo no válido.";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const context = email.trim()
      ? `Hola, me gustaría agendar una visita a OX Residencial. Mi correo es ${email.trim()}.`
      : undefined;
    const link = buildWhatsAppLink({ name, phone, city, intent, context });
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "mt-1.5 w-full min-h-[48px] rounded-xl border bg-white/60 px-4 text-base text-grafito placeholder-carbon/40 transition-colors focus:border-verde focus:outline-none";

  return (
    <section id="contacto" className="bg-white/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-greige/40 bg-marfil shadow-sm lg:grid lg:grid-cols-2">
          {/* Imagen: persona dando la bienvenida. Sin overlay oscuro — la foto debe lucir. */}
          {/* TODO: reemplazar por /stock/bienvenida.jpg (persona recibiendo/invitando). Interino: fachada. */}
          <div className="relative hidden min-h-[440px] lg:block">
            <Image
              src="/renders/fachada-principal.webp"
              alt="Te damos la bienvenida a OX Residencial"
              fill
              sizes="50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>

          {/* Formulario */}
          <div className="p-8 sm:p-12">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-oro">
              <span className="h-px w-8 bg-oro" />
              Agenda tu visita
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-display text-grafito">
              Agenda una visita y conoce OX en persona.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-carbon/75">
              Déjanos tus datos y te contactaremos por WhatsApp para coordinar tu
              visita a OX.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-carbon">
                  Nombre <span className="text-oro">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setErrors(validate())}
                  placeholder="Tu nombre completo"
                  className={`${fieldClass} ${
                    errors.name ? "border-red-500" : "border-greige/60"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                />
                {errors.name && (
                  <p id="err-name" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-carbon">
                  Teléfono <span className="text-oro">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setErrors(validate())}
                  placeholder="999 123 4567"
                  className={`${fieldClass} ${
                    errors.phone ? "border-red-500" : "border-greige/60"
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                />
                {errors.phone && (
                  <p id="err-phone" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-carbon">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setErrors(validate())}
                  placeholder="tu@correo.com"
                  className={`${fieldClass} ${
                    errors.email ? "border-red-500" : "border-greige/60"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && (
                  <p id="err-email" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="text-sm font-medium text-carbon">
                  Ciudad de origen
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Tu ciudad"
                  className={`${fieldClass} border-greige/60`}
                />
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-carbon">
                  ¿Buscas para?
                </legend>
                <div className="mt-2 flex gap-3">
                  {["Vivir", "Invertir"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                        intent === opt
                          ? "border-verde bg-verde/10 text-verde"
                          : "border-greige/60 text-carbon/75 hover:border-verde/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="intent"
                        value={opt}
                        checked={intent === opt}
                        onChange={(e) => setIntent(e.target.value)}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-verde px-8 text-sm font-medium tracking-wide text-marfil transition-all duration-200 hover:bg-verde-700 hover:shadow-lg"
              >
                <Send size={18} aria-hidden="true" />
                Agenda una visita y conoce OX
              </button>
              <p className="text-center text-xs text-carbon/55">
                Al enviar abriremos WhatsApp con tus datos para agendar tu visita.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
