import Button from "./Button";

function Form({ inputs, values, setValues, error, handleSubmit }) {
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-colorGrey2 p-[20px]  ">
      {inputs.map((input) => {
        return (
          <div key={input.id} className="w-[400px]  mb-[30px]">
            <input
              key={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name]}
              onChange={onChange}
              className="w-full border-b border-gray-300 outline-none p-[5px] bg-transparent"
            />
          </div>
        );
      })}

      <div className="w-[100%]">
        <Button type="submit" styles={"w-[100%]"}>
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
