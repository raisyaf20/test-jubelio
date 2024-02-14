import { ReactNode, createContext, useEffect, useState } from "react";

export type CartContextTypes = {
  cart: DataProduct[];
};

export const Context = createContext<CartContextTypes | null>(null);

const CartContext = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return <Context.Provider value={{ cart }}>{children}</Context.Provider>;
};

export default CartContext;
