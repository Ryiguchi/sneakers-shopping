import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
  clearCart: () => {},
});

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + itemToAdd.quantity }
        : cartItem
    );
  }

  return [...cartItems, itemToAdd];
};

const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemsToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    removeItemFromCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
