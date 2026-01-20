
import React, { useState } from 'react';
import { ICONS, MOCK_USER, MOCK_EXPERIENCES } from '../constants';
import { ExperienceCard } from '../components/ExperienceCard';
import { Experience } from '../types';

interface ProfilePageProps {
  user?: any;
  isViewOnly?: boolean;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user = MOCK_USER, isViewOnly = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);
  const [showAddExp, setShowAddExp] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="relative group">
          <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-900">
             <img src={avatar} alt={user.name} className="w-full h-full object-cover" />
             {isEditing && (
               <label className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                 <input type="file" className="hidden" onChange={(e) => {
                   const file = e.target.files?.[0];
                   if (file) setAvatar(URL.createObjectURL(file));
                 }} />
                 <span className="text-[10px] font-bold uppercase">Change</span>
               </label>
             )}
          </div>
        </div>

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
          
          <div className="flex gap-10">
            <div>
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Karma</p>
              <p className="text-xl font-bold">{user.karma}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Helped</p>
              <p className="text-xl font-bold">{user.helpedCount}</p>
            </div>
          </div>
        </div>

        {!isViewOnly && (
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${isEditing ? 'bg-zinc-100 text-zinc-900 border-white' : 'bg-zinc-800 text-zinc-100 border-zinc-700'}`}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        )}
      </div>

      {/* Experiences */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Shared Experiences</h3>
          {!isViewOnly && (
            <button 
              onClick={() => setShowAddExp(true)}
              className="flex items-center gap-2 text-zinc-100 bg-zinc-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-700 transition-all"
            >
              {ICONS.Plus} New Experience
            </button>
          )}
        </div>

        {showAddExp && !isViewOnly && (
          <div className="mb-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl animate-in slide-in-from-top-4">
            <h4 className="font-bold mb-4">Share a New Experience</h4>
            <div className="space-y-4">
              <input type="text" placeholder="Title (e.g. Scaled team to 50 people)" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700" />
              <textarea placeholder="Tell the story of how you did it..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700" rows={3} />
              <input type="text" placeholder="Proof URL (LinkedIn post, blog, github)" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700" />
              <div className="flex gap-2">
                <button onClick={() => setShowAddExp(false)} className="px-6 py-2 bg-zinc-800 text-zinc-400 font-bold rounded-lg text-xs">Cancel</button>
                <button onClick={() => setShowAddExp(false)} className="px-6 py-2 bg-white text-zinc-900 font-bold rounded-lg text-xs">Publish</button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-6">
          {MOCK_EXPERIENCES.filter(e => isViewOnly ? e.userId === user.id : e.userId === MOCK_USER.id).map(exp => (
             <ExperienceCard 
              key={exp.id} 
              experience={exp as Experience} 
              isOwner={!isViewOnly}
              onDelete={(id) => console.log('Delete', id)}
              onArchive={(id) => console.log('Archive', id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
