import { useEffect } from "react";
import Navbar from "@/components/halia/Navbar";
import Footer from "@/components/halia/Footer";

const PremiacaoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gold/30 selection:text-black font-sans">
      <Navbar />

      {/* Hero Section — Fundo com a Fachada da Loja */}
      <section className="relative h-[60vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/halia/historic_img3.png"
            alt="Restaurante Framboá"
            className="w-full h-full object-cover object-center opacity-60"
          />
          {/* Sombra escura pra dar leitura ao texto + Fundo Branco sutil na base */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20 text-center px-6 mt-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 reveal">
            <span className="block font-sans text-gold text-[10px] sm:text-xs md:text-sm tracking-[0.4em] font-bold uppercase mb-4 drop-shadow-lg">
              O Sabor Que Conquistou o Brasil
            </span>
            <h1 className="flex flex-col items-center gap-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              <span className="font-serif text-white text-3xl sm:text-5xl md:text-6xl font-medium tracking-wide">
                Melhor Restaurante
              </span>
              <span className="font-display text-gold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter">
                A Quilo 2024
              </span>
            </h1>
          </div>
          <p className="text-white/90 font-serif italic text-sm md:text-lg max-w-2xl mx-auto reveal reveal-delay-100 mb-8 drop-shadow-md">
            Reconhecimento de dedicação, tradição e amor pela gastronomia paraibana.
          </p>
          
          <img 
            src="/logo/framboa-logo.png" 
            alt="Logo Framboá" 
            className="w-24 md:w-36 object-contain reveal reveal-delay-200"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
          />
        </div>
      </section>

      {/* Conteúdo da Premiação */}
      <section className="py-20 md:py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 reveal">
            
            {/* Galeria de Fotos da Premiação */}
            <div className="w-full lg:w-5/12 flex flex-col gap-4 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-square md:aspect-[4/3] rounded-[4px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] group relative">
                  <img
                    src="/premia%C3%A7%C3%A3o/WhatsApp%20Image%202026-05-19%20at%2013.34.14.jpeg"
                    alt="Prato Campeão Menina Brejeira"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black/10 rounded-[4px] pointer-events-none" />
                </div>
                <div className="aspect-[3/4] md:aspect-[4/5] rounded-[4px] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] group relative">
                  <img
                    src="/premia%C3%A7%C3%A3o/WhatsApp%20Image%202026-05-27%20at%2014.32.24.jpeg"
                    alt="Prêmio O Quilo é Nosso"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black/10 rounded-[4px] pointer-events-none" />
                </div>
                <div className="aspect-[3/4] md:aspect-[4/5] rounded-[4px] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] group relative">
                  <img
                    src="/premia%C3%A7%C3%A3o/WhatsApp%20Image%202026-05-27%20at%2014.32.24(1).jpeg"
                    alt="Abrasel 2024"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black/10 rounded-[4px] pointer-events-none" />
                </div>
              </div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-black/40 font-sans text-center mt-2">
                Concurso "O Quilo é Nosso" · Abrasel 2024
              </p>
            </div>

            {/* Texto Descritivo */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold tracking-[0.25em] uppercase rounded-full mb-6">
                Eleito o Melhor do Brasil
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black uppercase tracking-tight leading-[0.95] mb-8">
                Menina Brejeira:<br/> o sabor que conquistou o Brasil
              </h2>
              
              <div className="space-y-6 text-black/70 text-sm md:text-base lg:text-lg font-serif leading-relaxed text-justify sm:text-left">
                <p>
                  Em 2024, o Framboá foi reconhecido como o <strong className="text-black">melhor restaurante a quilo do Brasil</strong> no concurso "O Quilo é Nosso", realizado pela Abrasel, um marco importante na nossa trajetória e um orgulho para a gastronomia paraibana.
                </p>
                <p>
                  O prato campeão, <strong className="text-black font-semibold italic">“Menina Brejeira”</strong>, assinado pelo Chef José Tavares, nasceu da valorização dos ingredientes locais e da busca por traduzir o sabor da Paraíba em uma criação que representa nossa essência: respeito ao produto, cuidado no preparo e amor pela cozinha.
                </p>
                <p>
                  A conquista reforça não apenas a qualidade do nosso trabalho, mas também a força da culinária regional quando é tratada com dedicação e sensibilidade. Mais do que um prêmio, esse reconhecimento simboliza uma história construída ao longo de décadas, feita de entrega diária, paixão pelo que fazemos e da confiança de cada cliente que faz parte dessa caminhada.
                </p>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                <div className="w-16 h-[2px] bg-gold" />
                <span className="font-display text-2xl uppercase tracking-widest text-black/90">
                  Framboá
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiacaoPage;
