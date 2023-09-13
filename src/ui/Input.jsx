function Input({ input }) {
  return (
    <>
      <label htmlFor={input.name}>{input.label}</label>
      <input
        type={input.type}
        id={input.name}
        placeholder={input.placeholder}
        className="w-full border-b border-gray-300 outline-none p-[5px] bg-transparent"
      />
    </>
  );
}

export default Input;
