import { create } from "zustand";
import { persist } from "zustand/middleware";
import Api from "../Api/Axios";

interface AuthState {
  token: string | null;
  user: any;
  login: (identifier: string, password: string) => Promise<{ message: string }>;
  logout: () => void;
}
export const useAuth = create<AuthState>()(
  persist(
    (set, _get) => ({
      token: null,
      user: null,
      login: async (identifier, password) => {
        try {
          const response = await Api.post("/auth/login", {
            email: identifier,
            username: identifier,
            password,
          });
          const { token, user, message } = response.data;

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          set({ token, user });

          return { message };
        } catch (error) {
          throw error;
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ token: null, user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
