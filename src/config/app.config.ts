/**
 * Application Configuration
 * Central configuration file for app-wide settings
 */

export const APP_CONFIG = {
  name: 'Lynx',
  description: 'Experience-First Mentorship Platform',
  version: '1.0.0',
  
  // Server configuration (for future backend integration)
  api: {
    baseUrl: process.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
    timeout: 30000,
  },
  
  // Feature flags
  features: {
    enableNotifications: true,
    enableLeaderboard: true,
    enableChat: true,
  },
  
  // UI Configuration
  ui: {
    maxKarmaDisplayed: 99999,
    itemsPerPage: 10,
    defaultAvatar: 'https://picsum.photos/seed/default/200',
  },
} as const;
