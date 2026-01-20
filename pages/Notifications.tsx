
import React from 'react';
import { ICONS, MOCK_NOTIFICATIONS } from '../constants';

export const NotificationsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-8">Notifications</h2>
      <div className="space-y-4">
        {MOCK_NOTIFICATIONS.map(notif => (
          <div 
            key={notif.id}
            className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
              {notif.title.includes('Karma') ? ICONS.ShieldCheck : ICONS.Zap}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm text-zinc-100">{notif.title}</h4>
                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest shrink-0">{notif.time}</span>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">{notif.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
