// src/pages/register.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { UserData } from "@/types/authType";

const RegisterPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch.user.register(userData);
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
