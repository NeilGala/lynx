/**
 * Home Page
 * Displays followed experiences and related/recommended experiences
 */

import React, { useState } from 'react';
import { ICONS } from '../constants/icons';
import { MOCK_EXPERIENCES } from '../constants/mockData';
import { ExperienceCard } from '../components/features';
import { Experience } from '../types';

interface HomePageProps {
  onUserClick: (user: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onUserClick }) => {
  // TODO: Backend Integration - Fetch followed experiences from API
  // Endpoint: GET /api/users/me/followed-experiences
  const [followedExperiences, setFollowedExperiences] = useState<Experience[]>(
    // Mock data: First 10 experiences are followed for demonstration
    MOCK_EXPERIENCES.slice(0, 10).map(exp => ({ ...exp, isFollowing: true }))
  );

  // TODO: Backend Integration - Fetch recommended experiences based on followed ones
  // Endpoint: GET /api/experiences/recommendations
  // This should return experiences similar to the ones user follows
  const recommendedExperiences = MOCK_EXPERIENCES.slice(10);

  /**
   * Handles follow/unfollow toggle
   * TODO: Backend Integration - Update follow status in database
   * Endpoint: POST /api/experiences/{experienceId}/follow
   */
  const handleFollowToggle = (experienceId: string, isFollowing: boolean) => {
    // Update local state
    setFollowedExperiences(prev => {
      if (isFollowing) {
        // Add to followed list
        const expToFollow = [...MOCK_EXPERIENCES, ...recommendedExperiences]
          .find(e => e.id === experienceId);
        if (expToFollow) {
          return [...prev, { ...expToFollow, isFollowing: true }];
        }
      } else {
        // Remove from followed list
        return prev.filter(e => e.id !== experienceId);
      }
      return prev;
    });

    // TODO: Backend Integration - Persist follow status
    // await experienceService.toggleFollow(experienceId, isFollowing);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Your Feed
        </h1>
        <p className="text-zinc-400 text-base">
          Experiences you follow and personalized recommendations.
        </p>
      </div>

      {/* Followed Experiences Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="text-red-400">{ICONS.Heart}</div>
          <h2 className="text-xl font-bold">Following</h2>
          <span className="text-sm text-zinc-500">
            ({followedExperiences.length})
          </span>
        </div>

        {followedExperiences.length > 0 ? (
          <div className="flex flex-col gap-6">
            {followedExperiences.map((exp) => (
              <ExperienceCard 
                key={exp.id} 
                experience={exp} 
                onAvatarClick={onUserClick}
                onFollowToggle={handleFollowToggle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <div className="text-zinc-500 mb-3">{ICONS.Heart}</div>
            <p className="text-zinc-500 text-sm mb-2">
              You're not following any experiences yet.
            </p>
            <p className="text-zinc-600 text-xs">
              Click the heart icon on experiences to follow them.
            </p>
          </div>
        )}
      </div>

      {/* Recommended/Related Experiences Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="text-zinc-400">{ICONS.Star}</div>
          <h2 className="text-xl font-bold">Recommended for You</h2>
        </div>

        <div className="flex flex-col gap-6">
          {recommendedExperiences.map((exp) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              onAvatarClick={onUserClick}
              onFollowToggle={handleFollowToggle}
            />
          ))}
        </div>
      </div>

      {/* TODO: Backend Integration - Add infinite scroll/pagination
          When user scrolls to bottom, load more recommendations
          Endpoint: GET /api/experiences/recommendations?page={page} */}
    </div>
  );
};
