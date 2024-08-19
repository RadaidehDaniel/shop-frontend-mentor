import Card from "../card/Card";
import style from "./shop.module.css";
import shopData from "../../data.json";

export default function Shop() {
  return (
    <main>
      <h1>Desserts</h1>
      <div className={style["cards-container"]}>
        {shopData.map((item) => {
          return (
            <Card
              key={Math.random()}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </main>
  );
}
