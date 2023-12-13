import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Dispatch } from "../store";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
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
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="username"
    //     value={formData.userName}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     value={formData.password}
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Login</button>
    // </form>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-md mx-auto mt-10"
    >
      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="userName"
        placeholder="Username"
        value={formData.userName}
        onChange={handleChange}
      />

      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
