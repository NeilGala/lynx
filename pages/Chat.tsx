
import React, { useState } from 'react';
import { ICONS, MOCK_CHATS, MOCK_EXPERIENCES } from '../constants';
// Fix: Import X from lucide-react to resolve the 'Cannot find name X' error on line 44
import { X } from 'lucide-react';

export const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  if (!selectedChat) {
    return (
      <div className="animate-in fade-in duration-500">
        <h2 className="text-3xl font-bold mb-8">Messages</h2>
        <div className="space-y-2">
          {MOCK_CHATS.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all"
            >
              <img src={chat.avatar} className="w-12 h-12 rounded-full border border-zinc-800" alt={chat.name} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="font-bold text-sm">{chat.name}</h4>
                  <span className="text-[10px] text-zinc-600 font-bold">{chat.time}</span>
                </div>
                <p className="text-zinc-500 text-xs truncate">{chat.lastMsg}</p>
              </div>
              <div className="text-zinc-600">
                {ICONS.ChevronRight}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const chat = MOCK_CHATS.find(c => c.id === selectedChat);

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="glass border border-zinc-800 rounded-2xl p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => setSelectedChat(null)} className="text-zinc-500 hover:text-white mr-2">
            <X size={20} className="rotate-90" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800">
             <img src={chat?.avatar} className="w-full h-full object-cover" alt="Chat partner" />
          </div>
          <div>
            <h3 className="text-sm font-bold flex items-center gap-2">
              {chat?.name}
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            </h3>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              Discussing: {MOCK_EXPERIENCES[1].title}
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold rounded-full transition-colors uppercase tracking-widest">
          Helpful
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-6 mb-6 hide-scrollbar">
        <div className="flex flex-col gap-1 max-w-[85%]">
          <div className="text-[9px] text-zinc-600 font-bold ml-1 uppercase">{chat?.name.toUpperCase()} • 10:24 AM</div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl rounded-tl-none text-zinc-300 text-sm leading-relaxed">
            Hi Alex! Transitioning from Seed to Series B is definitely a wild ride. The most important thing is standardizing documentation early.
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-[85%] self-end items-end">
          <div className="text-[9px] text-zinc-600 font-bold mr-1 uppercase">YOU • 10:26 AM</div>
          <div className="bg-zinc-100 text-zinc-950 p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed font-semibold">
            Hey {chat?.name.split(' ')[0]}! Thanks for the quick reply. We're mostly struggling with knowledge silos across squads.
          </div>
        </div>
      </div>

      <div className="relative">
        <input 
          type="text"
          placeholder="Type a message..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-zinc-700 text-sm transition-all shadow-2xl"
        />
        <button className="absolute right-2 top-2 bottom-2 w-10 bg-white text-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-200 transition-colors">
          {ICONS.ChevronRight}
        </button>
      </div>
    </div>
  );
};
