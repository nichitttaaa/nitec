import api from "./index.ts";
import type {
  LoginData,
  LoginResponse,
  MySelfResponse,
  RegisterData,
  RegisterResponse,
  PaginationParams,
  PaginationMeta,
  ProductsResponse
} from "./types.ts";

export const register = async (data: RegisterData): Promise<RegisterResponse> => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const getMySelf = async () => {
  const response = await api.get<MySelfResponse>("/user/profile/myself");
  return response.data;
};

export const refresh = async (token: string) => {
  const response = await api.get("auth/refresh", { headers: { authorization: `Bearer ${token}` } });
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/user/profile/find/${id}`, {
    params: { id },
  });
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get<MySelfResponse[]>("/user/profile");
  return response.data;

}

export const getAllProducts = async (params: PaginationParams): Promise<{ meta: PaginationMeta, data: ProductsResponse[] }> => {
  const response = await api.get("/product", {
    params
  })
  return response.data
}