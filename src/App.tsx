import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Search, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  Info, 
  Phone,
  Mail,
  ShieldCheck,
  X
} from 'lucide-react';
import { RUMMY_APPS, RummyApp } from './data';
import AppDetailPage from './components/AppDetailPage';
import Uttam1Page from './components/Uttam1Page';

import mahaLootBanner from './assets/images/maha_loot_banner_1779179081106.png';
import rozRummyBanner from './assets/images/roz_rummy_banner_1779179099457.png';
import withdrawalProofBanner from './assets/images/withdrawal_proof_banner_1779179116289.png';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Top' | 'New' | 'High Bonus'>('All');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const filteredApps = useMemo(() => {
    return RUMMY_APPS.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'All' || app.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black">
      <Helmet>
        <title>All Rummy Apps - Download Rummy All Apk & Get Free Bonus 2026</title>
        <meta name="description" content="Looking for the complete All Rummy App List? Download Rummy All Apk today! Get Rummy Bonus Apps, Rummy 51 Bonus, and New Rummy App Today with live withdrawal proof." />
        <meta name="keywords" content="All Rummy Apps, Rummy All Apps, Rummy All Apk Download, rummy bonus apps, rummy 51 bonus, new rummy app today, Teen Patti Game, Yono Rummy All Games, free signup bonus rummy, new rummy app 2026, all rummy app list, rummy game download, live withdrawal proof rummy, download all rummy downloads, trending rummy games" />
        <link rel="canonical" href="https://allrummybonus.com/" />
      </Helmet>
      {/* Sticky Header with two bars */}
      <header className="sticky top-0 z-50 shadow-2xl">
        {/* Main Brand Bar */}
        <nav className="bg-bg-secondary border-b border-brand-primary/30 py-1.5">
          <Link to="/" className="max-w-7xl mx-auto px-4 text-center flex justify-center items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src="/src/assets/images/rummy_app_icon_1_1779106072119.png" 
              alt="Bonus Rummy Apps Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <h1 className="text-[10px] sm:text-lg font-black uppercase italic tracking-wider text-white">
              All Rummy Bonus Apps - <span className="text-brand-primary">Download</span> & Get <span className="text-brand-primary-light">Free Bonus</span>
            </h1>
          </Link>
        </nav>

        {/* Secondary Menu Bar */}
        <nav className="bg-bg-dark border-b border-white/5 py-2">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsDisclaimerOpen(true);
                }} 
                className="hover:text-brand-primary transition-colors cursor-pointer uppercase font-bold"
              >
                Disclaimer
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutOpen(true);
                }} 
                className="hover:text-brand-primary transition-colors cursor-pointer uppercase font-bold"
              >
                About
              </button>
              <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
            </div>

            {/* Search Bar in Header */}
            <div className="relative group w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search apps..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-3 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-primary/50 transition-all focus:bg-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </header>

      <main>

        {/* Promotional Banners Section */}
        <section className="py-6 bg-[#0f172a] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-brand-primary" />
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Hot Promotions</h2>
            </div>
            
            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4">
              {/* Banner 1 */}
              <a 
                href="https://www.junglehaan.vip/share/6IOe3xy=1538" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[280px] sm:w-[450px] aspect-[16/6] bg-gradient-to-br from-indigo-600 to-blue-800 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer block"
              >
                <img 
                  src={mahaLootBanner} 
                  alt="Promotion 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="bg-brand-primary text-black text-[8px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1">Big Loot</span>
                  <h3 className="text-sm sm:text-lg font-black uppercase italic leading-tight text-white drop-shadow-md">New Maha Loot Teen Patti App - Get ₹41</h3>
                </div>
              </a>

              {/* Banner 2 */}
              <a 
                href="https://www.junglehaan.vip/share/6IOe3xy=1538" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[280px] sm:w-[450px] aspect-[16/6] bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer block"
              >
                <img 
                  src={rozRummyBanner} 
                  alt="Promotion 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="bg-white/20 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1">Free Bonus</span>
                  <h3 className="text-sm sm:text-lg font-black uppercase italic leading-tight text-white drop-shadow-md">Roz Rummy - Free ₹25 SignUp Bonus</h3>
                </div>
              </a>

              {/* Banner 3 */}
              <a 
                href="https://www.junglehaan.vip/share/6IOe3xy=1538" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[280px] sm:w-[450px] aspect-[16/6] bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer block"
              >
                <img 
                  src={withdrawalProofBanner} 
                  alt="Promotion 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="bg-white/20 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1">Verified</span>
                  <h3 className="text-sm sm:text-lg font-black uppercase italic leading-tight text-white drop-shadow-md">₹51 Bonus with Live Withdrawal Proof</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* App Grid Section */}
        <section id="apps" className="py-8 sm:py-12 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[min(4vw,1rem)] sm:text-xl font-black uppercase italic text-center mb-10 text-white tracking-tight whitespace-nowrap">
              🔥 Top Rummy Bonus Apps in India 🔥
            </h2>
            {/* Filter Tabs - High Density Style with Horizontal Scroll on Mobile */}
            <div className="flex overflow-x-auto no-scrollbar pb-2 mb-10 w-full justify-start sm:justify-center">
              <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/5 whitespace-nowrap">
                {(['All', 'Top', 'New', 'High Bonus'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 sm:px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all min-w-[80px] ${
                      activeTab === tab 
                        ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20' 
                        : 'hover:bg-white/5 text-slate-500 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* App Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredApps.length > 0 ? (
                  filteredApps.map((app, index) => (
                    <motion.div
                      key={app.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.01 }}
                    >
                      <AppCard app={app} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center"
                  >
                    <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
                    <h3 className="text-xl font-black uppercase italic text-white/40">No Apps Found</h3>
                    <p className="text-white/20 text-sm mt-2 uppercase tracking-widest font-bold">Try searching for something else</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-6 text-brand-primary underline uppercase tracking-widest text-[10px] font-black"
                    >
                      Clear Search
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="about" className="py-20 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1e293b] rounded-[2rem] border border-white/5 p-6 sm:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px]" />
               
               <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-black uppercase italic mb-8">Why <span className="text-brand-primary">rummyBonusapps</span>?</h2>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                          <ShieldCheck className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider mb-1">Safe & Official APKs</h3>
                          <p className="text-white/40 text-xs">We only list official download links from trusted publishers to ensure your safety.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                          <TrendingUp className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider mb-1">Instant Bonus Updates</h3>
                          <p className="text-white/40 text-xs">Get real-time updates on latest bonus codes and promotional offers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-xl p-5 sm:p-8 border border-white/5">
                     <div className="text-center mb-6">
                        <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter mb-1">Important Disclaimer</h3>
                        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Read Before Playing</p>
                     </div>
                     <p className="text-white/50 text-xs leading-relaxed mb-6 italic">
                        These games involve an element of financial risk and may be addictive. Players must be 18+ years of age. Please play responsibly and at your own risk. RummyBonus is an informational platform and not a gaming provider.
                     </p>
                     <div className="flex justify-center">
                        <div className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">
                          18+ Responsible Gaming
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords section */}
        <section className="py-12 bg-bg-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-[#1e293b]/50 rounded-3xl p-8 border border-white/5">
              <h2 className="text-2xl font-black uppercase italic italic mb-6 text-brand-primary">Search All Rummy Apps & Rummy All Apk Download</h2>
              <div className="prose prose-invert max-w-none text-white/40 text-xs leading-loose space-y-4">
                <p>
                  Welcome to the ultimate destination for <strong>All Rummy Apps</strong>. If you are looking for <strong>Rummy All Apps</strong> with the best features, you've come to the right place. We provide <strong>Rummy All Apk Download</strong> links that are 100% safe and verified. Whether you want <strong>rummy bonus apps</strong> or searching for the latest <strong>rummy 51 bonus</strong>, our comprehensive <strong>all rummy app list</strong> has everything you need.
                </p>
                <p>
                  Discover the <strong>new rummy app today</strong> and start your winning journey. We also feature popular <strong>Teen Patti Game</strong> downloads and <strong>Yono Rummy All Games</strong> for fans of skill-based gaming. Don't miss out on the <strong>free signup bonus rummy</strong> offers available only for our users. Our <strong>new rummy app 2026</strong> collection is updated daily to ensure you have access to <strong>trending rummy games</strong>.
                </p>
                <p>
                  Every <strong>rummy game download</strong> on our platform comes with a guarantee of speed and reliability. We provide <strong>live withdrawal proof rummy</strong> videos and screenshots to build trust with our community. When you <strong>download all rummy downloads</strong> from our site, you get access to exclusive tournaments and high-stakes games.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {[
                    "All Rummy Apps", "Rummy All Apps", "Rummy All Apk Download", "rummy bonus apps", "rummy 51 bonus",
                    "new rummy app today", "Teen Patti Game", "Yono Rummy All Games", "free signup bonus rummy",
                    "new rummy app 2026", "all rummy app list", "rummy game download", "live withdrawal proof rummy",
                    "download all rummy downloads", "trending rummy games"
                  ].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-brand-primary/30 transition-colors cursor-default">
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 py-4 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
        <span>© 2024 rummyBonusapps.com. All Rights Reserved.</span>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="hover:text-brand-primary cursor-pointer transition-colors">T&C Apply</span>
          <span className="hover:text-brand-primary cursor-pointer transition-colors">18+ Responsible Gaming</span>
          <span className="hover:text-brand-primary cursor-pointer transition-colors">support@rummybonus.com</span>
        </div>
      </footer>

      {/* Disclaimer Modal */}
      <AnimatePresence>
        {isDisclaimerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDisclaimerOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <h2 className="text-xl font-black uppercase italic text-brand-primary">Important Notice</h2>
                <button 
                  onClick={() => setIsDisclaimerOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    This website is an informational app landing page only. We do not own, operate, or provide any real-money gaming or gambling services.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    All third-party apps displayed or linked on this website are owned and operated by their respective owners. Any gameplay, deposits, withdrawals, or transactions are solely between users and the app operators.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Playing games for real money involves financial risk and may be addictive. Users are advised to play responsibly and only if permitted by local laws.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed italic border-l-2 border-brand-primary pl-4 py-1">
                    By using this website, you acknowledge that you are using third-party services at your own risk.
                  </p>
                </div>
                <button 
                  onClick={() => setIsDisclaimerOpen(false)}
                  className="w-full bg-brand-primary text-black font-black py-4 rounded-xl shadow-lg shadow-brand-primary/20 uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  I Understand & Accept
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <h2 className="text-xl font-black uppercase italic text-brand-primary">About Us</h2>
                <button 
                  onClick={() => setIsAboutOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    allrummybonus.com is an independent app landing page that provides information and download links for third-party rummy and skill-based gaming applications for Android users.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    This website is designed to help users discover mobile gaming apps, view basic app details, and access publicly available download options in one place.
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    allrummybonus.com does not own, operate, or represent any of the mobile applications listed on this website. All app names, trademarks, and logos belong to their respective owners.
                  </p>
                </div>
                <button 
                  onClick={() => setIsAboutOpen(false)}
                  className="w-full bg-brand-primary text-black font-black py-4 rounded-xl shadow-lg shadow-brand-primary/20 uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/uttam1" element={<Uttam1Page />} />
          <Route path="/:appName" element={<AppDetailPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

function AppCard({ app }: { app: RummyApp }) {
  return (
    <div className="h-full bg-[#1e293b] rounded-xl border border-white/10 p-4 flex flex-col justify-between hover:border-brand-primary/50 transition-all shadow-xl group">
      <div className="flex gap-4 mb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex-shrink-0 shadow-lg border border-white/20 overflow-hidden">
          <img src={app.iconUrl} alt={app.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-primary-light transition-colors line-clamp-1">{app.name}</h2>
          <div className="flex items-center gap-1 text-[9px] text-slate-400 mt-1 uppercase tracking-tighter font-black">
            <Download className="w-3 h-3" />
            {app.downloads}
          </div>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="mt-2 bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-1 rounded w-fit border border-green-500/30 uppercase">
            BONUS: {app.bonus}
          </div>
        </div>
      </div>
      
      <div className="bg-slate-800/50 rounded-lg p-3 mb-4 border border-white/5">
        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Min. Withdrawal</p>
        <p className="font-black text-brand-primary-light text-lg italic tracking-tighter">{app.minWithdrawal}</p>
      </div>

      <Link 
        to={`/${encodeURIComponent(app.name)}`}
        target="_blank"
        className="w-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-black font-black py-3 rounded-lg shadow-lg shadow-brand-primary/20 uppercase tracking-wide text-xs text-center hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <Download className="w-4 h-4" />
        Download App
      </Link>
    </div>
  );
}
