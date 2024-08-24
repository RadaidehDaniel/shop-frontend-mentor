/* eslint-disable react/prop-types */

import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";
import treeImg from "../../assets/images/icon-carbon-neutral.svg";
import style from "./cart.module.css";
import CartItem from "../cart-item/CartItem";
import { useContext, useRef } from "react";
import { ShopContext } from "../../store/ShopContext";
import Modal from "../modal/Modal";

export default function Cart() {
  const cartCtx = useContext(ShopContext);
  const modal = useRef();
  let totalPrice = 0;

  cartCtx.cart.map((ele) => {
    return (totalPrice += ele.price * ele.count);
  });

  function handleModal() {
    modal.current.open();
  }

  const cartEmpty = (
    <div className={style["cart-empty"]}>
      <img src={emptyCartImg} alt="" />
      <p>Your added items will appear here</p>
    </div>
  );

  const cartFilled = (
    <div className={style["cart-filled"]}>
      <div className={style["items-container"]}>
        {cartCtx.cart.map((ele) => {
          return (
            <CartItem
              key={Math.random()}
              name={ele.name}
              count={ele.count}
              price={ele.price}
            />
          );
        })}
      </div>
      <div className={style["total-container"]}>
        <p className={style["total-text"]}>Order Total</p>
        <p className={style["total-number"]}>${totalPrice}</p>
      </div>
      <div className={style["carbon-neutral"]}>
        <img src={treeImg} alt="" />
        <span>
          This is a <b>carbon-neutral</b> delivery
        </span>
      </div>
      <button className={style["confirm-button"]} onClick={handleModal}>
        Confirm Order
      </button>
    </div>
  );

  return (
    <>
      <Modal ref={modal} />
      <aside>
        <p className={style["cart-count"]}>Your Cart ({cartCtx.cart.length})</p>
        {cartCtx.cart[0] === undefined ? cartEmpty : cartFilled}
      </aside>
    </>
  );
}
