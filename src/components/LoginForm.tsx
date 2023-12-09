import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: Dispatch = useDispatch();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    // Dispatch the login action from your store
    // This is where you would normally interact with an auth service
    dispatch.user.login({ username, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
