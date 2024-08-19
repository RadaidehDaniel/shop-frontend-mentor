/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShopContext = createContext({
  cart: [],
  setCart: () => {},
});

export default function ShopContextProvidor({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(name, price, category, image) {
    setCart((prevCart) => {
      return [
        ...prevCart,
        {
          name: name,
          category: category,
          price: price,
          image: image,
          count: 1,
        },
      ];
    });
  }

  // How to increase the counter for an object
  function handleCountIncrement(nameArg) {
    setCart((prevCart) => {
      let itemObj = prevCart.find((item) => {
        return item.name === nameArg;
      });

      itemObj = { ...itemObj, count: itemObj.count + 1 };

      const filteredCart = prevCart.filter((item) => {
        return item.name !== nameArg;
      });

      return [...filteredCart, itemObj];
    });
  }

  function handleCountDecrement(nameArg) {
    setCart((prevCart) => {
      let itemObj = prevCart.find((item) => {
        return item.name === nameArg;
      });

      if (itemObj.count === 1) {
        return prevCart;
      }

      itemObj = { ...itemObj, count: itemObj.count - 1 };

      const filteredCart = prevCart.filter((item) => {
        return item.name !== nameArg;
      });

      return [...filteredCart, itemObj];
    });
  }

  function handleRemoveItem(nameArg) {
    setCart((prevCart) => {
      const filteredCart = prevCart.filter((item) => {
        return item.name !== nameArg;
      });

      return [...filteredCart];
    });
  }

  const ctxValue = {
    cart: cart,
    setCart: setCart,
    addToCart: handleAddToCart,
    increment: handleCountIncrement,
    decrement: handleCountDecrement,
    removeFromCart: handleRemoveItem,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
