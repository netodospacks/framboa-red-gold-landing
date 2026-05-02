import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useEffect } from "react";

const CartDrawer = () => {
  const {
    items,
    total,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "Olá! Gostaria de finalizar meu pedido:\n\n";
    items.forEach((item) => {
      message += `${item.quantity}x ${item.product.name} - R$ ${(
        item.product.priceValue * item.quantity
      ).toFixed(2)}\n`;
      
      if (item.entrada) {
        message += `   • Entrada: ${item.entrada.name}\n`;
      }
      if (item.sobremesa) {
        message += `   • Sobremesa: ${item.sobremesa.name}\n`;
      }
    });
    message += `\n*Total: ${formattedTotal}*\n\n`;
    message += "Endereço de entrega: ";

    const whatsappNumber = "5583999999999"; // TODO: Mudar para o número real do restaurante
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    
    window.open(url, "_blank");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-[100] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 animate-in slide-in-from-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Meu Pedido
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-muted-foreground">
              <ShoppingBag className="h-16 w-16 opacity-20" />
              <p className="text-center font-medium">
                Seu carrinho está vazio.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                Voltar ao Cardápio
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/50">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col">
                        <h3 className="font-bold leading-tight text-foreground line-clamp-2">
                          {item.product.name}
                        </h3>
                        {item.entrada && (
                          <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            Entrada: {item.entrada.name}
                          </span>
                        )}
                        {item.sobremesa && (
                          <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            Sobremesa: {item.sobremesa.name}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="p-1 shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 rounded-full border border-border/50 px-3 py-1 text-sm font-semibold shadow-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity - 1)
                          }
                          className="p-0.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity + 1)
                          }
                          className="p-0.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-bold text-primary">
                        R$ {(item.product.priceValue * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/50 bg-card px-6 py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-medium text-muted-foreground">
                Total
              </span>
              <span className="font-display text-2xl font-black text-foreground">
                {formattedTotal}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-lg font-bold text-primary-foreground shadow-card shadow-wine transition-smooth hover:scale-[1.02] active:scale-[0.98]"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
