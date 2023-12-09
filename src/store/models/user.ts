import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { authService } from "@/services/authService";
import { UserData, RegisterResponse } from "@/types/authType";

export type UserRole = "admin" | "basic" | null;

export interface UserState {
  id: string | null;
  role: UserRole;
  token: string | null;
}

export const user = createModel<RootModel>()({
  state: {
    id: null,
    role: null,
    token: null,
  } as UserState,
  reducers: {
    // setUser(state, payload: { user: UserState; token: string }) {
    //   return { ...state, ...payload.user, token: payload.token };
    // },
    setUser(
      state,
      payload: { id: string; role: "admin" | "basic"; token: string }
    ) {
      return { ...state, ...payload };
    },
    logout(state) {
      return { ...state, id: null, role: null, token: null };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      try {
        const data = await authService.login(payload);
        dispatch.user.setUser({
          id: data.user.id,
          role: data.user.role,
          token: data.access_token,
        });
        // dispatch.user.setUser({
        //   user: {
        //     id: data.user.id,
        //     role: data.user.role,
        //     token: null,
        //   },
        //   token: data.access_token,
        // });
      } catch (error) {
        // Handle error, e.g., incorrect credentials
      }
    },
    async register(payload: UserData) {
      try {
        const data: RegisterResponse = await authService.register(payload);
        dispatch.user.setUser({
          id: data.user.id,
          role: data.user.role,
          token: data.access_token,
        });
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
    async logout() {
      // Clear token from storage
      localStorage.removeItem("token");
      dispatch.user.logout();
    },
  }),
});
