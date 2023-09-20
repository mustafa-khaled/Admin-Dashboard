function Button({
  children,
  variation = "secondary",
  styles,
  disable,
  type = "button",
  onClick,
}) {
  return (
    <button
      disabled={disable}
      type={type}
      onClick={onClick}
      className={` ${styles} ${
        variation === "secondary"
          ? "bg-colorBrand  hover:bg-hoverBrand "
          : "bg-danger1 hover:bg-danger2"
      } text-textColor p-[10px] rounded-lg font-semibold `}>
      {children}
    </button>
  );
}

export default Button;
