
import React, { useState, useEffect, useRef } from 'react';
import { ICONS } from '../constants';

export const LandingPage: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDuality, setActiveDuality] = useState<'Mentor' | 'Mentee'>('Mentor');
  const [karmaCount, setKarmaCount] = useState(0);
  
  const bentoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Basic Reveal Logic
      const reveals = document.querySelectorAll('.reveal-anim');
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    
    // Animate Karma Counter
    const timer = setInterval(() => {
      setKarmaCount(prev => (prev < 1240 ? prev + 41 : 1240));
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] selection:bg-zinc-700">
      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#F4F4F5] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-zinc-900 font-black text-2xl tracking-tighter">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight uppercase group-hover:tracking-widest transition-all">Lynx</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#vision" className="text-zinc-500 hover:text-[#F4F4F5] text-[10px] font-bold uppercase tracking-[0.25em] transition-all">Vision</a>
            <a href="#reputation" className="text-zinc-500 hover:text-[#F4F4F5] text-[10px] font-bold uppercase tracking-[0.25em] transition-all">Reputation</a>
            <a href="#how" className="text-zinc-500 hover:text-[#F4F4F5] text-[10px] font-bold uppercase tracking-[0.25em] transition-all">Process</a>
          </div>
          <button 
            onClick={onGetStarted}
            className="px-8 py-3 bg-[#F4F4F5] text-[#09090B] rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5 button-glow"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section: Billion-Dollar Minimalist Immersion */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Video / Abstract Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] grayscale"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-white-and-grey-shapes-motion-background-27471-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/80 via-transparent to-[#09090B]"></div>
        </div>

        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 border border-white/5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Now in Private Beta
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter mb-8 leading-[0.85] text-white text-glow">
            Experience is <br /> the <span className="text-zinc-400">New Currency.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Connect with people who have actually lived the journey. <br className="hidden md:block" /> 
            Move beyond static resumes and verified through action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button 
              onClick={onGetStarted}
              className="group relative px-12 py-6 bg-[#F4F4F5] text-[#09090B] rounded-full text-xs font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-white/10 button-glow"
            >
              <span className="relative z-10 flex items-center gap-3">Get Started {ICONS.ChevronRight}</span>
            </button>
            <button className="px-12 py-6 glass-premium rounded-full text-xs font-black uppercase tracking-[0.3em] hover:border-zinc-400 transition-all flex items-center gap-2">
              Join the Pride
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce cursor-pointer">
          <div className="w-px h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
        </div>
      </section>

      {/* Experience Bento Grid: Luxury Core Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-40" id="reputation">
        <div className="mb-20 reveal-anim">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">The Infrastructure</h2>
          <h3 className="text-4xl font-bold tracking-tight">Built on Real Worth.</h3>
        </div>
        
        <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal-anim">
          {/* Card 1: Duality Interaction */}
          <div className="md:col-span-8 group bg-[#111113] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
             <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex bg-zinc-950/80 border border-white/5 p-1.5 rounded-2xl w-fit mb-10">
                    <button 
                      onClick={() => setActiveDuality('Mentor')}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeDuality === 'Mentor' ? 'bg-[#F4F4F5] text-[#09090B] shadow-xl' : 'text-zinc-500'}`}
                    >
                      Mentor
                    </button>
                    <button 
                      onClick={() => setActiveDuality('Mentee')}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeDuality === 'Mentee' ? 'bg-[#F4F4F5] text-[#09090B] shadow-xl' : 'text-zinc-500'}`}
                    >
                      Mentee
                    </button>
                  </div>
                  <h3 className="text-4xl font-black mb-4 tracking-tighter">Fluid Roles.</h3>
                  <p className="text-zinc-500 max-w-md font-medium leading-relaxed">Everyone has something to teach. Everyone has something to learn. Status is derived from contribution, not hierarchy.</p>
                </div>
                <div className="mt-16 relative h-40 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-32 h-32 rounded-full glass border border-white/10 animate-ping opacity-10"></div>
                  </div>
                  <img src="https://picsum.photos/seed/duality/400" className="w-24 h-24 rounded-3xl object-cover border-4 border-zinc-900 shadow-2xl relative z-10 transition-transform group-hover:scale-110 duration-700" alt="Duality" />
                  <div className="absolute left-1/4 top-0 w-12 h-12 glass rounded-2xl flex items-center justify-center text-zinc-100 group-hover:-translate-y-4 transition-all duration-700">{ICONS.Award}</div>
                  <div className="absolute right-1/4 bottom-0 w-12 h-12 glass rounded-2xl flex items-center justify-center text-zinc-100 group-hover:translate-y-4 transition-all duration-700">{ICONS.Star}</div>
                </div>
             </div>
          </div>

          {/* Card 2: Verified Proof Video/Image */}
          <div className="md:col-span-4 group bg-zinc-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:border-white/20">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 grayscale" alt="Tech" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent"></div>
            <div className="absolute top-8 right-8 z-10">
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 backdrop-blur-md">
                {ICONS.ShieldCheck} Verified
              </div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <h3 className="text-3xl font-black mb-3 tracking-tighter">Hard Proof.</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">No fluff. Only validated projects, code repos, and real-world outcomes. Reputation you can audit.</p>
            </div>
          </div>

          {/* Card 3: Karma Pulse */}
          <div className="md:col-span-4 group bg-[#09090B] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden transition-all duration-500 hover:border-white/20">
            <div className="mb-12">
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">{karmaCount.toLocaleString()}</div>
              <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.5em] ml-1">Karma Economy</div>
            </div>
            <div className="h-1 bg-zinc-900 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-white transition-all duration-1000" style={{ width: `${(karmaCount/1500)*100}%` }}></div>
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Trust Currency</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">A spam-free network where every request has weight. Visibility is earned by adding value.</p>
          </div>

          {/* Card 4: Structured Intent (The Chat Experience) */}
          <div className="md:col-span-8 group bg-gradient-to-br from-zinc-900 to-[#09090B] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 hover:border-white/20">
             <div className="flex flex-col md:flex-row gap-12 items-center h-full">
               <div className="flex-1">
                 <h3 className="text-4xl font-black mb-4 tracking-tighter">Intentional DMs.</h3>
                 <p className="text-zinc-500 font-medium leading-relaxed">We replaced the noise of LinkedIn with the clarity of structured mentorship. Every conversation starts with a goal and a verified context.</p>
               </div>
               <div className="w-full md:w-80 glass-premium rounded-3xl p-6 shadow-[0_0_50px_rgba(255,255,255,0.03)] border border-white/10 transform group-hover:scale-105 transition-transform duration-700">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="https://picsum.photos/seed/intent/100" className="w-10 h-10 rounded-xl" alt="User" />
                    <div>
                      <div className="h-3 w-24 bg-zinc-800 rounded-full mb-1"></div>
                      <div className="h-2 w-16 bg-zinc-800 rounded-full opacity-50"></div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="h-2 w-full bg-zinc-800 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-zinc-800 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-zinc-800 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <div className="text-[10px] font-black text-zinc-600 uppercase">50 Karma</div>
                    <div className="px-4 py-2 bg-white text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-widest">Accept</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* How it Works: Cinematic Step-by-Step */}
      <section className="py-40 px-6 bg-[#09090B] reveal-anim" id="how">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="sticky top-40 space-y-20">
                <div className="reveal-anim">
                  <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Step 01</div>
                  <h3 className="text-4xl font-black tracking-tighter mb-4">Onboard with Intent.</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">Verify your identity via phone to secure the community. No bots. No spam. Just humans.</p>
                </div>
                <div className="reveal-anim">
                  <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Step 02</div>
                  <h3 className="text-4xl font-black tracking-tighter mb-4">Log Experiences.</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">What have you actually done? Share your journey with hard evidence. Build your proof-graph.</p>
                </div>
                <div className="reveal-anim">
                  <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Step 03</div>
                  <h3 className="text-4xl font-black tracking-tighter mb-4">Help & Scale.</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">Accept requests, mentor peers, and earn Karma. Your reputation grows with every session.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
               <div className="w-full max-w-md aspect-[3/4] glass-premium rounded-[3rem] p-1 overflow-hidden relative shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale opacity-40" alt="Process" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 p-8 glass-premium rounded-3xl border border-white/10 float-anim">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-white rounded-xl"></div>
                      <div className="h-4 w-32 bg-zinc-800 rounded-full"></div>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full mb-2"></div>
                    <div className="h-2 w-2/3 bg-zinc-800 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion: Minimalist Confidence */}
      <section className="py-60 text-center px-6 reveal-anim">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black tracking-[ -0.05em] mb-12 leading-[0.9] text-white">
            The future of knowledge is <span className="text-zinc-500">experience-led.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl mb-16 font-medium max-w-xl mx-auto">
            Status is earned, not claimed. Connect with the people who built the future you want.
          </p>
          <button 
            onClick={onGetStarted}
            className="group relative px-16 py-8 bg-[#F4F4F5] text-[#09090B] rounded-full text-sm font-black uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10 button-glow"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer: Tech-Noir Minimalism */}
      <footer className="border-t border-white/5 py-24 px-6 bg-[#070708]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3 opacity-80">
                <div className="w-10 h-10 bg-[#F4F4F5] rounded-xl flex items-center justify-center">
                  <span className="text-zinc-900 font-black text-2xl tracking-tighter">L</span>
                </div>
                <span className="font-bold text-xl uppercase tracking-tighter">Lynx</span>
              </div>
              <p className="text-zinc-600 text-sm font-medium max-w-xs leading-relaxed">The global layer for experience-based social capital. Founded 2025.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Platform</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Discover</a>
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Reputation</a>
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Karma</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Vision</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Identity</a>
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Security</a>
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Whitepaper</a>
                </div>
              </div>
              <div className="space-y-4 col-span-2 md:col-span-1">
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Connect</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Twitter</a>
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">LinkedIn</a>
                  <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">Email</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <div className="flex items-center gap-6">
              <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Lynx Global Online
              </span>
            </div>
            <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.4em]">
              © 2025 Lynx Experience Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
