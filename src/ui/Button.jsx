function Button({ children, styles }) {
  return (
    <button
      className={` ${styles} bg-colorBrand text-textColor p-[10px] rounded-lg font-semibold hover:bg-hoverBrand`}>
      {children}
    </button>
  );
}

export default Button;
