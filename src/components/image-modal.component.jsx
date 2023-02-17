import x from "../assets/x.svg";
import ImgCarousel from "./img-carousel";

const ImageModal = ({ data, callback }) => {
  const { images } = data;

  return (
    <div className="absolute z-20 top-2/4 left-2/4  -translate-x-1/4 -translate-y-1/2 ">
      <div className="flex flex-col items-center gap-6 ">
        <ImgCarousel images={images} type="modal" />

        <div
          onClick={callback}
          className="transition-all duration-300 absolute -top-12 right-0 text-3xl text-white hover:text-[#FF7E1B] cursor-pointer "
          src={x}
          alt="X Icon"
        >
          x
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
