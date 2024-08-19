import style from "./confirmItem.module.css";
import someImg from "../../assets/images/image-baklava-thumbnail.jpg";

export default function ConsfirmItem() {
  return (
    <div className={style["item-container"]}>
      <div className={style["sec-container"]}>
        <img src={someImg} alt="" />
        <div>
          <p className={style["title"]}>title</p>
          <div className={style["tri-container"]}>
            <p className={style["count"]}>1x</p>
            <p className={style["price"]}>@ $7.50</p>
          </div>
        </div>
      </div>

      <p className={style["total"]}>$5.50</p>
    </div>
  );
}
