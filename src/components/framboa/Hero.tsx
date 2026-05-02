import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container pt-8 md:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] shadow-card">
          <img
            src={heroImage}
            alt="Família reunida em um almoço feliz no Restaurante Framboá"
            width={1600}
            height={1100}
            className="h-[70vh] min-h-[480px] w-full object-cover md:h-[78vh]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, hsl(0 0% 0% / 0.15) 0%, hsl(0 0% 0% / 0.25) 45%, hsl(0 60% 8% / 0.85) 100%)" }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center md:pb-16">
            <span className="animate-float-up mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent backdrop-blur-md">
              <span className="h-1 w-1 rounded-full bg-accent" />
              30 anos de história
              <span className="h-1 w-1 rounded-full bg-accent" />
            </span>
            <h1 className="animate-float-up font-display text-5xl font-bold leading-[1.05] text-primary-foreground drop-shadow-md md:text-7xl lg:text-8xl">
              Restaurante <span className="text-gradient-gold">Framboá</span>
            </h1>
            <div className="gold-divider my-6 w-32" />
            <p className="animate-float-up max-w-xl font-display text-xl italic text-primary-foreground/95 md:text-2xl">
              "O sabor do mundo do jeito da gente"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;