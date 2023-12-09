export interface UserData {
  username: string;
  password: string;
}

export interface RegisterResponse {
  user: {
    id: string;
    role: "admin" | "basic";
    // ... add other user properties as expected from your backend response
  };
  access_token: string;
}
