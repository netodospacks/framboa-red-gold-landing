import heroImage from "@/assets/hero-family-original.jpg";
import logo from "@/assets/framboa-logo.png";

const Hero = () => {
  return (
    <section className="relative pt-2 pb-8 text-center">
      {/* Container principal para Capa + Logo (sem overflow hidden para a logo poder vazar) */}
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 mt-2">
        
        {/* Container da Imagem (com overflow hidden para cortar o zoom) */}
        <div className="relative h-[280px] md:h-[420px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-card">
          <img
            src={heroImage}
            alt="Capa Framboá"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Sombra para integrar suavemente com o fundo e dar contraste no topo */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/10 pointer-events-none" />
        </div>
        
        {/* Logo (colocada em relação ao container principal, vazando a imagem tranquilamente) */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-white p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-[6px] ring-white border border-accent/20 animate-float-up">
            <img
              src={logo}
              alt="Logo Restaurante Framboá"
              className="h-full w-full object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Textos Centralizados (bem distantes da logo agora) */}
      <div className="container px-4 md:px-8 mx-auto">
        <div className="mt-16 md:mt-20 flex flex-col items-center gap-2">
          <h1 className="font-display text-2xl md:text-4xl font-bold text-primary tracking-tight drop-shadow-sm">
            RESTAURANTE FRAMBOÁ
          </h1>
          
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
              36 ANOS DE HISTÓRIA
            </span>
            <div className="h-px w-8 bg-accent/60" />
          </div>
          
          <p className="mt-2 font-display text-lg md:text-xl italic text-primary/80">
            "O sabor do mundo do jeito da gente"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;