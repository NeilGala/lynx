/**
 * API Client
 * Base HTTP client for making API requests
 * TODO: Integrate with actual backend when available
 */

import { APP_CONFIG } from '../../config/app.config';
import { ApiResponse } from '../../types';

class ApiClient {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = APP_CONFIG.api.baseUrl;
    this.timeout = APP_CONFIG.api.timeout;
  }

  /**
   * Makes a GET request to the API
   * @param endpoint - API endpoint
   * @param params - Query parameters
   * @returns Promise with API response
   * 
   * TODO: Implement actual API call when backend is ready
   * TODO: Add authentication headers (JWT token)
   * TODO: Add error handling and retry logic
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    console.log(`[API] GET ${endpoint}`, params);
    // Placeholder - replace with actual fetch call
    throw new Error('API not implemented - connect to backend');
  }

  /**
   * Makes a POST request to the API
   * @param endpoint - API endpoint
   * @param data - Request body
   * @returns Promise with API response
   * 
   * TODO: Implement actual API call when backend is ready
   * TODO: Add authentication headers (JWT token)
   * TODO: Add error handling and retry logic
   */
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    console.log(`[API] POST ${endpoint}`, data);
    // Placeholder - replace with actual fetch call
    throw new Error('API not implemented - connect to backend');
  }

  /**
   * Makes a PUT request to the API
   * @param endpoint - API endpoint
   * @param data - Request body
   * @returns Promise with API response
   * 
   * TODO: Implement actual API call when backend is ready
   */
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    console.log(`[API] PUT ${endpoint}`, data);
    // Placeholder - replace with actual fetch call
    throw new Error('API not implemented - connect to backend');
  }

  /**
   * Makes a DELETE request to the API
   * @param endpoint - API endpoint
   * @returns Promise with API response
   * 
   * TODO: Implement actual API call when backend is ready
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    console.log(`[API] DELETE ${endpoint}`);
    // Placeholder - replace with actual fetch call
    throw new Error('API not implemented - connect to backend');
  }
}

export const apiClient = new ApiClient();
