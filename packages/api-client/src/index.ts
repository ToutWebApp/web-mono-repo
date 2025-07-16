// packages/api-client/src/index.ts
import { axiosInstance } from "./axios";
import { attachInterceptors } from "./interceptors";

attachInterceptors();

export const apiClient = axiosInstance;
export * from "./queries/user/useServices";
export * from "./providers/QueryProvider";
// export * from "./apis/types/services.types";
