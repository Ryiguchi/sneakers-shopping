import { useContext, useState } from "react";
import { ScreenSizeContext } from "../context/screen-size.context";
import ImageModal from "./image-modal.component";

const ProductImage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { screenSize } = useContext(ScreenSizeContext);

  return (
    <div className="max-w-[445px] flex flex-col gap-10 sm:gap-8 h-fit ">
      <div className="w-screen h-[300px] sm:h-full mb-8 sm:mb-0 cursor-pointer max-w-[445px]">
        <img
          className="w-full object-contain"
          onClick={() => setIsModalOpen(true)}
          src={data.largeImage}
          alt="Sneakers"
        />
      </div>
      <div className="flex justify-between ">
        {data.images.map((image, i) => (
          <img
            onClick={() => setIsModalOpen(true)}
            className="w-[88px] transition-all duration-300 hover:opacity-30 cursor-pointer rounded-xl"
            src={image}
            alt="Sneakers"
            key={i}
          />
        ))}
      </div>
      {isModalOpen && (
        <>
          <ImageModal callback={() => setIsModalOpen(false)} data={data} />

          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-80"
          ></div>
        </>
      )}
    </div>
  );
};

export default ProductImage;
