import api from "./index.ts";
import type {LoginData, LoginResponse, MySelfResponse, RegisterData, RegisterResponse} from "./types.ts";

export const register = async (data: RegisterData): Promise<RegisterResponse> => {
    const response = await api.post("/auth/register", data)
    return response.data
}

export const login  = async (data: LoginData): Promise<LoginResponse> => {
    const response = await api.post("/auth/login", data)
    return response.data
}

export const getMySelf = async () => {
    const response = await api.get<MySelfResponse>("/user/profile/myself")
    return response.data
}