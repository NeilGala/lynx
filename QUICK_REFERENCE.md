# Quick Reference Guide

## 🎯 Common Tasks

### Adding a New UI Component

```typescript
// 1. Create component file
// src/components/ui/MyComponent.tsx
import React from 'react';
import { cn } from '@/utils/classNames';

export interface MyComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const MyComponent: React.FC<MyComponentProps> = ({ 
  children, 
  variant = 'primary' 
}) => {
  return (
    <div className={cn('base-classes', variant === 'primary' && 'primary-classes')}>
      {children}
    </div>
  );
};

// 2. Export from index.ts
// src/components/ui/index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';

// 3. Use in pages
import { MyComponent } from '@/components/ui';
```

### Adding a New API Endpoint

```typescript
// 1. Add method to service
// src/services/api/user.service.ts
async getNotifications(): Promise<ApiResponse<Notification[]>> {
  console.log('[User] Fetching notifications');
  // TODO: Implement API call
  // return await apiClient.get('/users/notifications');
  throw new Error('API not implemented');
}

// 2. Use in component
import { userService } from '@/services/api';

const fetchNotifications = async () => {
  try {
    const response = await userService.getNotifications();
    if (response.success) {
      setNotifications(response.data);
    }
  } catch (error) {
    console.error('Failed to fetch notifications:', error);
  }
};
```

### Adding a New Page

```typescript
// 1. Create page component
// src/pages/Settings.tsx
import React from 'react';
import { Button } from '@/components/ui';

export const SettingsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      {/* Page content */}
    </div>
  );
};

// 2. Export from pages/index.ts
export { SettingsPage } from './Settings';

// 3. Add to App.tsx routing
import { SettingsPage } from '@/pages';

// In renderContent():
case 'settings':
  return <SettingsPage />;
```

### Creating a Custom Hook

```typescript
// 1. Create hook file
// src/hooks/useFeature.ts
import { useState, useEffect } from 'react';

export const useFeature = (param: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Hook logic
  }, [param]);

  return { data, loading };
};

// 2. Export from hooks/index.ts
export { useFeature } from './useFeature';

// 3. Use in component
import { useFeature } from '@/hooks';

const MyComponent = () => {
  const { data, loading } = useFeature('value');
  // ...
};
```

### Adding a Utility Function

```typescript
// 1. Add to appropriate utils file or create new one
// src/utils/format.ts
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// 2. Use in components
import { formatCurrency } from '@/utils/format';

const price = formatCurrency(1234.56); // "$1,234.56"
```

## 📦 Import Patterns

```typescript
// UI Components
import { Button, Input, Card } from '@/components/ui';

// Feature Components
import { Layout, ExperienceCard } from '@/components/features';

// Pages
import { SearchPage, ProfilePage } from '@/pages';

// Services
import { authService, userService } from '@/services/api';

// Hooks
import { useAuth, useDebounce } from '@/hooks';

// Utils
import { validateEmail, formatNumber } from '@/utils';

// Types
import type { User, Experience } from '@/types';

// Constants
import { ICONS } from '@/constants/icons';

// Config
import { APP_CONFIG } from '@/config/app.config';
```

## 🔍 Finding Code

```bash
# Find all TODO comments (backend integration points)
grep -r "TODO:" src/

# Find all uses of a component
grep -r "ExperienceCard" src/

# Find all API service calls
grep -r "Service" src/services/

# Find all type definitions
grep -r "export interface" src/types/
```

## 🐛 Debugging

### Console Logs
All service calls have console.log statements for debugging:
```typescript
console.log('[Service] Action:', data);
```

Search for these to understand data flow:
```bash
grep -r "console.log" src/services/
```

### React DevTools
- Install React DevTools browser extension
- Inspect component props and state
- Track component re-renders

## 🎨 Styling Patterns

### Conditional Classes
```typescript
import { cn } from '@/utils/classNames';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' ? 'primary-class' : 'secondary-class'
)} />
```

### Common Class Patterns
```typescript
// Card
"bg-zinc-900 border border-zinc-800 rounded-2xl p-5"

// Button
"px-4 py-2 bg-white text-zinc-900 rounded-xl font-bold hover:bg-zinc-200"

// Input
"bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-700"

// Text
"text-zinc-500" // Secondary text
"text-zinc-100" // Primary text
"text-white" // Emphasis
```

## 🔐 Environment Variables

```bash
# .env file
VITE_API_BASE_URL=http://localhost:3001/api

# Access in code
import { APP_CONFIG } from '@/config/app.config';
const apiUrl = APP_CONFIG.api.baseUrl;
```

## 🚀 Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit
```

## 📊 Code Organization Rules

1. **One component per file** - Except small related sub-components
2. **Export at bottom** - Or use barrel exports (index.ts)
3. **Props interface above component** - For easy reference
4. **Hooks at top of component** - Before any logic
5. **Helper functions below component** - Or in utils/
6. **Constants in UPPER_CASE** - When truly constant

## ⚡ Performance Tips

```typescript
// Use debounce for search
const debouncedQuery = useDebounce(query, 300);

// Memoize expensive computations
const filtered = useMemo(() => {
  return items.filter(item => /* ... */);
}, [items]);

// Memoize callbacks
const handleClick = useCallback(() => {
  /* ... */
}, [dependencies]);
```

## 🎯 Best Practices Checklist

- [ ] Component has TypeScript interface for props
- [ ] API calls have TODO comments for backend integration
- [ ] Reusable logic extracted to hooks or utils
- [ ] Imports use path aliases (@/)
- [ ] Error handling implemented
- [ ] Loading states handled
- [ ] Responsive design considered
- [ ] Accessibility attributes added (aria-label, alt, etc.)

---

**Need more help?** Check `DEVELOPER_GUIDE.md` for comprehensive documentation!
