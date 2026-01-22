/**
 * Search/Discover Page
 * Main discovery page for finding experiences
 */

import React, { useState } from 'react';
import { ICONS } from '../constants/icons';
import { MOCK_EXPERIENCES } from '../constants/mockData';
import { ExperienceCard } from '../components/features';
import { Experience } from '../types';
import { useDebounce } from '../hooks';

interface SearchPageProps {
  onUserClick: (user: any) => void;
}

const CATEGORIES = ['All', 'Engineering', 'Career', 'Marketing', 'Leadership', 'Design'];

export const SearchPage: React.FC<SearchPageProps> = ({ onUserClick }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Debounce search query for better performance
  // TODO: Replace with actual API call when backend is integrated
  const debouncedQuery = useDebounce(query, 300);

  /**
   * Filters experiences based on search query and category
   * TODO: Replace with API call to /api/experiences/search
   */
  const filteredExperiences = MOCK_EXPERIENCES
    .filter(exp => {
      const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
      const matchesQuery = 
        exp.title.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
        exp.description.toLowerCase().includes(debouncedQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    })
    .sort((a, b) => b.helpedCount - a.helpedCount);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Find your next breakthrough.
        </h1>
        <p className="text-zinc-400 text-base max-w-xl mx-auto">
          Connect with people who have already been where you're trying to go.
        </p>
      </div>

      {/* Search Input */}
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

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-8 hide-scrollbar">
        {CATEGORIES.map((cat) => (
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

      {/* Results */}
      <div className="flex flex-col gap-6">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((exp) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp as Experience} 
              onAvatarClick={onUserClick}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-sm">
              No experiences found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
