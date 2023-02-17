import { useContext, useState } from "react";

import cartSmall from "../assets/cart-small.svg";
import { CartContext } from "../context/cart.context";
import Button from "./button.component";

const Card = ({ data }) => {
  const [count, setCount] = useState(0);

  const { addItemsToCart } = useContext(CartContext);

  const { brand, title, text, price, originalPrice } = data;

  const decrement = () => {
    if (count === 0) return;

    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const addToCart = () => {
    if (!count) return;

    const itemToAdd = { ...data, quantity: count };
    addItemsToCart(itemToAdd);
  };

  return (
    <div className="p-[24px] sm:p-0  sm:w-[445px]  flex flex-col justify-center">
      <p className="text-[#FF7E1B] uppercase font-bold tracking-widest mb-2 sm:mb-5">
        {brand}
      </p>
      <h1 className="leading-9 font-bold text-[32px] sm:text-4xl mb-4 sm:mb-12">
        {title}
      </h1>
      <p className="text-[15px] sm:text[16px] mb-6 sm:mb-8">{text}</p>

      <div className="flex items-center sm:items-start  sm:flex-col justify-between mb-8 sm:m-2">
        <div className="flex gap-4 items-center sm:mb-3">
          <span className="font-bold text-[28px] sm:text-3xl ">{`$${price.toFixed(
            2
          )}`}</span>
          <span className="p-3 rounded-md flex items-center justify-center  h-7 bg-[#FFEEE2] text-[#FF7E1B] font-bold">
            {`${Math.round((price / originalPrice) * 100)}%`}
          </span>
        </div>
        <p className="text-[#B6BCC8] line-through sm:mb-8">{`$${originalPrice.toFixed(
          2
        )}`}</p>
      </div>
      <div className="flex gap-4 items-center flex-col  sm:flex-row">
        <div className="h-14 sm:w-36 flex items-center justify-between gap-10 bg-[#F6F8FD] w-full px-4 rounded-lg">
          <span
            onClick={decrement}
            className="text-[#FF7E1B] font-bold text-2xl cursor-pointer"
          >
            -
          </span>
          <span className="font-bold">{count}</span>
          <span
            onClick={increment}
            className="text-[#FF7E1B] font-bold text-2xl cursor-pointer"
          >
            +
          </span>
        </div>

        <Button callback={addToCart} icon={cartSmall}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
