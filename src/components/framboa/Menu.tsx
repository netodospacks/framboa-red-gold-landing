import { useState } from "react";
import { Plus, Users, AlertCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { menuData, menuTabs, Product } from "@/config/data";
import ProductModal from "./ProductModal";

const ProductCard = ({ p, onOpenModal, active, hasCombo }: { p: Product & { badge?: string }; onOpenModal: (p: Product) => void; active: string; hasCombo: boolean }) => {
  const isSevenPeople = active === "cardapio_7_pessoas";
  const whatsappLink = `https://wa.me/5583982309183?text=${encodeURIComponent(`Olá! Tenho interesse neste cardápio para 7 pessoas: ${p.name}`)}`;

  return (
    <article className="group flex flex-col gap-5 p-5 md:p-7 border-b border-border/40 bg-card hover:bg-secondary/5 transition-all duration-300 last:border-b-0 relative cursor-pointer" onClick={() => onOpenModal(p)}>
      {(isSevenPeople || active === "combos") && (
        <div className={`relative w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-border/30 transition-all duration-500 ${
          isSevenPeople ? "h-56 md:h-72" : "h-48 md:h-64"
        }`}>
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          {p.badge && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg animate-pulse-subtle">
                {p.badge}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-display font-bold text-foreground text-xl md:text-2xl leading-tight transition-colors group-hover:text-primary">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </div>
        
        {p.includedItems && (
          <div className="mt-4 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-wider">O que está incluso:</span>
            <ul className="text-[13px] text-muted-foreground leading-snug italic space-y-1">
              {p.includedItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {(isSevenPeople || active === "combos") ? (
          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider bg-accent/5 self-start px-3 py-1.5 rounded-full border border-accent/10">
              <Users className="h-3.5 w-3.5" />
              Serve até {isSevenPeople ? "07" : p.serves} pessoas
            </div>
            
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-accent drop-shadow-sm">
                  R$ {p.pricePerPerson?.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm font-bold text-accent/70 uppercase tracking-tight">por pessoa</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5">
                <div className="h-px w-4 bg-border" />
                Toque para ver detalhes e montar
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <button 
                disabled={active === "combos" && hasCombo}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(p);
                }}
                className={`flex-1 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-95 ${
                  active === "combos" && hasCombo
                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                    : "bg-gradient-primary text-primary-foreground shadow-card shadow-wine hover:scale-[1.02]"
                }`}
              >
                {active === "combos" && hasCombo ? "Já escolhido" : "Quero esse cardápio"}
              </button>
              <a 
                href={`https://wa.me/5583982309183?text=${encodeURIComponent(`Olá! Tenho interesse neste cardápio para ${isSevenPeople ? "7" : "15"} pessoas: ${p.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 text-center border border-primary/20 bg-primary/5 text-primary rounded-full px-6 py-3.5 text-sm font-bold hover:bg-primary/10 transition-all duration-300 active:scale-95"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-5 flex flex-col gap-3">
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

            <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/20 mt-6">
              {active === "monte" && (
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary/70">
                  {p.requiredSizes ? "Escolha o tamanho" : "Adicionar ao pedido"}
                </span>
              )}
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(p);
                }}
                className="flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-bold bg-gradient-primary text-primary-foreground shadow-wine hover:scale-[1.02] transition-all duration-300 active:scale-95"
                aria-label={`Ver ${p.name}`}
              >
                <Plus className="h-4 w-4" />
                Adicionar ao Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

const Menu = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, hasCombo, activeMenuTab, setActiveMenuTab } = useCart();
  
  const list = activeMenuTab === "combos" 
    ? menuData.combos 
    : activeMenuTab === "cardapio_7_pessoas" 
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
                onClick={() => setActiveMenuTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-smooth ${
                  activeMenuTab === t.id
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
          {activeMenuTab === "cardapio_7_pessoas" ? "CARDÁPIO 07 PESSOAS" : activeMenuTab === "combos" ? "CARDÁPIO 15 PESSOAS" : "PEDIDO AVULSO"}
        </h3>
        <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium italic">
          Ideal para reunir a família nesse Dia das Mães
        </p>
      </div>

      <div className="container px-0 mx-auto max-w-3xl bg-card rounded-t-xl md:rounded-t-2xl shadow-soft border border-border/40 overflow-hidden">
        {/* Alertas de Limite */}
        {activeMenuTab === "combos" || activeMenuTab === "cardapio_7_pessoas" ? (
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
            <ProductCard key={p.id} p={p} onOpenModal={setSelectedProduct} active={activeMenuTab} hasCombo={hasCombo} />
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