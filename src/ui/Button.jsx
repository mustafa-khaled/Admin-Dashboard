function Button({ children }) {
  return (
    <button className="bg-colorBrand text-textColor p-[10px] rounded-lg font-semibold hover:bg-hoverBrand">
      {children}
    </button>
  );
}

export default Button;
