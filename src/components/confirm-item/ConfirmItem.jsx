/* eslint-disable react/prop-types */
import style from "./confirmItem.module.css";

export default function ConsfirmItem({ name, count, price, img }) {
  return (
    <div className={style["item-container"]}>
      <div className={style["sec-container"]}>
        <img src={img} alt="" />
        <div>
          <p className={style["title"]}>{name}</p>
          <div className={style["tri-container"]}>
            <p className={style["count"]}>{count}x</p>
            <p className={style["price"]}>@ ${price}</p>
          </div>
        </div>
      </div>

      <p className={style["total"]}>${count * price}</p>
    </div>
  );
}
