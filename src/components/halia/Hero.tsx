import { useState } from "react";
import { MapPin, Clock, X, CalendarHeart, ChevronDown } from "lucide-react";

const Hero = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  /* ── Shared CTA buttons (same professional style for mobile & desktop) ── */
  const ctaButtons = (
    <div className="flex flex-col items-stretch gap-3 w-full max-w-[280px]">
      <a
        href="/menu"
        className="
          inline-flex items-center justify-center gap-2
          bg-gold/90 hover:bg-amber-400
          text-black font-bold
          px-6 py-3.5
          text-[10px] sm:text-[11px] tracking-[0.18em] uppercase
          rounded-[3px]
          transition-all duration-300
          hover:scale-[1.03] active:scale-[0.97]
          shadow-[0_6px_24px_rgba(0,0,0,0.4)]
          whitespace-nowrap
        "
      >
        <CalendarHeart size={14} />
        Encomendar Menu
      </a>

      <button
        onClick={() => setShowInfoModal(true)}
        className="
          inline-flex items-center justify-center gap-2
          border border-white/40 hover:border-gold
          bg-black/30 backdrop-blur-md
          text-white/80 hover:text-white font-semibold
          px-5 py-3
          text-[10px] sm:text-[11px] tracking-[0.16em] uppercase
          rounded-[3px]
          transition-all duration-300
          hover:scale-[1.03] active:scale-[0.97]
          whitespace-nowrap
        "
      >
        <Clock size={13} className="text-gold" />
        Horários & Localização
      </button>
    </div>
  );

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">

        {/* ═══════════════════════════════════════════════════════════════
            MOBILE — Portrait image with heavy vignette
            ═══════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center bg-[#0c0604]">
          <img
            src="/images/amor-de-cinema.jpg"
            alt="Amor de Cinema — Menu Degustação Dia dos Namorados — Framboá"
            className="h-full w-auto max-w-none object-cover object-center"
          />
          {/* Heavy vignette — left to hide borders */}
          <div
            className="absolute inset-y-0 left-0 w-[35%] pointer-events-none"
            style={{ background: "linear-gradient(to right, #0c0604 0%, #0c0604 15%, rgba(12,6,4,0.8) 45%, transparent 100%)" }}
          />
          {/* Heavy vignette — right to hide borders */}
          <div
            className="absolute inset-y-0 right-0 w-[35%] pointer-events-none"
            style={{ background: "linear-gradient(to left, #0c0604 0%, #0c0604 15%, rgba(12,6,4,0.8) 45%, transparent 100%)" }}
          />
          {/* Top fade for navbar (much lighter) */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          {/* Bottom fade — dark to white for smooth section transition */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(12,6,4,0.5) 50%, #ffffff 100%)" }}
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP — Landscape image, full cover with vignettes
            ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-[#0c0604]">
          <img
            src="/fundo_PC/IMG_3722.JPG.jpeg"
            alt="Amor de Cinema — Menu Degustação Dia dos Namorados — Framboá"
            className="w-full h-full object-cover object-center"
          />
          {/* Heavy vignette — left */}
          <div
            className="absolute inset-y-0 left-0 w-[40%] pointer-events-none"
            style={{ background: "linear-gradient(to right, #0c0604 0%, rgba(12,6,4,0.7) 40%, transparent 100%)" }}
          />
          {/* Heavy vignette — right */}
          <div
            className="absolute inset-y-0 right-0 w-[40%] pointer-events-none"
            style={{ background: "linear-gradient(to left, #0c0604 0%, rgba(12,6,4,0.7) 40%, transparent 100%)" }}
          />
          {/* Vignette top for navbar */}
          <div
            className="absolute inset-x-0 top-0 h-[20%] pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(12,6,4,0.8) 0%, transparent 100%)" }}
          />
          {/* Bottom fade — dark to white for smooth transition */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(12,6,4,0.7) 60%, #ffffff 100%)" }}
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            MOBILE CONTENT — "Bem-vindo", Desde 1989, slogan, CTAs
            ═══════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden relative z-10 h-full flex flex-col items-center justify-center text-center px-6 w-full">
          {/* Spacer top */}
          <div className="flex-1 min-h-[8vh]" />

          {/* Bem-vindo ao Framboá */}
          <div
            className="mb-1 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <span className="block font-script text-white/80 text-[clamp(1.1rem,3.5vw,2rem)]">
              Bem-vindo ao
            </span>
            <span className="block font-display text-gold text-[clamp(2.8rem,11vw,5rem)] uppercase leading-[0.88] tracking-tight">
              Framboá
            </span>
          </div>

          {/* Desde 1989 */}
          <p
            className="text-white/60 font-sans text-[9px] tracking-[0.4em] uppercase mt-2 mb-1 animate-fade-in"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            Desde 1989
          </p>

          {/* Slogan */}
          <p
            className="text-white/50 font-serif italic text-xs tracking-wide mb-5 animate-fade-in"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            O sabor do mundo do jeito da gente.
          </p>

          {/* Divider */}
          <div
            className="w-12 h-px bg-gold/40 mb-5 animate-fade-in"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          />

          {/* CTA Buttons */}
          <div
            className="animate-fade-in flex justify-center"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            {ctaButtons}
          </div>

          {/* Spacer bottom */}
          <div className="flex-1 min-h-[14vh]" />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP CONTENT — Botoes ajustados para o espaco vazio da imagem
            ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:flex relative z-10 h-full flex-col items-center justify-end text-center px-8 w-full pb-[20vh]">
          {/* CTA buttons */}
          <div
            className="animate-fade-in flex justify-center w-full"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            {ctaButtons}
          </div>
        </div>

        {/* ── Info Modal: Horários + Localização ── */}
        {showInfoModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40 z-10">
          <ChevronDown size={20} className="text-white" />
        </div>
      </section>
    </>
  );
};

export default Hero;
