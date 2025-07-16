import { useQuery } from "@tanstack/react-query";
import { fetchServiceById, fetchServices } from "../../apis/services";
import { Service, ServicesResponse } from "../../apis/types/services.types";

export const useServices = (filters?: Record<string, any>) => {
  return useQuery<ServicesResponse>({
    queryKey: ["services", filters],
    queryFn: () => fetchServices(filters),
  });
};

export const useService = (id?: string) => {
  return useQuery<Service>({
    queryKey: ["service", id],
    queryFn: () => fetchServiceById(id!),
    enabled: !!id,
  });
};