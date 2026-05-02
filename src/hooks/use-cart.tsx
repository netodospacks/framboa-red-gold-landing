import { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
  itemsCount: number;
  total: number;
  addToCart: (price: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (price: number) => {
    setItemsCount((prev) => prev + 1);
    setTotal((prev) => prev + price);
  };

  const clearCart = () => {
    setItemsCount(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ itemsCount, total, addToCart, clearCart }}>
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
