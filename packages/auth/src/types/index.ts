// packages/auth/src/types/index.ts
export interface Photo {
  id: string;
  path: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface Status {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  photo?: Photo;
  role: Role;
  status: Status;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data?: AuthResponse;
}