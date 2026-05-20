import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Download, 
  Star, 
  Hash, 
  Coins, 
  HelpCircle,
  ExternalLink,
  ShieldAlert,
  Menu,
  X
} from 'lucide-react';
import { RUMMY_APPS, RummyApp } from '../data';

export default function AllRummyAppsPage() {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialQuery = useMemo(() => searchParams.get('q') || '', [searchParams]);

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortOrder, setSortOrder] = useState<'name-asc' | 'name-desc' | 'bonus-high'>('name-asc');

  const sortedAndFilteredApps = useMemo(() => {
    // 1. Filter by search query
    const filtered = RUMMY_APPS.filter(app => 
      app.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // 2. Sort
    return [...filtered].sort((a, b) => {
      if (sortOrder === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortOrder === 'bonus-high') {
        // Simple extraction of integers from bonus string (e.g., "Rs.51" -> 51)
        const bonusA = parseInt(a.bonus.replace(/\D/g, '')) || 0;
        const bonusB = parseInt(b.bonus.replace(/\D/g, '')) || 0;
        return bonusB - bonusA;
      }
      return 0;
    });
  }, [searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black">
      <Helmet>
        <title>All Rummy Apps List & Directory - Download Rummy APKs</title>
        <meta name="description" content="Discover the complete master directory of All Rummy Apps released. Browse our comprehensive list, search bonuses, and download official, 100% verified rummy files securely." />
        <meta name="keywords" content="all rummy app directory, download all rummy games, real money rummy catalog, new rummy listing, verified rummy apk files" />
        <link rel="canonical" href="https://allrummybonus.com/all-rummy-apps" />
      </Helmet>

      {/* Header */}
      <header className="bg-bg-secondary/90 backdrop-blur-md border-b border-brand-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:text-brand-primary transition-colors text-slate-300 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-wider">Back to Hub</span>
          </Link>
          
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <img 
              src="/images/all_rummy_1to1_logo_1779225745385.png" 
              alt="Brand Logo" 
              className="h-8 w-8 object-contain rounded-lg border border-brand-primary/20"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs sm:text-sm font-black uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-300">
              ALL RUMMY DIRECTORY
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Directory Synced</span>
          </div>
        </div>
      </header>

      {/* Hero Intro */}
      <section className="py-12 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center sm:text-left">
          <span className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
            SEO Silo Directory Block
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase italic mt-4 mb-3 tracking-tight font-display">
            ALL RUMMY <span className="text-brand-primary">GAMES DIRECTORY</span>
          </h1>
        </div>
      </section>

      {/* Dictionary Control Center */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Sort controls */}
        <div className="bg-bg-secondary p-4 rounded-2xl border border-white/5 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Detailed search bar with counts */}
          <div className="relative group w-full md:w-96 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search directory of 100+ games..." 
              className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold uppercase tracking-widest text-white focus:outline-none focus:border-brand-primary/50 transition-all"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>

          {/* Quick Stats Banner */}
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-3">
            <span>TOTAL DATABASE: <span className="text-brand-primary font-black">{RUMMY_APPS.length} apps</span></span>
            <span className="text-slate-700">|</span>
            <span>MATCHES: <span className="text-white font-black">{sortedAndFilteredApps.length}</span></span>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Sort By:</span>
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-slate-900 border border-white/10 rounded-xl py-2.5 px-3 text-xs uppercase font-extrabold text-white focus:outline-none focus:border-brand-primary/30"
            >
              <option value="name-asc">Name (A - Z)</option>
              <option value="name-desc">Name (Z - A)</option>
              <option value="bonus-high">Highest Welcome Bonus</option>
            </select>
          </div>
        </div>

        {/* Dictionary Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {sortedAndFilteredApps.length > 0 ? (
              sortedAndFilteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-bg-secondary/70 border border-white/10 hover:border-brand-primary/40 rounded-2xl p-4 flex items-center justify-between group transition-all hover:bg-bg-secondary"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Index number count */}
                    <span className="font-mono text-[9px] text-slate-600 font-bold shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    <div className="relative shrink-0">
                      <img 
                        src={app.iconUrl} 
                        alt={app.name} 
                        className="w-12 h-12 rounded-xl object-contain border border-white/15"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -inset-0.5 rounded-xl bg-brand-primary/5 blur-[2px]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-black uppercase italic text-white group-hover:text-brand-primary transition-colors truncate m-0 leading-tight">
                        {app.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-[10px] font-bold text-slate-400">
                        <span className="text-brand-primary-light font-black">Bonus: {app.bonus}</span>
                        <span className="text-slate-700">•</span>
                        <span>Min. Out: {app.minWithdrawal}</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={app.id === 'rummy-apple' ? '/uttam1' : `/${encodeURIComponent(app.name)}`}
                    className="flex items-center justify-center gap-1.5 px-4.5 py-3.5 bg-gradient-to-r from-brand-primary to-amber-500 hover:brightness-110 active:scale-95 text-black text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-md shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[3]" />
                    GET
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-bg-secondary/30 rounded-3xl border border-white/5">
                <ShieldAlert className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h4 className="text-lg font-black uppercase text-slate-400">No Apps Match Your Search</h4>
                <p className="text-xs text-slate-600 uppercase tracking-widest font-bold mt-1">Try another search term above.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 bg-brand-primary hover:bg-brand-primary-light text-black font-black text-xs uppercase rounded-lg shadow-md transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Silo Authority Linkages */}
        <section className="mt-20 border-t border-white/5 pt-12">
          <h2 className="text-xl font-black uppercase italic mb-6 tracking-wide text-brand-primary">
            Explore Rummy Directory Silos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/rummy-51-bonus" 
              className="bg-gradient-to-r from-amber-500/10 to-transparent border border-brand-primary/30 rounded-2xl p-6 hover:brightness-110 transition-all group"
            >
              <span className="bg-brand-primary text-black text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Special Silo Hub</span>
              <h3 className="text-base font-black uppercase italic text-white group-hover:text-brand-primary-light mt-2 mb-1">
                ₹51 Bonus Apps Only ➔
              </h3>
              <p className="text-xs text-slate-400 m-0 leading-relaxed font-semibold">
                Looking only for the absolute highest signup bonus apps? Browse our landing page exclusively built for ₹51 register incentives.
              </p>
            </Link>

            <Link 
              to="/" 
              className="bg-bg-secondary border border-white/10 rounded-2xl p-6 hover:border-brand-primary/30 transition-all group"
            >
              <span className="bg-slate-800 text-slate-400 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Parent Portal</span>
              <h3 className="text-base font-black uppercase italic text-white group-hover:text-brand-primary mt-2 mb-1">
                Go to Recommended Hub ➔
              </h3>
              <p className="text-xs text-slate-400 m-0 leading-relaxed font-semibold">
                Access the visual table of India's Top 10 recommended rummy applications, with details, withdrawal speed audits, and premium rewards.
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* Small Legal Disclaimer */}
      <footer className="bg-black/40 py-8 px-4 border-t border-white/5 text-center text-[10px] uppercase tracking-wider text-slate-500 font-bold">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>This master directory list is for general informational and educational compilation purposes only.</p>
          <p>© 2026 RummyBonusApps Directory. All trademarks belong to respective partners.</p>
        </div>
      </footer>
    </div>
  );
}
