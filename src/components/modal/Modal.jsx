import style from "./modal.module.css";
import confirmIcon from "../../assets/images/icon-order-confirmed.svg";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import ConsfirmItem from "../confirm-item/ConfirmItem";

const Modal = forwardRef(function Modal({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={style["modal-container"]}>
      <img src={confirmIcon} alt="" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div className={style["whatever-container"]}>
        <div className={style["items-container"]}>
          <ConsfirmItem />
          <ConsfirmItem />
          <ConsfirmItem />
        </div>
        <div className={style["total-container"]}>
          <p className={style["total"]}>Order Total</p>
          <p className={style["price"]}>$46.50</p>
        </div>
      </div>

      <button className={style["new-button"]}>Start New Order</button>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
