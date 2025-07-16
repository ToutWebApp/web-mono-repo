import { axiosInstance } from './axios';
// import { getSession } from 'next-auth/react';

export function attachInterceptors() {
  axiosInstance.interceptors.request.use(
    async (config) => {
      // optionally get token from session or your auth logic
      // const session = await getSession();
      // const token = session?.user?.token;

      const token = ''; // fetch from custom store/session if needed

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      // handle 401 or token refresh
      if (error.response?.status === 401) {
        console.warn('Unauthorized – maybe refresh token here');
        // Optional: redirect to login
      }
      return Promise.reject(error);
    }
  );
}
