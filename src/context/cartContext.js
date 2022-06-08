import { createContext, useState } from "react";

export const CartCtx = createContext();

const CartContextProvider = ({ children }) => {
  const [cartShow, setCartShow] = useState(false);
  const [cart, setCart] = useState({
    restId: "",
    cartItems: [],
  });
  const addToCart = (payload) => setCart((prev) => ({ ...prev, ...payload }));
  const showCart = () => setCartShow(true);
  const hideCart = () => setCartShow(false);
  const clearCart = () =>
    setCart({
      restId: "",
      cartItems: [],
    });

  return (
    <CartCtx.Provider
      value={{
        cartShow,
        showCart,
        hideCart,
        addToCart,
        cart,
        clearCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartContextProvider;
