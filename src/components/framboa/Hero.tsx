import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";

const Hero = () => {
  return (
    <section className="relative pt-6 md:pt-10 pb-10 text-center">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="relative mx-auto max-w-5xl">
          {/* Logo sobreposta centralizada */}
          <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-10">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-card p-1 shadow-card ring-1 ring-border/50 animate-float-up">
              <img
                src={logo}
                alt="Logo Restaurante Framboá"
                className="h-full w-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Imagem Central */}
          <div className="h-64 md:h-[400px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-card mt-12 md:mt-16">
            <img
              src={heroImage}
              alt="Capa Framboá"
              className="w-full h-full object-cover transition-smooth hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-overlay opacity-40 pointer-events-none" />
          </div>
        </div>

        {/* Textos Centralizados Abaixo */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            RESTAURANTE FRAMBOÁ
          </h1>
          
          <div className="flex items-center gap-3 mt-1">
            <div className="h-px w-10 bg-accent/60" />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              36 ANOS DE HISTÓRIA
            </span>
            <div className="h-px w-10 bg-accent/60" />
          </div>
          
          <p className="mt-4 font-display text-xl md:text-2xl italic text-primary/90">
            "O sabor do mundo do jeito da gente"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;