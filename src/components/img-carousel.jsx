import { useState } from "react";

import caretLeft from "../assets/left.svg";
import caretRight from "../assets/right.svg";

const ImgCarousel = ({ images, type }) => {
  const [displayedImg, setDisplayedImg] = useState(0);

  const displayImage = (i) => {
    setDisplayedImg(i);
  };

  const displayPreviousImage = () => {
    const previousImage =
      displayedImg === 0 ? images.length - 1 : displayedImg - 1;

    setDisplayedImg(previousImage);
  };

  const displayNextImage = () => {
    const previousImage =
      displayedImg === images.length - 1 ? 0 : displayedImg + 1;

    setDisplayedImg(previousImage);
  };

  return (
    <div className=" sm:w-[550px] flex flex-col sm:gap-8 items-center">
      <div className="w-screen sm:w-[100%] relative">
        <img className=" w-full" src={images[displayedImg]} alt="Shoes" />
        <img
          onClick={displayPreviousImage}
          src={caretLeft}
          alt="caret"
          className={`absolute top-[50%] -translate-y-1/2 ${
            type === "mobile" ? "left-10" : "left-0"
          }  -translate-x-2/4 bg-white p-3 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:text-[#FF7E1B]`}
        />
        <img
          onClick={displayNextImage}
          src={caretRight}
          alt="caret"
          className={`absolute top-[50%] -translate-y-1/2 ${
            type === "mobile" ? "right-10" : "right-0"
          }  right-0 translate-x-2/4 bg-white p-3 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:text-[#FF7E1B]`}
        />
      </div>
      <div className="flex gap-8">
        {type === "modal" &&
          images.map((image, i) => (
            <div
              key={i}
              onClick={() => displayImage(i)}
              className=" w-[88px]> bg-white rounded-xl"
            >
              <img
                className={`transition-all duration-300 w-[88px] cursor-pointer hover:opacity-50 ${
                  type === "mobile" ? "" : "rounded-xl"
                }`}
                key={i}
                src={image}
                alt="Shoes"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImgCarousel;
