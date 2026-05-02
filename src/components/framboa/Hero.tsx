import heroImage from "@/assets/framboa-hero.jpg";
import logo from "@/assets/framboa-logo.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container pt-6 md:pt-12">
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-card">
          <img
            src={heroImage}
            alt="Restaurante Framboá — ambiente acolhedor"
            width={1600}
            height={1100}
            className="h-[78vh] min-h-[520px] w-full object-cover md:h-[82vh]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, hsl(0 0% 0% / 0.35) 0%, hsl(0 0% 0% / 0.45) 50%, hsl(0 60% 6% / 0.88) 100%)" }}
          />

          {/* Logo selo centralizada */}
          <div className="absolute left-1/2 top-6 -translate-x-1/2 md:top-10">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-background shadow-card ring-4 ring-accent/60 md:h-36 md:w-36">
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20" />
              <img
                src={logo}
                alt="Logo Restaurante Framboá"
                className="relative z-10 h-20 w-20 object-contain md:h-28 md:w-28"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-end px-5 pb-10 text-center md:pb-16">
            <span className="animate-float-up mb-4 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-background/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-accent backdrop-blur-md md:text-xs">
              <span className="h-1 w-1 rounded-full bg-accent" />
              30 anos de história
              <span className="h-1 w-1 rounded-full bg-accent" />
            </span>
            <h1 className="animate-float-up font-display text-4xl font-bold leading-[1.05] text-primary-foreground drop-shadow-lg md:text-7xl lg:text-8xl">
              Restaurante <span className="text-gradient-gold">Framboá</span>
            </h1>
            <div className="gold-divider my-6 w-32" />
            <p className="animate-float-up max-w-xl font-display text-lg italic text-primary-foreground/95 md:text-2xl">
              "O sabor do mundo do jeito da gente"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;