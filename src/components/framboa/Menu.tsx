import { useState } from "react";
import { ChevronRight, Flame } from "lucide-react";
import comboFamilia from "@/assets/combo-familia.jpg";
import comboEspecial from "@/assets/combo-especial.jpg";
import comboTradicional from "@/assets/combo-tradicional.jpg";

type Product = {
  id: string;
  name: string;
  price: string;
  desc: string;
  units: number;
  image: string;
};

const combos: Product[] = [
  {
    id: "1",
    name: "Combo Família Framboá",
    price: "R$ 189,90",
    desc: "Picanha grelhada, arroz, farofa especial, salada da casa e sobremesa para 4 pessoas.",
    units: 8,
    image: comboFamilia,
  },
  {
    id: "2",
    name: "Especial Salmão ao Risoto",
    price: "R$ 129,90",
    desc: "Salmão grelhado em crosta de ervas com risoto de limão siciliano e legumes salteados.",
    units: 12,
    image: comboEspecial,
  },
  {
    id: "3",
    name: "Tradição Brasileira",
    price: "R$ 89,90",
    desc: "Feijoada completa servida com arroz, couve refogada, farofa, laranja e torresmo crocante.",
    units: 5,
    image: comboTradicional,
  },
];

const monteSeu: Product[] = [
  {
    id: "m1",
    name: "Monte: Carne + 2 acompanhamentos",
    price: "R$ 79,90",
    desc: "Escolha seu corte, dois acompanhamentos da casa e uma bebida do nosso menu.",
    units: 15,
    image: comboFamilia,
  },
  {
    id: "m2",
    name: "Monte: Peixe + Risoto",
    price: "R$ 99,90",
    desc: "Selecione seu peixe favorito e combine com nossos risotos artesanais.",
    units: 9,
    image: comboEspecial,
  },
];

const tabs = [
  { id: "combos", label: "Combos Especiais" },
  { id: "monte", label: "Monte Seu Combo" },
] as const;

const ProductCard = ({ p }: { p: Product }) => {
  const low = p.units <= 6;
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-60 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-primary shadow-gold">
          {p.price}
        </div>
        {low && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-wine animate-pulse-soft">
            <Flame className="h-3 w-3" /> Últimas {p.units}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-primary">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className={`text-xs font-medium ${low ? "text-primary" : "text-muted-foreground"}`}>
            {p.units} {p.units === 1 ? "unidade restante" : "unidades restantes"}
          </span>
          <button className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:bg-primary/90 hover:gap-2">
            Ver opções <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

const Menu = () => {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("combos");
  const list = active === "combos" ? combos : monteSeu;

  return (
    <section className="container mt-20">
      <div className="text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-accent">Cardápio</span>
        <h2 className="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">
          Sabores que contam histórias
        </h2>
        <div className="gold-divider mx-auto mt-5 w-24" />
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-card p-1.5 shadow-soft">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-smooth md:px-7 ${
                active === t.id
                  ? "bg-gradient-primary text-primary-foreground shadow-wine"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Menu;