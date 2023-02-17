import { useContext } from "react";

import trash from "../assets/trash.svg";
import { CartContext } from "../context/cart.context";

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useContext(CartContext);
  const { images, title, price, quantity } = item;

  const removeItem = () => {
    removeItemFromCart(item);
  };

  return (
    <div className=" flex gap-4">
      <img className="w-[50px]" src={images[0]} alt={title} />
      <div className="text-[#69707D]">
        <p>{title}</p>
        <div>
          <span>{`$${price.toFixed(2)}   x  ${quantity} `}</span>
          <span className=" font-bold text-black ml-1">
            ${`${(price * quantity).toFixed(2)}`}
          </span>
        </div>
      </div>
      <img
        onClick={removeItem}
        className="cursor-pointer"
        src={trash}
        alt="Trash Icon"
      />
    </div>
  );
};

export default CartItem;
