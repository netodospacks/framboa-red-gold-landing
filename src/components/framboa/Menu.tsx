import { useState } from "react";
import { Plus, Users, AlertCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { menuData, menuTabs, Product } from "@/config/data";
import ProductModal from "./ProductModal";

const ProductCard = ({ p, onOpenModal, active, hasCombo }: { p: Product & { badge?: string }; onOpenModal: (p: Product) => void; active: string; hasCombo: boolean }) => {
  const isSevenPeople = active === "cardapio_7_pessoas";
  const whatsappLink = `https://wa.me/5583982309183?text=${encodeURIComponent(`Olá! Tenho interesse neste cardápio para 7 pessoas: ${p.name}`)}`;

  return (
    <article className="group flex flex-col md:flex-row gap-4 p-5 md:p-6 border-b border-border/40 bg-card hover:bg-secondary/10 transition-all duration-300 last:border-b-0 relative cursor-pointer" onClick={() => onOpenModal(p)}>
      {p.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm animate-pulse-subtle">
            {p.badge}
          </span>
        </div>
      )}
      
      <div className="flex flex-1 flex-col">
        <h3 className="font-display font-bold text-foreground text-lg md:text-xl leading-tight transition-colors group-hover:text-primary">{p.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed md:line-clamp-3">{p.desc}</p>
        
        {p.includedItems && (
          <div className="mt-3 flex flex-col gap-1">
            <span className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-wider">O que está incluso:</span>
            <ul className="text-[13px] text-muted-foreground leading-snug italic list-disc list-inside">
              {p.includedItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {isSevenPeople ? (
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
              <Users className="h-3.5 w-3.5" />
              Serve até 7 pessoas (≈760g por pessoa)
            </div>
            
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-accent drop-shadow-sm">
                  R$ {p.pricePerPerson?.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm font-bold text-accent/80 uppercase">por pessoa</span>
              </div>
              <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest mt-1">
                Toque para ver detalhes e montar
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(p);
                }}
                className="flex-1 bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-bold shadow-wine hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Quero esse cardápio
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 text-center border border-primary/20 bg-primary/5 text-primary rounded-full px-6 py-2.5 text-sm font-bold hover:bg-primary/10 transition-all duration-300 active:scale-95"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <>
            {active === "combos" ? (
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
                  <Users className="h-3.5 w-3.5" />
                  Serve até {p.serves} pessoas
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-black text-accent drop-shadow-sm">
                    R$ {p.pricePerPerson?.toFixed(2).replace('.', ',')} por pessoa
                  </span>
                  <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest">
                    Toque para ver detalhes e montar
                  </span>
                </div>
              </div>
            ) : (
              <div className="mt-4 flex flex-col gap-3">
                {p.requiredSizes && (
                  <div className="flex flex-col gap-3">
                    {p.requiredSizes.map((size) => (
                      <div key={size.id} className="flex flex-col gap-1 rounded-xl bg-secondary/30 p-3 border border-border/40">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-foreground">
                            {size.name} • Serve {size.serves} pessoas
                          </span>
                          {size.consumption && (
                            <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                              {size.consumption} por pessoa
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base font-black text-primary">
                            R$ {size.pricePerPerson?.toFixed(2).replace('.', ',')}
                          </span>
                          <span className="text-xs font-semibold text-muted-foreground">
                            por pessoa
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!p.requiredSizes && (
                  <span className="font-sans font-bold text-muted-foreground/80 text-base">
                    {p.price}
                  </span>
                )}
              </div>
            )}

            <div className="mt-auto pt-5 flex items-center justify-between">
              {active === "monte" && (
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/70">
                  {p.requiredSizes ? "Escolha o tamanho" : "Adicionar ao pedido"}
                </span>
              )}
              
              <button 
                disabled={active === "combos" && hasCombo}
                className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 active:scale-95 ${
                  active === "combos" && hasCombo
                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                    : "bg-primary text-primary-foreground shadow-wine hover:scale-105"
                }`}
                aria-label={`Ver ${p.name}`}
              >
                {active === "combos" ? (hasCombo ? "Já escolhido" : "Monte do seu jeito") : (
                  <>
                    <Plus className="h-4 w-4" />
                    Adicionar
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
      
      {(isSevenPeople || active === "combos") && (
        <div className={`relative shrink-0 overflow-hidden rounded-[1.25rem] shadow-md ring-1 ring-border/50 self-start md:self-center transition-all duration-500 ${
          isSevenPeople ? "h-40 w-full md:h-48 md:w-48 mt-4 md:mt-0" : "h-28 w-28 md:h-36 md:w-36"
        }`}>
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
  const [active, setActive] = useState<(typeof menuTabs)[number]["id"]>("cardapio_7_pessoas");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, hasCombo } = useCart();
  
  const list = active === "combos" 
    ? menuData.combos 
    : active === "cardapio_7_pessoas" 
    ? menuData.combosSetePessoas 
    : menuData.monteSeu;

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
                } ${t.id === "cardapio_7_pessoas" ? "animate-pulse-subtle ring-2 ring-primary/20" : ""}`}
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
          {active === "cardapio_7_pessoas" ? "CARDÁPIO 07 PESSOAS" : active === "combos" ? "CARDÁPIO 15 PESSOAS" : "PEDIDO AVULSO"}
        </h3>
        <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium italic">
          Ideal para reunir a família nesse Dia das Mães
        </p>
      </div>

      <div className="container px-0 mx-auto max-w-3xl bg-card rounded-t-xl md:rounded-t-2xl shadow-soft border border-border/40 overflow-hidden">
        {/* Alertas de Limite */}
        {active === "combos" || active === "cardapio_7_pessoas" ? (
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
                ⚠️ Disponível para até 18 pedidos
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
            <ProductCard key={p.id} p={p} onOpenModal={setSelectedProduct} active={active} hasCombo={hasCombo} />
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