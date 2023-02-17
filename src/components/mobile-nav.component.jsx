import x from "../assets/nav-x.svg";

const MobileNav = ({ callback }) => {
  return (
    <>
      <div className="absolute top-0 left-0 z-20 bg-white h-[150vh] w-[250px] py-24 px-8">
        <img
          onClick={callback}
          className="absolute top-6 left-6"
          src={x}
          alt="x icon"
        />
        <ul className="flex flex-col gap-8 text-[18px] font-bold ">
          <li className=" cursor-pointer">Collections</li>
          <li className="  cursor-pointer">Men</li>
          <li className="  cursor-pointer">Women</li>
          <li className="  cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div
        onClick={callback}
        className="absolute top-0 left-0 z-10 w-[150vw] h-[150vh] bg-black opacity-80"
      ></div>
    </>
  );
};

export default MobileNav;
