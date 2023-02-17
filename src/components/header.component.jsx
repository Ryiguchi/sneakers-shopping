import { useContext, useState } from "react";

import CartIcon from "../assets/cart.svg";
import CartDarkIcon from "../assets/cart-black.svg";
import ProfilePic from "../assets/dudes-head.svg";
import Logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";

import { CartContext } from "../context/cart.context";
import CartPopup from "./cart-popup.component";
import { ScreenSizeContext } from "../context/screen-size.context";
import DesktopNav from "./desktop-nav.component";
import MobileNav from "./mobile-nav.component";

const Header = () => {
  const { cartCount, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const { screenSize } = useContext(ScreenSizeContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {isMobileNavOpen && <MobileNav callback={closeMobileNav} />}
      <div className="flex px-6 justify-between h-20 sm:h-28 border-b sm:px-10 font-kumbh max-w-screen-xl relative mx-auto">
        <div
          className="flex gap-6 sm:gap-16 
      "
        >
          {screenSize < 900 && (
            <img
              className="w-[16px]"
              onClick={openMobileNav}
              src={burger}
              alt="Menu Icon"
            />
          )}
          <img className=" w-[137.5px]" src={Logo} alt="Logo" />
          {screenSize > 900 && <DesktopNav />}
        </div>
        <div className="  flex items-center gap-6 sm:gap-12">
          <div className="relative">
            {cartCount ? (
              <img
                className="cursor-pointer"
                onClick={openCart}
                src={CartDarkIcon}
                alt="Cart Icon"
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={openCart}
                src={CartIcon}
                alt="Cart Icon"
              />
            )}
            <div className="absolute bottom-3 left-3 text-xs px-2  rounded-lg bg-[#FF7E1B] text-white font-bold">
              {cartCount}
            </div>
          </div>
          {isCartOpen && <CartPopup />}

          <img
            className="w-[30px] sm:w-[54px] transition-all duration-300 border-2 border-white rounded-full hover:border-2 hover:border-[#FF7E1B] cursor-pointer"
            src={ProfilePic}
            alt="Profile Picture"
          />
        </div>
      </div>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="absolute top-0 left-0 w-screen h-screen z-10"
        ></div>
      )}
    </>
  );
};

export default Header;
