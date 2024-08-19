/* eslint-disable react/prop-types */

import style from "./card.module.css";
import cartImage from "../../assets/images/icon-add-to-cart.svg";
import { useContext, useState } from "react";
import { ShopContext } from "../../store/ShopContext.jsx";

export default function Card({ name, category, price, image }) {
  const cartCtx = useContext(ShopContext);
  const [isAdded, setIsAdded] = useState(false);

  let counter;

  cartCtx.cart.map((item) => {
    if (item.name === name) {
      counter = item.count;
    }
  });

  const addToCartBtn = (
    <button
      className={style["add-to-cart-button"]}
      onClick={() => {
        cartCtx.addToCart(name, price, category, image.thumbnail);
        setIsAdded(true);
      }}
    >
      <img src={cartImage} alt="" />
      <span>Add to Cart</span>
    </button>
  );

  const counterSection = (
    <div className={style["counter-container"]}>
      <button onClick={() => cartCtx.decrement(name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <p>{counter}</p>
      <button onClick={() => cartCtx.increment(name)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <article>
      <div className={style["card-top"]}>
        <img src={image.desktop} alt={name} />
        {isAdded ? counterSection : addToCartBtn}
      </div>

      <div className={style["card-bottom"]}>
        <p className={style["category"]}>{category}</p>
        <h2 className={style["title"]}>{name}</h2>
        <p className={style["price"]}>${price}</p>
      </div>
    </article>
  );
}
