import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  LogIn, 
  ShieldCheck, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Smartphone, 
  Zap, 
  Gift, 
  Star, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  KeyRound, 
  UserCheck 
} from 'lucide-react';

export interface ColourGameData {
  id: string;
  name: string;
  loginSlug: string;
  logo: string;
  badge: string;
  rating: string;
  ratingCount: string;
  activePlayers: string;
  minDeposit: string;
  minWithdrawal: string;
  bonus: string;
  tagline: string;
  aboutText: string;
}

export const COLOUR_GAMES_DICT: Record<string, ColourGameData> = {
  '91-club': {
    id: '91-club',
    name: '91 Club',
    loginSlug: '91-club-login',
    logo: '/images/91_club_logo.jpg',
    badge: "India's #1 Colour Prediction Portal 2026",
    rating: '4.9',
    ratingCount: '258400',
    activePlayers: '1.2 Million+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Colour Trading & Win Go App',
    aboutText: 'Official login portal for 91 Club (91-clubs.org). Log in with your mobile number and password to play 1-minute Win Go Colour Trading, predict Red, Green, or Violet, and enjoy instant ₹110 UPI withdrawals anytime.'
  },
  'veer-game': {
    id: 'veer-game',
    name: 'Veer Game',
    loginSlug: 'veer-game-login',
    logo: '/images/veer_game_logo.jpg',
    badge: 'Royal Colour Trading & Win Go Platform 2026',
    rating: '4.9',
    ratingCount: '194200',
    activePlayers: '850,000+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Royal Colour Trading & Win Go App',
    aboutText: 'Official login portal for Veer Game. Access your gaming account to play Win Go 1-Min, 3-Min, and 5-Min colour prediction rounds. Claim your ₹500 welcome bonus and enjoy instant 24/7 bank withdrawals.'
  },
  '82-lottery': {
    id: '82-lottery',
    name: '82 Lottery',
    loginSlug: '82-lottery-login',
    logo: '/images/82_lottery_logo.jpg',
    badge: 'Top Trending 82 Lottery Colour Hub 2026',
    rating: '4.9',
    ratingCount: '210500',
    activePlayers: '920,000+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Official 82 Lottery Colour Trading App',
    aboutText: 'Official login portal for 82 Lottery. Log in to play Win Go, K3, and 5D Lotteries with high multiplier payouts. Get instant deposit credits and lightning-fast ₹110 UPI cashouts.'
  },
  'maan-win': {
    id: 'maan-win',
    name: 'Maan Win',
    loginSlug: 'maan-win-login',
    logo: '/images/maan_win_logo.jpg',
    badge: 'Premier Maan Win Colour Trading Game 2026',
    rating: '4.8',
    ratingCount: '142800',
    activePlayers: '640,000+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Win Go Colour Prediction & Trx Games',
    aboutText: 'Official login portal for Maan Win. Sign in with your registered mobile number to predict winning colors and numbers. Enjoy transparent algorithms, VIP rewards, and 24/7 customer support.'
  },
  'ok-win': {
    id: 'ok-win',
    name: 'Ok Win',
    loginSlug: 'ok-win-login',
    logo: '/images/ok_win_logo.jpg',
    badge: 'Verified Ok Win Colour Trading Platform 2026',
    rating: '4.9',
    ratingCount: '185300',
    activePlayers: '780,000+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Instant Payouts & Daily Bonus Rewards',
    aboutText: 'Official login portal for Ok Win. Play Win Go 1-Minute fast prediction games with 2x, 4.5x, and 9x returns. Withdraw your winnings directly to Paytm, PhonePe, or Google Pay within 5 minutes.'
  },
  'diu-win': {
    id: 'diu-win',
    name: 'Diu Win',
    loginSlug: 'diu-win-login',
    logo: '/images/diu_win_logo.jpg',
    badge: 'Trusted Diu Win Colour Trading Portal 2026',
    rating: '4.8',
    ratingCount: '128900',
    activePlayers: '590,000+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Exciting Colour Trading & Lucky Numbers',
    aboutText: 'Official login portal for Diu Win (formerly Du Win). Connect to your gaming profile to participate in daily prediction challenges, lottery rounds, and claim exclusive VIP first recharge rewards.'
  },
  'du-win': {
    id: 'diu-win',
    name: 'Diu Win',
    loginSlug: 'diu-win-login',
    logo: '/images/diu_win_logo.jpg',
    badge: 'Trusted Diu Win Colour Trading Portal 2026',
    rating: '4.8',
    ratingCount: '128900',
    activePlayers: '590,000+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Exciting Colour Trading & Lucky Numbers',
    aboutText: 'Official login portal for Diu Win (formerly Du Win). Connect to your gaming profile to participate in daily prediction challenges, lottery rounds, and claim exclusive VIP first recharge rewards.'
  },
  'tiranga-game': {
    id: 'tiranga-game',
    name: 'Tiranga Game',
    loginSlug: 'tiranga-game-login',
    logo: '/images/tiranga_game_logo.jpg',
    badge: "India's National Favourite Colour Trading App 2026",
    rating: '5.0',
    ratingCount: '348900',
    activePlayers: '1.5 Million+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Top Rated Tiranga Colour Prediction Platform',
    aboutText: "Official login portal for Tiranga Game. India's trusted platform for Win Go 1 Min, 3 Min, and Trx Hash colour prediction. Fast deposits, instant ₹110 UPI withdrawals, and guaranteed bonuses."
  },
  'goa-game': {
    id: 'goa-game',
    name: 'Goa Game',
    loginSlug: 'goa-game-login',
    logo: '/images/goa_game_logo.jpg',
    badge: 'Goa Game Official Casino & Colour Trading 2026',
    rating: '4.9',
    ratingCount: '264500',
    activePlayers: '1.1 Million+',
    minDeposit: '₹100',
    minWithdrawal: '₹110',
    bonus: '₹500 on 1st Recharge',
    tagline: 'Premium Goa Casino & Win Go Prediction',
    aboutText: 'Official login portal for Goa Game. Log in to play Win Go colour prediction, casino slots, and lottery draws. Benefit from low minimum recharge, instant cashouts, and generous VIP promotions.'
  }
};

export default function ColourTradingLandingPage({ gameId = '91-club' }: { gameId?: string }) {
  const game = React.useMemo<ColourGameData>(() => {
    const cleanId = gameId.toLowerCase().replace(/-login$/, '');
    if (COLOUR_GAMES_DICT[cleanId]) {
      return COLOUR_GAMES_DICT[cleanId];
    }
    if (COLOUR_GAMES_DICT[gameId]) {
      return COLOUR_GAMES_DICT[gameId];
    }
    const formattedName = cleanId
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      id: cleanId,
      name: formattedName,
      loginSlug: `${cleanId}-login`,
      logo: '/images/91_club_logo.jpg',
      badge: `${formattedName} Official Colour Trading Portal 2026`,
      rating: '4.9',
      ratingCount: '210500',
      activePlayers: '850,000+',
      minDeposit: '₹100',
      minWithdrawal: '₹110',
      bonus: '₹500 on 1st Recharge',
      tagline: 'Colour Trading & Win Go App',
      aboutText: `Official login portal for ${formattedName}. Log in with your mobile number and password to play 1-minute Win Go Colour Trading, predict Red, Green, or Violet, and enjoy instant ₹110 UPI withdrawals anytime.`
    };
  }, [gameId]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamic link states managed from Admin Panel
  const [inviteLink, setInviteLink] = useState("https://www.junglehaan.vip/share/6IOe3xy=1538");
  const [loginLink, setLoginLink] = useState("https://www.junglehaan.vip/share/6IOe3xy=1538");
  const [registerLink, setRegisterLink] = useState("https://www.junglehaan.vip/share/6IOe3xy=1538");
  const [vipCode, setVipCode] = useState("1538");

  useEffect(() => {
    fetch(`/api/colour-games/${game.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.game) {
          if (data.game.inviteLink) setInviteLink(data.game.inviteLink);
          if (data.game.loginLink) setLoginLink(data.game.loginLink);
          if (data.game.registerLink) setRegisterLink(data.game.registerLink);
          if (data.game.vipCode) setVipCode(data.game.vipCode);
        }
      })
      .catch(() => {});
  }, [game.id]);

  const faqs = [
    {
      q: `How do I log in to my ${game.name} account?`,
      a: `To log in, click the official 'Login ${game.name}' button. Enter your 10-digit registered mobile number and password, then click Login. If you are a new player, click 'Register' first and use Invite Code ${vipCode} to activate your account.`
    },
    {
      q: `What is ${game.name} and how does the Colour Trading Game work?`,
      a: `${game.name} is a leading online colour prediction platform featuring Win Go 1-Min, 3-Min, and 5-Min lottery rounds. Players predict which color (Green, Red, or Violet) or number (0 to 9) will appear. A correct color pick doubles your stake (2x), violet pays 4.5x, and predicting the exact number yields an astounding 9x payout.`
    },
    {
      q: `What should I do if I forgot my ${game.name} login password?`,
      a: `On the ${game.name} login page, click 'Forgot Password'. Enter your registered phone number to receive an SMS OTP, verify the OTP, and create a new secure password to restore access immediately.`
    },
    {
      q: `What is the minimum deposit and withdrawal limit in ${game.name}?`,
      a: `The minimum recharge in ${game.name} is just ₹100 via UPI (PhonePe, Google Pay, Paytm) or QR code. The minimum cashout limit is ₹110. Withdrawals are processed 24/7 directly to your linked Indian bank account (IMPS) or UPI within 3 to 10 minutes.`
    },
    {
      q: `What is the ${game.name} Invite Code for 2026?`,
      a: `The official verified VIP Invite Code is '${vipCode}'. Using this invite code during registration unlocks the ₹500 first recharge bonus, daily check-in rewards, and access to VIP prediction channel signals.`
    },
    {
      q: `Can I log in to ${game.name} from both mobile browser and app?`,
      a: `Yes! ${game.name} is fully responsive on all devices. You can log in directly via Chrome/Safari on your smartphone, desktop web browser, or via the installed Android APK using the exact same mobile number and password.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-white selection:bg-rose-500 selection:text-white">
      <Helmet>
        <title>{`${game.name} Login - Official Portal & Bonus | RBA`}</title>
        <meta 
          name="description" 
          content={`${game.name} Login Official Website - Instant Login to ${game.name} Colour Trading App. Play Win Go 1 Min Colour Prediction, claim ₹500 first deposit welcome bonus, and enjoy 24/7 instant ₹110 UPI withdrawals.`} 
        />
        <meta 
          name="keywords" 
          content={`${game.name} login, ${game.name} app login, ${game.name} colour trading login, ${game.name} register, ${game.name} invite code 1538, win go colour game`} 
        />
        <link rel="canonical" href={`https://www.rummybonusapps.com/${game.loginSlug}`} />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={`${game.name} Login - Official Portal & Bonus | RBA`} />
        <meta property="og:description" content={`Instant ${game.name} Login & Registration. Play Win Go 1 Min, claim ₹500 welcome bonus, and withdraw via UPI in under 5 minutes.`} />
        <meta property="og:image" content={`https://rummybonusapps.com${game.logo}`} />
        <meta property="og:url" content={`https://rummybonusapps.com/${game.loginSlug}`} />
        <meta property="og:type" content="website" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": `${game.name} Colour Trading Login Portal`,
            "operatingSystem": "Android, iOS, Web",
            "applicationCategory": "GameApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": game.rating,
              "ratingCount": game.ratingCount
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>

      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 py-1.5 px-4 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-white shadow-md flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
        <span>Official {game.name} Login Portal • VIP Invite Code: <strong className="underline underline-offset-2">{vipCode}</strong></span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0c1220]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={game.logo} 
              alt={`${game.name} Official Logo`} 
              className="w-10 h-10 rounded-xl object-contain border border-amber-500/30 shadow-lg group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="text-base sm:text-xl font-black italic uppercase tracking-wider text-white flex items-center gap-1.5">
                {game.name} <span className="text-amber-400 text-xs font-sans not-italic font-black px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">LOGIN</span>
              </span>
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest block">
                Official Colour Trading Portal
              </span>
            </div>
          </Link>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href={registerLink || inviteLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all"
            >
              <UserCheck className="w-3.5 h-3.5 text-slate-300" />
              Register
            </a>
            <a 
              href={loginLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-rose-600 hover:brightness-110 active:scale-95 text-white shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-white" />
              Login {game.name}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* HERO SECTION */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#141b2d] via-[#101726] to-[#0c1220] border border-white/10 p-6 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>{game.badge}</span>
              </div>

              {/* H1 WITH GAME LOGO PROMINENTLY EMBEDDED */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <img 
                  src={game.logo} 
                  alt={`${game.name} Logo`} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-2xl shrink-0"
                />
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight text-white leading-[1.05]">
                    {game.name} LOGIN
                  </h1>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-400 to-yellow-300 text-lg sm:text-2xl font-black uppercase tracking-wider block">
                    {game.tagline}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {game.aboutText}
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
                <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-lg text-xs font-extrabold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {game.minWithdrawal} Min Withdrawal
                </span>
                <span className="bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-lg text-xs font-extrabold uppercase flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5" /> ₹500 First Deposit Bonus
                </span>
                <span className="bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 px-3 py-1 rounded-lg text-xs font-extrabold uppercase flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> 1-Min Fast Rounds
                </span>
              </div>

              {/* Action Buttons: LOGIN BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href={loginLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:brightness-110 active:scale-95 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl shadow-rose-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-5 h-5 text-white" />
                  <span>Login {game.name} (Official)</span>
                </a>

                <a 
                  href={registerLink || inviteLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#1a233a] hover:bg-[#222e4d] text-white font-black text-sm uppercase tracking-wider px-7 py-4 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <KeyRound className="w-5 h-5 text-amber-400" />
                  <span>Register {game.name} Account</span>
                </a>
              </div>

              {/* Referral notice */}
              <div className="p-3 bg-black/30 border border-white/10 rounded-xl inline-flex items-center gap-3 text-xs text-slate-300 font-semibold">
                <span className="text-amber-400 font-black uppercase">VIP Referral Code:</span>
                <code className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold text-sm tracking-wider">
                  {vipCode}
                </code>
                <span className="text-[10px] text-slate-400 font-bold uppercase">(Auto-Applied)</span>
              </div>
            </div>

            {/* Right Column: High-Impact Card Showcase with Game Logo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm bg-gradient-to-b from-[#18233a] to-[#11192a] p-6 rounded-3xl border border-white/15 shadow-2xl">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <img 
                    src={game.logo} 
                    alt={`${game.name} App`} 
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
                  />
                  <div>
                    <h3 className="text-xl font-black uppercase italic text-white flex items-center gap-1.5">
                      {game.name}
                    </h3>
                    <p className="text-xs text-rose-400 font-extrabold uppercase tracking-wider">Official Login Client</p>
                    <div className="flex items-center gap-1 mt-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                      ))}
                      <span className="text-xs font-black text-white ml-1">{game.rating} / 5.0</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-bold mb-6">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">App Category</span>
                    <span className="text-white font-black uppercase">Colour Trading / Win Go</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Access Mode</span>
                    <span className="text-emerald-400 font-black">Web Login &amp; Mobile APK</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Min. Deposit</span>
                    <span className="text-amber-400 font-black">{game.minDeposit} (Instant UPI)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Min. Cashout</span>
                    <span className="text-emerald-400 font-black">{game.minWithdrawal} (24/7 IMPS)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Signup Incentive</span>
                    <span className="text-rose-400 font-black">{game.bonus}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Active Players</span>
                    <span className="text-white font-black">{game.activePlayers}</span>
                  </div>
                </div>

                {/* LOGIN ACTION BUTTON */}
                <a 
                  href={loginLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 active:scale-95 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-lg shadow-rose-600/25 text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-white" />
                  <span>LOGIN {game.name.toUpperCase()} NOW</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* HOW TO REGISTER & LOGIN STEP-BY-STEP */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <img 
                src={game.logo} 
                alt={`${game.name} Logo`} 
                className="w-8 h-8 rounded-lg object-cover border border-amber-400/40"
              />
              <h2 className="text-2xl sm:text-4xl font-black uppercase italic text-white tracking-tight">
                How to Register &amp; Login to {game.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
              Follow these simple 4 steps to create your account and log in immediately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between hover:border-rose-500/40 transition-all">
              <span className="text-3xl font-black text-rose-500/30 mb-2">01</span>
              <div>
                <h3 className="text-base font-black uppercase italic text-white mb-2">Open Login Portal</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Click on the "Login {game.name}" button on this page to visit the official encrypted {game.name} portal.
                </p>
              </div>
              <span className="text-[10px] text-emerald-400 font-extrabold uppercase mt-4 block">Official Mirror</span>
            </div>

            <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <span className="text-3xl font-black text-amber-500/30 mb-2">02</span>
              <div>
                <h3 className="text-base font-black uppercase italic text-white mb-2">Enter Mobile &amp; Password</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Enter your registered 10-digit Indian phone number and password to sign in to your gaming dashboard.
                </p>
              </div>
              <span className="text-[10px] text-amber-400 font-extrabold uppercase mt-4 block">Instant Sign-In</span>
            </div>

            <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <span className="text-3xl font-black text-emerald-500/30 mb-2">03</span>
              <div>
                <h3 className="text-base font-black uppercase italic text-white mb-2">Apply VIP Code: 1538</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  For new registrations, verify that Invite Code <strong>1538</strong> is present to activate your ₹500 welcome bonus.
                </p>
              </div>
              <span className="text-[10px] text-rose-400 font-extrabold uppercase mt-4 block">Bonus Guaranteed</span>
            </div>

            <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between hover:border-indigo-500/40 transition-all">
              <span className="text-3xl font-black text-indigo-500/30 mb-2">04</span>
              <div>
                <h3 className="text-base font-black uppercase italic text-white mb-2">Play &amp; Withdraw</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Recharge minimum ₹100 via UPI (Google Pay, PhonePe, Paytm). Withdraw your winnings from ₹110 anytime directly to your bank account.
                </p>
              </div>
              <span className="text-[10px] text-indigo-400 font-extrabold uppercase mt-4 block">Fast 24/7 Payouts</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COLOUR TRADING RULES & MULTIPLIERS */}
        {/* ========================================================================= */}
        <section className="bg-[#121929] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={game.logo} 
              alt={`${game.name} Logo`} 
              className="w-10 h-10 rounded-xl object-cover border border-amber-400/40"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic text-white tracking-tight">
                {game.name} Win Go Colour Trading Rules
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Payout rules of {game.name}'s 1-minute colour prediction engine:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* GREEN RULE */}
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-black">
                🟢
              </div>
              <h3 className="text-lg font-black uppercase italic text-emerald-400 mb-2">Green Colour (2x)</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-medium">
                <li>• Winning Numbers: <strong>1, 3, 7, 9</strong></li>
                <li>• Payout: <strong>2x</strong> (e.g. ₹100 bet returns ₹200)</li>
                <li>• If <strong>5</strong> appears with violet: returns <strong>1.5x</strong></li>
              </ul>
            </div>

            {/* VIOLET RULE */}
            <div className="bg-purple-950/30 border border-purple-500/30 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 font-black">
                🟣
              </div>
              <h3 className="text-lg font-black uppercase italic text-purple-400 mb-2">Violet Colour (4.5x)</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-medium">
                <li>• Winning Numbers: <strong>0 and 5</strong></li>
                <li>• High Payout: <strong>4.5x</strong> (₹100 bet returns ₹450)</li>
                <li>• Accompanies either Red (0) or Green (5)</li>
              </ul>
            </div>

            {/* RED RULE */}
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 mb-4 font-black">
                🔴
              </div>
              <h3 className="text-lg font-black uppercase italic text-rose-400 mb-2">Red Colour (2x)</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-medium">
                <li>• Winning Numbers: <strong>2, 4, 6, 8</strong></li>
                <li>• Payout: <strong>2x</strong> (₹100 bet returns ₹200)</li>
                <li>• If <strong>0</strong> appears with violet: returns <strong>1.5x</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black uppercase italic text-white tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
              Everything you need to know about {game.name} login, registration, and fast UPI cashouts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#121929] border border-white/10 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 font-black text-sm text-white flex justify-between items-center gap-4 hover:bg-white/5 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM FINAL CALL TO ACTION */}
        <section className="bg-gradient-to-r from-rose-950 via-[#1e1328] to-[#121929] border border-rose-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <div className="flex items-center justify-center gap-3">
              <img 
                src={game.logo} 
                alt={`${game.name} Logo`} 
                className="w-12 h-12 rounded-xl object-cover border-2 border-amber-400 shadow-xl"
              />
              <span className="bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
                {game.name} Login Portal
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black uppercase italic text-white tracking-tight">
              LOGIN {game.name.toUpperCase()} COLOUR TRADING NOW
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Access your account in under 10 seconds. Play Win Go 1-Min and withdraw your winnings directly to your bank account anytime!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a 
                href={loginLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 active:scale-95 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl shadow-rose-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <LogIn className="w-5 h-5 text-white" />
                <span>Instant Login to {game.name}</span>
              </a>
              <Link
                to="/"
                className="bg-white/10 hover:bg-white/15 text-white font-black text-xs uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/10 transition-all inline-flex items-center gap-2"
              >
                <span>Back to Rummy Apps Hub</span>
              </Link>
            </div>
          </div>
        </section>

        {/* RESPONSIBLE GAMING & DISCLAIMER */}
        <footer className="pt-8 border-t border-white/10 text-center text-[10px] text-slate-500 space-y-2">
          <p>
            <strong>Disclaimer:</strong> {game.name} is a real-money prediction and gaming platform. Participation involves financial risk and may be addictive. Please play responsibly and within your means. Only individuals 18 years of age or older are permitted to register and play.
          </p>
          <p>© 2026 RummyBonusApps.com. {game.name} Official Login Portal &amp; Colour Trading Hub.</p>
        </footer>

      </main>
    </div>
  );
}
