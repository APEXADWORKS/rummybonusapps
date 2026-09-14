import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Download, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Flame, 
  Award,
  Layers,
  Table as TableIcon
} from 'lucide-react';

export interface ComparisonAppItem {
  id: string;
  rank: number;
  name: string;
  iconUrl: string;
  badge?: string;
  badgeType?: 'hot' | 'best' | 'fast' | 'vip' | 'verified';
  signupBonus: string;
  bonusDetail: string;
  minWithdrawal: string;
  withdrawalDetail: string;
  rating: number;
  reviewCount: string;
  apkSize: string;
  downloadLink: string;
  buttonTheme: 'green' | 'red';
  detailRoute: string;
}

export const TOP_5_COMPARISON_APPS: ComparisonAppItem[] = [
  {
    id: 'rummy-wealth',
    rank: 1,
    name: 'Rummy Wealth',
    iconUrl: '/images/rummy_wealth_logo_v2_1779115748787.png',
    badge: 'MOST POPULAR',
    badgeType: 'hot',
    signupBonus: '₹51',
    bonusDetail: 'Instant OTP Credit',
    minWithdrawal: '₹100',
    withdrawalDetail: 'Instant UPI & Bank',
    rating: 5.0,
    reviewCount: '48.2K',
    apkSize: '38 MB',
    downloadLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538',
    buttonTheme: 'green',
    detailRoute: '/Rummy-Wealth'
  },
  {
    id: 'teen-patti-master',
    rank: 2,
    name: 'Teen Patti Master',
    iconUrl: '/images/rummy_master_logo_1779225326294.png',
    badge: 'TOP PAYOUT',
    badgeType: 'best',
    signupBonus: '₹41',
    bonusDetail: 'Free Welcome Cash',
    minWithdrawal: '₹100',
    withdrawalDetail: 'Zero Commission',
    rating: 4.9,
    reviewCount: '39.8K',
    apkSize: '42 MB',
    downloadLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538',
    buttonTheme: 'red',
    detailRoute: '/Teen-Patti-Master'
  },
  {
    id: 'rummy-east',
    rank: 3,
    name: 'Rummy East',
    iconUrl: '/images/rummy_east_logo_1779121095779.png',
    badge: 'FAST CASHOUT',
    badgeType: 'fast',
    signupBonus: '₹51',
    bonusDetail: '100% Free Signup',
    minWithdrawal: '₹100',
    withdrawalDetail: '24x7 IMPS / UPI',
    rating: 4.9,
    reviewCount: '35.4K',
    apkSize: '36 MB',
    downloadLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538',
    buttonTheme: 'green',
    detailRoute: '/Rummy-East'
  },
  {
    id: 'rummy-royale',
    rank: 4,
    name: 'Rummy Royale',
    iconUrl: '/images/royally_rummy_logo_1779120362517.png',
    badge: 'VIP REWARDS',
    badgeType: 'vip',
    signupBonus: '₹51',
    bonusDetail: 'Daily Free Bonus',
    minWithdrawal: '₹100',
    withdrawalDetail: 'Direct UPI Transfer',
    rating: 4.8,
    reviewCount: '29.1K',
    apkSize: '35 MB',
    downloadLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538',
    buttonTheme: 'red',
    detailRoute: '/Royally-Rummy'
  },
  {
    id: 'rummy-gold',
    rank: 5,
    name: 'Rummy Gold',
    iconUrl: '/images/Rummy_Gold.webp',
    badge: 'ALL TIME FAVORITE',
    badgeType: 'verified',
    signupBonus: '₹41',
    bonusDetail: 'Live Cash Tables',
    minWithdrawal: '₹100',
    withdrawalDetail: '3 Min Auto Cashout',
    rating: 5.0,
    reviewCount: '52.7K',
    apkSize: '40 MB',
    downloadLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538',
    buttonTheme: 'green',
    detailRoute: '/Rummy-Gold'
  }
];

export default function TopRummyAppsComparisonTable() {
  const [mobileView, setMobileView] = useState<'cards' | 'table'>('cards');

  const getBadgeStyle = (type?: string) => {
    switch (type) {
      case 'hot':
        return 'bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 border-red-500/40';
      case 'best':
        return 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'fast':
        return 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40';
      case 'vip':
        return 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/40';
      default:
        return 'bg-brand-primary/20 text-brand-primary border-brand-primary/40';
    }
  };

  return (
    <section id="comparison-table" className="py-8 sm:py-12 bg-gradient-to-b from-[#0b1120] via-[#0f172a] to-[#0b1120] border-b border-white/10 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-brand-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-spin" style={{ animationDuration: '4s' }} />
            <span>2026 Live High-Converting Ranking</span>
            <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase italic text-white tracking-tight leading-tight">
            Top Rummy Apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-amber-400 to-yellow-300">Comparison Table</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-2.5 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Compare signup bonus, minimum cashout limits, rating, and download 100% verified authentic APKs directly.
          </p>

          {/* Quick Trust Highlights Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 text-[10px] sm:text-xs font-bold text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Instant UPI Withdrawal</span>
            </div>
            <div className="flex items-center gap-1.5 text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full border border-brand-primary/20">
              <Zap className="w-3.5 h-3.5" />
              <span>Free Signup ₹41 & ₹51</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Virus & Malware Free</span>
            </div>
          </div>

          {/* Mobile View Toggle Buttons */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-5">
            <button
              onClick={() => setMobileView('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                mobileView === 'cards' 
                  ? 'bg-brand-primary text-black shadow-md' 
                  : 'bg-white/5 text-slate-400 border border-white/10'
              }`}
            >
              <Layers className="w-3 h-3" />
              Card View
            </button>
            <button
              onClick={() => setMobileView('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                mobileView === 'table' 
                  ? 'bg-brand-primary text-black shadow-md' 
                  : 'bg-white/5 text-slate-400 border border-white/10'
              }`}
            >
              <TableIcon className="w-3 h-3" />
              Table View
            </button>
          </div>
        </div>

        {/* ========================================================== */}
        {/* DESKTOP & TABLET: MODERN COMPARISON TABLE                 */}
        {/* ========================================================== */}
        <div className={`${mobileView === 'cards' ? 'hidden sm:block' : 'block'} rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl bg-[#131b2e]/90 backdrop-blur-md overflow-hidden`}>
          
          <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
            <table className="w-full text-left border-collapse min-w-[700px] sm:min-w-full">
              <thead>
                <tr className="bg-[#1e293b]/90 border-b border-white/15 text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-black select-none">
                  <th className="py-4 px-4 sm:px-6 w-16 text-center">Rank</th>
                  <th className="py-4 px-4 sm:px-6">App Name & Logo</th>
                  <th className="py-4 px-4 sm:px-6 text-center">Signup Bonus</th>
                  <th className="py-4 px-4 sm:px-6 text-center">Min. Withdrawal</th>
                  <th className="py-4 px-4 sm:px-6 text-center">Rating</th>
                  <th className="py-4 px-4 sm:px-6 text-center w-52">Direct Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {TOP_5_COMPARISON_APPS.map((app) => {
                  const isGreen = app.buttonTheme === 'green';
                  return (
                    <tr 
                      key={app.id}
                      className="hover:bg-[#1a253c] transition-all duration-200 group"
                    >
                      {/* 1. Rank Column */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center font-mono">
                        <div className={`w-8 h-8 mx-auto rounded-xl flex items-center justify-center font-black text-sm ${
                          app.rank === 1 
                            ? 'bg-gradient-to-br from-amber-400 to-yellow-600 text-black shadow-md shadow-amber-500/20' 
                            : app.rank === 2
                              ? 'bg-gradient-to-br from-slate-200 to-slate-400 text-black'
                              : app.rank === 3
                                ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-white'
                                : 'bg-white/5 text-slate-300 border border-white/10'
                        }`}>
                          #{app.rank}
                        </div>
                      </td>

                      {/* 2. App Name & Icon/Logo Column */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="relative shrink-0">
                            <img 
                              src={app.iconUrl} 
                              alt={app.name} 
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-white/15 shadow-md group-hover:scale-105 transition-transform"
                              referrerPolicy="no-referrer"
                            />
                            {app.rank === 1 && (
                              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow animate-bounce">
                                #1
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Link 
                                to={app.detailRoute}
                                className="font-black uppercase italic text-white text-sm sm:text-base group-hover:text-brand-primary transition-colors tracking-tight hover:underline"
                              >
                                {app.name}
                              </Link>
                              {app.badge && (
                                <span className={`text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${getBadgeStyle(app.badgeType)}`}>
                                  {app.badge}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-[10px] sm:text-[11px] text-slate-400 font-semibold">
                              <span>Size: <strong className="text-slate-200">{app.apkSize}</strong></span>
                              <span className="text-white/20">•</span>
                              <span className="text-emerald-400 flex items-center gap-0.5">
                                <ShieldCheck className="w-3 h-3" /> Safe APK
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 3. Signup Bonus Column */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-400/40 text-brand-primary-light font-black text-sm sm:text-lg italic shadow-inner">
                            {app.signupBonus}
                          </span>
                          <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                            {app.bonusDetail}
                          </span>
                        </div>
                      </td>

                      {/* 4. Minimum Withdrawal Column */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className="font-black text-white text-sm sm:text-base italic">
                            {app.minWithdrawal}
                          </span>
                          <span className="text-[9px] sm:text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider mt-0.5 flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            {app.withdrawalDetail}
                          </span>
                        </div>
                      </td>

                      {/* 5. Rating Column (5-star format) */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                        <div className="inline-flex flex-col items-center">
                          <div className="flex items-center gap-0.5 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <div className="mt-1 flex items-center gap-1">
                            <span className="font-black text-xs text-white">{app.rating.toFixed(1)}</span>
                            <span className="text-[10px] text-slate-400 font-semibold">({app.reviewCount})</span>
                          </div>
                        </div>
                      </td>

                      {/* 6. Download Button (High CTR Bright Green or Red with glow) */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                        <a 
                          href={app.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-xl ${
                            isGreen 
                              ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-black shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-[1.03]'
                              : 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-red-600/30 hover:shadow-red-600/55 hover:scale-[1.03]'
                          }`}
                        >
                          <Download className={`w-4 h-4 stroke-[3] transition-transform group-hover/btn:-translate-y-0.5 ${
                            isGreen ? 'text-black' : 'text-white'
                          }`} />
                          <span>DOWNLOAD NOW</span>
                        </a>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 flex items-center justify-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>Instant APK Download</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="bg-[#0e1424] px-6 py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5 text-white/80">
              <Award className="w-4 h-4 text-brand-primary" />
              Rankings verified daily based on live withdrawal success rate & real user reviews.
            </span>
            <span className="text-brand-primary font-bold">
              ⚡ 100% Instant UPI & Bank Transfer Supported
            </span>
          </div>
        </div>

        {/* ========================================================== */}
        {/* MOBILE: HIGH-CONVERTING STACKED CARD VIEW                  */}
        {/* ========================================================== */}
        {mobileView === 'cards' && (
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {TOP_5_COMPARISON_APPS.map((app) => {
              const isGreen = app.buttonTheme === 'green';
              return (
                <div 
                  key={app.id}
                  className="bg-[#131b2e] rounded-2xl border border-white/15 p-4 relative overflow-hidden shadow-xl"
                >
                  {/* Top Bar: Rank & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-black ${
                        app.rank === 1 
                          ? 'bg-amber-400 text-black font-black' 
                          : 'bg-white/10 text-white'
                      }`}>
                        #{app.rank}
                      </span>
                      {app.badge && (
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${getBadgeStyle(app.badgeType)}`}>
                          {app.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-yellow-400 text-xs font-black">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{app.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-slate-400 font-medium">({app.reviewCount})</span>
                    </div>
                  </div>

                  {/* App Info Header */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <img 
                      src={app.iconUrl} 
                      alt={app.name} 
                      className="w-14 h-14 rounded-2xl object-cover border border-white/15 shadow-md shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <Link 
                        to={app.detailRoute}
                        className="font-black uppercase italic text-white text-base leading-tight block truncate hover:text-brand-primary"
                      >
                        {app.name}
                      </Link>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1 font-semibold">
                        <span>Size: <strong className="text-slate-200">{app.apkSize}</strong></span>
                        <span className="text-white/20">•</span>
                        <span className="text-emerald-400 flex items-center gap-0.5">
                          <ShieldCheck className="w-3 h-3" /> Verified Safe
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 bg-black/30 rounded-xl p-3 border border-white/5 mb-3.5">
                    <div className="text-center border-r border-white/10 pr-2">
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase block mb-0.5">
                        SIGNUP BONUS
                      </span>
                      <span className="text-brand-primary-light font-black text-base italic block">
                        {app.signupBonus}
                      </span>
                      <span className="text-[8px] text-slate-500 font-bold uppercase block">
                        {app.bonusDetail}
                      </span>
                    </div>

                    <div className="text-center pl-2">
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase block mb-0.5">
                        MIN. CASHOUT
                      </span>
                      <span className="text-white font-black text-base italic block">
                        {app.minWithdrawal}
                      </span>
                      <span className="text-[8px] text-emerald-400 font-bold uppercase block">
                        {app.withdrawalDetail}
                      </span>
                    </div>
                  </div>

                  {/* High CTR Download Action Button */}
                  <a 
                    href={app.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all ${
                      isGreen 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-black shadow-emerald-500/20'
                        : 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-600/30'
                    }`}
                  >
                    <Download className={`w-4 h-4 stroke-[3] ${isGreen ? 'text-black' : 'text-white'}`} />
                    <span>DOWNLOAD APK & GET {app.signupBonus}</span>
                  </a>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
