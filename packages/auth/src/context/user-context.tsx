// packages/auth/src/context/user-context.tsx
"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  fetchCurrentUser,
  logout,
  User,
  refreshToken as refreshTokenService,
} from "..";
import Cookies from "js-cookie";
import { JwtPayload } from "jwt-decode";
import jwtDecode from 'jwt-decode';
import { apiClient } from "@repo/api-client";

interface UserContextType {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
  login: (tokens: { accessToken: string; refreshToken: string }) => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
  logout: async () => {},
  login: () => {},
  isAuthenticated: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Initialize tokens from cookies and fetch user
  useEffect(() => {
    const initializeAuth = async () => {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");
      
      if (accessToken && refreshToken) {
        try {
          // Check if token is expired
          const decoded = jwtDecode<JwtPayload>(accessToken);
          const expiresAt = (decoded.exp || 0) * 1000;
          const now = Date.now();
          const buffer = 5 * 60 * 1000; // 5 minutes buffer
          
          if (now + buffer > expiresAt) {
            await refreshTokens();
          } else {
            await refreshUser();
          }
        } catch (error) {
          console.error("Token initialization error:", error);
          handleTokenExpiry();
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const refreshUser = async () => {
    setLoading(true);
    try {
      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      handleTokenExpiry();
    } finally {
      setLoading(false);
    }
  };

  const handleTokenExpiry = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setUser(null);
  };

  const loginUser = (tokens: { accessToken: string; refreshToken: string }) => {
    // const cookieOptions = {
    //   expires: 7,
    //   path: '/',
    //   secure: process.env.NODE_ENV === 'production',
    //   sameSite: 'lax' as const,
    //   domain: process.env.NODE_ENV === 'production' ? '.tout.company' : undefined
    // };

    Cookies.set("accessToken", tokens.accessToken, { expires: 1 });
    Cookies.set("refreshToken", tokens.refreshToken);
    refreshUser();
  };

  const logoutUser = async () => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        await logout(refreshToken);
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      handleTokenExpiry();
    }
  };

  const refreshTokens = async (): Promise<boolean> => {
    if (isRefreshing) return false;
    setIsRefreshing(true);
    
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) throw new Error("No refresh token available");
      
      const tokens = await refreshTokenService(refreshToken);
      if (!tokens) throw new Error("Token refresh failed");
      
      // const cookieOptions = {
      //   expires: 7,
      //   path: '/',
      //   secure: process.env.NODE_ENV === 'production',
      //   sameSite: 'lax' as const,
      //   domain: process.env.NODE_ENV === 'production' ? '.tout.company' : undefined
      // };

      Cookies.set("accessToken", tokens.token, {  expires: 1 });
      Cookies.set("refreshToken", tokens.refreshToken);
      
      await refreshUser();
      return true;
    } catch (error) {
      console.error("Token refresh error:", error);
      handleTokenExpiry();
      return false;
    } finally {
      setIsRefreshing(false);
    }
  };

  // Axios response interceptor for token refresh
  useEffect(() => {
    const interceptor = apiClient.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        
        // Handle 401 errors (token expired)
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          
          const success = await refreshTokens();
          if (success) {
            // Retry the original request with new token
            return apiClient(originalRequest);
          }
        }
        
        return Promise.reject(error);
      }
    );
    
    return () => {
      apiClient.interceptors.response.eject(interceptor);
    };
  }, []);

  // Auto-refresh token before expiration
  useEffect(() => {
    const checkTokenExpiry = async () => {
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) return;
      
      try {
        const decoded = jwtDecode<JwtPayload>(accessToken);
        const expiresAt = (decoded.exp || 0) * 1000;
        const now = Date.now();
        const buffer = 5 * 60 * 1000; // 5 minutes buffer
        
        if (now + buffer > expiresAt) {
          await refreshTokens();
        }
      } catch (error) {
        console.error("Token expiry check failed:", error);
      }
    };

    const interval = setInterval(checkTokenExpiry, 60000);
    return () => clearInterval(interval);
  }, []);

  const value: UserContextType = {
    user,
    loading,
    refreshUser,
    logout: logoutUser,
    login: loginUser,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};