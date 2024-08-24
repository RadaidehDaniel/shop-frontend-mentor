import { useRef } from "react";
import Cart from "./components/cart/Cart";
import Model from "./components/modal/Modal";
import Shop from "./components/shop/Shop";
import ShopContextProvidor from "./store/ShopContext";

function App() {
  return (
    <ShopContextProvidor>
      <Shop />
      <Cart />
    </ShopContextProvidor>
  );
}

export default App;
