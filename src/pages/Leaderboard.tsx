/**
 * Leaderboard Page
 * Displays top users by karma and reputation
 */

import React from 'react';
import { ICONS } from '../constants/icons';
import { Avatar } from '../components/ui';
import { formatNumber } from '../utils/format';

// TODO: Replace with actual data from backend API
const MOCK_LEADERS = [
  { rank: 1, name: 'David V.', karma: 12500, helped: 412, badge: 'Luminary', avatar: 'https://picsum.photos/seed/l1/200' },
  { rank: 2, name: 'Sarah Chen', karma: 8900, helped: 310, badge: 'Mentor', avatar: 'https://picsum.photos/seed/l2/200' },
  { rank: 3, name: 'Marcus Aurelius', karma: 7200, helped: 189, badge: 'Guide', avatar: 'https://picsum.photos/seed/l3/200' },
  { rank: 4, name: 'Elena G.', karma: 5400, helped: 124, badge: 'Guide', avatar: 'https://picsum.photos/seed/l4/200' },
  { rank: 5, name: 'Tarek S.', karma: 4100, helped: 98, badge: 'Pathfinder', avatar: 'https://picsum.photos/seed/l5/200' },
  { rank: 6, name: 'Aisha K.', karma: 3800, helped: 76, badge: 'Pathfinder', avatar: 'https://picsum.photos/seed/l6/200' },
];

export const LeaderboardPage: React.FC = () => {
  const topThree = [MOCK_LEADERS[1], MOCK_LEADERS[0], MOCK_LEADERS[2]]; // 2nd, 1st, 3rd order
  const restOfLeaders = MOCK_LEADERS.slice(3);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">The Hall of Guides</h1>
        <p className="text-zinc-500">Reputation is the only currency here.</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-10 items-end">
        {topThree.map((leader, i) => {
          const isFirst = i === 1;
          return (
            <div key={leader.rank} className={`flex flex-col items-center ${isFirst ? 'pb-8' : ''}`}>
              <div className="relative mb-3">
                <Avatar
                  src={leader.avatar}
                  alt={leader.name}
                  size={isFirst ? 'xl' : 'lg'}
                  className={`border-4 ${isFirst ? 'border-zinc-100' : 'border-zinc-800'}`}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-0.5 text-[10px] font-black text-white">
                  #{leader.rank}
                </div>
              </div>
              <h4 className={`font-bold text-center ${isFirst ? 'text-lg' : 'text-sm'} truncate w-full`}>
                {leader.name}
              </h4>
              <p className="text-[10px] text-zinc-600 font-bold uppercase">
                {formatNumber(leader.karma)} K
              </p>
            </div>
          );
        })}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-zinc-800 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
          <div className="col-span-1">Rank</div>
          <div className="col-span-6">Member</div>
          <div className="col-span-5 text-right">Karma / Helped</div>
        </div>

        {/* Table Rows */}
        {restOfLeaders.map((leader, i) => (
          <div 
            key={leader.rank} 
            className={`grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-zinc-800/30 transition-colors ${
              i !== restOfLeaders.length - 1 ? 'border-b border-zinc-800/50' : ''
            }`}
          >
            <div className="col-span-1 font-bold text-zinc-500 text-sm">#{leader.rank}</div>
            <div className="col-span-6 flex items-center gap-3">
              <Avatar src={leader.avatar} alt={leader.name} size="sm" />
              <div>
                <div className="text-sm font-bold text-zinc-200">{leader.name}</div>
                <div className="text-[9px] text-zinc-600 font-bold uppercase">{leader.badge}</div>
              </div>
            </div>
            <div className="col-span-5 text-right">
              <div className="text-sm font-bold text-zinc-100">{formatNumber(leader.karma)}</div>
              <div className="text-[10px] text-zinc-600 font-bold uppercase">{leader.helped} helped</div>
            </div>
          </div>
        ))}
      </div>

      {/* User's Rank Card */}
      <div className="mt-8 p-6 glass rounded-3xl flex items-center justify-between border border-white/10">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-zinc-100 text-zinc-950 rounded-2xl flex items-center justify-center font-black text-lg shadow-xl shadow-white/10">
             #42
           </div>
           <div>
             <p className="text-sm font-bold text-white">Your Reputation Rank</p>
             <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
               Next rank: Mentor • +1,200 Karma
             </p>
           </div>
        </div>
        <button className="text-[10px] uppercase font-black text-white flex items-center gap-2 hover:gap-3 transition-all tracking-widest">
          Details {ICONS.ChevronRight}
        </button>
      </div>
    </div>
  );
};
