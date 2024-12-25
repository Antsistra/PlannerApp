import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateInput } from "@/utils/authUtils";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = async () => {
    try {
      if (validateInput(email, password)) {
        const { error } =
          await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
        if (error) throw error;
        Swal.fire({
          title: "Success!",
          text: "Login Berhasil",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <Card className="w-full border-none shadow-none lg:w-[600px]">
      <CardHeader>
        <CardTitle className="text-4xl lg:text-5xl text-center">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-center lg:text-base">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-lg">
                Email
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
                type="email"
                id="Email"
                placeholder="sebastian123@mail.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-lg">
                Password
              </Label>
              <Input
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="h-10"
                type="password"
                id="Password"
                placeholder="********"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-end mt-6">
          <Link to="/forgot-password">
            <p className="font-semibold">
              Forgot Password?
            </p>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center">
        <Button
          className="w-full h-12 rounded-full text-lg"
          onClick={() => handleInput()}>
          Login
        </Button>
        <h3 className="mt-4">
          Don't have an account?{" "}
          <Link to="/register">
            <a className="font-semibold">Register</a>
          </Link>
        </h3>
      </CardFooter>
    </Card>
  );
}
