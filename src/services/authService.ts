import { AxiosResponse } from 'axios';
import { User } from 'src/types/user';
import { api } from './api';

interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export class AuthService {
  static async login(email: string, password: string): Promise<AuthResponse> {
    const response: AxiosResponse<ApiResponse<AuthResponse>> = await api.post('/auth/login', {
      email,
      password,
    });
    const { data } = response.data;
    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    return data;
  }

  static async register(userData: {
    username: string;
    email: string;
    password: string;
    fullName: string;
  }): Promise<AuthResponse> {
    const response: AxiosResponse<ApiResponse<AuthResponse>> = await api.post('/auth/register', userData);
    const { data } = response.data;
    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    return data;
  }

  static async refreshToken(refreshToken: string): Promise<AuthResponse> {
    const response: AxiosResponse<ApiResponse<AuthResponse>> = await api.post('/auth/refresh-token', {
      refreshToken,
    });
    const { data } = response.data;
    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);
    return data;
  }

  static async getCurrentUser(): Promise<User> {
    const response: AxiosResponse<ApiResponse<User>> = await api.get('/auth/me');
    return response.data.data;
  }

  static logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  static isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }

  static getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }
} 