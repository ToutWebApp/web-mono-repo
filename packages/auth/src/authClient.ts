// packages/auth/src/authClient.ts
import { apiClient } from "@repo/api-client";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  RegisterResponse,
  User,
} from "./types";

export async function loginWithEmail(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>(
    "/auth/email/login",
    credentials
  );
  return response.data;
}

export async function registerWithEmail(
  credentials: RegisterCredentials
): Promise<RegisterResponse> {
  const response = await apiClient.post<RegisterResponse>(
    "/auth/email/register",
    credentials
  );
  return response.data;
}

export async function fetchCurrentUser(): Promise<User | null> {
  try {
    const response = await apiClient.get<User>("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return null;
  }
}

export async function logout(refreshToken: string): Promise<void> {
  try {
    await apiClient.post("/auth/logout", { refreshToken });
  } catch (error) {
    console.error("Logout failed:", error);
  }
}

export async function refreshToken(
  refreshToken: string
): Promise<{ token: string; refreshToken: string } | null> {
  try {
    const response = await apiClient.post<{
      token: string;
      refreshToken: string;
    }>("/auth/refresh", { refreshToken });
    return response.data;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
}
