import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product, ProductOption, ProductSizeOption } from "@/config/data";
import { toast } from "sonner";

export type CartItem = {
  cartItemId: string;
  product: Product;
  quantity: number;
  entrada?: ProductOption;
  sobremesa?: ProductOption;
  tamanho?: ProductSizeOption;
};

type CartContextType = {
  items: CartItem[];
  itemsCount: number;
  total: number;
  depositTotal: number;
  hasCombo: boolean;
  addToCart: (product: Product, entrada?: ProductOption, sobremesa?: ProductOption, tamanho?: ProductSizeOption) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Carregar do localStorage na inicialização
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("@framboa:cart");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse cart", e);
        }
      }
    }
    return [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Salvar no localStorage sempre que os itens mudarem
  useEffect(() => {
    localStorage.setItem("@framboa:cart", JSON.stringify(items));
  }, [items]);

  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => {
    const itemPrice = item.tamanho ? item.tamanho.priceValue : item.product.priceValue;
    return acc + itemPrice * item.quantity;
  }, 0);

  const depositTotal = items.reduce((acc, item) => {
    return acc + (item.product.deposit || 0) * item.quantity;
  }, 0);

  const hasCombo = items.some((item) => !!item.product.serves);

  const addToCart = (product: Product, entrada?: ProductOption, sobremesa?: ProductOption, tamanho?: ProductSizeOption) => {
    const cartItemId = `${product.id}-${entrada?.id || "none"}-${sobremesa?.id || "none"}-${tamanho?.id || "none"}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      
      // Regra: Apenas 1 combo por pedido
      const isNewCombo = !!product.serves;
      const alreadyHasCombo = prev.some((i) => !!i.product.serves);

      if (isNewCombo && alreadyHasCombo) {
        toast.error("Você só pode escolher 1 cardápio por pedido", {
          description: "Remova o cardápio atual para escolher outro.",
          duration: 4000,
        });
        return prev;
      }

      // Limite de 2 unidades por PRODUTO (independente do tamanho) para avulsos
      const totalProductQuantity = prev
        .filter((i) => i.product.id === product.id)
        .reduce((acc, i) => acc + i.quantity, 0);

      if (product.requiredSizes && totalProductQuantity >= 2) {
        toast.error("Limite de 2 unidades por item atingido", {
          description: `Você já possui 2 unidades de "${product.name}" no carrinho.`,
          duration: 3000,
        });
        return prev;
      }

      if (existing) {
        toast.success(`Mais um ${product.name} adicionado!`);
        return prev.map((i) =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      toast.success(`${product.name} adicionado ao carrinho!`);
      return [...prev, { cartItemId, product, quantity: 1, entrada, sobremesa, tamanho }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) => {
      const itemToUpdate = prev.find((i) => i.cartItemId === cartItemId);
      if (!itemToUpdate) return prev;

      // Se for item avulso, verificar o total do produto
      if (itemToUpdate.product.requiredSizes) {
        const otherItemsSameProduct = prev.filter(
          (i) => i.product.id === itemToUpdate.product.id && i.cartItemId !== cartItemId
        );
        const otherQuantity = otherItemsSameProduct.reduce((acc, i) => acc + i.quantity, 0);
        
        if (otherQuantity + quantity > 2) {
          toast.warning(`Limite de 2 unidades para ${itemToUpdate.product.name} atingido`);
          const allowedQuantity = 2 - otherQuantity;
          if (allowedQuantity <= 0) return prev;
          
          return prev.map((i) =>
            i.cartItemId === cartItemId ? { ...i, quantity: allowedQuantity } : i
          );
        }
      }

      return prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity } : i
      );
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemsCount,
        total,
        depositTotal,
        hasCombo,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
