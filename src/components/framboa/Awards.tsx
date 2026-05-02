import { Award, Trophy, Store } from "lucide-react";

const cards = [
  {
    icon: Trophy,
    title: "Melhor restaurante a quilo do Brasil",
    sub: "Eleito em 2024",
    desc: "Reconhecimento nacional pelo padrão de qualidade e sabor inconfundível.",
  },
  {
    icon: Award,
    title: "Melhor restaurante da Paraíba",
    sub: "2024 e 2025",
    desc: "Bicampeão consecutivo na preferência do público paraibano.",
  },
  {
    icon: Store,
    title: "Entrega ou retirada no Manaíra Shopping",
    sub: "Unidade Exclusiva",
    desc: "Comodidade para receber em casa ou retirar rapidamente na nossa loja.",
  },
];

const Awards = () => {
  return (
    <section className="mt-8 md:mt-12 overflow-hidden py-4 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
      <div className="relative flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 pl-4 hover:[animation-play-state:paused]">
          {[...cards, ...cards].map((c, i) => (
            <article
              key={`${c.title}-${i}`}
              className="shrink-0 w-[260px] md:w-[300px] relative overflow-hidden rounded-[1.25rem] border border-border/50 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold mb-1">
                    {c.sub}
                  </div>
                  <h3 className="font-display text-sm font-bold text-foreground leading-snug">{c.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;