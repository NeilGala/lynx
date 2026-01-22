/**
 * Countries Configuration
 * Phone verification country codes and validation rules
 */

export interface CountryConfig {
  name: string;
  code: string;
  length: number;
}

export const COUNTRIES: CountryConfig[] = [
  { name: 'United States', code: '+1', length: 10 },
  { name: 'United Kingdom', code: '+44', length: 10 },
  { name: 'India', code: '+91', length: 10 },
  { name: 'Canada', code: '+1', length: 10 },
  { name: 'Germany', code: '+49', length: 11 },
];
