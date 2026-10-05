import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Database,
  FileText,
  Plus,
  Search,
  Edit2,
  Trash2,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  LogOut,
  ArrowLeft,
  Flame,
  ShieldAlert,
  Layers,
  Sparkles,
  Save,
  X
} from 'lucide-react';
import { RummyApp } from '../data';

const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'apex@2026';

export default function AdminLoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Check auth on mount (client-side)
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('rba_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Dashboard state
  const [apps, setApps] = useState<RummyApp[]>([]);
  const [dbStatus, setDbStatus] = useState<any>(null);
  const [loadingApps, setLoadingApps] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'apps' | 'add' | 'database' | 'security'>('apps');

  // Success / Notice banner
  const [bannerMsg, setBannerMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // New App Form State
  const [newAppName, setNewAppName] = useState('');
  const [newAppBonus, setNewAppBonus] = useState('Rs.51');
  const [newAppDownloads, setNewAppDownloads] = useState('100K+');
  const [newAppMinWithdrawal, setNewAppMinWithdrawal] = useState('₹100');
  const [newAppDownloadLink, setNewAppDownloadLink] = useState('#');
  const [newAppIconUrl, setNewAppIconUrl] = useState('/images/default_app.png');
  const [newAppCategory, setNewAppCategory] = useState<'Top' | 'New' | 'High Bonus'>('Top');
  const [newAppTrending, setNewAppTrending] = useState(false);
  const [isSubmittingNew, setIsSubmittingNew] = useState(false);

  // Edit App Modal State
  const [editingApp, setEditingApp] = useState<any | null>(null);
  const [isUpdatingApp, setIsUpdatingApp] = useState(false);

  // Password Change State
  const [customPassword, setCustomPassword] = useState(DEFAULT_ADMIN_PASS);
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rba_admin_custom_pass');
      if (saved) setCustomPassword(saved);
    }
  }, []);

  const showBanner = (text: string, type: 'success' | 'error' = 'success') => {
    setBannerMsg({ text, type });
    setTimeout(() => setBannerMsg(null), 5000);
  };

  // Fetch apps & DB status
  const fetchDashboardData = async () => {
    setLoadingApps(true);
    try {
      const [appsRes, healthRes] = await Promise.all([
        fetch('/api/apps?limit=500'),
        fetch('/api/health')
      ]);
      const appsData = await appsRes.json();
      const healthData = await healthRes.json();

      if (appsData && appsData.apps) {
        setApps(appsData.apps);
      }
      if (healthData && healthData.database) {
        setDbStatus(healthData.database);
      }
    } catch (err: any) {
      showBanner('Failed to load live data: ' + err.message, 'error');
    } finally {
      setLoadingApps(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    const validPass = localStorage.getItem('rba_admin_custom_pass') || DEFAULT_ADMIN_PASS;

    setTimeout(() => {
      if (username.trim().toLowerCase() === DEFAULT_ADMIN_USER && password === validPass) {
        setIsAuthenticated(true);
        localStorage.setItem('rba_admin_auth', 'true');
        setUsername('');
        setPassword('');
        showBanner('Welcome back, Admin! Database and apps synced.');
      } else {
        setLoginError('Invalid username or password. Please verify credentials.');
      }
      setLoginLoading(false);
    }, 400);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('rba_admin_auth');
    showBanner('You have been logged out securely.');
  };

  // Handle Create App
  const handleCreateApp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAppName.trim()) return;

    setIsSubmittingNew(true);
    try {
      const res = await fetch('/api/apps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newAppName.trim(),
          bonus: newAppBonus.trim(),
          downloads: newAppDownloads.trim(),
          minWithdrawal: newAppMinWithdrawal.trim(),
          downloadLink: newAppDownloadLink.trim() || '#',
          iconUrl: newAppIconUrl.trim() || '/images/default_app.png',
          category: newAppCategory,
          isTrending: newAppTrending,
        })
      });

      const data = await res.json();
      if (data && data.success) {
        showBanner(`App "${newAppName}" successfully added! /sitemap.xml has been dynamically updated.`);
        setNewAppName('');
        setNewAppBonus('Rs.51');
        setNewAppDownloads('100K+');
        setNewAppDownloadLink('#');
        setNewAppIconUrl('/images/default_app.png');
        setNewAppTrending(false);
        setActiveTab('apps');
        await fetchDashboardData();
      } else {
        showBanner(data.error || 'Failed to create app', 'error');
      }
    } catch (err: any) {
      showBanner(err.message, 'error');
    } finally {
      setIsSubmittingNew(false);
    }
  };

  // Handle Update App
  const handleUpdateApp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingApp) return;

    setIsUpdatingApp(true);
    try {
      const res = await fetch(`/api/apps/${editingApp.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingApp)
      });

      const data = await res.json();
      if (data && data.success) {
        showBanner(`App "${editingApp.name}" updated successfully! Sitemap updated.`);
        setEditingApp(null);
        await fetchDashboardData();
      } else {
        showBanner(data.error || 'Failed to update app', 'error');
      }
    } catch (err: any) {
      showBanner(err.message, 'error');
    } finally {
      setIsUpdatingApp(false);
    }
  };

  // Handle Delete App
  const handleDeleteApp = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"? This will immediately remove it from the database and sitemap.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/apps/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data && data.success) {
        showBanner(`App "${name}" deleted. Sitemap dynamically updated.`);
        await fetchDashboardData();
      } else {
        showBanner(data.error || 'Failed to delete app', 'error');
      }
    } catch (err: any) {
      showBanner(err.message, 'error');
    }
  };

  // Handle Seed / Reset
  const handleSeedApps = async () => {
    if (!window.confirm('Do you want to re-sync all 83 default Rummy apps into the database?')) {
      return;
    }

    try {
      const res = await fetch('/api/apps/seed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force: false })
      });
      const data = await res.json();
      if (data && data.success) {
        showBanner(`Synced ${data.count} default apps into database!`);
        await fetchDashboardData();
      } else {
        showBanner(data.error || 'Failed to seed apps', 'error');
      }
    } catch (err: any) {
      showBanner(err.message, 'error');
    }
  };

  // Handle Change Password
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasswordInput || newPasswordInput.length < 6) {
      showBanner('Password must be at least 6 characters long', 'error');
      return;
    }
    if (newPasswordInput !== confirmPasswordInput) {
      showBanner('Passwords do not match', 'error');
      return;
    }

    localStorage.setItem('rba_admin_custom_pass', newPasswordInput);
    setCustomPassword(newPasswordInput);
    setNewPasswordInput('');
    setConfirmPasswordInput('');
    showBanner('Admin password updated successfully!');
  };

  // Filtered Apps
  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = !searchQuery || app.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [apps, searchQuery, selectedCategory]);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#090d16] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden select-none">
        <Helmet>
          <title>Admin Portal Login | RummyBonusApps</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-3 text-slate-400 hover:text-white text-xs font-bold transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Public Website</span>
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-primary to-amber-400 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-brand-primary/20 border border-white/20">
              <ShieldAlert className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-2xl font-black uppercase italic tracking-wider text-white">
              ADMIN CONTROL CONSOLE
            </h1>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Protected portal to manage apps, links &amp; sitemap
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            {loginError && (
              <div className="mb-5 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs font-bold flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs uppercase font-bold text-slate-400 block mb-1.5">
                  Admin Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-full pl-10 pr-4 py-3 bg-[#0a0f1d] border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase font-bold text-slate-400 block mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-11 py-3 bg-[#0a0f1d] border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading || !username || !password}
                className="w-full mt-2 py-3.5 bg-gradient-to-r from-amber-500 via-brand-primary to-yellow-400 hover:brightness-110 active:scale-98 text-black font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-brand-primary/20 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>{loginLoading ? 'Authenticating...' : 'Sign In to Console'}</span>
              </button>
            </form>

            {/* Default credential reminder */}
            <div className="mt-6 pt-5 border-t border-white/5 text-center">
              <div className="text-[11px] text-slate-500 font-medium">
                Default Access Credentials:
              </div>
              <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-slate-400 font-mono text-[11px]">
                <span>User: <strong className="text-white">admin</strong></span>
                <span>•</span>
                <span>Pass: <strong className="text-white">apex@2026</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD VIEW
  return (
    <div className="min-h-screen bg-[#080d1a] text-white">
      <Helmet>
        <title>Admin Dashboard | RummyBonusApps</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Top Admin Header */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-brand-primary flex items-center justify-center text-black font-black shadow-lg">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black uppercase italic tracking-wider text-white">
                  RUMMYBONUS APPS ADMIN
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {dbStatus?.activeEngine || 'Active'}
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Managing {apps.length} Apps • MongoDB Backend • Dynamic Sitemap Active
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>/sitemap.xml ({apps.length + 15})</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <Link
              to="/"
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-slate-300 font-bold transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Banner Notification */}
        {bannerMsg && (
          <div className={`p-4 rounded-xl text-xs font-bold flex items-center justify-between gap-3 animate-fadeIn ${
            bannerMsg.type === 'error'
              ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
          }`}>
            <div className="flex items-center gap-2">
              {bannerMsg.type === 'error' ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
              <span>{bannerMsg.text}</span>
            </div>
            <button onClick={() => setBannerMsg(null)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl">
            <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-between">
              <span>Total Apps</span>
              <Layers className="w-3.5 h-3.5 text-brand-primary" />
            </div>
            <div className="text-2xl font-black text-white mt-1">
              {apps.length}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">80+ managed in DB</div>
          </div>

          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl">
            <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-between">
              <span>Dynamic Sitemap</span>
              <FileText className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-blue-400 mt-1">
              {apps.length + 15}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Active indexed URLs</div>
          </div>

          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl">
            <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-between">
              <span>Database Engine</span>
              <Database className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-sm sm:text-base font-black text-emerald-400 mt-1.5 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${dbStatus?.isMongoConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="truncate">{dbStatus?.isMongoConnected ? 'MongoDB Live' : 'Local Store'}</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Auto-synced</div>
          </div>

          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl">
            <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-between">
              <span>Trending Games</span>
              <Flame className="w-3.5 h-3.5 text-rose-500" />
            </div>
            <div className="text-2xl font-black text-rose-400 mt-1">
              {apps.filter(a => a.isTrending).length}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Promoted on homepage</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('apps')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'apps'
                ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Manage All Apps ({apps.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'add'
                ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New App</span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'database'
                ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>MongoDB &amp; Sitemap</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'security'
                ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Security Settings</span>
          </button>
        </div>

        {/* TAB 1: MANAGE APPS */}
        {activeTab === 'apps' && (
          <div className="space-y-4">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search among 80+ apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#121929] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-[#121929] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-primary"
                >
                  <option value="All">All Categories</option>
                  <option value="Top">Top Rummy</option>
                  <option value="New">New Games</option>
                  <option value="High Bonus">High Bonus</option>
                </select>

                <button
                  onClick={fetchDashboardData}
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Refresh list"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingApps ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Apps Table */}
            <div className="bg-[#121929] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-900/60 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                      <th className="py-3 px-4">#</th>
                      <th className="py-3 px-4">Game / App Name</th>
                      <th className="py-3 px-4">Bonus</th>
                      <th className="py-3 px-4">Min W/D</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Trending</th>
                      <th className="py-3 px-4">Download / Referral Link</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-medium">
                    {filteredApps.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-8 text-center text-slate-500">
                          No games found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredApps.map((app, index) => (
                        <tr key={app.id || index} className="hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">
                            {index + 1}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2.5">
                              <img
                                src={app.iconUrl || '/images/default_app.png'}
                                alt={app.name}
                                className="w-7 h-7 rounded-lg object-contain bg-black/40 border border-white/10"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                              <div>
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  <span>{app.name}</span>
                                  {app.id === 'diu-win' && (
                                    <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                      NEW LOGO
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] text-slate-500 font-mono">
                                  /{app.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold rounded-md text-[11px]">
                              {app.bonus || 'Rs.51'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-300">
                            {app.minWithdrawal || '₹100'}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded text-[10px]">
                              {app.category || 'Top'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {app.isTrending ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded text-[10px] font-bold">
                                <Flame className="w-3 h-3 text-rose-500" />
                                Yes
                              </span>
                            ) : (
                              <span className="text-slate-600 text-[11px]">No</span>
                            )}
                          </td>
                          <td className="py-3 px-4 max-w-[200px] truncate font-mono text-[10px] text-slate-400">
                            {app.downloadLink || '#'}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setEditingApp({ ...app })}
                                className="p-1.5 bg-white/5 hover:bg-brand-primary hover:text-black rounded-lg text-slate-400 transition-all cursor-pointer"
                                title="Edit App & Link"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteApp(app.id, app.name)}
                                className="p-1.5 bg-white/5 hover:bg-rose-500 hover:text-white rounded-lg text-slate-400 transition-all cursor-pointer"
                                title="Delete App"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADD NEW APP */}
        {activeTab === 'add' && (
          <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase italic text-white">
                  Add New App to Database
                </h2>
                <p className="text-xs text-slate-400">
                  Instantly stores into MongoDB and regenerates /sitemap.xml
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    App / Game Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Teen Patti Master"
                    value={newAppName}
                    onChange={(e) => setNewAppName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Sign-up Bonus *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rs.51 or ₹500"
                    value={newAppBonus}
                    onChange={(e) => setNewAppBonus(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                  Download / Referral Affiliate Link *
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://... (affiliate invite URL)"
                  value={newAppDownloadLink}
                  onChange={(e) => setNewAppDownloadLink(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Category
                  </label>
                  <select
                    value={newAppCategory}
                    onChange={(e) => setNewAppCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Top">Top Rummy</option>
                    <option value="New">New Games</option>
                    <option value="High Bonus">High Bonus</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Min Withdrawal
                  </label>
                  <input
                    type="text"
                    value={newAppMinWithdrawal}
                    onChange={(e) => setNewAppMinWithdrawal(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Downloads Count
                  </label>
                  <input
                    type="text"
                    value={newAppDownloads}
                    onChange={(e) => setNewAppDownloads(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Logo / Icon Path or URL
                  </label>
                  <input
                    type="text"
                    value={newAppIconUrl}
                    onChange={(e) => setNewAppIconUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Mark as Trending?
                  </label>
                  <button
                    type="button"
                    onClick={() => setNewAppTrending(!newAppTrending)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                      newAppTrending
                        ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                        : 'bg-[#0a0f1d] border-white/10 text-slate-400'
                    }`}
                  >
                    <Flame className={`w-4 h-4 ${newAppTrending ? 'text-rose-500' : 'text-slate-500'}`} />
                    <span>{newAppTrending ? '🔥 Yes (Promote on Homepage)' : 'Normal Game'}</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingNew || !newAppName.trim()}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 active:scale-98 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                <Save className="w-4 h-4" />
                <span>{isSubmittingNew ? 'Saving App to Database...' : 'Save App & Update Sitemap'}</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: DATABASE & SITEMAP */}
        {activeTab === 'database' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Database Status Card */}
              <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-black uppercase text-white">
                      MongoDB Connection Status
                    </h2>
                    <p className="text-xs text-slate-400">
                      Backend database engine health
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Engine Type:</span>
                    <span className="font-bold text-white">{dbStatus?.activeEngine || 'Local JSON / MongoDB'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Atlas / Remote Connected:</span>
                    <span className={`font-bold ${dbStatus?.isMongoConnected ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {dbStatus?.isMongoConnected ? '✓ Yes (MongoDB Live)' : 'Local File Persistence'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Total Apps Stored:</span>
                    <span className="font-bold text-white">{apps.length} Games</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">MongoDB URI Env:</span>
                    <span className="font-mono text-[11px] text-slate-300">
                      {dbStatus?.mongoUriConfigured ? 'Configured in .env' : 'Set MONGODB_URI in .env'}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSeedApps}
                    className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Re-Seed Default 83 Apps</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Sitemap Card */}
              <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-black uppercase text-white">
                      Dynamic /sitemap.xml
                    </h2>
                    <p className="text-xs text-slate-400">
                      Automated search engine indexing
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Sitemap URL:</span>
                    <span className="font-mono text-blue-400 font-bold">/sitemap.xml</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Total Indexed URLs:</span>
                    <span className="font-bold text-white">{apps.length + 15} URLs</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Robots.txt Protection:</span>
                    <span className="font-bold text-emerald-400">✓ /admin disallowed</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Update Frequency:</span>
                    <span className="font-bold text-white">Live on every change</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live /sitemap.xml</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SECURITY SETTINGS */}
        {activeTab === 'security' && (
          <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase italic text-white">
                  Admin Password
                </h2>
                <p className="text-xs text-slate-400">
                  Update your console login password
                </p>
              </div>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                  New Password (min 6 characters)
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter new password"
                  value={newPasswordInput}
                  onChange={(e) => setNewPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-bold text-slate-400 block mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Re-enter new password"
                  value={confirmPasswordInput}
                  onChange={(e) => setConfirmPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-primary text-black font-black text-xs uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Save className="w-4 h-4" />
                <span>Save New Password</span>
              </button>
            </form>
          </div>
        )}
      </main>

      {/* EDIT APP MODAL */}
      {editingApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121929] border border-white/10 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                  <Edit2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-black uppercase text-white">
                  Edit App: {editingApp.name}
                </h3>
              </div>
              <button
                onClick={() => setEditingApp(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    App Name
                  </label>
                  <input
                    type="text"
                    required
                    value={editingApp.name || ''}
                    onChange={(e) => setEditingApp({ ...editingApp, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Bonus
                  </label>
                  <input
                    type="text"
                    value={editingApp.bonus || ''}
                    onChange={(e) => setEditingApp({ ...editingApp, bonus: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Download / Affiliate Referral Link
                </label>
                <input
                  type="text"
                  value={editingApp.downloadLink || ''}
                  onChange={(e) => setEditingApp({ ...editingApp, downloadLink: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Category
                  </label>
                  <select
                    value={editingApp.category || 'Top'}
                    onChange={(e) => setEditingApp({ ...editingApp, category: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Top">Top</option>
                    <option value="New">New</option>
                    <option value="High Bonus">High Bonus</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Min Withdrawal
                  </label>
                  <input
                    type="text"
                    value={editingApp.minWithdrawal || ''}
                    onChange={(e) => setEditingApp({ ...editingApp, minWithdrawal: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Trending?
                  </label>
                  <button
                    type="button"
                    onClick={() => setEditingApp({ ...editingApp, isTrending: !editingApp.isTrending })}
                    className={`w-full py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      editingApp.isTrending
                        ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                        : 'bg-[#0a0f1d] border-white/10 text-slate-400'
                    }`}
                  >
                    {editingApp.isTrending ? '🔥 Yes' : 'No'}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Logo / Icon URL
                </label>
                <input
                  type="text"
                  value={editingApp.iconUrl || ''}
                  onChange={(e) => setEditingApp({ ...editingApp, iconUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="flex gap-2.5 pt-3">
                <button
                  type="submit"
                  disabled={isUpdatingApp}
                  className="flex-1 py-2.5 bg-brand-primary text-black font-black text-xs uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isUpdatingApp ? 'Saving Changes...' : 'Save & Update Sitemap'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingApp(null)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
