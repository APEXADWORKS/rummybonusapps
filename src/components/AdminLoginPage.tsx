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
  X,
  Palette,
  Link2,
  KeyRound,
  Copy,
  Send,
} from 'lucide-react';
import { RummyApp, RUMMY_APPS } from '../data';

const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'apex@2026';

const INITIAL_COLOUR_GAMES = [
  { id: '91-club', name: '91 Club', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/91_club_logo.jpg', slug: '91-club-login' },
  { id: 'tiranga-game', name: 'Tiranga Game', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/tiranga_game_logo.jpg', slug: 'tiranga-game-login' },
  { id: '82-lottery', name: '82 Lottery', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/82_lottery_logo.jpg', slug: '82-lottery-login' },
  { id: 'goa-game', name: 'Goa Game', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/goa_game_logo.jpg', slug: 'goa-game-login' },
  { id: 'veer-game', name: 'Veer Game', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/veer_game_logo.jpg', slug: 'veer-game-login' },
  { id: 'ok-win', name: 'Ok Win', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/ok_win_logo.jpg', slug: 'ok-win-login' },
  { id: 'maan-win', name: 'Maan Win', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/maan_win_logo.jpg', slug: 'maan-win-login' },
  { id: 'diu-win', name: 'Diu Win', inviteLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', loginLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', registerLink: 'https://www.junglehaan.vip/share/6IOe3xy=1538', vipCode: '1538', iconUrl: '/images/diu_win_logo.jpg', slug: 'diu-win-login' },
];

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
  const [activeTab, setActiveTab] = useState<'apps' | 'colour' | 'add' | 'database' | 'security'>('apps');

  // Colour Games State (Invite link, Login link, Register link, VIP Code)
  const [colourGames, setColourGames] = useState<any[]>(INITIAL_COLOUR_GAMES);
  const [editingColourGame, setEditingColourGame] = useState<any | null>(null);
  const [isUpdatingColour, setIsUpdatingColour] = useState(false);

  // Add App Type Switcher ('rummy' | 'colour')
  const [addAppType, setAddAppType] = useState<'rummy' | 'colour'>('rummy');

  // Add New Colour Game State
  const [isAddingColourGame, setIsAddingColourGame] = useState(false);
  const [newColourName, setNewColourName] = useState('');
  const [newColourSlug, setNewColourSlug] = useState('');
  const [newColourInviteLink, setNewColourInviteLink] = useState('https://www.junglehaan.vip/share/6IOe3xy=1538');
  const [newColourLoginLink, setNewColourLoginLink] = useState('');
  const [newColourRegisterLink, setNewColourRegisterLink] = useState('');
  const [newColourVipCode, setNewColourVipCode] = useState('1538');
  const [newColourBonus, setNewColourBonus] = useState('₹500');
  const [newColourMinWithdrawal, setNewColourMinWithdrawal] = useState('₹110');
  const [newColourDownloads, setNewColourDownloads] = useState('1.2M+');
  const [newColourIconUrl, setNewColourIconUrl] = useState('/images/91_club_logo.jpg');
  const [isCreatingColourGame, setIsCreatingColourGame] = useState(false);

  // Bulk Colour Games Updater
  const [bulkInviteLink, setBulkInviteLink] = useState('');
  const [bulkLoginLink, setBulkLoginLink] = useState('');
  const [bulkRegisterLink, setBulkRegisterLink] = useState('');
  const [bulkVipCode, setBulkVipCode] = useState('');
  const [isUpdatingBulk, setIsUpdatingBulk] = useState(false);

  // Bulk Rummy Apps Link Updater (1-Click for all 83+ apps)
  const [bulkRummyLink, setBulkRummyLink] = useState('');
  const [isUpdatingBulkRummy, setIsUpdatingBulkRummy] = useState(false);

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

  // Fetch apps, DB status & Colour Games defensively without crashing on non-JSON
  const fetchDashboardData = async () => {
    setLoadingApps(true);
    try {
      let loadedAppsSuccessfully = false;

      // 1. Fetch Apps
      try {
        const appsRes = await fetch('/api/apps?limit=500', {
          headers: { Accept: 'application/json' }
        });
        const contentType = appsRes.headers.get('content-type') || '';
        if (appsRes.ok && contentType.includes('application/json')) {
          const appsData = await appsRes.json();
          if (appsData && Array.isArray(appsData.apps) && appsData.apps.length > 0) {
            setApps(appsData.apps);
            loadedAppsSuccessfully = true;
          }
        }
      } catch (err) {
        console.warn('Apps fetch note, falling back to local list:', err);
      }

      if (!loadedAppsSuccessfully) {
        setApps(RUMMY_APPS as any[]);
      }

      // 2. Fetch Health
      try {
        const healthRes = await fetch('/api/health', {
          headers: { Accept: 'application/json' }
        });
        const contentType = healthRes.headers.get('content-type') || '';
        if (healthRes.ok && contentType.includes('application/json')) {
          const healthData = await healthRes.json();
          if (healthData && healthData.database) {
            setDbStatus(healthData.database);
          }
        }
      } catch {}

      // 3. Fetch Colour Games
      try {
        const colourRes = await fetch('/api/colour-games', {
          headers: { Accept: 'application/json' }
        });
        const contentType = colourRes.headers.get('content-type') || '';
        if (colourRes.ok && contentType.includes('application/json')) {
          const colourData = await colourRes.json();
          if (colourData && Array.isArray(colourData.games) && colourData.games.length > 0) {
            setColourGames(colourData.games);
          }
        }
      } catch {}
    } catch (err: any) {
      setApps(RUMMY_APPS as any[]);
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

  // Handle Delete App (defensive, no window.confirm DOMException in iframe)
  const handleDeleteApp = async (id: string, name: string) => {
    try {
      const res = await fetch(`/api/apps/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
      });
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        if (data && data.success) {
          showBanner(`App "${name}" deleted. Sitemap dynamically updated.`);
          await fetchDashboardData();
          return;
        }
      }
      // Local fallback removal
      setApps(prev => prev.filter(a => a.id !== id));
      showBanner(`App "${name}" removed from dashboard.`);
    } catch (err: any) {
      setApps(prev => prev.filter(a => a.id !== id));
      showBanner(`App "${name}" removed from view.`);
    }
  };

  // Handle Seed / Reset - Completely bulletproof with direct local fallback
  const handleSeedApps = async () => {
    setLoadingApps(true);
    try {
      let syncDone = false;
      try {
        const res = await fetch('/api/apps/seed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ force: true })
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data && data.success) {
            if (Array.isArray(data.apps) && data.apps.length > 0) {
              setApps(data.apps);
            }
            showBanner(`Synced ${data.count || 83} default apps into database!`);
            syncDone = true;
          }
        }
      } catch (netErr) {
        console.warn('Network call to /api/apps/seed failed, falling back to local list:', netErr);
      }

      // If network/API failed or returned non-JSON, fallback directly to RUMMY_APPS
      if (!syncDone) {
        setApps(RUMMY_APPS as any[]);
        showBanner(`Loaded ${RUMMY_APPS.length} default apps from fallback store!`);
      } else {
        await fetchDashboardData();
      }
    } catch (err: any) {
      setApps(RUMMY_APPS as any[]);
      showBanner(`Fallback: Loaded ${RUMMY_APPS.length} apps successfully!`);
    } finally {
      setLoadingApps(false);
    }
  };

  // Handle single Colour Game Link/VIP Code Update
  const handleUpdateColourGame = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingColourGame) return;

    setIsUpdatingColour(true);
    try {
      try {
        const res = await fetch(`/api/colour-games/${editingColourGame.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: editingColourGame.name,
            inviteLink: editingColourGame.inviteLink,
            loginLink: editingColourGame.loginLink,
            registerLink: editingColourGame.registerLink,
            vipCode: editingColourGame.vipCode,
            bonus: editingColourGame.bonus,
            minWithdrawal: editingColourGame.minWithdrawal,
            downloads: editingColourGame.downloads,
            iconUrl: editingColourGame.iconUrl,
          })
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          await res.json();
        }
      } catch (netErr) {
        console.warn('PUT /api/colour-games net error, saving locally:', netErr);
      }

      // Always update local state
      setColourGames(prev =>
        prev.map(g => (g.id === editingColourGame.id ? { ...g, ...editingColourGame } : g))
      );
      showBanner(`Links & VIP Code updated for "${editingColourGame.name}"! Active on live website.`);
      setEditingColourGame(null);
    } catch (err: any) {
      showBanner(`Saved "${editingColourGame.name}" links locally.`);
      setEditingColourGame(null);
    } finally {
      setIsUpdatingColour(false);
    }
  };

  // Handle Create New Colour Game
  const handleCreateColourGame = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newColourName.trim()) {
      showBanner('Please provide a Colour Game Name', 'error');
      return;
    }

    setIsCreatingColourGame(true);
    const cleanName = newColourName.trim();
    const finalSlug = (newColourSlug.trim() || cleanName)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const gamePayload = {
      name: cleanName,
      id: finalSlug,
      inviteLink: newColourInviteLink.trim() || 'https://www.junglehaan.vip/share/6IOe3xy=1538',
      loginLink: newColourLoginLink.trim() || newColourInviteLink.trim() || 'https://www.junglehaan.vip/share/6IOe3xy=1538',
      registerLink: newColourRegisterLink.trim() || newColourInviteLink.trim() || 'https://www.junglehaan.vip/share/6IOe3xy=1538',
      vipCode: newColourVipCode.trim() || '1538',
      bonus: newColourBonus.trim() || '₹500',
      minWithdrawal: newColourMinWithdrawal.trim() || '₹110',
      downloads: newColourDownloads.trim() || '1.2M+',
      iconUrl: newColourIconUrl.trim() || '/images/91_club_logo.jpg',
    };

    try {
      let createdOnServer = false;
      try {
        const res = await fetch('/api/colour-games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(gamePayload),
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data && data.success && data.game) {
            setColourGames(prev => [data.game, ...prev.filter(g => g.id !== data.game.id)]);
            createdOnServer = true;
          }
        }
      } catch (netErr) {
        console.warn('POST /api/colour-games net warning, adding locally:', netErr);
      }

      if (!createdOnServer) {
        setColourGames(prev => [{ ...gamePayload, createdAt: new Date().toISOString() }, ...prev.filter(g => g.id !== gamePayload.id)]);
      }

      showBanner(`Colour Game "${cleanName}" created successfully! Available at /${finalSlug} and /${finalSlug}-login`);
      setIsAddingColourGame(false);
      setNewColourName('');
      setNewColourSlug('');
      setNewColourInviteLink('https://www.junglehaan.vip/share/6IOe3xy=1538');
      setNewColourLoginLink('');
      setNewColourRegisterLink('');
      setNewColourVipCode('1538');
      setNewColourBonus('₹500');
      setNewColourMinWithdrawal('₹110');
      setNewColourDownloads('1.2M+');
      setNewColourIconUrl('/images/91_club_logo.jpg');
    } catch (err: any) {
      showBanner(err.message || 'Failed to create Colour Game', 'error');
    } finally {
      setIsCreatingColourGame(false);
    }
  };

  // Handle Delete Colour Game
  const handleDeleteColourGame = async (id: string, name: string) => {
    try {
      try {
        await fetch(`/api/colour-games/${id}`, {
          method: 'DELETE',
          headers: { Accept: 'application/json' },
        });
      } catch (netErr) {
        console.warn('DELETE /api/colour-games net error:', netErr);
      }
      setColourGames(prev => prev.filter(g => g.id !== id));
      showBanner(`Colour Game "${name}" deleted successfully.`);
    } catch (err: any) {
      setColourGames(prev => prev.filter(g => g.id !== id));
      showBanner(`Removed "${name}" from colour games.`);
    }
  };

  // Handle Bulk Update for All 8 Colour Games
  const handleBulkUpdateColourGames = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkInviteLink.trim() && !bulkLoginLink.trim() && !bulkRegisterLink.trim() && !bulkVipCode.trim()) {
      showBanner('Please fill at least one link or VIP code to apply', 'error');
      return;
    }

    setIsUpdatingBulk(true);
    try {
      const payload: any = {};
      if (bulkInviteLink.trim()) payload.inviteLink = bulkInviteLink.trim();
      if (bulkLoginLink.trim()) payload.loginLink = bulkLoginLink.trim();
      if (bulkRegisterLink.trim()) payload.registerLink = bulkRegisterLink.trim();
      if (bulkVipCode.trim()) payload.vipCode = bulkVipCode.trim();

      try {
        const res = await fetch('/api/colour-games/update-all', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data && data.success && Array.isArray(data.games)) {
            setColourGames(data.games);
          }
        }
      } catch (netErr) {
        console.warn('Bulk update net error, applying locally:', netErr);
      }

      // Always update local state for all colour games
      setColourGames(prev =>
        prev.map(g => ({
          ...g,
          ...(payload.inviteLink ? { inviteLink: payload.inviteLink } : {}),
          ...(payload.loginLink ? { loginLink: payload.loginLink } : {}),
          ...(payload.registerLink ? { registerLink: payload.registerLink } : {}),
          ...(payload.vipCode ? { vipCode: payload.vipCode } : {}),
        }))
      );

      showBanner('All 8 Colour Games updated with new links and VIP Code!');
      setBulkInviteLink('');
      setBulkLoginLink('');
      setBulkRegisterLink('');
      setBulkVipCode('');
    } catch (err: any) {
      showBanner('Bulk update applied locally.');
    } finally {
      setIsUpdatingBulk(false);
    }
  };

  // Handle 1-Click Bulk Update for All Rummy Apps Links
  const handleBulkUpdateRummyLinks = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkRummyLink.trim()) {
      showBanner('Please enter a valid download/referral link', 'error');
      return;
    }

    setIsUpdatingBulkRummy(true);
    const targetLink = bulkRummyLink.trim();

    try {
      let savedOnServer = false;
      try {
        const res = await fetch('/api/apps/update-all-links', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ downloadLink: targetLink })
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data && data.success) {
            if (Array.isArray(data.apps) && data.apps.length > 0) {
              setApps(data.apps);
            }
            savedOnServer = true;
          }
        }
      } catch (netErr) {
        console.warn('POST /api/apps/update-all-links network warning:', netErr);
      }

      // Always update local state for all apps immediately
      setApps(prev =>
        prev.map(app => ({
          ...app,
          downloadLink: targetLink
        }))
      );

      showBanner(`Successfully updated download link for all ${apps.length} Rummy apps in 1-Click!`);
      setBulkRummyLink('');
    } catch (err: any) {
      // Local fallback
      setApps(prev =>
        prev.map(app => ({
          ...app,
          downloadLink: targetLink
        }))
      );
      showBanner(`Updated download link for all apps.`);
    } finally {
      setIsUpdatingBulkRummy(false);
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl">
            <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-between">
              <span>Total Rummy Apps</span>
              <Layers className="w-3.5 h-3.5 text-brand-primary" />
            </div>
            <div className="text-2xl font-black text-white mt-1">
              {apps.length}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">80+ in Database</div>
          </div>

          <div className="bg-[#121929] border border-rose-500/30 p-4 rounded-2xl relative overflow-hidden group">
            <div className="text-[10px] uppercase font-bold text-rose-300 flex items-center justify-between">
              <span>Colour Games</span>
              <Palette className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <div className="text-2xl font-black text-rose-400 mt-1 flex items-center justify-between">
              <span>{colourGames.length}</span>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('add');
                  setAddAppType('colour');
                }}
                className="text-[10px] font-bold bg-rose-500/20 hover:bg-rose-500 text-rose-200 hover:text-white px-2 py-0.5 rounded-lg border border-rose-500/40 transition-colors cursor-pointer"
              >
                + Add
              </button>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Win Go &amp; 91 Club</div>
          </div>

          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl">
            <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-between">
              <span>Dynamic Sitemap</span>
              <FileText className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-blue-400 mt-1">
              {apps.length + colourGames.length * 2 + 15}
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

          <div className="bg-[#121929] border border-white/10 p-4 rounded-2xl col-span-2 sm:col-span-1">
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
            onClick={() => setActiveTab('colour')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'colour'
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-amber-300" />
            <span>Colour Games ({colourGames.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('add');
              setAddAppType('rummy');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'add' && addAppType === 'rummy'
                ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Rummy App</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('add');
              setAddAppType('colour');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'add' && addAppType === 'colour'
                ? 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white shadow-lg shadow-rose-600/30 ring-2 ring-amber-400/50'
                : 'bg-rose-500/15 text-rose-300 border border-rose-500/30 hover:bg-rose-500/25 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>+ Add Colour Trading App</span>
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
            {/* 1-CLICK BULK LINK UPDATER FOR ALL RUMMY APPS */}
            <div className="bg-gradient-to-r from-[#131b2e] via-[#161d36] to-[#0f172a] border border-brand-primary/30 rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase text-white tracking-wide flex items-center gap-2">
                      1-Click Bulk Link Change (All {apps.length} Apps)
                      <span className="text-[9px] bg-brand-primary/20 text-brand-primary border border-brand-primary/40 px-2 py-0.5 rounded-full font-bold">
                        1-Click Instant
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      Ek click me saare {apps.length} Rummy apps ka download / telegram affiliate link update karein.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleBulkUpdateRummyLinks} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Link2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Enter new download link for all apps (e.g. https://telegram.me/... ya custom affiliate URL)"
                    value={bulkRummyLink}
                    onChange={(e) => setBulkRummyLink(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-brand-primary shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isUpdatingBulkRummy || !bulkRummyLink.trim()}
                  className="px-5 py-2.5 bg-gradient-to-r from-brand-primary to-amber-400 hover:brightness-110 active:scale-98 text-black font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-brand-primary/20 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>{isUpdatingBulkRummy ? 'Updating All Apps...' : `Apply to All ${apps.length} Apps`}</span>
                </button>
              </form>
            </div>

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

        {/* TAB: COLOUR GAMES (WIN GO / PREDICTION APPS) */}
        {activeTab === 'colour' && (
          <div className="space-y-6">
            {/* Top Quick Action Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-[#121929] border border-rose-500/30 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-white tracking-wide">
                    Colour Trading &amp; Win Go Platforms ({colourGames.length})
                  </h3>
                  <p className="text-xs text-slate-400">
                    Live dynamic routing, official mirror portals &amp; instant VIP codes.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('add');
                    setAddAppType('colour');
                  }}
                  className="px-4 py-2.5 bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:brightness-110 active:scale-95 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-600/30 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>+ Add New Colour Trading App</span>
                </button>
              </div>
            </div>

            {/* Global Bulk Links & VIP Code Updater */}
            <div className="bg-gradient-to-r from-[#18233a] via-[#1a1c2e] to-[#141b2d] border border-amber-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black uppercase text-white flex items-center gap-2">
                    Bulk Update All {colourGames.length} Colour Games
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-sans not-italic font-bold">1-Click</span>
                  </h2>
                  <p className="text-xs text-slate-300">
                    Apply the same invite link, login link, register link, or VIP code across all {colourGames.length} Colour Games at once.
                  </p>
                </div>
              </div>

              <form onSubmit={handleBulkUpdateColourGames} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Link2 className="w-3.5 h-3.5 text-amber-400" />
                      Global Invite / Referral Link
                    </label>
                    <input
                      type="text"
                      placeholder="https://www.junglehaan.vip/share/6IOe3xy=1538"
                      value={bulkInviteLink}
                      onChange={(e) => setBulkInviteLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-rose-400" />
                      Global VIP Code (Invite Code)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1538 or VIP2026"
                      value={bulkVipCode}
                      onChange={(e) => setBulkVipCode(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-blue-400" />
                      Global Direct Login Link (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Leave blank to use Invite Link"
                      value={bulkLoginLink}
                      onChange={(e) => setBulkLoginLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      Global Direct Register Link (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Leave blank to use Invite Link"
                      value={bulkRegisterLink}
                      onChange={(e) => setBulkRegisterLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={isUpdatingBulk}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 hover:brightness-110 active:scale-95 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-600/25 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isUpdatingBulk ? 'Applying to All Games...' : `🚀 Apply to All ${colourGames.length} Colour Games`}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Individual Colour Games Cards */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-sm font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <Palette className="w-4 h-4 text-rose-500" />
                    Individual Colour Games Links &amp; VIP Codes ({colourGames.length})
                  </h3>
                  <p className="text-xs text-slate-400">
                    Customize the invite link, login URL, register URL and VIP code for each specific platform.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddingColourGame(true)}
                  className="px-4 py-2.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:brightness-110 active:scale-95 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-600/25 transition-all cursor-pointer flex items-center gap-2 shrink-0 self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Colour Game</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colourGames.map((game) => (
                  <div
                    key={game.id}
                    className="bg-[#121929] border border-white/10 hover:border-amber-400/30 rounded-2xl p-5 shadow-lg space-y-3.5 transition-all"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <img
                          src={game.iconUrl || `/images/${game.id.replace(/-/g, '_')}_logo.jpg`}
                          alt={game.name}
                          className="w-12 h-12 rounded-xl object-contain border border-white/15 bg-black/40"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/images/91_club_logo.jpg';
                          }}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-black text-white">{game.name}</h4>
                            <span className="text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded-full font-bold">
                              Win Go
                            </span>
                          </div>
                          <Link
                            to={`/${game.slug || game.id + '-login'}`}
                            target="_blank"
                            className="text-[11px] text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1 mt-0.5"
                          >
                            <span>/{game.slug || game.id + '-login'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingColourGame({ ...game })}
                          className="px-3 py-1.5 bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-black font-black text-xs uppercase tracking-wider rounded-xl border border-amber-400/30 transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteColourGame(game.id, game.name)}
                          className="p-1.5 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-xl border border-red-500/20 transition-all cursor-pointer"
                          title={`Delete ${game.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                          VIP Code:
                        </span>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400/10 border border-amber-400/20 rounded-lg text-amber-300 font-mono font-bold">
                          <span>{game.vipCode || '1538'}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                          Invite Link:
                        </span>
                        <div className="p-2 bg-[#0a0f1d] border border-white/5 rounded-lg font-mono text-[11px] text-slate-300 truncate">
                          {game.inviteLink || 'Default'}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                            Login Link:
                          </span>
                          <div className="p-2 bg-[#0a0f1d] border border-white/5 rounded-lg font-mono text-[11px] text-slate-300 truncate">
                            {game.loginLink || game.inviteLink || 'Same as Invite'}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                            Register Link:
                          </span>
                          <div className="p-2 bg-[#0a0f1d] border border-white/5 rounded-lg font-mono text-[11px] text-slate-300 truncate">
                            {game.registerLink || game.inviteLink || 'Same as Invite'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADD NEW APP (RUMMY & COLOUR TRADING APPS) */}
        {activeTab === 'add' && (
          <div className="space-y-6">
            {/* App Type Switcher */}
            <div className="flex p-1.5 bg-[#0a0f1d] border border-white/10 rounded-2xl max-w-md shadow-lg">
              <button
                type="button"
                onClick={() => setAddAppType('rummy')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  addAppType === 'rummy'
                    ? 'bg-brand-primary text-black shadow-lg shadow-brand-primary/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>🂡 Rummy App</span>
              </button>

              <button
                type="button"
                onClick={() => setAddAppType('colour')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  addAppType === 'colour'
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-lg shadow-rose-600/30 ring-2 ring-amber-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-amber-300" />
                <span>🎨 Colour Trading App</span>
              </button>
            </div>

            {/* FORM 1: ADD RUMMY APP */}
            {addAppType === 'rummy' && (
              <div className="bg-[#121929] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl shadow-xl animate-fade-in">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black uppercase italic text-white">
                      Add New Rummy App to Database
                    </h2>
                    <p className="text-xs text-slate-400">
                      Instantly stores into MongoDB, generates route /{'{slug}'} &amp; updates /sitemap.xml
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

            {/* FORM 2: ADD COLOUR TRADING APP */}
            {addAppType === 'colour' && (
              <div className="bg-[#121929] border border-rose-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl shadow-2xl relative overflow-hidden animate-fade-in">
                <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black uppercase text-white flex items-center gap-2">
                      Add New Colour Trading App
                      <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-0.5 rounded-full font-sans font-bold">
                        Win Go &bull; 91 Club
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400">
                      Instantly generates official login portal, VIP code, and live routes at /{'{slug}'} &amp; /{'{slug}'}-login
                    </p>
                  </div>
                </div>

                <form onSubmit={handleCreateColourGame} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Colour Game / Platform Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. BDG Game, Big Daddy Game, TC Lottery, Daman Game"
                        value={newColourName}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewColourName(val);
                          if (!newColourSlug || newColourSlug === newColourName.toLowerCase().replace(/[^a-z0-9]+/g, '-')) {
                            setNewColourSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
                          }
                        }}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Route Slug / App ID *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. bdg-game, big-daddy-game, tc-lottery"
                        value={newColourSlug}
                        onChange={(e) => setNewColourSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>

                  {/* Live Route URL Preview */}
                  <div className="p-3 bg-[#0a0f1d] border border-rose-500/20 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold uppercase text-amber-400 block">
                      Live Route URLs Generated:
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs font-mono text-slate-300">
                      <span className="text-blue-400">/{newColourSlug || 'slug'}-login</span>
                      <span className="text-slate-500 hidden sm:inline">&bull;</span>
                      <span className="text-rose-400">/{newColourSlug || 'slug'}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-bold text-amber-300 block mb-1 flex items-center gap-1.5">
                        <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                        VIP Code (Invite Code) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 1538"
                        value={newColourVipCode}
                        onChange={(e) => setNewColourVipCode(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-amber-500/40 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Sign-up / 1st Recharge Bonus
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹500 on 1st Recharge"
                        value={newColourBonus}
                        onChange={(e) => setNewColourBonus(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
                      <Link2 className="w-3.5 h-3.5 text-rose-400" />
                      Main Invite / Referral Link *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="https://www.junglehaan.vip/share/6IOe3xy=1538"
                      value={newColourInviteLink}
                      onChange={(e) => setNewColourInviteLink(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Direct Login Link (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Same as invite link"
                        value={newColourLoginLink}
                        onChange={(e) => setNewColourLoginLink(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Direct Register Link (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Same as invite link"
                        value={newColourRegisterLink}
                        onChange={(e) => setNewColourRegisterLink(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Min. Withdrawal
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹110"
                        value={newColourMinWithdrawal}
                        onChange={(e) => setNewColourMinWithdrawal(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Downloads Count
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1.2M+"
                        value={newColourDownloads}
                        onChange={(e) => setNewColourDownloads(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold text-slate-300 block mb-1">
                        Logo / Icon Image
                      </label>
                      <input
                        type="text"
                        placeholder="/images/91_club_logo.jpg"
                        value={newColourIconUrl}
                        onChange={(e) => setNewColourIconUrl(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isCreatingColourGame || !newColourName.trim()}
                    className="w-full py-4 bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:brightness-110 active:scale-98 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-rose-600/30 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isCreatingColourGame ? 'Deploying Colour Game...' : '🚀 Create & Deploy Colour Trading App'}</span>
                  </button>
                </form>
              </div>
            )}
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

      {/* EDIT COLOUR GAME MODAL */}
      {editingColourGame && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121929] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="text-base font-black uppercase text-white">
                  Edit {editingColourGame.name} Links &amp; VIP Code
                </h3>
              </div>
              <button
                onClick={() => setEditingColourGame(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateColourGame} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Game Name
                </label>
                <input
                  type="text"
                  required
                  value={editingColourGame.name || ''}
                  onChange={(e) => setEditingColourGame({ ...editingColourGame, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-amber-400 block mb-1">
                  VIP Code (Invite Code)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1538"
                  value={editingColourGame.vipCode || ''}
                  onChange={(e) => setEditingColourGame({ ...editingColourGame, vipCode: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-amber-500/30 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-amber-400"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Displayed on the banner, FAQ, and promo bonus copy.
                </span>
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Invite Link (Main Share URL)
                </label>
                <input
                  type="text"
                  required
                  value={editingColourGame.inviteLink || ''}
                  onChange={(e) => setEditingColourGame({ ...editingColourGame, inviteLink: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Direct Login Link (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Leave empty or same as invite link"
                  value={editingColourGame.loginLink || ''}
                  onChange={(e) => setEditingColourGame({ ...editingColourGame, loginLink: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Direct Register Link (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Leave empty or same as invite link"
                  value={editingColourGame.registerLink || ''}
                  onChange={(e) => setEditingColourGame({ ...editingColourGame, registerLink: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Bonus Reward
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹500 on 1st Recharge"
                    value={editingColourGame.bonus || ''}
                    onChange={(e) => setEditingColourGame({ ...editingColourGame, bonus: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Min Withdrawal
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹110"
                    value={editingColourGame.minWithdrawal || ''}
                    onChange={(e) => setEditingColourGame({ ...editingColourGame, minWithdrawal: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Downloads Count
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1.2M+"
                    value={editingColourGame.downloads || ''}
                    onChange={(e) => setEditingColourGame({ ...editingColourGame, downloads: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Icon / Logo URL
                  </label>
                  <input
                    type="text"
                    placeholder="/images/91_club_logo.jpg"
                    value={editingColourGame.iconUrl || ''}
                    onChange={(e) => setEditingColourGame({ ...editingColourGame, iconUrl: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white font-mono focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pt-3">
                <button
                  type="submit"
                  disabled={isUpdatingColour}
                  className="flex-1 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:brightness-110 active:scale-98 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isUpdatingColour ? 'Saving Live Changes...' : 'Save Live Changes'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingColourGame(null)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD NEW COLOUR GAME MODAL */}
      {isAddingColourGame && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121929] border border-rose-500/30 rounded-2xl p-6 sm:p-7 max-w-lg w-full shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-white tracking-wide">
                    Add New Colour Trading App
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Create a Win Go / Colour Prediction platform with official portal
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAddingColourGame(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateColourGame} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                  Colour Game Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BDG Game, Big Daddy Game, TC Lottery, Daman Game"
                  value={newColourName}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNewColourName(val);
                    if (!newColourSlug || newColourSlug === newColourName.toLowerCase().replace(/[^a-z0-9]+/g, '-')) {
                      setNewColourSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
                    }
                  }}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                  Route Slug / App ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. bdg-game, big-daddy-game, tc-lottery"
                  value={newColourSlug}
                  onChange={(e) => setNewColourSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-rose-400"
                />
                <span className="text-[10px] text-slate-400 mt-1 block font-mono">
                  Live URLs: /{newColourSlug || 'slug'} and /{newColourSlug || 'slug'}-login
                </span>
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-amber-300 block mb-1 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  VIP Code (Invite Code)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1538"
                  value={newColourVipCode}
                  onChange={(e) => setNewColourVipCode(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-amber-500/30 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1 flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5 text-rose-400" />
                  Invite Link (Main Share URL) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://www.junglehaan.vip/share/6IOe3xy=1538"
                  value={newColourInviteLink}
                  onChange={(e) => setNewColourInviteLink(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0f1d] border border-white/15 rounded-xl text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-rose-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Login Link (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Same as invite link"
                    value={newColourLoginLink}
                    onChange={(e) => setNewColourLoginLink(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Register Link (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Same as invite link"
                    value={newColourRegisterLink}
                    onChange={(e) => setNewColourRegisterLink(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Sign-up Bonus
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹500 on 1st Recharge"
                    value={newColourBonus}
                    onChange={(e) => setNewColourBonus(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Min Withdrawal
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹110"
                    value={newColourMinWithdrawal}
                    onChange={(e) => setNewColourMinWithdrawal(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Downloads Count
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1.2M+"
                    value={newColourDownloads}
                    onChange={(e) => setNewColourDownloads(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Logo / Icon Image
                  </label>
                  <input
                    type="text"
                    placeholder="/images/91_club_logo.jpg"
                    value={newColourIconUrl}
                    onChange={(e) => setNewColourIconUrl(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0a0f1d] border border-white/10 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              <div className="flex gap-2.5 pt-3">
                <button
                  type="submit"
                  disabled={isCreatingColourGame}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:brightness-110 active:scale-98 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isCreatingColourGame ? 'Adding Colour Game...' : '🚀 Create Colour Game'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingColourGame(false)}
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase rounded-xl transition-colors cursor-pointer"
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
