import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";

const Hero = () => {
  return (
    <section className="relative pt-2 pb-8 text-center">
      {/* Container principal para Capa + Logo (sem overflow hidden para a logo poder vazar) */}
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 mt-2">
        
        {/* Container da Imagem (com overflow hidden para cortar o zoom) */}
        <div className="relative h-[200px] md:h-[280px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-card">
          <img
            src={heroImage}
            alt="Capa Framboá"
            className="absolute inset-0 w-full h-full object-cover object-[15%_center] scale-110"
          />
          {/* Sombra para integrar suavemente com o fundo e dar contraste no topo */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20 pointer-events-none" />
        </div>
        
        {/* Logo (colocada em relação ao container principal, vazando a imagem tranquilamente) */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-white p-1.5 shadow-2xl ring-[6px] ring-white border border-accent/20 animate-float-up">
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