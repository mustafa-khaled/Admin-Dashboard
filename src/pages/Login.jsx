import { loginForm } from "../data/data";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Login() {
  return (
    <div className="min-h-[100vh]  flex items-center justify-center text-textColor">
      <form className="bg-colorGrey2 p-[20px]  shadow-md">
        {loginForm.map((input) => {
          return (
            <div key={input.id} className="w-[400px]  mb-[30px]">
              <Input input={input} />
            </div>
          );
        })}

        <div className="w-[100%]">
          <Button styles={"w-[100%]"}>Submit</Button>
        </div>
        <p className="mt-[20px] text-red-500 text-center">Error Here</p>
      </form>
    </div>
  );
}

export default Login;
