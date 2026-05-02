import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product, ProductOption } from "@/config/data";

export type CartItem = {
  cartItemId: string;
  product: Product;
  quantity: number;
  entrada?: ProductOption;
  sobremesa?: ProductOption;
};

type CartContextType = {
  items: CartItem[];
  itemsCount: number;
  total: number;
  addToCart: (product: Product, entrada?: ProductOption, sobremesa?: ProductOption) => void;
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
  const total = items.reduce((acc, item) => acc + item.product.priceValue * item.quantity, 0);

  const addToCart = (product: Product, entrada?: ProductOption, sobremesa?: ProductOption) => {
    const cartItemId = `${product.id}-${entrada?.id || "none"}-${sobremesa?.id || "none"}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { cartItemId, product, quantity: 1, entrada, sobremesa }];
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
    setItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity } : i
      )
    );
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
