import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Trophy, 
  Smartphone,
  Star
} from 'lucide-react';
import { RUMMY_APPS } from '../data';

export default function AppDetailPage() {
  const { appName } = useParams<{ appName: string }>();
  
  const app = RUMMY_APPS.find(a => a.name === appName || a.name.toLowerCase().replace(/\s+/g, '-') === appName?.toLowerCase());

  if (!app) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-black mb-4">App Not Found</h1>
        <Link to="/" className="text-brand-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pb-20">
      <Helmet>
        <title>{app.name} Download APK - Get {app.bonus} Signup Bonus | All Rummy Apps 2026</title>
        <meta name="description" content={`Download ${app.name} APK officially. Get ${app.bonus} bonus on signup. Min withdrawal ${app.minWithdrawal}. Part of our All Rummy App List with live withdrawal proof.`} />
        <meta name="keywords" content={`${app.name} download, ${app.name} apk, All Rummy Apps, Rummy All Apps, Rummy All Apk Download, rummy bonus apps, rummy 51 bonus, new rummy app today, Teen Patti Game, Yono Rummy All Games, free signup bonus rummy, new rummy app 2026, all rummy app list, rummy game download, live withdrawal proof rummy, download all rummy downloads, trending rummy games`} />
        <link rel="canonical" href={`https://www.rummybonusapps.com/${encodeURIComponent(app.name.replace(/\s+/g, '-'))}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": app.name,
            "operatingSystem": "Android, iOS",
            "applicationCategory": "GameApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": app.name === "Rummy Gold" ? "4.7" : "4.8",
              "ratingCount": app.name === "Rummy Gold" ? "18450" : (app.downloads.replace(/[^0-9]/g, '') || "18450")
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>
      {/* Header */}
      <header className="bg-[#1e293b] border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <h1 className="text-sm sm:text-lg font-black uppercase italic tracking-wider text-brand-primary truncate max-w-[200px] sm:max-w-none m-0">
              {app.name} - Download APK & Play
            </h1>
          </Link>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-[#1e293b] rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative flex flex-col sm:flex-row items-center gap-8">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-primary/20 blur-xl group-hover:bg-brand-primary/30 transition-all rounded-full" />
              <img 
                src={app.iconUrl} 
                alt={app.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] relative shadow-2xl border-2 border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                <span className="bg-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-brand-primary/30">
                  {app.category}
                </span>
                {app.isTrending && (
                  <span className="bg-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-orange-500/30">
                    Trending
                  </span>
                )}
              </div>
              <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none italic uppercase">
                {app.name}
              </h2>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-brand-primary" />
                  <span className="font-bold">{app.downloads} Downloads</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a 
              href={app.downloadLink === '#' ? 'https://www.junglehaan.vip/share/6IOe3xy=1538' : app.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-brand-primary text-black py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)]"
            >
              <Download className="w-6 h-6 stroke-[3]" />
              Download APK Now
            </a>
            <p className="text-center text-white/40 text-[10px] mt-4 font-bold uppercase tracking-widest">
              Safe & Secure Download • Direct APK Link
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Signup Bonus', value: app.bonus, icon: Zap },
            { label: 'Min Withdrawal', value: app.minWithdrawal, icon: Trophy },
            { label: 'App Size', value: '35 MB', icon: Smartphone },
            { label: 'Security', value: 'Verified', icon: ShieldCheck },
          ].map((item, i) => (
            <div key={i} className="bg-[#1e293b] p-4 rounded-2xl border border-white/5 text-center">
              <item.icon className="w-5 h-5 text-brand-primary mx-auto mb-2" />
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-lg font-black text-white italic">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Top Recommended Apps Grid - Directly below size/security info */}
        <div className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-brand-primary animate-bounce shrink-0" />
            <h3 className="text-xl sm:text-2xl font-black uppercase italic tracking-tight text-white m-0">
              Top Recommended Apps
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {RUMMY_APPS.filter(item => item.id !== app.id).slice(0, 8).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <img 
                    src={item.iconUrl} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-black uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors truncate m-0">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5 whitespace-nowrap">
                      Bonus: <span className="text-brand-primary-light font-black">{item.bonus}</span>
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
                      Min. Withdraw: <span className="text-white italic">{item.minWithdrawal}</span>
                    </p>
                  </div>
                </div>
                
                <Link 
                  to={item.id === 'rummy-apple' ? '/uttam1' : `/${encodeURIComponent(item.name.replace(/\s+/g, '-'))}`}
                  className="px-3 py-2 bg-brand-primary text-black text-[9px] font-black uppercase tracking-wider rounded-lg hover:scale-105 active:scale-95 transition-all shrink-0 text-center flex items-center gap-1 ml-2"
                >
                  <Download className="w-3 h-3 stroke-[2.5]" />
                  Get
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 text-center">
            <p className="text-[9px] font-black uppercase tracking-widest text-brand-primary mb-1">⚡ Instant Cashout ⚡</p>
            <p className="text-[10px] text-white/55 font-semibold">All recommended apps are verified, secure, and offer direct UPI withdrawals.</p>
          </div>
        </div>

        {/* Extensive Content (1000+ words) */}
        <div className="space-y-8">
            
            {/* Section 1: Complete App Overview */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                1. Complete Overview of {app.name}
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  The digital mobile gaming landscape in India has witnessed an extraordinary revolution over recent years, and at the absolute forefront of this card-gaming movement stands <strong>{app.name}</strong>. Highly requested by strategy gaming enthusiasts and casual players alike, this premium platform is meticulously engineered to provide an elite, low-latency gaming environment. By combining premium visual designs with a highly secure multi-layer backend, {app.name} guarantees that every card shuffle is completely randomized and safe from external interference. 
                </p>
                <p>
                  With an active community exceeding {app.downloads} downloads, you never have to experience empty game lobbies or wait extensively to find active players. Whether you prefer fast 2-player quick-matches or long tournaments involving thousands of players, the lobbies run 24 hours a day, 7 days a week. For new users, joining the community comes with an exciting immediate incentive: a welcome signup bonus of {app.bonus} credited directly upon mobile number verification. This is a perfect starter kit to test cash tables, familiarize yourself with game rules, and develop winning card-melding plans without risking your own initial capital.
                </p>
              </div>
            </section>

            {/* Section 2: Step-by-Step Installation */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                2. Direct Download & Installation Manual
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Because advanced cash skill-based games are highly tailored, installing the game via a direct APK file is the recommended industry method for optimal security and real-time updates. The installation package is completely optimized, requiring approximately 35 MB of local space to ensure ultra-smooth performance even on modest devices.
                </p>
                <div className="bg-black/20 rounded-xl p-5 border border-white/5 space-y-3">
                  <div className="flex gap-3">
                    <span className="font-mono text-brand-primary font-black">01.</span>
                    <p className="text-xs text-white/80"><strong className="text-white">Fetch the Installer:</strong> Click the prominent direct "Download APK Now" button found on this page to securely download the authentic {app.name} package.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-brand-primary font-black">02.</span>
                    <p className="text-xs text-white/80"><strong className="text-white">Enable Source Approvals:</strong> Go to settings on your Android device, tap "Security" or "Apps & Notifications", and enable "Install from Unknown Sources" or "Install Unknown Apps" for your web browser or file explorer.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-brand-primary font-black">03.</span>
                    <p className="text-xs text-white/80"><strong className="text-white">Execute Installation:</strong> Locate the retrieved package in your "Downloads" directory, tap it, and click "Install". The system will process everything securely within seconds.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-brand-primary font-black">04.</span>
                    <p className="text-xs text-white/80"><strong className="text-white">Launch the Lobby:</strong> Open the newly appeared icon, grant standard network permissions, and prepare to enter the premium visual dashboard.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: High Signup Reward Guide */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                3. Claiming Your {app.bonus} Free Register Bonus
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  The welcome bonus is highly valuable because it provides a fully funded test drive of the actual cash rooms. In order to keep your private wallet safe and fulfill legal gaming guidelines, your account must be registered using a valid mobile phone number. 
                </p>
                <p>
                  To secure your bonus, open the newly installed {app.name} and choose the "Register Account" or "Bind Mobile" menu. Type in your standard ten-digit mobile number, choose an active alphanumeric password to shield your future chips, and press "Send OTP". You will quickly receive a secure 4-digit or 6-digit confirmation code via standard SMS. Enter this code into the active input box to bind your device permanently. The second verification completes, the system instantly deposits the {app.bonus} signup bonus straight into your playable virtual wallet balance!
                </p>
              </div>
            </section>

            {/* Section 4: Game Modes & Variants */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                4. Rummy Varieties & Special Lobby Formats
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  An exceptional advantage of playing {app.name} is the sheer volume of games available in a single client interface. Players are never tied to a single play style, allowing you to cycle through multiple dynamic variants:
                </p>
                <ul className="space-y-4 mt-2">
                  <li className="bg-black/10 p-4 rounded-xl border border-white/5">
                    <strong className="text-brand-primary uppercase italic block mb-1">Points Rummy (The Quick Action)</strong>
                    <p className="text-xs text-white/70">Perfect for fast sessions, this mode assigns a fixed point rate to every deal. Melding your 13 cards with low points decides the winner quickly, providing fast turnover values.</p>
                  </li>
                  <li className="bg-black/10 p-4 rounded-xl border border-white/5">
                    <strong className="text-brand-primary uppercase italic block mb-1">Pool Rummy (101 & 201)</strong>
                    <p className="text-xs text-white/70">A classic, high-endurance test. Any player who crosses the 101 or 201 point threshold is immediately eliminated. Long-range patience and master logical maneuvers determine who claims the entire prize pool.</p>
                  </li>
                  <li className="bg-black/10 p-4 rounded-xl border border-white/5">
                    <strong className="text-brand-primary uppercase italic block mb-1">Deals Rummy (Set Matches)</strong>
                    <p className="text-xs text-white/70">This format distributes equal chips and plays over a predefined number of deals. At the end of the deal rounds, the player with the most chips takes the crown.</p>
                  </li>
                  <li className="bg-black/10 p-4 rounded-xl border border-white/5">
                    <strong className="text-brand-primary uppercase italic block mb-1">Highly Engaging Casual Games</strong>
                    <p className="text-xs text-white/70">Looking for lightning fast predictions? Take a visual detour and explore secondary titles such as Teen Patti, Dragon vs Tiger, Andar Bahar, or Car Roulette with immersive lighting effects.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Deposits & Withdrawals */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                5. Fund Management & Withdrawal Procedures
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Adding funds to access high-tier VIP tournaments is smooth and modern. By joining hands with India's primary direct payment structures, {app.name} lets you configure quick deposits using any UPI platform (Google Pay, PhonePe, Paytm, BHIM), NetBanking, or Bank Cards. Standard encryption processes check your funds instantly, and they normally reflect in your dashboard wallet in less than five seconds.
                </p>
                <p>
                  Redeeming your accumulated card winnings is equally streamlined. The platform maintains a direct-to-bank and direct-to-UPI extraction structure. The minimum withdrawal limit is an accessible <strong>{app.minWithdrawal}</strong>, meaning you don't need huge balances to enjoy real payouts. Simply tap the "Withdraw/Wallet" button, enter your preferred UPI credentials or bank routing details, specify the amount, and submit. The platform uses instant clearing channels so that withdrawals are safely processed and arrive in your actual bank account within 10 to 30 minutes!
                </p>
              </div>
            </section>

            {/* Section 6: Advanced Tips & Tricks */}
            <section className="bg-[#1e293b] rounded-3xl p-[#1e293b] p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                6. Champion Level Tips & Strategies
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Card gaming requires analytical observation, logical thinking, and active mental notes. Master players rely on critical strategies to continuously edge out opponents on active tables:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs">
                    <span className="font-black text-brand-primary uppercase italic block mb-1">Set Pure Sequences First</span>
                    Identify sequences right away. Without a pure sequence (at least three consecutive cards of the same suit), your remaining cards are counted fully with no discounts, incurring heavy point losses.
                  </div>
                  <div className="p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs">
                    <span className="font-black text-brand-primary uppercase italic block mb-1">Discard High-Point cards</span>
                    Kings, Queens, Jacks, and Tens carry a heavy weight of 10 points each. In unfavorable matches, try to discard these high-point cards early if they can't be used, successfully hedging against negative outcomes.
                  </div>
                  <div className="p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs">
                    <span className="font-black text-brand-primary uppercase italic block mb-1">Track Competitor Discards</span>
                    Watch what your opponents discard or pick from the open stack. This allows you to deduce which card groups they are holding, helping you hold back critical missing cards they desperately need to declare.
                  </div>
                  <div className="p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs">
                    <span className="font-black text-brand-primary uppercase italic block mb-1">Rely on Early Drops</span>
                    A critical secret to saving money over long periods is knowing when to drop. An initial drop costs a tiny fraction of total negative points, protecting your wallet so you can thrive inside high-yielding hands later.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Safe Play & Guidelines */}
            <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-primary rounded-full" />
                7. Technical Fair Play & Security Certification
              </h3>
              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
                <p>
                  Security and transparency are paramount when dealing with mobile skill gaming. {app.name} is licensed and operates a highly sophisticated Random Number Generator (RNG) engine, regularly verified by leading global third-party testing labs. Shuffling, dealing, drop values, and jokers are randomized on a millisecond level to guarantee a level playing field. Player accounts are protected with modern encryption layers so deposit transactions are isolated and fully guarded.
                </p>
              </div>
            </section>

            {/* Responsible Gaming Warning */}
            <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-black uppercase italic text-red-400 mb-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" />
                8. Responsible Gaming Policy
              </h3>
              <p className="text-sm text-red-400/80 leading-relaxed">
                Playing <strong>{app.name}</strong> involves an element of financial risk and may lead to addictive behavior under persistent play. Players must be aged 18 and above, and fully comply with state and local gaming regulations. We highly advocate for setting fixed play budgets, and enjoying cards strictly as recreational exercises rather than professional income sources.
              </p>
            </section>

          </div>
        </main>

      {/* Persistent Bottom Download Bar (Mobile Only) */}
      <div className="sm:hidden fixed bottom-6 left-4 right-4 z-50">
        <a 
          href={app.downloadLink === '#' ? 'https://www.junglehaan.vip/share/6IOe3xy=1538' : app.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-brand-primary text-black py-4 rounded-xl font-black text-lg uppercase tracking-widest shadow-2xl"
        >
          <Download className="w-5 h-5 stroke-[3]" />
          Download App
        </a>
      </div>
    </div>
  );
}
