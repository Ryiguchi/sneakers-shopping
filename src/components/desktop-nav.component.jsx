const DesktopNav = () => {
  return (
    <ul className="flex gap-12 items-center ">
      <li className="transition-all duration-300 cursor-pointer hover:border-b-2 hover:border-[#FF7E1B]  border-b-2 border-white h-full flex items-center">
        Collections
      </li>
      <li className="  transition-all duration-300 cursor-pointer hover:border-b-2 hover:border-[#FF7E1B]  border-b-2 border-white h-full flex items-center">
        Men
      </li>
      <li className="  transition-all duration-300 cursor-pointer hover:border-b-2 hover:border-[#FF7E1B]  border-b-2 border-white h-full flex items-center">
        Women
      </li>
      <li className="  transition-all duration-300 cursor-pointer hover:border-b-2 hover:border-[#FF7E1B]  border-b-2 border-white h-full flex items-center">
        About
      </li>
      <li className=" transition-all duration-300 cursor-pointer hover:border-b-2 hover:border-[#FF7E1B]  border-b-2 border-white h-full flex items-center">
        Contact
      </li>
    </ul>
  );
};

export default DesktopNav;
