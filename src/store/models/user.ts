import { createModel } from "@rematch/core";
import { RootModel } from ".";

export type UserRole = "admin" | "basic" | null;

export interface UserState {
  id: string | null;
  role: UserRole;
}

export const user = createModel<RootModel>()({
  state: {
    id: null,
    role: null,
  } as UserState,
  reducers: {
    setUser(state, payload: UserState) {
      return { ...state, ...payload };
    },
    logout(state) {
      return { ...state, id: null, role: null };
    },
  },
  effects: (dispatch) => ({
    // async login(payload, rootState) {
    //   // Implement login logic here, and then set user
    //   dispatch.user.setUser({ id: "user-id", role: "basic" });
    //   // Add logic to handle admin role and set it accordingly
    // },
    // async logout(payload, rootState) {
    //   // Implement logout logic here
    //   dispatch.user.logout();
    // },
    async login(payload) {
      // Perform login logic here (e.g., API call)
      // Assume the payload is an object with username and password
      // const response = await yourLoginApiFunction(payload.username, payload.password);
      // If login is successful, set the user state
      // if (response.success) {
      //   dispatch.user.setUser({ id: response.data.id, role: response.data.role });
      // }
    },
    // Effect to handle user logout
    async logout() {
      // Perform logout logic here (e.g., API call)
      // For example, you might want to clear a token from localStorage
      localStorage.removeItem("authToken");
      // Reset the user state
      dispatch.user.logout();
    },
  }),
});
