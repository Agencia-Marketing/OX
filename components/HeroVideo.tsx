"use client";

/**
 * Video de fondo del Hero. Reproduce muted/loop sin controles.
 * Recorta al segmento 0–50s para no mostrar el CTA final del video.
 * Si el video (vertical / baja resolución) no luce bien, usar <HeroCarousel /> en su lugar.
 */
export default function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/renders/fachada-principal.webp"
      onTimeUpdate={(e) => {
        const v = e.currentTarget;
        if (v.currentTime >= 50) v.currentTime = 0;
      }}
      className="absolute inset-0 h-full w-full object-cover object-center"
    >
      <source src="/media/video-ox.mp4" type="video/mp4" />
    </video>
  );
}
