
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { SearchPage } from './pages/Search';
import { RequestsPage } from './pages/Requests';
import { ChatPage } from './pages/Chat';
import { LeaderboardPage } from './pages/Leaderboard';
import { ProfilePage } from './pages/Profile';
import { NotificationsPage } from './pages/Notifications';
import { LandingPage } from './pages/Landing';
import { ICONS, COUNTRIES } from './constants';

const AuthScreen: React.FC<{ onComplete: () => void, onBack: () => void }> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [loading, setLoading] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const selectedCountry = COUNTRIES[countryIndex];

  const handleNext = () => {
    setError('');
    if (step === 'phone') {
      if (!phone.trim()) {
        setError('Phone number cannot be empty.');
        return;
      }
      if (phone.replace(/\D/g, '').length !== selectedCountry.length) {
        setError(`Please enter a valid ${selectedCountry.length}-digit number for ${selectedCountry.name}.`);
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep('otp');
      }, 1000);
    } else {
      if (otp.some(digit => digit === '')) {
        setError('Please enter the full 6-digit code.');
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onComplete();
      }, 1000);
    }
  };

  const updateOtp = (val: string, index: number) => {
    if (!/^\d?$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white p-4">
      <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <button 
          onClick={onBack}
          className="mb-8 text-zinc-500 hover:text-zinc-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
        >
          <span className="rotate-180">{ICONS.ChevronRight}</span> Back to Home
        </button>
        
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-white/10">
            <span className="text-black font-black text-3xl tracking-tighter">L</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome to Lynx</h1>
          <p className="text-zinc-500 text-sm">
            {step === 'phone' 
              ? "We use phone verification to keep Lynx spam-free." 
              : "Enter the 6-digit code sent to your device."}
          </p>
        </div>

        <div className="space-y-6">
          {step === 'phone' ? (
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="relative w-32">
                  <select 
                    value={countryIndex}
                    onChange={(e) => setCountryIndex(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-700 text-sm appearance-none cursor-pointer"
                  >
                    {COUNTRIES.map((c, i) => (
                      <option key={c.name} value={i}>{c.code} {c.name.slice(0,2)}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                    {ICONS.ChevronDown}
                  </div>
                </div>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="555 000-0000"
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all text-lg"
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-2 justify-center">
              {otp.map((digit, i) => (
                <input 
                  key={i}
                  id={`otp-${i}`}
                  type="text" 
                  maxLength={1}
                  value={digit}
                  onChange={(e) => updateOtp(e.target.value, i)}
                  className="w-12 h-14 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
                />
              ))}
            </div>
          )}

          {error && <p className="text-red-400 text-[10px] font-bold uppercase text-center tracking-widest animate-pulse">{error}</p>}

          <button 
            onClick={handleNext}
            disabled={loading}
            className="w-full bg-white text-zinc-950 font-black py-4 rounded-2xl hover:bg-zinc-200 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-4 shadow-xl shadow-white/5"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-zinc-400 border-t-zinc-950 rounded-full animate-spin"></div>
            ) : (
              <>{step === 'phone' ? 'Send Code' : 'Verify & Continue'} {ICONS.ChevronRight}</>
            )}
          </button>

          {step === 'otp' && (
            <button onClick={() => setStep('phone')} className="w-full text-zinc-500 text-[10px] font-bold uppercase tracking-widest hover:text-zinc-300">
              Resend code or change number
            </button>
          )}
        </div>

        <p className="text-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-10 max-w-[240px] mx-auto leading-relaxed">
          By continuing, you agree to our trust-first guidelines and reputation system.
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'landing' | 'auth' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState('search');
  const [viewingUser, setViewingUser] = useState<any>(null);

  const handleUserClick = (user: any) => {
    setViewingUser(user);
    setActiveTab('profile');
  };

  const renderContent = () => {
    if (activeTab === 'profile' && viewingUser) {
      return <ProfilePage user={viewingUser} isViewOnly={true} />;
    }

    switch (activeTab) {
      case 'search': return <SearchPage onUserClick={handleUserClick} />;
      case 'requests': return <RequestsPage />;
      case 'chats': return <ChatPage />;
      case 'leaderboard': return <LeaderboardPage />;
      case 'profile': return <ProfilePage />;
      case 'notifications': return <NotificationsPage />;
      default: return <SearchPage onUserClick={handleUserClick} />;
    }
  };

  if (view === 'landing') {
    return <LandingPage onGetStarted={() => setView('auth')} />;
  }

  if (view === 'auth') {
    return <AuthScreen onComplete={() => setView('app')} onBack={() => setView('landing')} />;
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setViewingUser(null); }}>
      {renderContent()}
    </Layout>
  );
}
