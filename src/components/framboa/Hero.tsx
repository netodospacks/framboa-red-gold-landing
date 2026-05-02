import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";
import { Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-card pb-4 shadow-sm border-b border-border/50 mb-2">
      {/* Imagem de Capa (Curta) */}
      <div className="h-28 md:h-40 w-full relative overflow-hidden">
        <img
          src={heroImage}
          alt="Capa Framboá"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative">
        {/* Logo sobreposta */}
        <div className="absolute -top-8 left-4 md:left-8">
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-card p-1 shadow-card ring-1 ring-border/50">
            <img
              src={logo}
              alt="Logo Restaurante Framboá"
              className="h-full w-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Informações da Loja */}
        <div className="pt-10 md:pt-14 flex flex-col gap-2">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Framboá
          </h1>
          {/* Barra de Status do Restaurante */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground md:text-sm">
            <div className="flex items-center gap-1.5 text-foreground/90">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Retirada e entrega</span>
            </div>
            
            <div className="h-1 w-1 rounded-full bg-border" />
            
            <div className="flex items-center gap-1.5 text-foreground/90">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>40-60 min</span>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;