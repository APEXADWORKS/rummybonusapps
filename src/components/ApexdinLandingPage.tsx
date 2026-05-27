import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Users, 
  Zap,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import apexLogo from '../assets/images/apex_hacker_logo_1779909062514.png';

export default function ApexdinLandingPage() {
  const { pathname } = useLocation();
  const telegramUrl = "https://telegram.me/+-pL_q6OlhgAwNDc1";
  
  // Real-time dynamic loops matching the exact screenshot metrics
  const [seconds, setSeconds] = useState(184); // 3 minutes 4 seconds = 184 seconds
  const [activeUsers, setActiveUsers] = useState(3109);

  // Timer countdown hook (keeps looping back to 5:00 on finish)
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          return 300; // Reset to 5:00
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fluctuating active users counter to simulate organic live traffic (±1 or 2 users)
  useEffect(() => {
    const trafficInterval = setInterval(() => {
      setActiveUsers(prev => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + delta;
        // Restrict to close bounds around 3,109
        if (next < 3080) return 3085;
        if (next > 3140) return 3135;
        return next;
      });
    }, 3500);
    return () => clearInterval(trafficInterval);
  }, []);

  // Formats seconds into MM:SS
  const formatTime = (totalSecs: number) => {
    const min = Math.floor(totalSecs / 60);
    const sec = totalSecs % 60;
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedMin}:${formattedSec}`;
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      <Helmet>
        <title>India's Most Demanding Channel - Official Join Portal</title>
        <meta name="description" content="Join India's most demanding Telegram signal channel. Secure access, premium signals, real-time AI and live status." />
        <meta name="keywords" content="Apex Ad Works, Telegram Signals, Tech Apex, Demanding Channel, AI Bot v9" />
        <link rel="canonical" href="https://www.rummybonusapps.com/apex1" />
      </Helmet>

      {/* Cybernetic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00f3ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-950/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Upper Navigation Rail */}
      <div className="p-4 z-10 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/60 text-slate-400 hover:text-white transition-all text-[11px] font-bold uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-slate-500 font-black tracking-widest font-rajdhani uppercase">ONLINE CONNECTION SAFE</span>
        </div>
      </div>

      {/* Main Focus Area (Fully matches the screenshot layout with absolute craft) */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 max-w-md mx-auto w-full gap-7 z-10 py-6">
        
        {/* Title elements */}
        <div className="text-center space-y-1 select-none">
          <h1 className="text-xl sm:text-2xl font-black italic tracking-widest text-[#00f3ff] uppercase drop-shadow-[0_0_8px_rgba(0,243,255,0.4)] font-orbitron m-0">
            INDIA'S MOST
          </h1>
          <h2 className="text-2xl sm:text-3xl font-black italic tracking-widest text-white uppercase font-orbitron m-0">
            DEMANDING CHANNEL
          </h2>
        </div>

        {/* Central Glowing Cyber Logo Container */}
        <div className="relative group select-none">
          {/* Neon Glow Aura */}
          <div className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-3xl group-hover:bg-cyan-400/35 transition-all duration-700 animate-pulse" />
          
          {/* Double ring structure */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-gradient-to-br from-[#00f3ff]/30 to-slate-950/90 border border-[#00f3ff]/30 shadow-[0_0_50px_rgba(0,243,255,0.2)] flex items-center justify-center">
            {/* The circular crop */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#00f3ff] shadow-[0_0_30px_rgba(0,243,255,0.45)]">
              <img 
                src={apexLogo} 
                alt="Apex Ad Works Mascot Logo" 
                className="w-full h-full object-cover transform scale-102 group-hover:scale-106 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Dash Ring for advanced technical design feel */}
            <div className="absolute inset-2 rounded-full border border-dashed border-[#00f3ff]/30 animate-[spin_60s_linear_infinite]" />
          </div>
        </div>

        {/* JOIN TELEGRAM Button Component */}
        <div className="w-full px-2">
          <a 
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex flex-col items-center justify-center text-center bg-[#00f3ff] hover:bg-[#1ef5ff] active:scale-[0.98] text-slate-950 py-5 px-6 rounded-[1.45rem] shadow-[0_0_35px_rgba(0,243,255,0.4)] hover:shadow-[0_0_55px_rgba(0,243,255,0.7)] transition-all duration-300 select-none cursor-pointer border-b-4 border-cyan-600/30"
          >
            {/* Direct button label */}
            <span className="text-[15px] sm:text-[17px] font-black tracking-widest uppercase font-orbitron text-black">
              JOIN TELEGRAM
            </span>
            <span className="text-[10px] text-slate-900 font-extrabold tracking-widest uppercase mt-0.5 flex items-center gap-1 font-rajdhani">
              <Zap className="w-3.5 h-3.5 fill-current text-slate-900 stroke-[2.5]" /> 
              DEMANDING CHANNEL SIGNAL
            </span>
          </a>
        </div>

        {/* System Reset Pill with active blinking green/teal status light */}
        <div className="bg-[#0b0c0f]/80 backdrop-blur-md border border-slate-900/90 rounded-full px-6 py-3 flex items-center gap-2.5 text-xs text-slate-300 font-rajdhani select-none shadow-md">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 mr-1 bg-teal-500"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
          </span>
          <span className="uppercase text-slate-400 font-bold ml-1 tracking-widest">SYSTEM RESET IN:</span>
          <span className="text-white font-black tracking-widest font-mono ml-0.5 text-sm">{formatTime(seconds)}</span>
        </div>

        {/* Holographic 3-Card Grid matching the exact layouts */}
        <div className="grid grid-cols-3 gap-3 w-full px-1">
          
          {/* Card 1: Status Card */}
          <div className="bg-[#070b10]/95 border border-slate-900/90 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden group shadow-lg min-h-[114px] justify-between transition-colors hover:border-slate-800">
            {/* The cyan highlight bottom border line */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#00f3ff] opacity-40 group-hover:opacity-100 transition-opacity" />
            <Shield className="w-5 h-5 text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.4)]" />
            <span className="text-[9px] text-slate-500 font-black tracking-widest uppercase mt-2 font-rajdhani">STATUS</span>
            <span className="text-[10px] sm:text-xs text-white font-black tracking-wider uppercase mt-1 flex items-center gap-1 font-orbitron">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
              SECURE
            </span>
          </div>

          {/* Card 2: AI Bot Card */}
          <div className="bg-[#070b10]/95 border border-slate-900/90 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden group shadow-lg min-h-[114px] justify-between transition-colors hover:border-slate-800">
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#00f3ff] opacity-40 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-5 h-5 text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.4)] animate-pulse" />
            <span className="text-[9px] text-slate-500 font-black tracking-widest uppercase mt-2 font-rajdhani">AI BOT</span>
            <span className="text-[10px] sm:text-xs text-white font-black tracking-wider uppercase mt-1 font-orbitron">
              V9.0
            </span>
          </div>

          {/* Card 3: Active Users Card */}
          <div className="bg-[#070b10]/95 border border-slate-900/90 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden group shadow-lg min-h-[114px] justify-between transition-colors hover:border-slate-800">
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#00f3ff] opacity-40 group-hover:opacity-100 transition-opacity" />
            <Users className="w-5 h-5 text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.4)]" />
            <span className="text-[9px] text-slate-500 font-black tracking-widest uppercase mt-2 font-rajdhani">ACTIVE</span>
            <span className="text-[10px] sm:text-xs text-[#00f3ff] font-black font-orbitron tracking-tight mt-1">
              {activeUsers.toLocaleString()}
            </span>
          </div>

        </div>

      </main>

      {/* Rounded Footer Pill (MANAGED BY - APEX AD WORKS) */}
      <footer className="w-full text-center pb-8 pt-4 px-4 z-10 select-none font-sans">
        <a 
          href="https://t.me/tech_apex"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-teal-500/20 bg-slate-950/40 hover:border-[#00f3ff]/40 hover:bg-[#00f3ff]/5 hover:scale-105 active:scale-95 transition-all px-6 py-2.5 rounded-full shadow-inner cursor-pointer"
        >
          <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-cyan-400 font-black font-rajdhani block uppercase leading-none">
            MANAGED BY - APEX AD WORKS
          </span>
        </a>
      </footer>
    </div>
  );
}
