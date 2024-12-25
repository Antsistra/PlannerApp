import Swal from "sweetalert2";
import { axiosInstance } from "@/lib/axios";
import { supabase } from "@/lib/supabase";
const supabaseUrlKey = import.meta.env.VITE_SUPABASE_URL;
interface LoginError {
  response?: {
    data?: {
      error?: string;
    };
  };
}

export function getAccessTokenFromHash() {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.substring(1));
  return params.get("access_token");
}

export const validateInput = (email: string, password: string): boolean => {
  if (!email || !password) {
    Swal.fire({
      title: "Error!",
      text: "Email or Password is Empty",
      icon: "error",
      confirmButtonText: "Back",
    });
    return false;
  }
  return true;
};

export const handleLogin = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    Swal.fire({
      title: "Success!",
      text: "Login Successful",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error: any) {
    console.log(error);
    let message = "";
    if (error.message === "Email not confirmed") {
      message = "Email not Confirmed, Please Check Your Email";
    } else if (error.message === "Invalid login credentials") {
      message = "Wrong Email or Password";
    }
    Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
      confirmButtonText: "Back",
    });
  }
};

export const validateRegisterInput = (
  name: string,
  email: string,
  password: string,
  role: string
): boolean => {
  if (!name || !email || !password || !role) {
    Swal.fire({
      title: "Error!",
      text: "All fields are required",
      icon: "error",
      confirmButtonText: "Back",
    });
    return false;
  }
  return true;
};

export const validateResetPasswordInput = (
  password: string,
  confirmPassword: string
): boolean => {
  if (!password || !confirmPassword) {
    Swal.fire({
      title: "Error!",
      text: "All fields are required",
      icon: "error",
      confirmButtonText: "Back",
    });
    return false;
  }
  if (password !== confirmPassword) {
    Swal.fire({
      title: "Error!",
      text: "Password and Confirm Password do not match",
      icon: "error",
      confirmButtonText: "Back",
    });
    return false;
  }
  return true;
};

export const handleRegister = async (
  name: string,
  email: string,
  password: string,
  role: string
): Promise<void> => {
  try {
    await axiosInstance.post("/auth/register", {
      name,
      email,
      password,
      role,
    });
    Swal.fire({
      title: "Success!",
      text: "Register Successful! Please check your email for verification.",
      icon: "success",
      confirmButtonText: "Login",
    }).then(() => {
      window.location.href = "/login";
    });
  } catch (error: unknown) {
    const errorMessage =
      (error as any)?.response?.data?.error ||
      "An error occurred during registration";
    Swal.fire({
      title: "Error!",
      text: errorMessage,
      icon: "error",
      confirmButtonText: "Back",
    });
  }
};

export const handleResetPassword = async (password: string): Promise<void> => {
  try {
    const { error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) throw error;
    Swal.fire({
      title: "Success!",
      text: "Password Reset Successful",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      localStorage.removeItem(`sb-${supabaseUrlKey}-auth-token`);
      window.location.href = "/login";
    });
  } catch (error: any) {
    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

export const handleForgotPassword = async (email: string): Promise<void> => {
  try {
    await axiosInstance.post("/auth/forgot-password", {
      email,
    });
    Swal.fire({
      title: "Success!",
      text: "Recovery Email Sent Successfully",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      window.location.href = "/login";
    });
  } catch (error: any) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: error.response.data.error,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
