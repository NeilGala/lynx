/**
 * Class Name Utilities
 * Helper functions for conditional CSS class management
 */

/**
 * Conditionally joins class names
 * @param classes - Array of class names or conditional objects
 * @returns Combined class string
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
