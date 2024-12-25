import { LoginForm } from "../fragments/loginForm";

export default function LoginLayout() {
  return (
    <>
      <div className="md:flex justify-center items-center w-1/2 hidden ">
        <div className="bg-red-400 h-full w-full"></div>
      </div>
      <div className="flex justify-center items-center md:w-1/2 w-full ">
        <LoginForm></LoginForm>
      </div>
    </>
  );
}
