// @ts-ignore
enum UserRoleEnum {
    ADMIN = "ADMIN",
    USER = "USER"
}

export interface RegisterData {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber?: string
}

export interface RegisterResponse {
    accessToken: string,
    refreshToken: string
}

export interface LoginData {
    email: string,
    password: string,
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string
}

export interface MySelfResponse {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    phoneNumber: string,
    role: UserRoleEnum
}

export type User = MySelfResponse

