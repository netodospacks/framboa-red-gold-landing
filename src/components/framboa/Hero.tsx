import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";
import { Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative px-2 pt-3 md:px-0 md:pt-6">
      <div className="container px-0 md:px-8">
        
        {/* Barra de Status do Restaurante */}
        <div className="mx-auto mb-3 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm ring-1 ring-border/50 md:text-sm">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>0.8 km</span>
          </div>
          
          <div className="h-1 w-1 rounded-full bg-border" />
          
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>40-50 min</span>
          </div>

          <div className="h-1 w-1 rounded-full bg-border" />

          <div className="flex items-center gap-1.5 font-semibold text-whatsapp">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp"></span>
            </span>
            Aberto agora
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-card">
          <img
            src={heroImage}
            alt="Restaurante Framboá — ambiente acolhedor"
            width={1600}
            height={600}
            className="h-64 w-full object-cover md:h-80"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, hsl(0 0% 0% / 0.1) 0%, hsl(0 60% 6% / 0.6) 100%)" }}
          />

          {/* Logo selo centralizada */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-background shadow-card ring-4 ring-accent/60 md:h-36 md:w-36 animate-float-up">
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20" />
              <img
                src={logo}
                alt="Logo Restaurante Framboá"
                className="relative z-10 h-20 w-20 object-contain md:h-28 md:w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;