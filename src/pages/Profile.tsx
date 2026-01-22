/**
 * Profile Page
 * Displays user profile with experiences
 */

import React, { useState } from 'react';
import { ICONS } from '../constants/icons';
import { MOCK_USER, MOCK_EXPERIENCES } from '../constants/mockData';
import { ExperienceCard } from '../components/features';
import { Experience } from '../types';
import { Avatar, Button } from '../components/ui';
import { formatNumber } from '../utils/format';

interface ProfilePageProps {
  user?: any;
  isViewOnly?: boolean;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ 
  user = MOCK_USER, 
  isViewOnly = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);
  const [showAddExp, setShowAddExp] = useState(false);

  /**
   * Handles profile save
   * TODO: Integrate with backend user service
   */
  const handleSaveProfile = () => {
    // TODO: Call userService.updateProfile(user.id, { bio, avatar })
    console.log('Saving profile:', { bio, avatar });
    setIsEditing(false);
  };

  /**
   * Handles avatar upload
   * TODO: Integrate with backend file upload service
   */
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // TODO: Upload file to backend and get URL
      // const response = await userService.uploadAvatar(file);
      setAvatar(URL.createObjectURL(file));
    }
  };

  /**
   * Handles experience deletion
   * TODO: Integrate with backend experience service
   */
  const handleDeleteExperience = (id: string) => {
    // TODO: Call experienceService.deleteExperience(id)
    console.log('Delete experience:', id);
  };

  /**
   * Handles experience archiving
   * TODO: Integrate with backend experience service
   */
  const handleArchiveExperience = (id: string) => {
    // TODO: Call experienceService.archiveExperience(id)
    console.log('Archive experience:', id);
  };

  const userExperiences = MOCK_EXPERIENCES.filter(
    e => isViewOnly ? e.userId === user.id : e.userId === MOCK_USER.id
  );

  return (
    <div className="animate-in fade-in duration-500">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        {/* Avatar */}
        <div className="relative group">
          <Avatar 
            src={avatar} 
            alt={user.name} 
            size="xl"
            className="rounded-3xl shadow-2xl"
          />
          {isEditing && (
            <label className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity rounded-3xl">
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleAvatarChange}
              />
              <span className="text-[10px] font-bold uppercase text-white">Change</span>
            </label>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">{user.name}</h1>
          </div>
          
          {isEditing ? (
            <textarea 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-zinc-300 text-sm mb-4 focus:ring-1 focus:ring-zinc-700 focus:outline-none"
              rows={3}
            />
          ) : (
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed max-w-2xl">{bio}</p>
          )}
          
          {/* Stats */}
          <div className="flex gap-10">
            <div>
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Karma</p>
              <p className="text-xl font-bold">{formatNumber(user.karma)}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Helped</p>
              <p className="text-xl font-bold">{formatNumber(user.helpedCount)}</p>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        {!isViewOnly && (
          <Button
            onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
            variant={isEditing ? 'primary' : 'secondary'}
            size="md"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        )}
      </div>

      {/* Experiences Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
            Shared Experiences
          </h3>
          {!isViewOnly && (
            <button 
              onClick={() => setShowAddExp(true)}
              className="flex items-center gap-2 text-zinc-100 bg-zinc-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-700 transition-all"
            >
              {ICONS.Plus} New Experience
            </button>
          )}
        </div>

        {/* Add Experience Form */}
        {showAddExp && !isViewOnly && (
          <div className="mb-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl animate-in slide-in-from-top-4">
            <h4 className="font-bold mb-4">Share a New Experience</h4>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Title (e.g. Scaled team to 50 people)" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700" 
              />
              <textarea 
                placeholder="Tell the story of how you did it..." 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700" 
                rows={3} 
              />
              <input 
                type="text" 
                placeholder="Proof URL (LinkedIn post, blog, github)" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700" 
              />
              <div className="flex gap-2">
                <Button onClick={() => setShowAddExp(false)} variant="ghost" size="sm">
                  Cancel
                </Button>
                <Button 
                  onClick={() => {
                    // TODO: Call experienceService.createExperience()
                    setShowAddExp(false);
                  }} 
                  variant="primary" 
                  size="sm"
                >
                  Publish
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Experience List */}
        <div className="flex flex-col gap-6">
          {userExperiences.map(exp => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp as Experience} 
              isOwner={!isViewOnly}
              onDelete={handleDeleteExperience}
              onArchive={handleArchiveExperience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
