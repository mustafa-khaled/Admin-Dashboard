function Button({ children, styles, disable, type = "button" }) {
  return (
    <button
      disabled={disable}
      type={type}
      className={` ${styles} bg-colorBrand text-textColor p-[10px] rounded-lg font-semibold hover:bg-hoverBrand ${
        disable ? "bg-hoverBrand" : ""
      }`}>
      {children}
    </button>
  );
}

export default Button;
