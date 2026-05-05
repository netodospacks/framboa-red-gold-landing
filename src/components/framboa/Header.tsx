import { ShoppingCart, MoreHorizontal, X, ChevronRight } from "lucide-react";
import logo from "@/assets/framboa-logo.png";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { menuTabs } from "@/config/data";

const Header = () => {
  const { itemsCount, setActiveMenuTab, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveMenuTab(tabId);
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-border/50">
      <div className="container px-4 md:px-8 mx-auto flex h-20 items-center justify-between relative">
        {/* ESQUERDA: 3 pontos */}
        <div className="flex shrink-0 items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Opções"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-smooth active:scale-95 ${
              isMenuOpen ? "bg-primary text-primary-foreground" : "text-primary hover:bg-secondary/80"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MoreHorizontal className="h-6 w-6" />}
          </button>
        </div>

        {/* CENTRO: Logo no meio */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
          <img src={logo} alt="Logo Framboá" className="h-14 md:h-16 w-auto object-contain" />
        </div>

        {/* DIREITA: Carrinho */}
        <div className="flex shrink-0 items-center gap-1 md:gap-2">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Carrinho"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-primary transition-smooth hover:bg-secondary/80 active:scale-95"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemsCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground shadow-sm">
                {itemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute left-4 top-[calc(100%+8px)] w-64 bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-2 flex flex-col">
              {menuTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold text-foreground hover:bg-primary/5 hover:text-primary transition-colors text-left"
                >
                  {tab.label}
                  <ChevronRight className="h-4 w-4 opacity-30" />
                </button>
              ))}
            </div>
            <div className="bg-muted/30 p-3 border-t border-border/30">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">
                Selecione uma categoria
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;