/**
 * useAuth Hook
 * Custom hook for authentication state management
 */

import { useState, useEffect } from 'react';
import { authService } from '../services/api';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      const isAuth = authService.isAuthenticated();
      setAuthState({
        user: null, // TODO: Fetch user data from API if authenticated
        isAuthenticated: isAuth,
        isLoading: false,
      });
    };

    checkAuth();
  }, []);

  /**
   * Sends OTP to phone number
   * TODO: Integrate with backend when ready
   */
  const sendOTP = async (phoneNumber: string, countryCode: string) => {
    try {
      const response = await authService.sendOTP(phoneNumber, countryCode);
      return response;
    } catch (error) {
      console.error('[useAuth] Error sending OTP:', error);
      throw error;
    }
  };

  /**
   * Verifies OTP and logs in user
   * TODO: Integrate with backend when ready
   */
  const verifyOTP = async (phoneNumber: string, otp: string) => {
    try {
      const response = await authService.verifyOTP(phoneNumber, otp);
      if (response.success && response.data) {
        setAuthState({
          user: response.data.user,
          isAuthenticated: true,
          isLoading: false,
        });
      }
      return response;
    } catch (error) {
      console.error('[useAuth] Error verifying OTP:', error);
      throw error;
    }
  };

  /**
   * Logs out current user
   */
  const logout = async () => {
    try {
      await authService.logout();
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      console.error('[useAuth] Error logging out:', error);
      throw error;
    }
  };

  return {
    ...authState,
    sendOTP,
    verifyOTP,
    logout,
  };
};
