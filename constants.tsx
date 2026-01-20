
import React from 'react';
import { ShieldCheck, Zap, Award, Star, Search, MessageSquare, Bell, Trophy, User, LogOut, ChevronRight, Check, X, ArrowUpRight, Link2, Plus, MoreVertical, Trash2, Archive, ChevronDown } from 'lucide-react';

export const ICONS = {
  ShieldCheck: <ShieldCheck size={18} />,
  Zap: <Zap size={18} />,
  Award: <Award size={18} />,
  Star: <Star size={18} />,
  Search: <Search size={18} />,
  MessageSquare: <MessageSquare size={18} />,
  Bell: <Bell size={18} />,
  Trophy: <Trophy size={18} />,
  User: <User size={18} />,
  LogOut: <LogOut size={18} />,
  ChevronRight: <ChevronRight size={18} />,
  Check: <Check size={18} />,
  X: <X size={18} />,
  ArrowUpRight: <ArrowUpRight size={18} />,
  Link2: <Link2 size={18} />,
  Plus: <Plus size={18} />,
  MoreVertical: <MoreVertical size={18} />,
  Trash2: <Trash2 size={16} />,
  Archive: <Archive size={16} />,
  ChevronDown: <ChevronDown size={18} />,
};

export const COUNTRIES = [
  { name: 'United States', code: '+1', length: 10 },
  { name: 'United Kingdom', code: '+44', length: 10 },
  { name: 'India', code: '+91', length: 10 },
  { name: 'Canada', code: '+1', length: 10 },
  { name: 'Germany', code: '+49', length: 11 },
];

export const MOCK_USER = {
  id: 'u1',
  name: 'Alex Rivera',
  handle: '@arivera',
  bio: 'Product Designer & Engineering Manager. I help with career pivoting and high-growth team building.',
  avatar: 'https://picsum.photos/seed/arivera/200',
  karma: 1240,
  helpedCount: 42,
  rank: 'Guide' as const,
  badges: []
};

export const MOCK_EXPERIENCES = [
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
      rank: 'Mentor' as const,
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
      rank: 'Guide' as const,
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
