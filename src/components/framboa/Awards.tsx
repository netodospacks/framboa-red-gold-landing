import { Award, Trophy, Store } from "lucide-react";

const cards = [
  {
    icon: Trophy,
    title: "Campeão Nacional 2024",
    sub: "Abrasel — Brasil",
    desc: "Campeão Nacional 2024 e Melhor Restaurante a Quilo da Paraíba pela Abrasel.",
  },
  {
    icon: Award,
    title: "Melhor Restaurante a Quilo 2025",
    sub: "Abrasel — Paraíba",
    desc: "Eleito Melhor Restaurante a Quilo da Paraíba 2025 pela Abrasel.",
  },
  {
    icon: Store,
    title: "Manaíra Shopping",
    sub: "Entrega & Retirada",
    desc: "Faça seu pedido com entrega rápida ou retire no nosso ponto no Manaíra Shopping.",
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