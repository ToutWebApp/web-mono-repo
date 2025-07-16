import { axiosInstance } from './axios';

export async function apiClient<T = any>(
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any,
  params?: Record<string, any>
): Promise<T> {
  try {
    const res = await axiosInstance.request<T>({
      url: path,
      method,
      data,
      params,
    });

    return res.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      'Unknown error';

    throw new Error(message);
  }
}
