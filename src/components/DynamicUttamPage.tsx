import { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Download, ArrowLeft } from 'lucide-react';
import { RUMMY_APPS } from '../data';

export default function DynamicUttamPage({ idOverride }: { idOverride?: string }) {
  const { pathname } = useLocation();
  const app = RUMMY_APPS.find(a => a.id === 'jungle-haan');
  
  // Use idOverride if provided, otherwise extract from pathname
  let idValue = idOverride;
  if (!idValue) {
    const pathMatch = pathname.match(/\/uttam(\d+)/);
    idValue = pathMatch ? pathMatch[1] : null;
  }
  
  let redirectUrl = "https://www.junglehaan.vip/share/6IOe3xy=1538"; // Default for /uttam1
  
  if (idValue) {
    if (idValue === "1" || idValue === "1538") {
      redirectUrl = "https://www.junglehaan.vip/share/6IOe3xy=1538";
    } else {
      redirectUrl = `https://www.junglehaan.vip/share/6IOe3xy=${idValue}`;
    }
  }

  useEffect(() => {
    // Immediate redirect
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  if (!app) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pb-20">
      <Helmet>
        <title>{app.name} - Redirecting...</title>
        <meta name="description" content={`Download ${app.name} APK officially. Redirecting to official site.`} />
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
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-brand-primary font-black uppercase tracking-widest text-sm animate-pulse">
            Redirecting to official website...
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-[#1e293b] rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden mb-8 opacity-50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative flex flex-col sm:flex-row items-center gap-8">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative group"
            >
              <img 
                src={app.iconUrl} 
                alt={app.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] relative shadow-2xl border-2 border-white/10"
              />
            </motion.div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none italic uppercase">
                {app.name}
              </h2>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-brand-primary" />
                  <span className="font-bold">{app.downloads} Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8 opacity-50">
          <section className="bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 text-center">
            <p className="text-white/60 text-sm italic">
              If you are not redirected within 5 seconds, <a href={redirectUrl} className="text-brand-primary underline font-bold">click here</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
