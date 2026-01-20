
import React, { useState } from 'react';
import { ICONS, MOCK_USER } from '../constants';
import { User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems = [
    { id: 'search', label: 'Discover', icon: ICONS.Search },
    { id: 'requests', label: 'Requests', icon: ICONS.Zap },
    { id: 'chats', label: 'Chats', icon: ICONS.MessageSquare },
    { id: 'leaderboard', label: 'Leaderboard', icon: ICONS.Trophy },
    { id: 'notifications', label: 'Alerts', icon: ICONS.Bell },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 selection:bg-zinc-700">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab('search')}>
            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
              <span className="text-zinc-900 font-bold text-xl tracking-tighter">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">LYNX</span>
          </div>

          <div className="flex items-center gap-1 md:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === item.id 
                    ? 'bg-zinc-800 text-white shadow-lg' 
                    : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {item.icon}
                <span className="hidden md:block text-[11px] font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
              <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">K</span>
              <span className="text-zinc-100 text-xs font-bold">{MOCK_USER.karma}</span>
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-10 h-10 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-colors bg-zinc-900"
              >
                <img src={MOCK_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
              </button>

              {showProfileMenu && (
                <div className="absolute top-12 right-0 w-56 glass rounded-2xl py-2 shadow-2xl border border-zinc-800 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-zinc-800 mb-2">
                    <p className="text-sm font-bold text-white">{MOCK_USER.name}</p>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{MOCK_USER.handle}</p>
                  </div>
                  <button onClick={() => { setActiveTab('profile'); setShowProfileMenu(false); }} className="px-4 py-2.5 text-xs font-bold text-zinc-400 hover:bg-zinc-800 hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest">
                    {ICONS.User} My Profile
                  </button>
                  <button onClick={() => { setActiveTab('notifications'); setShowProfileMenu(false); }} className="px-4 py-2.5 text-xs font-bold text-zinc-400 hover:bg-zinc-800 hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest">
                    {ICONS.Bell} Notifications
                  </button>
                  <div className="border-t border-zinc-800 mt-2 pt-2">
                    <button className="px-4 py-2.5 text-xs font-bold text-red-400 hover:bg-zinc-800 w-full text-left flex items-center gap-2 transition-colors uppercase tracking-widest">
                      {ICONS.LogOut} Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-24 pb-12 px-4 max-w-2xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};
