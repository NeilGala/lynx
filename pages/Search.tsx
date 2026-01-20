
import React, { useState } from 'react';
import { ICONS, MOCK_EXPERIENCES } from '../constants';
import { ExperienceCard } from '../components/ExperienceCard';
import { Experience } from '../types';

export const SearchPage: React.FC<{ onUserClick: (user: any) => void }> = ({ onUserClick }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering', 'Career', 'Marketing', 'Leadership', 'Design'];

  const filteredExperiences = MOCK_EXPERIENCES
    .filter(exp => 
      (selectedCategory === 'All' || exp.category === selectedCategory) &&
      (exp.title.toLowerCase().includes(query.toLowerCase()) || exp.description.toLowerCase().includes(query.toLowerCase()))
    )
    .sort((a, b) => b.helpedCount - a.helpedCount);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Find your next breakthrough.
        </h1>
        <p className="text-zinc-400 text-base max-w-xl mx-auto">
          Connect with people who have already been where you're trying to go.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto mb-10">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-zinc-500">
          {ICONS.Search}
        </div>
        <input 
          type="text"
          placeholder="I want to learn about scaling teams..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-zinc-700 text-base transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-8 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${
              selectedCategory === cat 
                ? 'bg-zinc-100 border-zinc-100 text-zinc-900' 
                : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredExperiences.map((exp) => (
          <ExperienceCard 
            key={exp.id} 
            experience={exp as Experience} 
            onAvatarClick={onUserClick}
          />
        ))}
      </div>
    </div>
  );
};
