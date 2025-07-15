import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Form from "./Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import GoogleAuth from "./GoogleAuth";

export default function LogIn() {
  const [user, setUser] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit2 = (data) => logInWithEmailPassword(data);
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyByfeSLj_2VABFHlzRNTJEwjk0RHDm_SiM",
    authDomain: "fire-authentication-b04.firebaseapp.com",
    projectId: "fire-authentication-b04",
    storageBucket: "fire-authentication-b04.firebasestorage.app",
    messagingSenderId: "732453306968",
    appId: "1:732453306968:web:7aeebd6e97d92e1c82802d",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const logInWithEmailPassword = (data) => {
    const email = data.email;
    const password = data.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setFirebaseError(errorMessage);
        setTimeout(() => {
          reset();
          setFirebaseError("");
        }, 3000);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-red-500 text-3xl font-semibold text-center mb-5">
        Welcome to Firebase Authentication {user?.email}
      </h1>
      <Form
        onSubmit={onSubmit2}
        firebaseError={firebaseError}
        login="Log In"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
      />
      <p className="text-slate-500 border-b-1 border-gray-600 mb-4 pb-5 w-[50%] text-center mt-2">
        Don't have an account?{" "}
        <Link className="hover:underline text-blue-500" to={"/signup"}>
          Sign Up
        </Link>
      </p>
      <p className="text-gray-400 font-medium mb-2">OR</p>
      <GoogleAuth />
    </div>
  );
}
