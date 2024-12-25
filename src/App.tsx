import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash.startsWith("#access_token")) {
  //     navigate("/reset-password");
  //   }
  //   localStorage.setItem("access_token", hash);
  // }, [navigate]);

  return <h1 className="font-bold">Hello world</h1>;
}
