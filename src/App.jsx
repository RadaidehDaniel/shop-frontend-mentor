import { useRef } from "react";
import Cart from "./components/cart/Cart";
import Model from "./components/modal/Modal";
import Shop from "./components/shop/Shop";
import ShopContextProvidor from "./store/ShopContext";

function App() {
  const modal = useRef();

  function handleModal() {
    modal.current.open();
  }

  return (
    <ShopContextProvidor>
      <Model ref={modal} />
      <Shop />
      <Cart />
    </ShopContextProvidor>
  );
}

export default App;
