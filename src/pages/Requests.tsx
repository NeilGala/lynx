/**
 * Requests Page
 * Displays sent and received help requests
 */

import React, { useState } from 'react';
import { ICONS } from '../constants/icons';
import { MOCK_USER, MOCK_EXPERIENCES } from '../constants/mockData';
import { Button, Avatar } from '../components/ui';

type RequestTab = 'received' | 'sent';

// TODO: Replace with actual data from backend API
const MOCK_RECEIVED_REQUESTS = [
  { id: 'r1', name: 'Jordan Miller', karma: 240, rank: 'Pathfinder', time: '2h ago', title: MOCK_EXPERIENCES[0].title, msg: "I'm currently at a Series A company and we're seeing massive churn. I saw you navigated a unicorn through a similar growth phase.", avatar: 'https://picsum.photos/seed/u4/200' },
  { id: 'r2', name: 'Elena G.', karma: 5400, rank: 'Guide', time: '5h ago', title: MOCK_EXPERIENCES[0].title, msg: "Working on a side project that needs better technical documentation management.", avatar: 'https://picsum.photos/seed/l4/200' },
  { id: 'r3', name: 'Kevin Zhang', karma: 1800, rank: 'Pathfinder', time: '1d ago', title: 'Scaling from Seed to Series B', msg: "We're about to close our Series A and I need guidance on building the engineering org.", avatar: 'https://picsum.photos/seed/kevin/200' },
  { id: 'r4', name: 'Sophia Martinez', karma: 3200, rank: 'Guide', time: '1d ago', title: 'Scaling from Seed to Series B', msg: "Looking to learn about managing technical debt during hypergrowth.", avatar: 'https://picsum.photos/seed/sophia/200' },
  { id: 'r5', name: 'James Wilson', karma: 890, rank: 'Novice', time: '2d ago', title: 'Scaling from Seed to Series B', msg: "First-time manager here, would love to hear about your experience with hiring.", avatar: 'https://picsum.photos/seed/james/200' },
  { id: 'r6', name: 'Aisha Patel', karma: 4100, rank: 'Guide', time: '2d ago', title: 'Scaling from Seed to Series B', msg: "Transitioning from IC to EM role, need help with the leadership mindset.", avatar: 'https://picsum.photos/seed/aisha/200' },
  { id: 'r7', name: 'Lucas Brown', karma: 2600, rank: 'Pathfinder', time: '3d ago', title: 'Scaling from Seed to Series B', msg: "How did you handle oncall and production incidents during rapid scaling?", avatar: 'https://picsum.photos/seed/lucas/200' },
  { id: 'r8', name: 'Maya Johnson', karma: 1500, rank: 'Pathfinder', time: '4d ago', title: 'Scaling from Seed to Series B', msg: "Would love to discuss compensation structures for growing teams.", avatar: 'https://picsum.photos/seed/maya/200' },
];

const MOCK_SENT_REQUESTS = [
  { id: 's1', name: 'Sarah Chen', status: 'Pending', time: '1d ago', title: 'Self-taught to Senior SWE at Stripe', avatar: 'https://picsum.photos/seed/schen/200' },
  { id: 's2', name: 'David V.', status: 'Accepted', time: '3d ago', title: 'Managing Large Teams', avatar: 'https://picsum.photos/seed/l1/200' },
  { id: 's3', name: 'Emily Tran', status: 'Pending', time: '4d ago', title: 'Breaking into Product Management', avatar: 'https://picsum.photos/seed/emily/200' },
  { id: 's4', name: 'Raj Patel', status: 'Accepted', time: '5d ago', title: 'Mastering System Design Interviews', avatar: 'https://picsum.photos/seed/raj/200' },
  { id: 's5', name: 'Jessica Wong', status: 'Pending', time: '1w ago', title: 'Building a Design System from Scratch', avatar: 'https://picsum.photos/seed/jessica/200' },
  { id: 's6', name: 'David Park', status: 'Declined', time: '1w ago', title: 'Negotiating $300K+ Offers', avatar: 'https://picsum.photos/seed/david/200' },
  { id: 's7', name: 'Marcus Aurelius', status: 'Accepted', time: '2w ago', title: 'Growth Hacking for SaaS', avatar: 'https://picsum.photos/seed/marcus/200' },
  { id: 's8', name: 'Lisa Anderson', status: 'Pending', time: '2w ago', title: 'Content Marketing that Actually Converts', avatar: 'https://picsum.photos/seed/lisa/200' },
];

export const RequestsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RequestTab>('received');

  /**
   * Handles accepting a request
   * TODO: Integrate with backend requestService.acceptRequest()
   */
  const handleAcceptRequest = (requestId: string) => {
    console.log('[Requests] Accepting request:', requestId);
    // TODO: await requestService.acceptRequest(requestId);
  };

  /**
   * Handles declining a request
   * TODO: Integrate with backend requestService.declineRequest()
   */
  const handleDeclineRequest = (requestId: string) => {
    console.log('[Requests] Declining request:', requestId);
    // TODO: await requestService.declineRequest(requestId);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Requests</h2>
        <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button 
            onClick={() => setActiveTab('received')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'received' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Received
          </button>
          <button 
            onClick={() => setActiveTab('sent')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'sent' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Sent
          </button>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {activeTab === 'received' ? (
          /* Received Requests */
          MOCK_RECEIVED_REQUESTS.map(req => (
            <div key={req.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 transition-all hover:border-zinc-700">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Avatar src={req.avatar} alt={req.name} size="lg" />
                  <div>
                    <h4 className="font-bold text-sm">{req.name}</h4>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                      {req.karma} Karma • {req.rank}
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest px-2 py-1 bg-zinc-950 rounded-lg border border-zinc-800">
                  {req.time}
                </span>
              </div>
              
              <div className="mb-6">
                <p className="text-zinc-600 text-[10px] mb-2 uppercase tracking-widest font-black">Context</p>
                <h5 className="font-bold text-base mb-3 text-zinc-200">{req.title}</h5>
                <p className="text-zinc-400 text-sm italic leading-relaxed bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
                  "{req.msg}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  onClick={() => handleAcceptRequest(req.id)}
                  variant="primary" 
                  fullWidth
                  size="md"
                >
                  {ICONS.Check} Accept
                </Button>
                <Button 
                  onClick={() => handleDeclineRequest(req.id)}
                  variant="secondary"
                  size="md"
                >
                  {ICONS.X} Decline
                </Button>
              </div>
            </div>
          ))
        ) : (
          /* Sent Requests */
          MOCK_SENT_REQUESTS.map(req => (
            <div key={req.id} className="flex items-center gap-4 p-5 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
              <Avatar src={req.avatar} alt={req.name} size="lg" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm">{req.name}</h4>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    req.status === 'Accepted' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {req.status}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs font-medium mb-1 truncate max-w-[200px]">{req.title}</p>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{req.time}</p>
              </div>
              <button className="p-2 text-zinc-500 hover:text-white">
                {ICONS.ChevronRight}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
