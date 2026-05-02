import { useState } from "react";
import { Plus, Users, AlertCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { menuData, menuTabs, Product } from "@/config/data";
import ProductModal from "./ProductModal";

const ProductCard = ({ p, onOpenModal, active }: { p: Product; onOpenModal: (p: Product) => void; active: string }) => {
  return (
    <article className="group flex gap-4 p-5 md:p-6 border-b border-border/40 bg-card hover:bg-secondary/10 transition-all duration-300 last:border-b-0 cursor-pointer" onClick={() => onOpenModal(p)}>
      <div className="flex flex-1 flex-col">
        <h3 className="font-display font-bold text-foreground text-lg md:text-xl leading-tight transition-colors group-hover:text-primary">{p.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed md:line-clamp-3">{p.desc}</p>
        
        {p.serves && (
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Users className="h-4 w-4" />
            Serve {p.serves} pessoas
          </div>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-display font-black text-primary text-2xl md:text-3xl tracking-tight drop-shadow-sm">
            {p.price}
          </span>
          <button 
            className="flex items-center gap-1.5 rounded-full bg-primary/5 border border-primary/20 px-5 py-2 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-wine hover:border-transparent active:scale-95"
            aria-label={`Ver ${p.name}`}
          >
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        </div>
      </div>
      
      {active !== "monte" && (
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.25rem] md:h-36 md:w-36 shadow-md ring-1 ring-border/50">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
    </article>
  );
};

const Menu = () => {
  const [active, setActive] = useState<(typeof menuTabs)[number]["id"]>("combos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  
  const list = active === "combos" ? menuData.combos : menuData.monteSeu;

  return (
    <section id="cardapio" className="mt-4 pb-8">
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-2.5 shadow-sm">
        <div className="container px-0 mx-auto max-w-3xl overflow-x-auto no-scrollbar">
          <div className="flex gap-3 min-w-max pb-1">
            {menuTabs.map((t) => (
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

      <div className="container px-4 md:px-0 mx-auto max-w-3xl mt-8 mb-6 text-center">
        <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Seleção Exclusiva
        </h2>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mt-1">
          {active === "combos" ? "CARDÁPIOS Especiais" : "MONTE SEU Cardápio"}
        </h3>
      </div>

      <div className="container px-0 mx-auto max-w-3xl bg-card rounded-t-xl md:rounded-t-2xl shadow-soft border border-border/40 overflow-hidden">
        {/* Alertas de Limite */}
        {active === "combos" ? (
          <div className="bg-red-50 border-b border-red-100 px-5 py-3.5 flex items-center gap-3 animate-pulse-subtle">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <AlertCircle className="h-5 w-5" />
            </div>
            <p className="text-sm font-bold text-red-800">
              ⚠️ Edição limitada: apenas 10 pedidos disponíveis
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="bg-amber-50 border-b border-amber-100 px-5 py-3.5 flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <AlertCircle className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-amber-900">
                ⚠️ Disponível para até 28 pedidos
              </p>
            </div>
            <div className="bg-white/50 px-5 py-2 border-b border-border/30">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Limite de até 2 unidades por item
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} onOpenModal={setSelectedProduct} active={active} />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </section>
  );
};

export default Menu;