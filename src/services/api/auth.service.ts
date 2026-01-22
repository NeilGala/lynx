/**
 * Authentication Service
 * Handles user authentication and session management
 * TODO: Integrate with backend authentication API
 */

import { apiClient } from './client';
import { User, ApiResponse } from '../../types';

export class AuthService {
  /**
   * Sends OTP to phone number
   * @param phoneNumber - User's phone number with country code
   * @returns Promise with success status
   * 
   * TODO: Backend Integration Required
   * POST /api/auth/send-otp
   * Body: { phoneNumber: string, countryCode: string }
   * Response: { success: boolean, message: string }
   */
  async sendOTP(phoneNumber: string, countryCode: string): Promise<ApiResponse<void>> {
    console.log('[Auth] Sending OTP to:', phoneNumber);
    
    // TODO: Replace with actual API call
    // return await apiClient.post('/auth/send-otp', { phoneNumber, countryCode });
    
    // Temporary mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'OTP sent successfully' });
      }, 1000);
    });
  }

  /**
   * Verifies OTP code
   * @param phoneNumber - User's phone number
   * @param otp - 6-digit OTP code
   * @returns Promise with user data and auth token
   * 
   * TODO: Backend Integration Required
   * POST /api/auth/verify-otp
   * Body: { phoneNumber: string, otp: string }
   * Response: { success: boolean, data: { user: User, token: string } }
   */
  async verifyOTP(phoneNumber: string, otp: string): Promise<ApiResponse<{ user: User; token: string }>> {
    console.log('[Auth] Verifying OTP for:', phoneNumber);
    
    // TODO: Replace with actual API call
    // const response = await apiClient.post('/auth/verify-otp', { phoneNumber, otp });
    // if (response.success && response.data) {
    //   // Store token in localStorage
    //   localStorage.setItem('auth_token', response.data.token);
    // }
    // return response;
    
    // Temporary mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            user: {
              id: 'u1',
              name: 'Alex Rivera',
              handle: '@arivera',
              bio: 'Product Designer & Engineering Manager.',
              avatar: 'https://picsum.photos/seed/arivera/200',
              karma: 1240,
              helpedCount: 42,
              rank: 'Guide',
              badges: []
            },
            token: 'mock_jwt_token_12345'
          }
        });
      }, 1000);
    });
  }

  /**
   * Logs out current user
   * 
   * TODO: Backend Integration Required
   * POST /api/auth/logout
   * Headers: { Authorization: Bearer <token> }
   */
  async logout(): Promise<void> {
    console.log('[Auth] Logging out user');
    
    // TODO: Call backend logout endpoint
    // await apiClient.post('/auth/logout');
    
    // Clear local storage
    localStorage.removeItem('auth_token');
  }

  /**
   * Gets current auth token
   * @returns Auth token or null
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  /**
   * Checks if user is authenticated
   * @returns boolean indicating auth status
   */
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}

export const authService = new AuthService();
