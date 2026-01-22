/**
 * Validation Utilities
 * Reusable validation functions for forms and user inputs
 */

/**
 * Validates if a string is a valid phone number for a given country
 * @param phone - Phone number string
 * @param expectedLength - Expected length of phone number
 * @returns boolean indicating if phone is valid
 */
export const validatePhoneNumber = (phone: string, expectedLength: number): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length === expectedLength;
};

/**
 * Validates if OTP code is complete
 * @param otp - Array of OTP digits
 * @returns boolean indicating if OTP is complete
 */
export const validateOTP = (otp: string[]): boolean => {
  return otp.every(digit => digit !== '');
};

/**
 * Validates if a string contains only digits
 * @param value - String to validate
 * @returns boolean indicating if string contains only digits
 */
export const isDigitsOnly = (value: string): boolean => {
  return /^\d*$/.test(value);
};

/**
 * Validates email format
 * @param email - Email string
 * @returns boolean indicating if email is valid
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates if string is not empty or only whitespace
 * @param value - String to validate
 * @returns boolean indicating if string is valid
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};
