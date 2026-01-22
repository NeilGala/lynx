# Lynx - Experience-First Mentorship Platform

A modern, professional React application built with TypeScript, Vite, and industry-standard architecture patterns.

## 🏗️ Project Structure

```
lynx/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/             # Base UI components (Button, Input, Card, etc.)
│   │   └── features/       # Feature-specific components (Layout, ExperienceCard, etc.)
│   ├── pages/              # Page components
│   ├── services/           # API service layer
│   │   └── api/           # API client and service modules
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   ├── config/             # Configuration files
│   ├── App.tsx            # Main app component
│   └── index.tsx          # Application entry point
├── public/                 # Static assets
└── index.html             # HTML template
```

## 🎯 Architecture Principles

### DRY (Don't Repeat Yourself)
- Reusable UI components in `components/ui/`
- Shared utilities in `utils/`
- Centralized constants and configuration

### Separation of Concerns
- **Components**: UI presentation logic
- **Pages**: Route-level components
- **Services**: Business logic and API calls
- **Hooks**: Stateful logic reuse
- **Utils**: Pure helper functions

### Scalability
- Modular folder structure
- Barrel exports (`index.ts`) for clean imports
- Type-safe interfaces
- Path aliases for cleaner imports

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔌 Backend Integration Guide

### API Configuration

1. Create `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:3001/api
```

2. Update `src/config/app.config.ts` with your API settings

### Service Layer

All API calls are centralized in `src/services/api/`:

- **authService**: Authentication (login, logout, OTP)
- **userService**: User profile management
- **experienceService**: Experience CRUD operations
- **requestService**: Help request management

#### Example: Implementing an API Call

```typescript
// In src/services/api/auth.service.ts
async sendOTP(phoneNumber: string, countryCode: string): Promise<ApiResponse<void>> {
  return await apiClient.post('/auth/send-otp', { phoneNumber, countryCode });
}
```

#### Using in Components

```typescript
import { authService } from '@/services/api';

const handleLogin = async () => {
  const response = await authService.sendOTP(phone, countryCode);
  if (response.success) {
    // Handle success
  }
};
```

### TODO Comments

Search for `TODO:` comments throughout the codebase to find integration points:

```bash
# Find all backend integration points
grep -r "TODO:" src/
```

## 📁 Key Files and Their Purpose

### Configuration
- `src/config/app.config.ts` - Application-wide settings
- `src/config/countries.config.ts` - Country data for phone verification

### Constants
- `src/constants/icons.tsx` - Centralized icon components
- `src/constants/mockData.ts` - Mock data for development (replace with API)

### Services
- `src/services/api/client.ts` - Base HTTP client
- `src/services/api/*.service.ts` - Feature-specific API services

### Components
- `src/components/ui/` - Reusable UI building blocks
- `src/components/features/` - Complex feature components

### Utilities
- `src/utils/validation.ts` - Input validation functions
- `src/utils/format.ts` - Data formatting helpers
- `src/utils/classNames.ts` - CSS class utilities

## 🎨 Styling

- **Tailwind CSS** via CDN (configured in `index.html`)
- **Glass morphism** effects for modern UI
- **Dark theme** with zinc color palette
- **Responsive design** with mobile-first approach

## 🔐 Authentication Flow

1. User enters phone number → `AuthScreen` component
2. OTP sent → `authService.sendOTP()` [TODO: Backend integration]
3. OTP verified → `authService.verifyOTP()` [TODO: Backend integration]
4. JWT token stored in localStorage
5. User redirected to main app

## 📊 State Management

### Local State
- `useState` for component-level state
- Custom hooks for shared logic

### Global State
Currently using prop drilling. For scaling, consider:
- Context API for auth state
- Zustand or Redux for complex state

### Example Custom Hook

```typescript
import { useAuth } from '@/hooks';

const MyComponent = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <Login />;
  }
  
  return <Dashboard user={user} />;
};
```

## 🧩 Adding New Features

### 1. Create API Service

```typescript
// src/services/api/feature.service.ts
export class FeatureService {
  async getFeatures(): Promise<ApiResponse<Feature[]>> {
    return await apiClient.get('/features');
  }
}

export const featureService = new FeatureService();
```

### 2. Create Types

```typescript
// src/types/index.ts
export interface Feature {
  id: string;
  name: string;
  // ...
}
```

### 3. Create Page Component

```typescript
// src/pages/Feature.tsx
import React from 'react';
import { featureService } from '@/services/api';

export const FeaturePage: React.FC = () => {
  // Component logic
  return <div>Feature Page</div>;
};
```

### 4. Add Route (if needed)

Update `App.tsx` to include the new page in routing logic.

## 🧪 Testing (Future)

Recommended testing stack:
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

### Environment Variables

Ensure all environment variables are set:
- `VITE_API_BASE_URL` - Backend API URL

### Recommended Platforms
- **Vercel** - Zero config deployment
- **Netlify** - Easy static hosting
- **AWS S3 + CloudFront** - Scalable solution

## 📝 Code Standards

### TypeScript
- Use explicit types for function parameters and returns
- Define interfaces for all data structures
- Avoid `any` type

### React
- Functional components with hooks
- Props interfaces for all components
- Descriptive component and variable names

### Imports
- Use path aliases (`@/` prefix)
- Group imports: external → internal → relative
- Use barrel exports from `index.ts` files

### Comments
- Document complex logic
- Add TODO comments for backend integration points
- Use JSDoc for public APIs

## 🤝 Contributing

When adding new code:

1. **Follow existing patterns** - Check similar components for consistency
2. **Keep DRY** - Extract reusable logic to utilities/hooks
3. **Type everything** - Add TypeScript interfaces
4. **Comment TODOs** - Mark backend integration points
5. **Test locally** - Ensure no breaking changes

## 📞 Support

For questions or issues, please refer to the inline documentation or TODOs in the codebase.

## 📄 License

Copyright © 2025 Lynx Experience Inc. All Rights Reserved.
