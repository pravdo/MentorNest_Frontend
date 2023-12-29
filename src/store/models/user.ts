import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { authService } from "@/services/authService";
import { UserData, RegisterResponse } from "@/types/authType";
import axios from "axios";

export type UserRole = "admin" | "basic" | null;

export interface UserState {
  id: string | null;
  role: UserRole;
  accessToken: string | null;
}

export const user = createModel<RootModel>()({
  state: {
    id: null,
    role: null,
    accessToken: null,
  } as UserState,
  reducers: {
    setUser(
      state,
      payload: { id: string; role: "admin" | "basic"; accessToken: string }
    ) {
      return { ...state, ...payload };
    },
    logout(state) {
      return { ...state, id: null, role: null, accessToken: null };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      try {
        const data = await authService.login(payload);
        dispatch.user.setUser({
          id: data.id,
          role: data.role,
          accessToken: data.accessToken,
        });
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Now TypeScript knows that error is an AxiosError
          console.error("Login error:", error.response?.data || error.message);
        } else {
          // Error is not an AxiosError, could be something else
          console.error("An unexpected error occurred:", error);
        }
      }
    },
    async register(payload: UserData) {
      try {
        const data: RegisterResponse = await authService.register(payload);
        dispatch.user.setUser({
          id: data.user.id,
          role: data.user.role,
          accessToken: data.accessToken,
        });
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
    async logout() {
      // Clear accessToken from storage
      localStorage.removeItem("accessToken");
      dispatch.user.logout();
    },
  }),
});
