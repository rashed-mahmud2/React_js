import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import userDetails from "../data/user.json";
import useCredential from "../hooks/useCredential";

export default function Login() {
  const [loginError, setLoginError] = useState("");
  const { user, setUser } = useCredential();
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || "";
  useEffect(() => {
    user?.email && navigate(from, { replace: true });
  }, [from, navigate, user?.email]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => processLogin(data);

  const processLogin = (formData) => {
    const fetchData = async () => {
      try {
        const tempUser =
          userDetails.find(
            (user) =>
              user?.email === formData.email &&
              user?.password === formData.password
          ) || {};
        if (tempUser.email) {
          setUser(tempUser);
          localStorage.setItem("uId", tempUser.id);
          setLoginError("");
          reset(); // ✅ optional
          navigate("/dashboard");
        } else {
          setLoginError("Email or password don't match");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col gap-3 w-[300px] border-2 border-green-600 p-5 rounded-md  shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-2 border-green-600 rounded-md p-2 focus:outline-0"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p className="text-sm text-red-500" role="alert">
            Email address is required
          </p>
        )}

        <input
          type="password"
          placeholder="Enter password"
          className="border-2 border-green-600 rounded-md p-2 focus:outline-0"
          {...register("password", { required: "Email Address is required" })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && (
          <p className="text-sm text-red-500" role="alert">
            Password is required
          </p>
        )}

        <input
          className="bg-green-600 rounded-md p-2 text-white hover:bg-black/90 active:scale-97"
          type="submit"
        />
      </form>
      <p className="text-rose-700 mt-5">{loginError}</p>
    </div>
  );
}
