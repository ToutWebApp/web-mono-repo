// packages/auth/src/authClient.ts
import { apiClient } from "@repo/api-client";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  RegisterResponse,
  User,
} from "./types";

// Add axios interceptor for automatic token refresh
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

// Response interceptor to handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If refresh is already in progress, wait for it
        return new Promise((resolve) => {
          subscribeTokenRefresh((token: string) => {
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await apiClient.post('/auth/refresh', {}, {
          withCredentials: true,
        });
        
        isRefreshing = false;
        onTokenRefreshed(response.data.token);
        
        return apiClient(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        // Refresh failed, redirect to login or handle as needed
        if (typeof window !== 'undefined') {
          // Clear any stored user state
          window.dispatchEvent(new CustomEvent('auth:logout'));
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export async function loginWithEmail(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>(
    "/auth/email/login",
    credentials,
    {
      withCredentials: true,
    }
  );
  console.log("response", response);
  
  return response.data;
}

export async function registerWithEmail(
  credentials: RegisterCredentials
): Promise<RegisterResponse> {
  const response = await apiClient.post<RegisterResponse>(
    "/auth/email/register",
    credentials,
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function fetchCurrentUser(): Promise<User | null> {
  try {
    const response = await apiClient.get<User>("/auth/me", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return null;
  }
}

export async function logout(): Promise<void> {
  try {
    await apiClient.post(
      "/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Logout failed:", error);
  }
}

export async function refreshToken(): Promise<string | null> {
  try {
    const response = await apiClient.post<{ token: string }>("/auth/refresh", {}, {
      withCredentials: true,
    });
    return response.data.token;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
}