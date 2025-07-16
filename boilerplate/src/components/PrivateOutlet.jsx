import React from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
  const { user } = useAuth();
  console.log(user);
  const location = useLocation();

  return (
    <div>
      user?.email ? <Outlet /> :{" "}
      <Navigate to={"/login"} state={{ from: location }} />
    </div>
  );
}
