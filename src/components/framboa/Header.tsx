import { Menu, ShoppingCart } from "lucide-react";
import logo from "@/assets/framboa-logo.png";
import { useCart } from "@/hooks/use-cart";

const Header = () => {
  const { itemsCount } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50">
      <div className="container px-4 md:px-8 mx-auto flex h-16 items-center justify-between">
        {/* ESQUERDA: Logo circular pequena */}
        <div className="flex shrink-0 items-center">
          <div className="h-10 w-10 rounded-full bg-card shadow-sm ring-1 ring-border/50 overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Logo Framboá" className="h-8 w-8 object-contain" />
          </div>
        </div>

        {/* CENTRO: Nome e informações de entrega */}
        <div className="flex-1 px-3 text-center">
          <h1 className="font-display text-xl font-bold text-primary leading-tight md:text-2xl">
            Framboá
          </h1>
          <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 md:text-xs">
            Entrega e retirada no Manaíra Shopping
          </p>
        </div>

        {/* DIREITA: Ícones de carrinho e menu */}
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
          
          <button
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-smooth hover:bg-secondary/80 active:scale-95"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;