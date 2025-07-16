
// packages/auth/src/hooks/useAuth.ts
import { useUser } from '../context/user-context';
import { loginWithEmail, registerWithEmail, logout } from '../authClient';
import { LoginCredentials, RegisterCredentials } from '../types';

export const useAuth = () => {
  const { user, loading, refresh, logout: contextLogout, isAuthenticated } = useUser();

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await loginWithEmail(credentials);
      await refresh(); // Refresh user context after login
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    try {
      const response = await registerWithEmail(credentials);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await contextLogout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout: signOut,
    refresh,
  };
};