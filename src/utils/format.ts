/**
 * Format Utilities
 * Reusable formatting functions for displaying data
 */

/**
 * Formats a number with commas for thousands separator
 * @param num - Number to format
 * @returns Formatted string
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

/**
 * Truncates text to specified length with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Formats time ago string (e.g., "2h ago", "3d ago")
 * @param timestamp - Date timestamp
 * @returns Formatted time ago string
 */
export const formatTimeAgo = (timestamp: string | Date): string => {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
};

/**
 * Extracts first name from full name
 * @param fullName - Full name string
 * @returns First name
 */
export const getFirstName = (fullName: string): string => {
  return fullName.split(' ')[0];
};
