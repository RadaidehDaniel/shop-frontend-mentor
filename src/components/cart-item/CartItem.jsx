/* eslint-disable react/prop-types */

import { ShopContext } from "../../store/ShopContext";
import style from "./cartItem.module.css";
import { useContext } from "react";

export default function CartItem({ name, count, price }) {
  const cartCtx = useContext(ShopContext);

  return (
    <div className={style["item-container"]}>
      <div>
        <p className={style["item-title"]}>{name}</p>
        <div className={style["info-container"]}>
          <p className={style["item-count"]}>{count}x</p>
          <p className={style["item-price"]}>@ ${price}</p>
          <p className={style["item-total"]}>${price * count}</p>
        </div>
      </div>
      <button
        className={style["remove-button"]}
        onClick={() => cartCtx.removeFromCart(name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}
