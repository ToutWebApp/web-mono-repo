import { axiosInstance } from "../axios";
import { Service, ServicesResponse } from "./types/services.types";

export const fetchServices = async (
  filters?: Record<string, any>
): Promise<ServicesResponse> => {
  const res = await axiosInstance.get('/services', { params: filters });
  return res.data;
};

export const fetchServiceById = async (id: string): Promise<Service> => {
  const res = await axiosInstance.get(`/services/${id}`);
  return res.data;
};
