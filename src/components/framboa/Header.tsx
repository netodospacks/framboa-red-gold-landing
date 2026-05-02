import { ShoppingCart, MoreHorizontal } from "lucide-react";
import logo from "@/assets/framboa-logo.png";
import { useCart } from "@/hooks/use-cart";

const Header = () => {
  const { itemsCount } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-border/50">
      <div className="container px-4 md:px-8 mx-auto flex h-16 items-center justify-between">
        {/* ESQUERDA: 3 pontos */}
        <div className="flex shrink-0 items-center">
          <button
            aria-label="Opções"
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-smooth hover:bg-secondary/80 active:scale-95"
          >
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>

        {/* CENTRO: Logo no meio */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <img src={logo} alt="Logo Framboá" className="h-10 w-10 object-contain" />
        </div>

        {/* DIREITA: Carrinho */}
        <div className="flex shrink-0 items-center gap-1 md:gap-2">
          <button
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
      </div>
    </header>
  );
};

export default Header;