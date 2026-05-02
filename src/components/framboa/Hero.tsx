import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";

const Hero = () => {
  return (
    <section className="relative pt-4 pb-8 text-center">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="relative mx-auto max-w-5xl">
          
          {/* Imagem Central com Zoom e Sombreamento Branco */}
          <div className="relative h-[280px] md:h-[400px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-card">
            <img
              src={heroImage}
              alt="Capa Framboá"
              className="absolute inset-0 w-full h-full object-cover scale-125 md:scale-110 object-[10%_center]"
            />
            {/* Sombra branca de baixo para cima */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90 pointer-events-none" />
            
            {/* Logo sobreposta na parte de baixo com moldura */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10 mb-4">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-white p-1 shadow-2xl ring-[6px] ring-white/80 border border-border/20 animate-float-up">
                <img
                  src={logo}
                  alt="Logo Restaurante Framboá"
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Textos Centralizados Abaixo */}
        <div className="mt-8 flex flex-col items-center gap-2">
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