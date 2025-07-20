// packages/auth/src/hooks/useAuth.ts
import { useUser } from "../context/user-context";
import { loginWithEmail, registerWithEmail } from "../authClient";
import { LoginCredentials, RegisterCredentials } from "../types";

export const useAuth = () => {
  const {
    user,
    loading,
    refreshUser,
    logout,
    login: contextLogin,
    isAuthenticated,
  } = useUser();

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await loginWithEmail(credentials);
      contextLogin({
        accessToken: response.token,
        refreshToken: response.refreshToken,
      });
      // await refreshUser();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    try {
      return await registerWithEmail(credentials);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout: signOut,
    refreshUser,
  };
};
