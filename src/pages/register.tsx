import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { UserRegisterData } from "@/types/authType";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<UserRegisterData>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        formData
      );
      router.push("/login");
      console.log(response.data);
      // Handle success, maybe redirect to login or home
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        // error.response is defined and is of type AxiosError
        console.error(error.response.data);
      } else {
        // error is not an AxiosError, could be something else
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
