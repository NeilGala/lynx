/**
 * Type Definitions
 * Core TypeScript interfaces and types for the application
 */

export type UserRank = 'Novice' | 'Pathfinder' | 'Guide' | 'Mentor' | 'Luminary';

export interface User {
  id: string;
  name: string;
  handle: string;
  bio: string;
  avatar: string;
  karma: number;
  helpedCount: number;
  rank: UserRank;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Experience {
  id: string;
  userId: string;
  title: string;
  description: string;
  proofUrl: string;
  category: string;
  helpedCount: number;
  user?: User;
}

export interface Request {
  id: string;
  fromUserId: string;
  toUserId: string;
  experienceId: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  message: string;
  createdAt: string;
  experience?: Experience;
  fromUser?: User;
}

export interface ChatMessage {
  id: string;
  requestId: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  name: string;
  lastMsg: string;
  time: string;
  avatar: string;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
}

/**
 * API Response types
 * TODO: Define these based on actual backend API schema
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
