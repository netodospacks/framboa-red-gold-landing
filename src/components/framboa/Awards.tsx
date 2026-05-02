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
    <section className="container mt-12 md:mt-16">
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-[1.5rem] border border-accent/20 bg-primary p-6 text-primary-foreground shadow-card transition-smooth hover:-translate-y-1 md:p-7"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/15 transition-smooth group-hover:scale-150" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-gold" />
            <div className="relative flex items-start gap-4 md:gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{c.sub}</div>
                <h3 className="mt-1 font-display text-xl font-bold text-primary-foreground md:text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{c.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Awards;