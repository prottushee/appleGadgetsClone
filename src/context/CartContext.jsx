import React, { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
// Create the context
export const CartContext = createContext();

// CartProvider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total item count
  const getTotalItemCount = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
