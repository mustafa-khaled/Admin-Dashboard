import Button from "./Button";

function Form({
  inputs,
  values,
  setValues,
  error,
  handleSubmit,
  styles,
  disable,
  children,
}) {
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-colorGrey2 p-[20px] ${styles} `}>
      {children}
      {inputs.map((input) => {
        return (
          <div key={input.id} className="mb-[30px] flex">
            <input
              key={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name]}
              onChange={onChange}
              className="w-full border-b text-textColor border-gray-300 outline-none p-[5px] bg-transparent"
            />
          </div>
        );
      })}

      <div className="w-[100%]">
        <Button disable={disable} type="submit" styles={"w-[100%]"}>
          Submit
        </Button>
      </div>

      {error ? (
        <p className="mt-[20px] text-red-500 text-center">{error}</p>
      ) : (
        ""
      )}
    </form>
  );
}

export default Form;
