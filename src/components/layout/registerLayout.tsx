import RegisterForm from "../fragments/registerForm";
import { useState } from "react";
export default function RegisterLayout() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"></div>
      )}
      <div className="md:flex justify-center items-center w-1/2 hidden ">
        <div className="bg-red-400 h-screen w-full">
          <img
            src="https://i.ibb.co.com/x3DJ3Jz/example.jpg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center md:w-1/2 w-full ">
        <RegisterForm
          setIsLoading={setIsLoading}></RegisterForm>
      </div>
    </>
  );
}
