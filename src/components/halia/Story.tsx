import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Trophy } from "lucide-react";

const STORY_IMAGES = [
  {
    src: "/images/halia/historic_img1.png",
    alt: "Início da nossa história - Buffet nos anos 90",
    caption: "Anos 90",
  },
  {
    src: "/images/halia/historic_img2.png",
    alt: "Pioneirismo do buffet self-service no shopping",
    caption: "Inovação",
  },
  {
    src: "/images/halia/historic_img3.png",
    alt: "Nosso buffet moderno hoje no Manaíra Shopping",
    caption: "Hoje",
  },
];

const Story = () => {
  const [muted, setMuted] = useState(true);
  const [showAudioPrompt, setShowAudioPrompt] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Try to unmute and play on first user interaction (browsers block audio autoplay)
  useEffect(() => {
    const enableAudio = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.play().catch((err) => {
          console.warn("Play failed on interaction:", err);
        });
        setMuted(false);
        setShowAudioPrompt(false);
      }
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  // Programmatically trigger play on mount/load to guarantee it autoplays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = muted;
      const startPlayback = () => {
        video.play().catch((err) => {
          console.log("Auto-playback blocked, waiting for click/touch to play with audio:", err);
        });
      };

      if (video.readyState >= 3) {
        startPlayback();
      } else {
        video.addEventListener("canplay", startPlayback);
      }

      return () => {
        video.removeEventListener("canplay", startPlayback);
      };
    }
  }, [muted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((m) => !m);
      setShowAudioPrompt(false);
    }
  };


  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" id="our-story">
      <div className="container mx-auto px-6">

        {/* ── Heading + text + Images ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: heading + body text (always centered on all screens) */}
          <div className="flex-1 w-full text-center">

            {/* Title with reveal */}
            <h3 className="mb-6 text-center reveal">
              <span className="block font-script text-gold text-4xl lg:text-6xl mb-2">
                Descubra
              </span>
              <span className="block font-display text-black text-4xl lg:text-6xl uppercase tracking-tighter">
                NOSSA HISTÓRIA
              </span>
            </h3>

            {/* Paragraphs with staggered reveal */}
            <div className="space-y-6 text-black/70 font-sans leading-relaxed text-sm lg:text-base max-w-xl mx-auto text-center">
              <p className="reveal reveal-delay-100">
                O Framboá é um restaurante familiar fundado em 1989 por Ana Rita e José Tavares de Melo,
                nascido do sonho de levar o sabor do mundo à mesa dos paraibanos, sempre com identidade,
                tradição e comida feita com verdade. O restaurante foi pioneiro ao implantar o modelo
                self-service em shopping no Brasil, um passo que reflete inovação, visão e o desejo de
                aproximar a boa comida das pessoas.
              </p>
              <p className="reveal reveal-delay-200">
                Localizado no Manaíra Shopping, em João Pessoa, o Framboá cresceu ao longo das décadas
                como um espaço de encontros e experiências, onde cada cliente tem liberdade para montar
                seu prato entre mais de 80 opções no buffet, que vai de saladas frescas e grelhados
                preparados na hora até massas, frutos do mar, sucos naturais e sobremesas feitas na casa.
                Sob a liderança do Chef José Tavares, nossa cozinha é guiada pelo respeito ao alimento e
                pelo compromisso com o sabor, a qualidade e o cuidado em cada preparo.
              </p>
              <p className="reveal reveal-delay-300">
                Em 2024, fomos reconhecidos como o melhor restaurante a quilo do Brasil pelo concurso
                "O Quilo é Nosso", da Abrasel — uma conquista que reflete nossa dedicação ao longo de
                toda a trajetória. Nossa missão é levar sabor e qualidade à mesa dos nossos clientes
                através de uma experiência gastronômica variada, acolhedora e feita com atenção em cada
                detalhe. Mais do que um restaurante, o Framboá é encontro, sabor e história servida
                todos os dias.
              </p>
            </div>
          </div>

          {/* Right: Historic photo gallery — staggered masonry layout */}
          <div className="flex-1 w-full">

            {/* Top row: 2 landscape photos side by side */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {STORY_IMAGES.slice(0, 2).map(({ src, alt, caption }, i) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-[4px] shadow-md reveal"
                  style={{
                    boxShadow: "0 6px 24px -6px rgba(0,0,0,0.22)",
                    transitionDelay: `${(i + 1) * 120}ms`,
                  }}
                >
                  {/* Photo — aspect 4/3, object-cover for clean fill */}
                  <div className="aspect-[4/3]">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  {/* hover caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-3">
                    <span className="text-white text-[9px] font-semibold tracking-[0.2em] uppercase">{caption}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>

            {/* Bottom row: 1 wide modern photo */}
            <div
              className="group relative overflow-hidden rounded-[4px] bg-[#0a0a0a] shadow-md reveal reveal-delay-300"
              style={{ boxShadow: "0 6px 24px -6px rgba(0,0,0,0.3)" }}
            >

              {/* Photo — wide landscape, object-cover for modern photo */}
              <div className="aspect-[16/7]">
                <img
                  src={STORY_IMAGES[2].src}
                  alt={STORY_IMAGES[2].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-3">
                <span className="text-white text-[9px] font-semibold tracking-[0.2em] uppercase">Nosso restaurante hoje</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Label */}
            <p className="mt-3 text-right text-[9px] tracking-[0.25em] uppercase text-black/30 font-sans">
              Restaurante Framboá · Desde 1989
            </p>
          </div>
        </div>

        {/* ── Frase de apoio / Momento de respiro ── */}
        <div className="mt-20 lg:mt-24 max-w-3xl mx-auto text-center reveal">
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p className="font-serif italic text-lg lg:text-2xl text-gold/90 leading-relaxed px-4">
            "Transformamos cada refeição em uma experiência de sabor, cuidado e encontro, unindo tradição, variedade e o prazer de comer bem."
          </p>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        {/* ── Premiação / Nossa Conquista ── */}
        <div className="mt-24 lg:mt-28 max-w-4xl mx-auto px-6 py-12 rounded-[8px] bg-gradient-cream border border-gold/10 shadow-soft flex flex-col md:flex-row items-center gap-10 lg:gap-14 reveal">
          
          {/* Left / Top: Trophy badge */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white/60 rounded-[4px] shadow-sm border border-gold/10 w-full md:w-auto md:min-w-[200px]">
            <Trophy className="h-14 w-14 text-gold mb-3 animate-pulse-subtle" strokeWidth={1.5} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Melhor do Brasil</span>
            <span className="font-serif italic text-gold text-2xl mt-1">Abrasel 2024</span>
          </div>

          {/* Right / Body: Title and description */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-2">
              Nossa Conquista
            </span>
            <h4 className="font-display text-2xl lg:text-3.5xl font-bold uppercase tracking-tight text-black leading-tight mb-4">
              Menina Brejeira: o sabor que conquistou o Brasil
            </h4>
            <div className="space-y-4 text-black/70 text-sm lg:text-base font-sans leading-relaxed">
              <p>
                Em 2024, o Framboá foi reconhecido como o melhor restaurante a quilo do Brasil no concurso <strong className="font-bold text-black">“O Quilo é Nosso”</strong>, realizado pela Abrasel, um marco importante na nossa trajetória e um orgulho para a gastronomia paraibana.
              </p>
              <p>
                O prato campeão, <strong className="font-bold text-black">“Menina Brejeira”</strong>, assinado pelo Chef José Tavares, nasceu da valorização dos ingredientes locais e da busca por traduzir o sabor da Paraíba em uma criação que representa nossa essência: respeito ao produto, cuidado no preparo e amor pela cozinha.
              </p>
              <p>
                A conquista reforça não apenas a qualidade do nosso trabalho, mas também a força da culinária regional quando é tratada com dedicação e sensibilidade. Mais do que um prêmio, esse reconhecimento simboliza uma história construída ao longo de décadas, feita de entrega diária, paixão pelo que fazemos e da confiança de cada cliente que faz parte dessa caminhada.
              </p>
            </div>
          </div>
        </div>

        {/* ── Video — portrait (9:16, phone size) centered ── */}
        <div className="mt-28 lg:mt-32 flex flex-col items-center">

          {/* Section divider label */}
          <div className="flex items-center gap-4 w-full max-w-sm mb-8">
            <div className="h-px flex-1 bg-black/12" />
            <p className="text-[9px] font-semibold tracking-[0.35em] uppercase text-black/35 whitespace-nowrap">
              Nossa Essência em Vídeo
            </p>
            <div className="h-px flex-1 bg-black/12" />
          </div>

          {/* Portrait video container */}
          <div
            className="relative w-full max-w-[320px] sm:max-w-[360px] rounded-[6px] overflow-hidden bg-black"
            style={{ boxShadow: "0 24px 60px -16px rgba(0,0,0,0.35)" }}
          >
            <div className="relative w-full aspect-[9/16]">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/halia/story_img2.jpg"
              >
                <source src="/images/halia/framboa-video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>

              {/* Audio prompt overlay — shown until first interaction */}
              {showAudioPrompt && (
                <div
                  onClick={toggleMute}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-16 cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-2 animate-bounce">
                    <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20">
                      <VolumeX size={14} />
                      <span>Toque para ativar o som</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                aria-label={muted ? "Ativar som" : "Mutar"}
                className="
                  absolute bottom-4 right-4 z-10
                  flex items-center justify-center
                  w-10 h-10 rounded-full
                  bg-black/60 hover:bg-black/80
                  backdrop-blur-sm
                  border border-white/20
                  text-white
                  transition-all duration-300
                  hover:scale-110 active:scale-95
                "
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
