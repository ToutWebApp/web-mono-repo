import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  // withCredentials: true, // Enable sending cookies
});

axiosInstance.interceptors.request.use((config) => {
  // Only add Authorization header if token exists
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 errors (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh tokens
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) throw new Error("No refresh token available");

        // Use a new instance to avoid interceptor loops
        const refreshClient = axios.create({
          baseURL: process.env.NEXT_PUBLIC_API_URL,
          withCredentials: true,
        });

        const response = await refreshClient.post("/auth/refresh", {
          refreshToken,
        });

        const newAccessToken = response.data.token;
        const newRefreshToken = response.data.refreshToken;

        // Update cookies
        // const cookieOptions = {
        //   expires: 7,
        //   path: "/",
        //   secure: process.env.NODE_ENV === "production",
        //   sameSite: "lax" as const,
        //   domain:
        //     process.env.NODE_ENV === "production" ? ".tout.company" : undefined,
        // };

        Cookies.set("accessToken", newAccessToken, {
          // ...cookieOptions,
          expires: 1,
        });
        Cookies.set("refreshToken", newRefreshToken);

        // Update the original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Clear cookies on refresh failure
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");

        // Broadcast logout event
        window.dispatchEvent(new CustomEvent("auth:logout"));
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const apiClient = axiosInstance;
