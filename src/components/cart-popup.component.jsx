import { useContext } from "react";

import Button from "./button.component";

import { CartContext } from "../context/cart.context";
import CartItem from "./cart-item.component";

const CartPopup = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="absolute w-[360px] top-24 m-2 sm:m-0 sm:right-0 right-0   z-20  bg-white rounded-lg shadow-2xl ">
      <div className="pt-4 pb-6 pl-4 font-bold border-b">Cart</div>
      <div className="min-h-[200px]">
        {cartItems.length ? (
          <div className="p-6 flex flex-col gap-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <Button>Checkout</Button>
          </div>
        ) : (
          <span className=" flex items-center justify-center font-bold text-[#69707D] h-[200px]">
            Your cart is empty.
          </span>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
