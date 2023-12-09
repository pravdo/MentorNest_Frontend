import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Dispatch } from "../store";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch: Dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch.user.login(formData);
    // Redirect to a protected route on success, handle errors appropriately
    // router.push("/");
    // Replace with the route you want to redirect to
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
