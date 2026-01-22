/**
 * Experience Card Component
 * Displays an individual experience with user info and actions
 */

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Experience } from '../../types';
import { ICONS } from '../../constants/icons';
import { Avatar, Badge } from '../ui';

interface ExperienceCardProps {
  experience: Experience;
  onSelect?: (exp: Experience) => void;
  isOwner?: boolean;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
  onAvatarClick?: (user: any) => void;
  onFollowToggle?: (experienceId: string, isFollowing: boolean) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  experience, 
  isOwner = false, 
  onDelete, 
  onArchive, 
  onAvatarClick,
  onFollowToggle
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isFollowing, setIsFollowing] = useState(experience.isFollowing || false);

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAvatarClick && experience.user) {
      onAvatarClick(experience.user);
    }
  };

  const handleMenuAction = (action: () => void) => {
    action();
    setShowMenu(false);
  };

  /**
   * Handles follow/unfollow toggle
   * TODO: Backend Integration - Call API endpoint to update follow status
   * Endpoint: POST /api/experiences/{experienceId}/follow
   * Body: { isFollowing: boolean }
   */
  const handleFollowToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFollowingState = !isFollowing;
    setIsFollowing(newFollowingState);
    
    // TODO: Backend Integration - Replace with actual API call
    // await experienceService.toggleFollow(experience.id, newFollowingState);
    
    if (onFollowToggle) {
      onFollowToggle(experience.id, newFollowingState);
    }
  };

  return (
    <div className="group bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-all duration-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar
            src={experience.user?.avatar || ''}
            alt={experience.user?.name || 'User'}
            size="md"
            onClick={onAvatarClick ? handleAvatarClick : undefined}
          />
          <div>
            <h4 className="text-sm font-bold text-zinc-100">{experience.user?.name}</h4>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">{experience.user?.helpedCount} Helped</span>
              <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
              <span className="text-xs text-green-500 font-medium">Helpful</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="success">
            {ICONS.ShieldCheck}
            Verified
          </Badge>
          
          {/* Owner Menu */}
          {isOwner && (
            <div className="relative">
              <button 
                onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
                className="p-1 text-zinc-500 hover:text-white transition-colors"
                aria-label="More options"
              >
                {ICONS.MoreVertical}
              </button>
              {showMenu && (
                <div className="absolute right-0 top-8 w-36 glass rounded-xl py-1 z-20 shadow-2xl border border-zinc-800">
                  {onArchive && (
                    <button 
                      onClick={() => handleMenuAction(() => onArchive(experience.id))} 
                      className="w-full px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 text-left flex items-center gap-2"
                    >
                      {ICONS.Archive} Archive
                    </button>
                  )}
                  {onDelete && (
                    <button 
                      onClick={() => handleMenuAction(() => onDelete(experience.id))} 
                      className="w-full px-4 py-2 text-xs text-red-400 hover:bg-zinc-800 text-left flex items-center gap-2"
                    >
                      {ICONS.Trash2} Delete
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold group-hover:text-white transition-colors flex-1">
            {experience.title}
          </h3>
          {!isOwner && (
            <button
              onClick={handleFollowToggle}
              className={`ml-3 p-2 rounded-full transition-all ${
                isFollowing 
                  ? 'bg-zinc-800 text-red-400 hover:bg-zinc-700' 
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
              }`}
              aria-label={isFollowing ? 'Unfollow' : 'Follow'}
              title={isFollowing ? 'Unfollow experience' : 'Follow experience'}
            >
              {isFollowing ? (
                <Heart size={16} fill="currentColor" />
              ) : (
                ICONS.Heart
              )}
            </button>
          )}
        </div>
        
        {isExpanded && (
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed animate-in fade-in slide-in-from-top-1">
            {experience.description}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
        <a
          href={experience.proofUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {ICONS.Link2}
          <span className="text-xs font-medium">View Proof</span>
        </a>
        
        {!isOwner && (
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full text-xs font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-white/5">
            Request Help
            {ICONS.ArrowUpRight}
          </button>
        )}
      </div>
    </div>
  );
};
