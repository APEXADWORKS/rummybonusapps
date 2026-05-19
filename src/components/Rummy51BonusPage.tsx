import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Coins, 
  Download, 
  CheckCircle2, 
  Gift, 
  FileText,
  Star
} from 'lucide-react';
import { RUMMY_APPS } from '../data';

export default function Rummy51BonusPage() {
  // Filter apps matching ₹51 Welcome Bonus (Rs.51, Rs. 51, ₹51, etc.)
  const bonus51Apps = useMemo(() => {
    return RUMMY_APPS.filter(app => 
      app.bonus.includes('51') || app.bonus.toLowerCase().includes('51')
    );
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black pb-20">
      <Helmet>
        <title>Rummy 51 Bonus Apps List 2026 - Claim ₹51 Free SignUp Rewards</title>
        <meta name="description" content="Looking for Rummy 51 Bonus Apps? Get the active curated list of all rummy apps providing ₹51 signup incentives. Double check guides and secure instant mobile cashouts." />
        <meta name="keywords" content="Rummy 51 Bonus, Rummy 51 Bonus Apps, ₹51 Free Rummy bonus, Teen Patti 51 bonus games, All Rummy 51 bonus list" />
        <link rel="canonical" href="https://allrummybonus.com/rummy-51-bonus" />
      </Helmet>

      {/* Glassmorphic Header */}
      <header className="bg-bg-secondary/90 backdrop-blur-md border-b border-brand-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:text-brand-primary transition-colors text-slate-300 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-wider">Back to Hub</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-brand-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-black uppercase italic tracking-widest text-[#fbbf24]">
              RUMMY 51 BONUS PORTAL
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-ping" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-brand-primary-light">Promo Code Active</span>
          </div>
        </div>
      </header>

      {/* Main Hero Space */}
      <section className="py-16 bg-gradient-to-b from-amber-500/10 via-bg-secondary to-bg-dark border-b border-white/5 relative overflow-hidden text-center sm:text-left">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#f59e0b]/5 blur-[130px] rounded-full" />
        <div className="absolute left-10 top-10 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded-full text-brand-primary text-[9px] font-black uppercase tracking-widest mb-4">
            <Coins className="w-3.5 h-3.5" /> High-Yield VIP Segment Only
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black uppercase italic leading-none m-0 tracking-tight font-display text-white">
            RUMMY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-amber-300">51 BONUS</span> PLATFORMS
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Dynamic List grid for 51 Bonus Apps */}
        <section className="mb-12">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-xl font-black uppercase italic tracking-tight m-0 text-brand-primary flex items-center gap-2">
              <span className="h-4 w-1.5 bg-brand-primary rounded" /> Curated ₹51 Signup Reward Tiers ({bonus51Apps.length} Apps)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonus51Apps.map((app) => {
              return (
                <div 
                  key={app.id}
                  className="bg-bg-secondary p-5 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all flex flex-col justify-between hover:scale-[1.01]"
                >
                  <div>
                    {/* Header badge */}
                    <div className="flex justify-end items-center gap-4 mb-4">
                      <span className="bg-brand-primary/10 border border-brand-primary/20 text-brand-primary-light text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                        ₹51 REWARD
                      </span>
                    </div>

                    <div className="flex gap-3.5 mb-4">
                      <div className="relative shrink-0">
                        <img 
                          src={app.iconUrl} 
                          alt={app.name} 
                          className="w-14 h-14 rounded-xl object-contain border border-white/10"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute -inset-0.5 rounded-xl bg-brand-primary/10 blur-[1px]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-black uppercase italic truncate text-white leading-tight mt-0.5 mb-1 group-hover:text-brand-primary">
                          {app.name}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-[9px] text-slate-400 font-extrabold uppercase">Verified</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-black/25 rounded-xl p-3 border border-white/5 text-center mb-4">
                      <div>
                        <span className="text-[8px] text-slate-500 font-bold uppercase block">Withdrawal limit</span>
                        <span className="text-white font-black text-xs italic">{app.minWithdrawal}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 font-bold uppercase block">Active downloads</span>
                        <span className="text-brand-primary-light font-black text-xs italic">{app.downloads}</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={app.id === 'rummy-apple' ? '/uttam1' : `/${encodeURIComponent(app.name)}`}
                    onClick={(e) => e.stopPropagation()} // Stop bubbling up click selection
                    className="w-full bg-gradient-to-r from-brand-primary to-amber-500 hover:brightness-110 active:scale-95 text-black font-black py-3 rounded-xl uppercase tracking-widest text-[10px] text-center transition-all flex items-center justify-center gap-1.5 font-sans"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[3]" />
                    DOWNLOAD SECURE APK
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed High-Authority SEO Guide */}
        <section className="bg-bg-secondary p-6 sm:p-10 rounded-3xl border border-white/5 mb-12">
          <h2 className="text-xl sm:text-2xl font-black uppercase italic text-brand-primary mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-primary" /> Comprehensive Guide: Claiming ₹51 Welcome Rewards Successfully
          </h2>
          
          <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
            <p>
              The <strong>Rummy 51 Bonus</strong> is highly regarded across India as the gold standard of sign-up incentives for skill-based gaming apps. By choosing certified ₹51 reward packages, players get an direct lobby buffer to participate in live Points and Pools tables. Here's what you need to master to ensure your sign-up credits are processed correctly by active gaming backends:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3 bg-black/20 p-5 rounded-2xl border border-white/5 font-semibold">
                <h4 className="text-white font-black uppercase italic text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> 1. Profile Verification (OTP Binding)
                </h4>
                <p className="text-xs text-slate-400 m-0 leading-relaxed">
                  Most modern Rummy networks require binding an active cellular node. Upon launching the game, bypass the temporary Guest Mode and select "Instant Register Profile". Enter your 10-digit smartphone number and verify through the standard SMS OTP sequence to trigger the automatically credited ₹51.
                </p>
              </div>

              <div className="space-y-3 bg-black/20 p-5 rounded-2xl border border-white/5 font-semibold">
                <h4 className="text-white font-black uppercase italic text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> 2. One Account per Device Limits
                </h4>
                <p className="text-xs text-slate-400 m-0 leading-relaxed">
                  Anti-fraud algorithms detect device and IP telemetry blocks. If you register multiple profiles from a single phone, the bonus claims might be flagged and locked immediately. To keep your cashouts and UPI pipelines entirely secure, maintain only one exclusive member profile per app client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outer Silo Navigation Links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-12">
          <Link 
            to="/all-rummy-apps" 
            className="bg-[#1e293b]/50 border border-white/10 rounded-2xl p-6 hover:border-brand-primary/30 transition-all group"
          >
            <span className="bg-slate-800 text-slate-400 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">All Database Directory</span>
            <h3 className="text-base font-black uppercase italic text-white group-hover:text-brand-primary mt-2 mb-1">
              Browse Rummy Directory ➔
            </h3>
            <p className="text-xs text-slate-400 m-0 leading-relaxed font-semibold">
              Browse our complete master catalog search index of every Rummy and Teen Patti game thoroughly inside our directory.
            </p>
          </Link>

          <Link 
            to="/" 
            className="bg-[#1a2333]/70 border border-brand-primary/25 rounded-2xl p-6 hover:brightness-110 transition-all group"
          >
            <span className="bg-brand-primary text-black text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">Primary Hub</span>
            <h3 className="text-base font-black uppercase italic text-white group-hover:text-brand-primary-light mt-2 mb-1">
              View Top 10 Recommended ➔
            </h3>
            <p className="text-xs text-slate-400 m-0 leading-relaxed font-semibold">
              Go back to the homepage to see the highly optimized curated table of the premier rummy apps.
            </p>
          </Link>
        </section>

      </main>

      {/* Basic Footer */}
      <footer className="border-t border-white/5 pt-8 pb-4 text-center text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-black/20">
        <div className="max-w-7xl mx-auto space-y-1">
          <p>These real money table games involve financial risk. Under 18 gameplay is strictly restricted.</p>
          <p>© 2026 RummyBonusApps. Free Sign up reward promotions list.</p>
        </div>
      </footer>
    </div>
  );
}
