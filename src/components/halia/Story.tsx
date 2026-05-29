import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

const AWARDS = [
  {
    tag: "Nossa Conquista · Abrasel 2024",
    title: "Menina Brejeira: o sabor que conquistou o Brasil",
    event: "Melhor Restaurante a Quilo do Brasil · 2024",
    description: "Em 2024, o Framboá foi reconhecido como o melhor restaurante a quilo do Brasil no concurso \"O Quilo é Nosso\", realizado pela Abrasel — um marco histórico para a gastronomia paraibana.",
    detail: "O prato campeão, \"Menina Brejeira\", assinado pelo Chef José Tavares, nasceu da valorização dos ingredientes locais e da busca por traduzir o sabor da Paraíba em uma criação que representa nossa essência: respeito ao produto, cuidado no preparo e amor pela cozinha.",
    extraDetail: "A conquista reforça não apenas a qualidade do nosso trabalho, mas também a força da culinária regional quando é tratada com dedicação e sensibilidade. Mais do que um prêmio, esse reconhecimento simboliza uma história construída ao longo de décadas, feita de entrega diária, paixão pelo que fazemos e da confiança de cada cliente que faz parte dessa caminhada.",
    images: [
      "/premia%C3%A7%C3%A3o/meninabrejeira_foto1.jpeg",
      "/premia%C3%A7%C3%A3o/meninabreiejira_foto2.jpeg",
    ],
  },
  {
    tag: "Nossa Conquista · Abrasel 2025",
    title: "Sertão Molhado: o bicampeonato",
    event: "Top 10 do Brasil no concurso O Quilo é Nosso · 2025",
    description: "Em 2025, o Framboá celebrou o bicampeonato paraibano e garantiu seu lugar no cobiçado Top 10 nacional do concurso \"O Quilo é Nosso\", da Abrasel. Essa nova conquista reafirma nosso compromisso contínuo com a excelência e consolida o nosso papel de destaque na valorização da gastronomia da Paraíba.",
    detail: "A estrela dessa vitória foi o “Sertão Molhado”, um prato que carrega a força e a riqueza inconfundíveis do Nordeste. Criado como uma homenagem aos sabores da nossa terra e à transposição do Rio São Francisco — que trouxe vida e esperança para tantas regiões —, a receita traz um purê de banana-da-terra defumado com carne de sol, feijão verde e milho assado, tudo temperado com um refogado especial e finalizado com língua de sol ao molho demi-glace.",
    extraDetail: "Esse bicampeonato e a posição entre os melhores do Brasil provam que a nossa paixão por inovar, sem perder as raízes, continua rendendo frutos. Mais uma vez, celebramos não apenas os prêmios, mas a entrega diária da nossa equipe e a confiança de cada cliente que nos acompanha e acredita na força da nossa culinária regional.",
    images: [
      "/premia%C3%A7%C3%A3o/sertaomolhado_foto1.jpeg",
      "/premia%C3%A7%C3%A3o/sertaomolhado_foto2.jpeg",
    ],
  },
];

const STORY_IMAGES = [
  {
    src: "/images/halia/historic_img1.png",
    alt: "Início da nossa história - Buffet nos anos 90",
    caption: "A Origem",
  },
  {
    src: "/images/halia/historic_img2.png",
    alt: "Pioneirismo do buffet self-service no shopping",
    caption: "Anos 90",
  },
  {
    src: "/images/halia/historic_img3.png",
    alt: "Nosso buffet moderno hoje no Manaíra Shopping",
    caption: "2010",
  },
];



const TypewriterText = ({ text, delay = 0, speed = 15, trigger = "" }: { text: string; delay?: number; speed?: number; trigger?: string | number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;
    
    // Reset when trigger changes
    setDisplayedText("");

    const startTyping = () => {
      timeout = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) clearInterval(timeout);
      }, speed);
    };

    if (delay > 0) {
      setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearInterval(timeout);
    };
  }, [text, speed, delay, trigger]);

  return <span>{displayedText}</span>;
};

const Story = () => {
  const [muted, setMuted] = useState(true);
  const [awardIdx, setAwardIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Programmatically trigger play on mount/load to guarantee it autoplays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = muted;
      const startPlayback = () => {
        video.play().catch((err) => {
          console.log("Auto-playback blocked:", err);
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
                <span className="text-white text-[9px] font-semibold tracking-[0.2em] uppercase">2010</span>
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

        {/* ── Premiação / Carrossel de Conquistas ── */}
        <div className="mt-24 lg:mt-28 max-w-5xl mx-auto reveal">
          {/* Header com setas */}
          <div className="flex items-center justify-between mb-6 px-1">
            <div>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gold block mb-1">Nossas Conquistas</span>
              <h3 className="font-display text-xl lg:text-2xl uppercase tracking-tight text-black">Premiações & Reconhecimentos</h3>
            </div>
            {AWARDS.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAwardIdx(i => (i - 1 + AWARDS.length) % AWARDS.length)}
                  className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-black/50 hover:border-gold hover:text-gold transition-colors duration-200"
                  aria-label="Premiação anterior"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-[10px] text-black/30 font-mono">{awardIdx + 1}/{AWARDS.length}</span>
                <button
                  onClick={() => setAwardIdx(i => (i + 1) % AWARDS.length)}
                  className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-black/50 hover:border-gold hover:text-gold transition-colors duration-200"
                  aria-label="Próxima premiação"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Slide atual */}
          <div
            key={awardIdx}
            className="px-6 py-10 lg:py-14 rounded-[8px] bg-gradient-cream border border-gold/10 shadow-soft flex flex-col md:flex-row items-center gap-10 lg:gap-16"
            style={{ animation: "fadeIn 0.4s ease" }}
          >
            {/* Left: Fotos */}
            <div className="w-full md:w-5/12 flex flex-col gap-3 shrink-0 mx-auto md:mx-0">
              <p className="text-[9px] tracking-[0.25em] uppercase text-black/40 font-sans text-center md:text-left">
                {AWARDS[awardIdx].event}
              </p>
              <div className={`grid gap-2 sm:gap-3 w-full ${AWARDS[awardIdx].images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {AWARDS[awardIdx].images.map((src, i) => (
                  <div key={i} className="aspect-[3/4] rounded-[4px] overflow-hidden shadow-sm">
                    <img
                      src={src}
                      alt={AWARDS[awardIdx].event}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Texto */}
            <div className="w-full md:w-7/12 text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-2">
                {AWARDS[awardIdx].tag}
              </span>
              <h4 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-tight text-black leading-[1.1] mb-5">
                {AWARDS[awardIdx].title}
              </h4>
              <div className="space-y-4 text-black/70 text-sm lg:text-[15px] font-sans leading-relaxed min-h-[300px]">
                <p>
                  <TypewriterText text={AWARDS[awardIdx].description} trigger={awardIdx} speed={15} />
                </p>
                <p>
                  <TypewriterText text={AWARDS[awardIdx].detail} trigger={awardIdx} delay={AWARDS[awardIdx].description.length * 15 + 200} speed={15} />
                </p>
                {AWARDS[awardIdx].extraDetail && (
                  <p>
                    <TypewriterText 
                      text={AWARDS[awardIdx].extraDetail as string} 
                      trigger={awardIdx} 
                      delay={(AWARDS[awardIdx].description.length + AWARDS[awardIdx].detail.length) * 15 + 400} 
                      speed={15} 
                    />
                  </p>
                )}
              </div>

              {/* Dots indicator */}
              {AWARDS.length > 1 && (
                <div className="flex items-center gap-2 mt-8 justify-center md:justify-start">
                  {AWARDS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAwardIdx(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === awardIdx ? "bg-gold w-6" : "w-2 bg-black/20 hover:bg-black/40"
                      }`}
                      aria-label={`Ir para premiação ${i + 1}`}
                    />
                  ))}
                </div>
              )}
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
            className="relative w-full max-w-[320px] sm:max-w-[360px] rounded-[6px] overflow-hidden bg-black group"
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

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                aria-label={muted ? "Ativar som" : "Mutar"}
                className="
                  absolute bottom-4 right-4 z-10
                  flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-black/70 hover:bg-black/90
                  backdrop-blur-sm
                  border border-white/20
                  text-white
                  transition-all duration-300
                  hover:scale-105 active:scale-95
                  shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                "
              >
                {muted ? (
                  <>
                    <VolumeX size={16} />
                    <span className="text-[9px] font-bold tracking-widest uppercase">Ouvir</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={16} />
                    <span className="text-[9px] font-bold tracking-widest uppercase">Mudo</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
