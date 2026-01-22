/**
 * Request Service
 * Handles help request operations
 * TODO: Integrate with backend request API
 */

import { apiClient } from './client';
import { Request, ApiResponse } from '../../types';

export class RequestService {
  /**
   * Sends a help request
   * @param toUserId - Recipient user ID
   * @param experienceId - Experience ID
   * @param message - Request message
   * @returns Promise with created request
   * 
   * TODO: Backend Integration Required
   * POST /api/requests
   * Body: { toUserId: string, experienceId: string, message: string }
   */
  async sendRequest(toUserId: string, experienceId: string, message: string): Promise<ApiResponse<Request>> {
    console.log('[Request] Sending request:', { toUserId, experienceId, message });
    
    // TODO: Replace with actual API call
    // return await apiClient.post('/requests', { toUserId, experienceId, message });
    
    throw new Error('API not implemented');
  }

  /**
   * Accepts a help request
   * @param requestId - Request ID
   * @returns Promise with updated request
   * 
   * TODO: Backend Integration Required
   * POST /api/requests/:id/accept
   */
  async acceptRequest(requestId: string): Promise<ApiResponse<Request>> {
    console.log('[Request] Accepting:', requestId);
    
    // TODO: Replace with actual API call
    // return await apiClient.post(`/requests/${requestId}/accept`);
    
    throw new Error('API not implemented');
  }

  /**
   * Declines a help request
   * @param requestId - Request ID
   * @returns Promise with updated request
   * 
   * TODO: Backend Integration Required
   * POST /api/requests/:id/decline
   */
  async declineRequest(requestId: string): Promise<ApiResponse<Request>> {
    console.log('[Request] Declining:', requestId);
    
    // TODO: Replace with actual API call
    // return await apiClient.post(`/requests/${requestId}/decline`);
    
    throw new Error('API not implemented');
  }

  /**
   * Fetches received requests
   * @returns Promise with array of received requests
   * 
   * TODO: Backend Integration Required
   * GET /api/requests/received
   */
  async getReceivedRequests(): Promise<ApiResponse<Request[]>> {
    console.log('[Request] Fetching received requests');
    
    // TODO: Replace with actual API call
    // return await apiClient.get('/requests/received');
    
    throw new Error('API not implemented');
  }

  /**
   * Fetches sent requests
   * @returns Promise with array of sent requests
   * 
   * TODO: Backend Integration Required
   * GET /api/requests/sent
   */
  async getSentRequests(): Promise<ApiResponse<Request[]>> {
    console.log('[Request] Fetching sent requests');
    
    // TODO: Replace with actual API call
    // return await apiClient.get('/requests/sent');
    
    throw new Error('API not implemented');
  }
}

export const requestService = new RequestService();
