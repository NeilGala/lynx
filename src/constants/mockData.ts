/**
 * Mock Data Constants
 * Temporary mock data for development
 * TODO: Replace with actual API calls when backend is integrated
 */

import { User, Experience } from '../types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Alex Rivera',
  handle: '@arivera',
  bio: 'Product Designer & Engineering Manager. I help with career pivoting and high-growth team building.',
  avatar: 'https://picsum.photos/seed/arivera/200',
  karma: 1240,
  helpedCount: 42,
  rank: 'Guide',
  badges: []
};

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    userId: 'u1',
    title: 'Scaling from Seed to Series B',
    description: 'I managed the engineering team through the most chaotic growth phase of a FinTech unicorn. Focused on culture, technical debt management, and rapid hiring.',
    proofUrl: 'https://linkedin.com/in/arivera',
    category: 'Engineering',
    helpedCount: 12,
    user: MOCK_USER
  },
  {
    id: 'e2',
    userId: 'u2',
    title: 'Self-taught to Senior SWE at Stripe',
    description: 'No degree, no bootcamps. Just pure grit and focused learning paths. Let me show you how I mastered systems design and algorithms while working a full-time service job.',
    proofUrl: 'https://stripe.com',
    category: 'Career',
    helpedCount: 89,
    user: {
      id: 'u2',
      name: 'Sarah Chen',
      handle: '@schen',
      avatar: 'https://picsum.photos/seed/schen/200',
      karma: 3500,
      helpedCount: 112,
      rank: 'Mentor',
      badges: [],
      bio: 'Lover of clean code and systems architecture.'
    }
  },
  {
    id: 'e3',
    userId: 'u3',
    title: 'Growth Hacking for SaaS',
    description: 'Scaled a B2B SaaS from $0 to $1M ARR in 14 months using zero paid ads.',
    proofUrl: 'https://twitter.com/growthmarketer',
    category: 'Marketing',
    helpedCount: 56,
    user: {
      id: 'u3',
      name: 'Marcus Aurelius',
      handle: '@marcus_growth',
      avatar: 'https://picsum.photos/seed/marcus/200',
      karma: 7200,
      helpedCount: 189,
      rank: 'Guide',
      badges: [],
      bio: 'Ex-Google, Ex-Meta. Just a student of growth.'
    }
  }
];

export const MOCK_CHATS = [
  { id: 'c1', name: 'Sarah Chen', lastMsg: 'I have a framework for cross-squad synchronization...', time: '10:27 AM', avatar: 'https://picsum.photos/seed/schen/200' },
  { id: 'c2', name: 'Jordan Miller', lastMsg: 'Thanks for the help yesterday!', time: 'Yesterday', avatar: 'https://picsum.photos/seed/u4/200' },
];

export const MOCK_NOTIFICATIONS = [
  { id: 'n1', title: 'New Help Request', body: 'Jordan Miller wants help with "Scaling from Seed to Series B"', time: '2h ago' },
  { id: 'n2', title: 'Karma Earned', body: 'You earned 50 Karma for helping Sarah Chen', time: '1d ago' },
  { id: 'n3', title: 'New Badge Available', body: 'Complete one more session to earn the "Pathfinder" badge', time: '3d ago' },
];
