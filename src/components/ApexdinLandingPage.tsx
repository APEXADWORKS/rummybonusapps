import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  Trophy, 
  Star, 
  ExternalLink, 
  Zap,
  Smartphone,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { RUMMY_APPS } from '../data';

interface ApexdinLandingPageProps {
  idOverride: string;
}

export default function ApexdinLandingPage({ idOverride }: ApexdinLandingPageProps) {
  const app = RUMMY_APPS.find(a => a.id === 'jungle-haan') || RUMMY_APPS[0];
  const redirectUrl = `https://www.junglehaan.vip/share/6gCbMxy=${idOverride}`;
  const [countdown, setCountdown] = useState(3);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Immediate redirect attempt
    window.location.href = redirectUrl;

    // Countdown interval for fallback display
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [redirectUrl]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(redirectUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-24 selection:bg-brand-primary selection:text-black">
      <Helmet>
        <title>Download Jungle Haan APK - Get {app.bonus} Signup Bonus Free (Official 2026)</title>
        <meta name="description" content={`Official download portal for Jungle Haan Rummy App. Claim ₹51 register bonus, play cash tables securely, and enjoy lightning-fast withdrawals.`} />
        <meta name="keywords" content="Jungle Haan, Jungle Haan Apk, Jungle Haan Download, Jungle Rummy, All Rummy Apps, Rummy All Apps, Rummy All Apk Download, rummy bonus apps, new rummy app today, Teen Patti Game, free signup bonus" />
        <link rel="canonical" href={`https://allrummybonus.com/apexdin${idOverride}`} />
      </Helmet>

      {/* Header with Glassmorphism */}
      <header className="bg-[#111827]/80 backdrop-blur-md border-b border-brand-primary/20 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 text-slate-400 hover:text-white group">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">Go Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/images/all_rummy_1to1_logo_1779225745385.png" 
                alt="Brand Logo" 
                className="h-10 w-10 object-contain rounded-xl border border-brand-primary/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] animate-pulse"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-0.5 rounded-xl bg-brand-primary/20 blur opacity-40 animate-pulse" />
            </div>
            <h1 className="text-sm sm:text-lg font-black uppercase italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-amber-300">
              ALL RUMMY BONUS
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
            <span className="text-[10px] uppercase font-black tracking-widest text-green-400">Server Live</span>
          </div>
        </div>
      </header>

      {/* Hero Header Space Accent Decor */}
      <div className="relative w-full h-1 bg-gradient-to-r from-brand-primary via-brand-primary-light to-transparent" />

      {/* Interactive Main Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Redirection Notice & Status Panel */}
        <div className="bg-gradient-to-r from-brand-primary/10 via-amber-500/5 to-transparent border border-brand-primary/30 rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-brand-primary/10 blur-3xl rounded-full" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
              <div className="relative shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-primary-light/5 rounded-full flex items-center justify-center border border-brand-primary/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <ShieldCheck className="w-10 h-10 text-brand-primary animate-pulse" />
                </div>
                <span className="absolute top-0 right-0 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </div>
              <div className="flex-1 w-full text-left">
                <h3 className="text-lg sm:text-2xl font-black uppercase italic text-white flex items-center gap-2 justify-center md:justify-start">
                  SECURING OFFICIAL VIP GATEWAY
                </h3>
                
                {/* Dynamic connection steps simulating background load sequence */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 text-xs font-bold text-slate-300">
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    {countdown < 3 ? (
                      <span className="text-green-400 font-extrabold flex items-center gap-1">✓ <span className="text-slate-400 text-[10px] uppercase tracking-wider">Node Located</span></span>
                    ) : (
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand-primary animate-ping" /><span className="text-brand-primary text-[10px] uppercase tracking-wider">Auditing CDN Link...</span></span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    {countdown < 2 ? (
                      <span className="text-green-400 font-extrabold flex items-center gap-1">✓ <span className="text-slate-400 text-[10px] uppercase tracking-wider">Encrypted Handshake</span></span>
                    ) : countdown === 2 ? (
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand-primary animate-ping" /><span className="text-brand-primary text-[10px] uppercase tracking-wider">Securing Tunnel...</span></span>
                    ) : (
                      <span className="text-slate-500 text-[10px] uppercase tracking-wider">Secure Tunneling</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    {countdown < 1 ? (
                      <span className="text-green-400 font-extrabold flex items-center gap-1">✓ <span className="text-slate-400 text-[10px] uppercase tracking-wider">Handed off safely</span></span>
                    ) : countdown === 1 ? (
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand-primary animate-ping" /><span className="text-brand-primary text-[10px] uppercase tracking-wider">Launching Portal...</span></span>
                    ) : (
                      <span className="text-slate-500 text-[10px] uppercase tracking-wider">Final Handover</span>
                    )}
                  </div>
                </div>

                {/* Visual Laser Progress Bar */}
                <div className="w-full bg-slate-800/80 h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-brand-primary via-brand-primary-light to-amber-300 shadow-[0_0_10px_#f59e0b]" 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0 z-10">
              {/* Premium Direct Action Button */}
              <a 
                href={redirectUrl}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-light hover:brightness-110 active:scale-95 text-black py-4.5 px-8 rounded-2xl font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-black stroke-[2.5]" />
                Launch App Now
              </a>
              <button 
                onClick={handleCopyLink}
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-white/80 hover:text-white py-4.5 px-6 rounded-2xl font-black text-xs uppercase tracking-wider border border-white/10 active:scale-95 transition-all text-center"
              >
                {copied ? '✓ Copied Invite URL' : 'Copy Invited Partner Link'}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Block (Outstanding Design) */}
        <div className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-[2.5rem] p-6 sm:p-12 border border-brand-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden mb-12">
          {/* Neon backlighting loops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/15 blur-[150px] rounded-full -mr-40 -mt-40 animate-pulse" />
          <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-red-600/10 blur-[130px] rounded-full -ml-40 -mb-40" />
          
          <div className="relative flex flex-col lg:flex-row items-center gap-10 justify-between">
            <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
              <div className="relative shrink-0 group">
                {/* Pulsating Orbit behind Game Icon */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary via-amber-400 to-red-500 rounded-[2.5rem] blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
                <img 
                  src="/images/jungle_haan_logo_png_1779114514699.png" 
                  alt="Jungle Haan App Icon" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.2rem] relative shadow-2xl border-2 border-white/20 transform group-hover:scale-105 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                  <span className="bg-red-500 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 animate-bounce" /> OFFICIAL 100% SECURE
                  </span>
                  <span className="bg-brand-primary text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                    VIP PLATINUM APP
                  </span>
                </div>
                <h2 className="text-4.5xl sm:text-6xl font-black tracking-tight leading-none italic uppercase text-white m-0">
                  JUNGLE HAAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-amber-300">RUMMY</span>
                </h2>
                <p className="text-sm text-slate-300 font-medium max-w-lg m-0 leading-relaxed">
                  Join the elite circle of players, feel the thrill of pure RNG-certified cards, and unlock immediate riches on India's premium Rummy network!
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5 text-slate-400 text-xs font-bold pt-1">
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-brand-primary" />
                    <span className="text-white">{app.downloads} downloads</span>
                  </div>
                  <div className="hidden sm:block text-slate-700">|</div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-heavy">5.0 Game Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Download Button Container */}
            <div className="flex flex-col items-center gap-4 w-full lg:w-fit shrink-0">
              <div className="relative w-full sm:w-[350px] lg:w-[320px] group">
                {/* Glowing Outer Halos for Primary conversion */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary-light via-red-500 to-amber-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-tilt" />
                
                {/* Master Quality Download Button */}
                <a 
                  href={redirectUrl}
                  className="relative w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#fbbf24] via-[#f59e0b] to-[#d97706] text-black py-5 px-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-yellow-200/40 shadow-2xl select-none"
                >
                  {/* Subtle sweep glare animated via hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  <div className="flex items-center justify-center gap-3">
                    <Download className="w-7 h-7 stroke-[3] animate-bounce" />
                    <span className="drop-shadow-md">DOWNLOAD APK NOW</span>
                  </div>
                  <span className="text-[10px] text-black/75 font-extrabold tracking-widest uppercase mt-1 block">
                    ⚡ OFFICIAL INSTANT VERIFIED LINK ⚡
                  </span>
                </a>
              </div>

              {/* Bonus / Details Quick Counter Card */}
              <div className="bg-slate-900/90 rounded-2xl border border-brand-primary/20 w-full sm:w-[350px] lg:w-[320px] p-4 flex justify-between items-center text-center">
                <div className="flex-1 border-r border-white/5 pr-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-wider">OFFICIAL BONUS</span>
                  <span className="text-brand-primary-light font-black text-xl italic">{app.bonus}</span>
                </div>
                <div className="flex-1 pl-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-wider">MIN. WITHDRAWAL</span>
                  <span className="text-white font-black text-xl italic">{app.minWithdrawal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rapid Feature Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { tag: "instant cashout", desc: "Minimum limit just ₹100", icon: <TrendingUp className="w-5 h-5 text-brand-primary" /> },
            { tag: "100% certified", desc: "Certified Random Number cards", icon: <Award className="w-5 h-5 text-brand-primary" /> },
            { tag: "dedicated service", desc: "Real 24/7 client support desk", icon: <Trophy className="w-5 h-5 text-brand-primary" /> },
            { tag: "highly encrypted", desc: "UPI and bank level safety layers", icon: <ShieldCheck className="w-5 h-5 text-brand-primary" /> }
          ].map((item, i) => (
            <div key={i} className="bg-[#1e293b]/60 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center hover:border-brand-primary/40 transition-all hover:bg-[#1e293b]/90 group">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 mt-0 mb-0.5">{item.tag}</h4>
              <p className="text-[10px] text-slate-400 font-bold m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Extensive Content (1000+ words) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1: Executive Summary */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-2xl rounded-full" />
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                1. Full Platform Executive Summary
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  As mobile gaming platforms continue to redefine online entertainment globally, <strong>Jungle Haan</strong> has established an unparalleled legacy of excellence in the skill-based card gaming industry. Designed explicitly to meet the strategic, physiological, and safety needs of modern gamers, this masterwork application offers an intense, highly secure, and visually breathtaking rummy experience. Powered by an advanced low-latency proprietary game server, Jungle Haan resolves every match with pristine algorithmic equity, eliminating common issues of disconnection penalties and high-ping match matching.
                </p>
                <p>
                  The platform is built on an architectural foundation of certified compliance. Whether playing on low-bandwidth rural cellular connections or ultra-fast home optical networks, Jungle Haan's dynamic compression pipelines dynamically balance graphical complexity with stream stability. Players can dive into active cash lobbies surrounding standard card networks with absolute performance guarantees. Additionally, the interface is polished with premium dark canvas overlays and ambient warm colors, reducing long-session optical fatigue while simulating high-status physical VIP tournament tables.
                </p>
              </div>
            </section>

            {/* Section 2: Technical Specifications & Features */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                2. Key Performance Attributes
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm">
                <p className="mb-4">
                  Jungle Haan's rise to premium ranking is driven by unique technological capabilities made accessible to the gaming public. Below is an exhaustive breakdown of its core systems:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Low Memory Usage: Fits comfortable within 35MB of initial install footprint and manages device heap efficiently.",
                    "Optimized Graphics Engine: Uses zero-flicker vector card layers that load flawlessly on ancient Android chips.",
                    "Advanced RNG Shuffle: Evaluates random distribution patterns via millisecond-level system clock metrics.",
                    "Instant UPI Extraction: Clears active extraction accounts without redundant administrative holding delays.",
                    "Encrypted Cash Wallets: Secures user deposits using advanced AES-256 layer-3 cryptography blocks.",
                    "24/7 Virtual Support: Houses real, human customer response units inside the active application interface."
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3 bg-black/20 rounded-xl p-4.5 border border-white/5 text-xs text-slate-300 hover:border-brand-primary/30 transition-all">
                      <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block font-bold mb-1">{feature.split(':')[0]}</strong>
                        <span className="leading-relaxed text-slate-400">{feature.split(':')[1]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quality Action Banner in between content to drive high conversion */}
            <div className="bg-gradient-to-r from-slate-900 via-bg-secondary to-slate-900 border-2 border-brand-primary/20 rounded-3xl p-8 relative overflow-hidden text-center shadow-xl">
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] text-brand-primary-light font-black tracking-[0.3em] uppercase block">
                  🚀 SIGN UP BONUS ACTIVE IN 2026 🚀
                </span>
                <h4 className="text-2xl sm:text-3xl font-black uppercase m-0 leading-tight">
                  GET ₹51 SIGNUP BUFFER FOR NEW REGISTRATIONS
                </h4>
                <p className="text-xs text-slate-400 max-w-lg mx-auto m-0 leading-relaxed">
                  Join verified tables securely, cashout safely directly into your bank or UPI, and enjoy 24/7 gaming support. No coupon code needed.
                </p>
                <div className="pt-2">
                  <a 
                    href={redirectUrl}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary-light to-brand-primary text-black font-black text-sm uppercase tracking-widest py-4 px-10 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-brand-primary/20"
                  >
                    <Download className="w-4.5 h-4.5 stroke-[2.5]" />
                    DOWNLOAD SECURE MOD APK
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
            </div>

            {/* Section 3: Installation Process */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                3. Direct Installation Manual
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Installing a real-money application outside standard public distribution channels requires standard Android trust authorizations. Because Jungle Haan incorporates cash wagering channels, installing via the direct premium APK is the designated route to ensure you avoid counterfeit, outdated, or scam-related variations.
                </p>
                <p>
                  To install successfully, please navigate directly to your device configuration. Scroll to "Security" or "Developer Options". Enable "Install Unknown Apps" or "Allow Source Verification" for your active mobile web browser. Once resolved, return to this portal, run the download executable, compile, and allow the system to unpack the assets. The process requires less than a minute. Log in with standard credential profiles to register.
                </p>
              </div>
            </section>

            {/* Section 4: Welcome Bonus Mastery */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                4. Claiming the ₹51 Registration Incentive
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  New members are immediately eligible to claim a ₹51 bonus to explore cash tables without initial cost. In order to claim yours, your profile must be completely verified to ensure multiple accounts are not generated from a single cellular node:
                </p>
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex gap-4 text-xs text-slate-300">
                    <span className="font-mono text-brand-primary text-sm font-heavy shrink-0">Step 1.</span>
                    <p className="m-0 leading-relaxed"><strong className="text-white">Register Portal:</strong> Open the app and choose "Register VIP Account" or "Guest Profile Login" on the home launcher.</p>
                  </div>
                  <div className="flex gap-4 text-xs text-slate-300">
                    <span className="font-mono text-brand-primary text-sm font-heavy shrink-0">Step 2.</span>
                    <p className="m-0 leading-relaxed"><strong className="text-white">Request Code OTP:</strong> Enter your 10-digit mobile number, bind a security password, and hit "Request Verification Code".</p>
                  </div>
                  <div className="flex gap-4 text-xs text-slate-300">
                    <span className="font-mono text-brand-primary text-sm font-heavy shrink-0">Step 3.</span>
                    <p className="m-0 leading-relaxed"><strong className="text-white">Instantly Credited:</strong> Input the OTP SMS code sent to your mobile device, verify, and automatically credit ₹51 to your wallet.</p>
                  </div>
                </div>
                <p>
                  This balance is completely active and can be utilized across various games, including Points, Pool, Deals Rummy, and Teen Patti lobbies. Setting up this signup buffer acts as a fantastic test setup to gauge table speeds before making real deposits.
                </p>
              </div>
            </section>

            {/* Section 5: Rummy Formats detailed */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                5. High Stakes Rummy & Lobby Formats
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Jungle Haan supports multiple variations of classic Indian Rummy, ensuring that players with differing skill profiles and risk tolerances can enjoy tailored matches:
                </p>
                <div className="space-y-4">
                  <div className="p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-brand-primary/25 transition-all">
                    <h4 className="text-brand-primary-light font-black uppercase italic text-sm mb-1">A. Points Rummy for Fast Outlines</h4>
                    <p className="text-xs text-slate-300 m-0 leading-relaxed">Points are assigned pre-determined cash values (e.g., ₹1/point, ₹10/point). The player who declares a valid hand first receives winnings from other contestants, making it highly attractive for quick-session players.</p>
                  </div>
                  <div className="p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-brand-primary/25 transition-all">
                    <h4 className="text-brand-primary-light font-black uppercase italic text-sm mb-1">B. Pool Rummy (101 & 201)</h4>
                    <p className="text-xs text-slate-300 m-0 leading-relaxed">A test of tactical patience. Table users accumulate points over successive deals. Crossing the point ceiling (101 or 201) instantly drops you from contention. The survival champ captures the prize pool.</p>
                  </div>
                  <div className="p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-brand-primary/25 transition-all">
                    <h4 className="text-brand-primary-light font-black uppercase italic text-sm mb-1">C. Deals Rummy for Championship Set-Ups</h4>
                    <p className="text-xs text-slate-300 m-0 leading-relaxed">Players compete with static chip counts for a designated count of deal rounds (usually 2, 3, or 6 deals). Winnings are adjusted instantly upon the final round, presenting amazing challenge-focused outcomes.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Deposit & Clean Withdrawals */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                6. UPI Deposits & Swift Extraction Systems
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Managing your game balance on Jungle Haan is streamlined with local banking partnerships. Deposits are processed via payment channels including PhonePe, GPay, Paytm, BHIM, credit cards, and instant netbanking interfaces. The minimum initial deposit requirement starts at an extremely low threshold, allowing players of all backgrounds to join.
                </p>
                <p>
                  Winnings can be redeemed instantly with an accessible minimum extraction limit of ₹100. Users do not need complex verify steps or days of verification to request direct payments. Submit your UPI ID or IMPS banking credentials, select your withdrawal amount, and submit. Transactions are processed via instant clearing networks, hitting your designated personal banking accounts in 10-30 minutes, 24 hours a day.
                </p>
              </div>
            </section>

            {/* Section 7: Pro Level Strategies */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                7. Champion Strategies & Tactical Guidance
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Real-money Rummy values logic, cognitive mapping, and rapid evaluation. Professional gamers depend on proven strategies to outperform rivals and keep their gaming sessions profitable:
                </p>
                <ul className="space-y-4">
                  <li className="text-xs text-slate-300 bg-black/20 p-4 rounded-xl border border-white/5"><strong className="text-white block mb-0.5 text-xs">Formulate Pure Sequences First:</strong> A pure sequence is vital. If your sequences aren't complete, all cards are counted at maximum point values, leading to heavier losses in unexpected defeats.</li>
                  <li className="text-xs text-slate-300 bg-black/20 p-4 rounded-xl border border-white/5"><strong className="text-white block mb-0.5 text-xs">Fast High-Card Filtering:</strong> Avoid holding massive points on cards such as Kings, Queens, Jacks, or Tens if they do not match active sequences. Drop them early to protect your score profile.</li>
                  <li className="text-xs text-slate-300 bg-black/20 p-4 rounded-xl border border-white/5"><strong className="text-white block mb-0.5 text-xs">Discard Monitoring:</strong> Follow what cards your rivals discard or collect from open piles. This helps you deduce their strategic goals and hold back critical suits they need.</li>
                </ul>
              </div>
            </section>

            {/* Section 8: Safety & Certification */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-brand-primary to-amber-700 rounded-full" />
                8. Technical Auditing & Anti-Cheat Protocols
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Jungle Haan's Random Number Generator (RNG) is constantly verified by independent software testing agencies. Every digital card distribution is fully randomized, completely eliminating card-counting and physical manipulation. Multi-accounting detection locks down collusion, ensuring that nobody can coordinate with partners to cheat other table players.
                </p>
              </div>
            </section>

            {/* Section 9: Fair Play Responsible Gaming warning */}
            <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-black uppercase italic text-red-400 mb-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 animate-pulse" />
                9. Fair Gaming & Age Policies
              </h3>
              <p className="text-xs text-red-400/80 leading-relaxed m-0">
                Skill-based gaming involves financial risk, holds addictive qualities, and remains strictly restricted to individuals over the age of 18. Users are fully responsible for matching local state legislation regarding real-money skill gaming. Please set strict gaming timers and play responsibly within boundaries.
              </p>
            </section>

          </div>

          {/* Right Column: Top Recommended Games Sidebar (Requested: "Display the list of top games there") */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#1e293b] rounded-3xl p-6 border border-brand-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/5 blur-xl rounded-full" />
              
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4 relative z-10">
                <Trophy className="w-5 h-5 text-brand-primary animate-bounce shrink-0" />
                <h3 className="text-base sm:text-lg font-black uppercase italic tracking-tight text-white m-0">
                  TOP RECOMMENDED GAMES
                </h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {RUMMY_APPS.filter(item => item.id !== 'jungle-haan').slice(0, 10).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-black/45 rounded-2xl border border-white/5 hover:border-brand-primary/40 transition-all group hover:bg-slate-900">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <img 
                          src={item.iconUrl} 
                          alt={item.name} 
                          className="w-12 h-12 rounded-xl object-contain border border-white/10 shrink-0" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute -inset-0.5 rounded-xl bg-brand-primary/10 blur-[1px]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-black uppercase tracking-tight text-white group-hover:text-brand-primary leading-tight transition-colors truncate m-0">
                          {item.name}
                        </h4>
                        <div className="flex flex-col gap-0.5 mt-1 whitespace-nowrap">
                          <p className="text-[10px] font-bold text-slate-400 m-0">
                            Bonus: <span className="text-brand-primary-light font-black">{item.bonus}</span>
                          </p>
                          <p className="text-[9px] font-bold text-slate-500 m-0">
                            Min. Cashout: <span className="text-white italic">{item.minWithdrawal}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      to={item.id === 'rummy-apple' ? '/uttam1' : `/${encodeURIComponent(item.name)}`}
                      className="px-3 py-2.5 bg-gradient-to-r from-brand-primary to-brand-primary-light hover:brightness-110 active:scale-95 text-black text-[9px] font-black uppercase tracking-widest rounded-lg transition-all shrink-0 text-center flex items-center gap-0.5 shadow-md"
                    >
                      <Download className="w-2.5 h-2.5 stroke-[3]" />
                      Get
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4.5 bg-brand-primary/5 rounded-2xl border border-brand-primary/20 text-center relative z-10">
                <span className="text-xs text-brand-primary-light font-black uppercase block tracking-widest mb-1.5">⚡ INSTANT CASHOUT PIPELINE ⚡</span>
                <p className="text-[10px] text-slate-300 font-semibold leading-relaxed m-0">
                  All listed apps are completely certified and offer immediate bank checkouts or UPI withdrawal routes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Persistent Beautiful Floating Mobile & Desktop Bottom Bar (Double-Action design with micro-shimmers) */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-950/85 backdrop-blur-md border-t border-brand-primary/30 z-[99] px-4 py-4.5 shadow-[0_-15px_40px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/images/jungle_haan_logo_png_1779114514699.png" 
              alt="Jungle Haan" 
              className="w-10 h-10 rounded-lg border border-white/15 shadow-md"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wider text-white m-0">Jungle Haan Rummy</p>
              <p className="text-[10px] text-brand-primary font-bold m-0 flex items-center gap-1">
                <span>Bonus: {app.bonus}</span>
                <span className="text-slate-600">•</span>
                <span>Fast UPI Withdrawals</span>
              </p>
            </div>
          </div>
          
          {/* Pulsing Bottom Button */}
          <div className="w-full sm:w-[320px] relative group shrink-0">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-green-500 to-amber-400 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-500" />
            <a 
              href={redirectUrl}
              className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary-light to-brand-primary text-black py-3.5 px-6 rounded-xl font-black text-sm uppercase tracking-widest hover:brightness-115 active:scale-95 transition-all text-center shadow-lg border border-yellow-200/30"
            >
              <Download className="w-4 h-4 stroke-[3] animate-bounce" />
              Download & Play Securely
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
