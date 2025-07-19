// packages/auth/src/context/user-context.tsx
"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchCurrentUser, logout, User } from "..";

interface UserContextType {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  refresh: async () => {},
  logout: async () => {},
  isAuthenticated: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    setLoading(true);
    try {
      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Initialize user on mount
  // useEffect(() => {
  //   refreshUser();
  // }, []);

  // Listen for logout events from other tabs/windows
  useEffect(() => {
    const handleLogout = () => {
      setUser(null);
    };

    window.addEventListener('auth:logout', handleLogout);
    
    return () => {
      window.removeEventListener('auth:logout', handleLogout);
    };
  }, []);

  // Auto-refresh user every 5 minutes to handle token expiry
  useEffect(() => {
    if (user) {
      const interval = setInterval(refreshUser, 5 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const value: UserContextType = {
    user,
    loading,
    refresh: refreshUser,
    logout: logoutUser,
    isAuthenticated: !!user,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};