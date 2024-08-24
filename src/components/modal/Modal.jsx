import style from "./modal.module.css";
import confirmIcon from "../../assets/images/icon-order-confirmed.svg";
import { useRef, forwardRef, useImperativeHandle, useContext } from "react";
import { createPortal } from "react-dom";
import ConsfirmItem from "../confirm-item/ConfirmItem";
import { ShopContext } from "../../store/ShopContext";

const Modal = forwardRef(function Modal({}, ref) {
  const dialog = useRef();
  const cartCtx = useContext(ShopContext);

  let totalPrice = 0;

  cartCtx.cart.map((ele) => {
    return (totalPrice += ele.price * ele.count);
  });

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
          {cartCtx.cart.map((item) => {
            return (
              <ConsfirmItem
                key={Math.random()}
                name={item.name}
                count={item.count}
                price={item.price}
                img={item.image}
              />
            );
          })}
        </div>
        <div className={style["total-container"]}>
          <p className={style["total"]}>Order Total</p>
          <p className={style["price"]}>${totalPrice}</p>
        </div>
      </div>

      <button
        className={style["new-button"]}
        onClick={() => {
          cartCtx.reset();
          dialog.current.close();
        }}
      >
        Start New Order
      </button>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
