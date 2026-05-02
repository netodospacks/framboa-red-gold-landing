import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";

const Hero = () => {
  return (
    <section className="relative pt-4 pb-8 text-center">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="relative mx-auto max-w-5xl">
          
          {/* Imagem Central com Zoom e Sombreamento Branco */}
          <div className="relative h-[220px] md:h-[300px] w-full rounded-[1.5rem] md:rounded-[2.5rem] shadow-card mt-4">
            <img
              src={heroImage}
              alt="Capa Framboá"
              className="absolute inset-0 w-full h-full object-cover scale-[1.35] md:scale-125 object-[20%_center] rounded-[1.5rem] md:rounded-[2.5rem]"
            />
            {/* Sombra branca de baixo para cima mais forte */}
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-t from-white via-white/40 to-transparent opacity-90 pointer-events-none" />
            
            {/* Logo sobreposta na parte de baixo com moldura */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10">
              <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-white p-2 shadow-2xl ring-4 ring-white border-[3px] border-accent/20 animate-float-up">
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