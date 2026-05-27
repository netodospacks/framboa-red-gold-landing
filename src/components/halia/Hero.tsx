import { useState } from "react";
import { MapPin, Clock, X, CalendarHeart } from "lucide-react";

const Hero = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/framboa-hero-chef.jpg')",
          backgroundPosition: "35% center",
        }}
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 w-full max-w-4xl mx-auto">

        {/* Eyebrow */}
        <p
          className="text-gold/90 font-sans tracking-[0.4em] uppercase text-[9px] sm:text-[11px] mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          Manaíra Shopping · João Pessoa
        </p>

        {/* Main heading — fonts swapped, sizes adjusted */}
        <h1
          className="leading-none tracking-tight mb-1 animate-fade-in"
          style={{ animationDelay: "0.25s", animationFillMode: "both" }}
        >
          {/* "Bem-vindo ao" now uses font-script (the Framboá script), smaller */}
          <span className="block font-script text-white/80 text-[clamp(1.3rem,4vw,2.4rem)] capitalize">
            Bem-vindo ao
          </span>
          {/* "Framboá" now uses font-display (the bold uppercase style), bigger */}
          <span className="block font-display text-gold text-[clamp(3.5rem,13vw,9rem)] uppercase leading-[0.88] tracking-tight">
            Framboá
          </span>
        </h1>

        {/* Desde 1989 */}
        <p
          className="text-white/70 font-sans text-[10px] sm:text-xs tracking-[0.45em] uppercase mt-3 mb-2 animate-fade-in"
          style={{ animationDelay: "0.45s", animationFillMode: "both" }}
        >
          Desde 1989
        </p>

        {/* Slogan */}
        <p
          className="text-white/60 font-serif italic text-sm sm:text-base tracking-wide mb-8 animate-fade-in"
          style={{ animationDelay: "0.55s", animationFillMode: "both" }}
        >
          O sabor do mundo do jeito da gente.
        </p>

        {/* Thin gold divider */}
        <div
          className="w-16 h-px bg-gold/50 mb-8 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        />

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full max-w-xs sm:max-w-none animate-fade-in"
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          {/* Primary — Reserva Dia dos Namorados */}
          <a
            href="/menu"
            className="
              inline-flex items-center justify-center gap-2
              bg-gold hover:bg-amber-400
              text-black font-bold
              px-6 py-3.5 sm:px-8 sm:py-4
              text-[10px] sm:text-[11px] tracking-[0.18em] uppercase
              rounded-[3px]
              transition-all duration-300
              hover:scale-[1.03] active:scale-[0.97]
              shadow-[0_4px_20px_rgba(0,0,0,0.35)]
              whitespace-nowrap
            "
          >
            <CalendarHeart size={14} />
            Reserva Dia dos Namorados
          </a>

          {/* Secondary — Horários &amp; Localização (merged) */}
          <button
            onClick={() => setShowInfoModal(true)}
            className="
              inline-flex items-center justify-center gap-2
              border border-white/60 hover:border-gold
              hover:bg-white/10
              text-white/90 hover:text-white font-semibold
              px-6 py-3.5 sm:px-8 sm:py-4
              text-[10px] sm:text-[11px] tracking-[0.18em] uppercase
              rounded-[3px]
              transition-all duration-300
              hover:scale-[1.03] active:scale-[0.97]
              backdrop-blur-[2px]
              whitespace-nowrap
            "
          >
            <Clock size={14} className="text-gold" />
            Horários &amp; Localização
          </button>
        </div>
      </div>

      {/* ── Info Modal: Horários + Localização ── */}
      {showInfoModal && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) setShowInfoModal(false); }}
        >
          <div className="relative bg-neutral-900/95 border border-gold/20 p-8 sm:p-10 rounded-[8px] max-w-sm w-full text-center shadow-[0_24px_60px_rgba(0,0,0,0.6)]">

            {/* Close */}
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            {/* Icon header */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/25">
                <Clock className="text-gold" size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/25">
                <MapPin className="text-gold" size={18} />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display text-white text-lg sm:text-xl uppercase tracking-widest mb-1">
              Horários de Funcionamento
            </h3>
            <p className="text-gold/70 font-sans text-[10px] tracking-[0.25em] uppercase mb-5">
              Manaíra Shopping · João Pessoa – PB
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gold/30 mx-auto mb-5" />

            {/* Hours */}
            <div className="space-y-3 font-sans text-sm text-white/80 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="font-semibold text-white/90 text-left">Segunda a Sábado</span>
                <span className="text-gold font-bold">10:00 – 22:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="font-semibold text-white/90 text-left">Domingos</span>
                <span className="text-gold font-bold">11:30 – 22:00</span>
              </div>
            </div>

            {/* Ver Localização button */}
            <a
              href="https://www.google.com/maps/search/Frambo%C3%A1+Restaurante+Mana%C3%ADra+Shopping"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                w-full
                bg-gold hover:bg-amber-400
                text-black font-bold
                px-5 py-3
                text-[10px] tracking-[0.2em] uppercase
                rounded-[3px]
                transition-all duration-300
                hover:scale-[1.02] active:scale-[0.98]
              "
            >
              <MapPin size={13} />
              Ver Localização no Mapa
            </a>

            <p className="text-[10px] tracking-wider uppercase text-white/30 mt-5">
              Aguardamos sua visita!
            </p>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce opacity-50">
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
