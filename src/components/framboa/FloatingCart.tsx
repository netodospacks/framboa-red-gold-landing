import { useCart } from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";

const FloatingCart = () => {
  const { itemsCount, total, isCartOpen, setIsCartOpen } = useCart();

  if (itemsCount === 0 || isCartOpen) return null;

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-4 md:px-0 flex justify-center animate-in slide-in-from-bottom-10 fade-in duration-300">
      <button 
        onClick={() => setIsCartOpen(true)}
        className="flex w-full max-w-md items-center justify-between rounded-full bg-gradient-primary px-7 py-4 text-primary-foreground shadow-card shadow-wine transition-smooth hover:scale-[1.02] active:scale-[0.98]"
      >
        <div className="flex items-center gap-4">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-sm">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground shadow-sm">
              {itemsCount}
            </span>
          </div>
          <span className="font-semibold text-lg">Ver pedido</span>
        </div>
        <span className="font-bold text-xl tracking-wide text-gradient-gold drop-shadow-sm">{formattedTotal}</span>
      </button>
    </div>
  );
};

export default FloatingCart;
