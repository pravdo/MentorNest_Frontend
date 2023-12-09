import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const dispatch: Dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // Dispatch the logout action from your store
    // dispatch.user.logout();
    // Redirect to the home page or login page
    router.push("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
