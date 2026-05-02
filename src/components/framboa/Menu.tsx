import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import comboFamilia from "@/assets/combo-familia.jpg";
import comboEspecial from "@/assets/combo-especial.jpg";
import comboTradicional from "@/assets/combo-tradicional.jpg";

type Product = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  desc: string;
  image: string;
};

const combos: Product[] = [
  {
    id: "1",
    name: "Combo Família Framboá",
    price: "R$ 189,90",
    priceValue: 189.90,
    desc: "Picanha grelhada, arroz, farofa especial, salada da casa e sobremesa para 4 pessoas.",
    image: comboFamilia,
  },
  {
    id: "2",
    name: "Especial Salmão ao Risoto",
    price: "R$ 129,90",
    priceValue: 129.90,
    desc: "Salmão grelhado em crosta de ervas com risoto de limão siciliano e legumes salteados.",
    image: comboEspecial,
  },
  {
    id: "3",
    name: "Tradição Brasileira",
    price: "R$ 89,90",
    priceValue: 89.90,
    desc: "Feijoada completa servida com arroz, couve refogada, farofa, laranja e torresmo crocante.",
    image: comboTradicional,
  },
  {
    id: "4",
    name: "Combo Dia das Mães",
    price: "R$ 219,90",
    priceValue: 219.90,
    desc: "Menu especial para 2 pessoas: entrada, prato principal à escolha, sobremesa e espumante.",
    image: comboEspecial,
  },
];

const monteSeu: Product[] = [
  {
    id: "m1",
    name: "Monte: Carne + 2 acompanhamentos",
    price: "R$ 79,90",
    priceValue: 79.90,
    desc: "Escolha seu corte, dois acompanhamentos da casa e uma bebida do nosso menu.",
    image: comboFamilia,
  },
  {
    id: "m2",
    name: "Monte: Peixe + Risoto",
    price: "R$ 99,90",
    priceValue: 99.90,
    desc: "Selecione seu peixe favorito e combine com nossos risotos artesanais.",
    image: comboEspecial,
  },
];

const tabs = [
  { id: "combos", label: "CARDÁPIO ESPECIAL" },
  { id: "monte", label: "MONTE SEU CARDÁPIO" },
] as const;

const ProductCard = ({ p }: { p: Product }) => {
  const { addToCart } = useCart();
  
  return (
    <article className="flex gap-4 p-5 md:p-6 border-b border-border/40 bg-card hover:bg-secondary/20 transition-colors last:border-b-0">
      <div className="flex flex-1 flex-col">
        <h3 className="font-display font-bold text-foreground text-lg md:text-xl leading-tight text-primary-foreground/90">{p.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-snug md:line-clamp-3">{p.desc}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-bold text-primary text-lg md:text-xl drop-shadow-sm">{p.price}</span>
          <button 
            onClick={() => addToCart(p.priceValue)}
            className="flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground hover:shadow-wine active:scale-95"
            aria-label={`Adicionar ${p.name}`}
          >
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        </div>
      </div>
      
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-32 shadow-soft ring-1 ring-border/50">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth hover:scale-105"
        />
      </div>
    </article>
  );
};

const Menu = () => {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("combos");
  const list = active === "combos" ? combos : monteSeu;

  return (
    <section id="cardapio" className="mt-4 pb-8">
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-2.5 shadow-sm">
        <div className="container px-0 mx-auto max-w-3xl overflow-x-auto no-scrollbar">
          <div className="flex gap-3 min-w-max pb-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-smooth ${
                  active === t.id
                    ? "bg-primary text-primary-foreground shadow-wine"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-0 mx-auto max-w-3xl mt-8 mb-6">
        <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Seleção Exclusiva
        </h2>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mt-1">
          CARDÁPIOS Especiais
        </h3>
      </div>

      <div className="container px-0 mx-auto max-w-3xl bg-card rounded-t-xl md:rounded-t-2xl shadow-soft border border-border/40 overflow-hidden">
        <div className="flex flex-col">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;