import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { UserRegisterData } from "@/types/authType";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<UserRegisterData>({
    userName: "",
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
    e.preventDefault();
    console.log("FormData before submitting:", formData);

    if (!formData.userName || formData.userName.length < 2) {
      alert("Username must be at least 2 characters long");
      return;
    }

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
        onChange={handleInputChange}
      />

      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        name="password"
        placeholder="********"
        value={formData.password}
        onChange={handleInputChange}
      />

      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
      />

      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
