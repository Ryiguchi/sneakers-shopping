const Button = ({ children, icon, callback }) => {
  return (
    <button
      onClick={callback}
      className="h-[56px] transition-all duration-300 flex items-center  justify-center gap-4 bg-[#FF7E1B] hover:opacity-75 text-[#fff] font-bold px-20 py-5 w-full rounded-lg"
    >
      {icon && <img src={icon} alt="Icon" />}
      <span className="">{children}</span>
    </button>
  );
};

export default Button;
