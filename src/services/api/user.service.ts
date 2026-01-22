/**
 * User Service
 * Handles user-related API operations
 * TODO: Integrate with backend user API
 */

import { apiClient } from './client';
import { User, Experience, ApiResponse } from '../../types';

export class UserService {
  /**
   * Fetches user profile by ID
   * @param userId - User ID
   * @returns Promise with user data
   * 
   * TODO: Backend Integration Required
   * GET /api/users/:userId
   * Response: { success: boolean, data: User }
   */
  async getUserById(userId: string): Promise<ApiResponse<User>> {
    console.log('[User] Fetching user:', userId);
    
    // TODO: Replace with actual API call
    // return await apiClient.get(`/users/${userId}`);
    
    throw new Error('API not implemented');
  }

  /**
   * Updates user profile
   * @param userId - User ID
   * @param updates - Profile updates
   * @returns Promise with updated user data
   * 
   * TODO: Backend Integration Required
   * PUT /api/users/:userId
   * Body: { bio?: string, avatar?: string, ... }
   */
  async updateProfile(userId: string, updates: Partial<User>): Promise<ApiResponse<User>> {
    console.log('[User] Updating profile:', userId, updates);
    
    // TODO: Replace with actual API call
    // return await apiClient.put(`/users/${userId}`, updates);
    
    throw new Error('API not implemented');
  }

  /**
   * Fetches user's experiences
   * @param userId - User ID
   * @returns Promise with array of experiences
   * 
   * TODO: Backend Integration Required
   * GET /api/users/:userId/experiences
   */
  async getUserExperiences(userId: string): Promise<ApiResponse<Experience[]>> {
    console.log('[User] Fetching experiences for user:', userId);
    
    // TODO: Replace with actual API call
    // return await apiClient.get(`/users/${userId}/experiences`);
    
    throw new Error('API not implemented');
  }

  /**
   * Uploads user avatar
   * @param file - Image file
   * @returns Promise with new avatar URL
   * 
   * TODO: Backend Integration Required
   * POST /api/users/avatar
   * Body: FormData with image file
   * Response: { success: boolean, data: { avatarUrl: string } }
   */
  async uploadAvatar(file: File): Promise<ApiResponse<{ avatarUrl: string }>> {
    console.log('[User] Uploading avatar');
    
    // TODO: Implement multipart/form-data upload
    // const formData = new FormData();
    // formData.append('avatar', file);
    // return await apiClient.post('/users/avatar', formData);
    
    throw new Error('API not implemented');
  }
}

export const userService = new UserService();
