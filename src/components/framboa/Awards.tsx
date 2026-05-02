import { Award, Trophy } from "lucide-react";

const cards = [
  {
    icon: Trophy,
    title: "Melhor Restaurante 2024",
    sub: "Prêmio Sabor do Ano",
    desc: "Eleito pelo terceiro ano consecutivo o melhor da cidade pela crítica especializada.",
  },
  {
    icon: Award,
    title: "Excelência em Atendimento",
    sub: "TripAdvisor Travelers' Choice",
    desc: "Top 1% dos restaurantes do mundo com base em avaliações reais dos nossos clientes.",
  },
];

const Awards = () => {
  return (
    <section className="container mt-16">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 transition-smooth group-hover:scale-150" />
            <div className="relative flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-accent">{c.sub}</div>
                <h3 className="mt-1 font-display text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Awards;