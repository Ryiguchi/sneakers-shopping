import Header from "./components/header.component";
import Card from "./components/card.component";

import { productData } from "./data/data";
import ProductImage from "./components/product-image.component";
import { useContext, useEffect } from "react";
import { ScreenSizeContext } from "./context/screen-size.context";
import ImgCarousel from "./components/img-carousel";

function App() {
  const { setScreenSize, screenSize } = useContext(ScreenSizeContext);

  useEffect(() => {
    setScreenSize(window.screen.width);
    window.addEventListener("resize", () => {
      setScreenSize(window.screen.width);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col w-screen sm:flex-row sm:gap-28 font-kumbh sm:my-20 justify-center mx-auto">
        {screenSize > 640 ? (
          <ProductImage data={productData} />
        ) : (
          <ImgCarousel type="mobile" images={productData.images} />
        )}
        <Card data={productData} />
      </div>
    </>
  );
}

export default App;
