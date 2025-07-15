import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { initializeApp } from "firebase/app";

export default function GoogleAuth() {
  const [user, setUser] = useState({});
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

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user, token);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div>
      {user?.email ? (
        <div className="flex flex-row-reverse gap-5  items-center border-2 border-red-500 p-4 shadow-xl shadow-red-200 rounded-md">
          <div>
            <p className="text-xl font-semibold text-slate-700">
              {user?.displayName}
            </p>
            <p className=" text-slate-400">{user?.email}</p>
          </div>
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>
      ) : (
        <div>
          <button
            onClick={signInwithGoogle}
            className="flex items-center gap-2 border-2 border-slate-400 py-2 px-20 rounded-md text-lg font-semibold text-slate-600 hover:bg-slate-700 hover:text-gray-50 transition-all duration-200 active:scale-97"
          >
            <FcGoogle className="size-7" />
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}
