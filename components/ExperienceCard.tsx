
import React, { useState } from 'react';
import { Experience } from '../types';
import { ICONS, MOCK_USER } from '../constants';

interface ExperienceCardProps {
  experience: Experience;
  onSelect?: (exp: Experience) => void;
  isOwner?: boolean;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
  onAvatarClick?: (user: any) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isOwner, onDelete, onArchive, onAvatarClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div 
      className={`group bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-all duration-200 shadow-xl overflow-hidden`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div 
            onClick={(e) => { e.stopPropagation(); onAvatarClick?.(experience.user); }}
            className={`w-10 h-10 rounded-full overflow-hidden border border-zinc-800 ${onAvatarClick ? 'cursor-pointer hover:opacity-80' : ''}`}
          >
            <img src={experience.user?.avatar} alt={experience.user?.name} className="w-full h-full object-cover" />
          </div>
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
          <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-[9px] font-bold uppercase tracking-wider text-zinc-400">
            {ICONS.ShieldCheck}
            Verified
          </div>
          {isOwner && (
            <div className="relative">
              <button 
                onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
                className="p-1 text-zinc-500 hover:text-white transition-colors"
              >
                {ICONS.MoreVertical}
              </button>
              {showMenu && (
                <div className="absolute right-0 top-8 w-36 glass rounded-xl py-1 z-20 shadow-2xl border border-zinc-800">
                  <button onClick={() => { onArchive?.(experience.id); setShowMenu(false); }} className="w-full px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 text-left flex items-center gap-2">
                    {ICONS.Archive} Archive
                  </button>
                  <button onClick={() => { onDelete?.(experience.id); setShowMenu(false); }} className="w-full px-4 py-2 text-xs text-red-400 hover:bg-zinc-800 text-left flex items-center gap-2">
                    {ICONS.Trash2} Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
        <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
          {experience.title}
        </h3>
        
        {isExpanded && (
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed animate-in fade-in slide-in-from-top-1">
            {experience.description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
        <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
          {ICONS.Link2}
          <span className="text-xs font-medium">View Proof</span>
        </div>
        
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
