export interface UserData {
  userName: string;
  password: string;
}

export interface UserRegisterData {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  user: {
    id: string;
    role: "admin" | "basic";
    // ... add other user properties as expected from your backend response
  };
  accessToken: string;
}

export interface LoginResponse {
  accessToken: string;
  id: string;
  role: "admin" | "basic";
  email?: string;
  userName?: string;
}
