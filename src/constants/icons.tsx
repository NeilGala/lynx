/**
 * Icon Constants
 * Centralized icon components for consistent usage across the app
 */

import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Star, 
  Search, 
  MessageSquare, 
  Bell, 
  Trophy, 
  User, 
  LogOut, 
  ChevronRight, 
  Check, 
  X, 
  ArrowUpRight, 
  Link2, 
  Plus, 
  MoreVertical, 
  Trash2, 
  Archive, 
  ChevronDown,
  Heart,
  Home
} from 'lucide-react';

const DEFAULT_SIZE = 18;

export const ICONS = {
  ShieldCheck: <ShieldCheck size={DEFAULT_SIZE} />,
  Zap: <Zap size={DEFAULT_SIZE} />,
  Award: <Award size={DEFAULT_SIZE} />,
  Star: <Star size={DEFAULT_SIZE} />,
  Search: <Search size={DEFAULT_SIZE} />,
  MessageSquare: <MessageSquare size={DEFAULT_SIZE} />,
  Bell: <Bell size={DEFAULT_SIZE} />,
  Trophy: <Trophy size={DEFAULT_SIZE} />,
  User: <User size={DEFAULT_SIZE} />,
  LogOut: <LogOut size={DEFAULT_SIZE} />,
  ChevronRight: <ChevronRight size={DEFAULT_SIZE} />,
  Check: <Check size={DEFAULT_SIZE} />,
  X: <X size={DEFAULT_SIZE} />,
  ArrowUpRight: <ArrowUpRight size={DEFAULT_SIZE} />,
  Link2: <Link2 size={DEFAULT_SIZE} />,
  Plus: <Plus size={DEFAULT_SIZE} />,
  MoreVertical: <MoreVertical size={DEFAULT_SIZE} />,
  Trash2: <Trash2 size={16} />,
  Archive: <Archive size={16} />,
  ChevronDown: <ChevronDown size={DEFAULT_SIZE} />,
  Heart: <Heart size={DEFAULT_SIZE} />,
  Home: <Home size={DEFAULT_SIZE} />,
} as const;
