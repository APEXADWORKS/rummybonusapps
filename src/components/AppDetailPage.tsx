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
        <link rel="canonical" href={`https://allrummybonus.com/${encodeURIComponent(app.name)}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": app.name,
            "operatingSystem": "Android",
            "applicationCategory": "GameApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": app.downloads.replace(/[^0-9]/g, '') || "1000"
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
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-lg font-black uppercase italic tracking-wider text-brand-primary truncate max-w-[200px] sm:max-w-none">
            {app.name}
          </h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
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
              href={app.downloadLink}
              className="flex items-center justify-center gap-3 w-full bg-brand-primary text-black py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)]"
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

        {/* Content Section */}
        <div className="space-y-8">
          <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
            <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-primary rounded-full" />
              App Description
            </h3>
            <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4">
              <p>
                {app.name} is one of the most popular rummy applications in India, offering a seamless gaming experience with high-quality graphics and fast-paced gameplay. Whether you are a beginner or a pro, this app provides the perfect platform to test your skills and win real rewards.
              </p>
              <p>
                With a massive player base of over {app.downloads}, you can always find an active table to join. The app supports multiple variants of Rummy, including Points, Pool, and Deals Rummy, ensuring there's something for everyone.
              </p>
            </div>
          </section>

          <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5">
            <h3 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-primary rounded-full" />
              Key Features
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Instant Withdrawals to Bank/UPI",
                "24/7 Dedicated Customer Support",
                "100% Safe and Secure Platform",
                "High Signup Bonus for New Users",
                "Regular Tournaments & Events",
                "Smooth Gameplay on 2G/3G/4G"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-2 h-2 bg-brand-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-black uppercase italic text-red-400 mb-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5" />
              Responsible Gaming
            </h3>
            <p className="text-sm text-red-400/80 leading-relaxed">
              Playing {app.name} involves financial risk and can be addictive. Please play responsibly. This app is intended for users aged 18 and above. Ensure you comply with your local laws regarding real-money gaming.
            </p>
          </section>
        </div>
      </main>

      {/* Persistent Bottom Download Bar (Mobile Only) */}
      <div className="sm:hidden fixed bottom-6 left-4 right-4 z-50">
        <a 
          href={app.downloadLink}
          className="flex items-center justify-center gap-3 w-full bg-brand-primary text-black py-4 rounded-xl font-black text-lg uppercase tracking-widest shadow-2xl"
        >
          <Download className="w-5 h-5 stroke-[3]" />
          Download App
        </a>
      </div>
    </div>
  );
}
