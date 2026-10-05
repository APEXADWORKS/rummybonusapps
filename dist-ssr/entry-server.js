import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { renderToString } from "react-dom/server";
import { useParams, useLocation, Link, Routes, Route, StaticRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Download, Star, Zap, Trophy, Smartphone, ShieldCheck, TrendingUp, ChevronRight, RefreshCw, Sparkles, Gem, Wallet, Coins, BrainCircuit, Sword, Target, Crown, Spade, ThumbsUp, Heart, Navigation, Layers, Gamepad2, CircleCheck, Shield, Cpu, Users, Search, ShieldAlert, Gift, FileText, CheckCircle2, Flame, Table, Award, ArrowRight, Send, X } from "lucide-react";
const RUMMY_APPS = [
  {
    id: "jungle-haan",
    name: "Jungle Haan",
    bonus: "Rs.51",
    downloads: "150K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/jungle_haan_logo_png_1779114514699.png",
    category: "Top",
    isTrending: true
  },
  {
    id: "rummy-boss",
    name: "Rummy Boss",
    bonus: "Rs.100",
    downloads: "380K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/boss_rummy_logo_final_1779114701840.png",
    category: "Top",
    isTrending: true
  },
  {
    id: "rummy-wealth",
    name: "Rummy Wealth",
    bonus: "Rs.51",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_wealth_logo_v2_1779115748787.png",
    category: "Top"
  },
  {
    id: "rummy-noble",
    name: "Rummy Noble",
    bonus: "Rs.41",
    downloads: "350K+",
    minWithdrawal: "₹75",
    downloadLink: "#",
    iconUrl: "/images/rummy_noble_logo_1779114643526.png",
    category: "High Bonus",
    isTrending: true
  },
  {
    id: "rummy-mars",
    name: "Rummy Mars",
    bonus: "Rs.41",
    downloads: "170K+",
    minWithdrawal: "₹85",
    downloadLink: "#",
    iconUrl: "/images/rummy_mars_logo_1779115945155.png",
    category: "Top"
  },
  {
    id: "rummy-leader",
    name: "Rummy Leader",
    bonus: "Rs.51",
    downloads: "250K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_leader.webp",
    category: "New"
  },
  {
    id: "game-rummy",
    name: "Game Rummy",
    bonus: "Rs.75",
    downloads: "184K+",
    minWithdrawal: "Rs.80",
    downloadLink: "#",
    iconUrl: "/images/Game_Rummy.webp",
    category: "New"
  },
  {
    id: "yono-rummy",
    name: "Yono Rummy",
    bonus: "Rs.100",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/yono_rummy.webp",
    category: "High Bonus",
    isTrending: true
  },
  {
    id: "msm-bet",
    name: "MSM BET",
    bonus: "Rs.71",
    downloads: "250K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/msm_bet.webp",
    category: "New"
  },
  {
    id: "rummy-patola",
    name: "Rummy Patola",
    bonus: "Rs.41",
    downloads: "390K+",
    minWithdrawal: "₹85",
    downloadLink: "#",
    iconUrl: "/images/rummy_patola.webp",
    category: "Top"
  },
  {
    id: "rummy-blast",
    name: "Rummy Blast",
    bonus: "Rs.75",
    downloads: "250K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/Rummy_Blast.webp",
    category: "New"
  },
  {
    id: "holy-rummy",
    name: "Holy Rummy",
    bonus: "Rs.41",
    downloads: "280K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/Holy_Rummy.webp",
    category: "High Bonus"
  },
  {
    id: "rummy-pride",
    name: "Rummy Pride",
    bonus: "Rs.75",
    downloads: "450K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/Rummy_Pride.jpg",
    category: "High Bonus"
  },
  {
    id: "mqm-bet",
    name: "MQM BET",
    bonus: "Rs.20",
    downloads: "255K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/MQM_BET.webp",
    category: "New"
  },
  {
    id: "hello-rummy",
    name: "Hello Rummy",
    bonus: "Rs.71",
    downloads: "450K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/hello_rummy.webp",
    category: "High Bonus"
  },
  {
    id: "love-rummy",
    name: "Love Rummy",
    bonus: "Rs.51",
    downloads: "460K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/Love_Rummy.webp",
    category: "Top"
  },
  {
    id: "dash-rummy",
    name: "Dash Rummy",
    bonus: "Rs.75",
    downloads: "410K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/Dash_Rummy.webp",
    category: "New"
  },
  {
    id: "rummy-apna",
    name: "Rummy Apna",
    bonus: "Rs.41",
    downloads: "430K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_apna.PNG",
    category: "Top"
  },
  {
    id: "rummy-buddy",
    name: "Rummy Buddy",
    bonus: "Rs.41",
    downloads: "190K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_buddy.webp",
    category: "New"
  },
  {
    id: "roz-rummy",
    name: "Roz Rummy",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/Roz_Rummy.webp",
    category: "Top"
  },
  {
    id: "rummy-golds",
    name: "Rummy Golds",
    bonus: "Rs.41",
    downloads: "168K+",
    minWithdrawal: "₹75",
    downloadLink: "#",
    iconUrl: "/images/Rummy_Gold.webp",
    category: "High Bonus"
  },
  {
    id: "rummy-91",
    name: "Rummy 91",
    bonus: "Rs.91",
    downloads: "180K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_91_logo_1779225292123.png",
    category: "New"
  },
  {
    id: "rummy-guru",
    name: "Rummy Guru",
    bonus: "Rs.41",
    downloads: "10K",
    minWithdrawal: "₹85",
    downloadLink: "#",
    iconUrl: "/images/Rummy_Guru.webp",
    category: "Top"
  },
  {
    id: "rummy-alliance",
    name: "Rummy Alliance",
    bonus: "Rs.41",
    downloads: "390K+",
    minWithdrawal: "₹75",
    downloadLink: "#",
    iconUrl: "/images/rummy_alliance.PNG",
    category: "Top"
  },
  {
    id: "deccan-rummy",
    name: "Deccan Rummy",
    bonus: "Rs.51",
    downloads: "470K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "https:/api.dicebear.com/7.x/shapes/svg?seed=deccan",
    category: "High Bonus"
  },
  {
    id: "666e-rummy",
    name: "666E Rummy",
    bonus: "Rs.51",
    downloads: "500K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/666e_rummy_logo_v2_1779121399166.png",
    category: "High Bonus"
  },
  {
    id: "gogo-rummy",
    name: "GoGo Rummy",
    bonus: "Rs.51",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/gogo_rummy_logo_v2_1779121381572.png",
    category: "New"
  },
  {
    id: "66-rummy",
    name: "66 Rummy",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/66_rummy_logo_v2_1779121365053.png",
    category: "Top"
  },
  {
    id: "9ipl-game",
    name: "9IPL Game",
    bonus: "Rs.20",
    downloads: "170K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/9ipl_game_logo_v2_1779121347560.png",
    category: "New"
  },
  {
    id: "abc-rummy",
    name: "ABC Rummy",
    bonus: "Rs.75",
    downloads: "510K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/abc_rummy_logo_v2_1779121330769.png",
    category: "Top"
  },
  {
    id: "rummy-glee",
    name: "Rummy Glee",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_glee_logo_1779225260394.png",
    category: "Top"
  },
  {
    id: "rummy-prime",
    name: "Rummy Prime",
    bonus: "Rs.71",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_prime_logo_v2_1779121314774.png",
    category: "New"
  },
  {
    id: "good-slots",
    name: "Good Slots",
    bonus: "Rs.41",
    downloads: "200K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/good_slots_logo_v2_1779121298165.png",
    category: "Top"
  },
  {
    id: "rummy-league",
    name: "Rummy League",
    bonus: "Rs.51",
    downloads: "240K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_league_logo_v2_1779121282114.png",
    category: "New"
  },
  {
    id: "rummy-soft",
    name: "Rummy Soft",
    bonus: "Rs.51",
    downloads: "440K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_soft_logo_1779225275240.png",
    category: "Top"
  },
  {
    id: "yes-rummy",
    name: "Yes Rummy",
    bonus: "Rs.75",
    downloads: "480K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/yes_rummy_logo_1779121189385.png",
    category: "High Bonus"
  },
  {
    id: "rummy-time",
    name: "Rummy Time",
    bonus: "Rs.71",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_time_logo_v2_1779121173100.png",
    category: "Top"
  },
  {
    id: "rummy-ola",
    name: "Rummy Ola",
    bonus: "Rs.51",
    downloads: "385K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_ola.webp",
    category: "Top"
  },
  {
    id: "rummy-deity",
    name: "Rummy Deity",
    bonus: "Rs.71",
    downloads: "150K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_deity_logo_1779121147807.png",
    category: "New"
  },
  {
    id: "rummy-grand",
    name: "Rummy Grand",
    bonus: "Rs.20",
    downloads: "200K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_grand_logo_1779121130667.png",
    category: "New"
  },
  {
    id: "ok-rummy",
    name: "OK Rummy",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/ok_rummy_logo_1779121116767.png",
    category: "Top"
  },
  {
    id: "rummy-tour",
    name: "Rummy Tour",
    bonus: "Rs.75",
    downloads: "270K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_tour_logo_1779225307392.png",
    category: "New"
  },
  {
    id: "rummy-east",
    name: "Rummy East",
    bonus: "Rs.51",
    downloads: "360K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_east_logo_1779121095779.png",
    category: "Top"
  },
  {
    id: "rummy-best",
    name: "Rummy Best",
    bonus: "Rs.71",
    downloads: "360K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_best_logo_1779121077942.png",
    category: "High Bonus"
  },
  {
    id: "rummy-master",
    name: "Rummy Master",
    bonus: "Rs.51",
    downloads: "110K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_master_logo_1779225326294.png",
    category: "Top"
  },
  {
    id: "rummy-zone",
    name: "Rummy Zone",
    bonus: "Rs.41",
    downloads: "490K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_zone_logo_1779120854231.png",
    category: "Top"
  },
  {
    id: "bappa-rummy",
    name: "Bappa Rummy",
    bonus: "Rs.20",
    downloads: "470K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/bappa_rummy_logo_1779120836917.png",
    category: "New"
  },
  {
    id: "teen-patti-joy",
    name: "Teen Patti Joy",
    bonus: "Rs.75",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "https:/api.dicebear.com/7.x/shapes/svg?seed=joy",
    category: "High Bonus"
  },
  {
    id: "bingo-101",
    name: "BINGO 101",
    bonus: "Rs.51",
    downloads: "362K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/bingo_101_logo_1779120819116.png",
    category: "New"
  },
  {
    id: "rummy-loot",
    name: "Rummy Loot",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_loot_logo_1779225341914.png",
    category: "Top"
  },
  {
    id: "rummy-paisa",
    name: "Rummy Paisa",
    bonus: "Rs.51",
    downloads: "260K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_paisa_logo_1779120804020.png",
    category: "New"
  },
  {
    id: "ind-rummy",
    name: "IND Rummy",
    bonus: "Rs.75",
    downloads: "430K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/ind_rummy_logo_1779120790697.png",
    category: "Top"
  },
  {
    id: "rummy-regal",
    name: "Rummy Regal",
    bonus: "Rs.20",
    downloads: "450K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_regal_logo_1779120774021.png",
    category: "New"
  },
  {
    id: "rumble-rummy",
    name: "Rumble Rummy",
    bonus: "Rs.71",
    downloads: "460K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rumble_rummy_logo_1779120755739.png",
    category: "High Bonus"
  },
  {
    id: "rummy-nabob",
    name: "Rummy Nabob",
    bonus: "Rs.20",
    downloads: "330K",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_nabob_logo_v2_1779120707636.png",
    category: "Top"
  },
  {
    id: "lcg-bet",
    name: "LCG BET",
    bonus: "Rs.95",
    downloads: "500K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/lcg_bet_logo_1779120692189.png",
    category: "New"
  },
  {
    id: "hlowin",
    name: "HloWin",
    bonus: "Rs.41",
    downloads: "185K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/hlowin_logo_1779120674750.png",
    category: "New"
  },
  {
    id: "rummy-meet",
    name: "Rummy Meet",
    bonus: "Rs.71",
    downloads: "110K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_meet_logo_1779225356065.png",
    category: "Top"
  },
  {
    id: "rummy-a1",
    name: "Rummy A1",
    bonus: "Rs.75",
    downloads: "365K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_a1_logo_1779120658063.png",
    category: "High Bonus"
  },
  {
    id: "rummy-bharat",
    name: "Rummy Bharat",
    bonus: "Rs.41",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "https:/api.dicebear.com/7.x/shapes/svg?seed=bharat",
    category: "Top"
  },
  {
    id: "yoyo-slots",
    name: "YoYo Slots",
    bonus: "Rs.51",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/yoyo_slots_logo_1779120623218.png",
    category: "New"
  },
  {
    id: "ek-rummy",
    name: "Ek Rummy",
    bonus: "Rs.20",
    downloads: "200K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/ek_rummy_logo_v2_1779120605524.png",
    category: "New"
  },
  {
    id: "rummy-apple",
    name: "Rummy Apple",
    bonus: "Rs.20",
    downloads: "200K+",
    minWithdrawal: "₹50",
    downloadLink: "/uttam1",
    iconUrl: "https:/api.dicebear.com/7.x/shapes/svg?seed=apple",
    category: "New"
  },
  {
    id: "jaiho-rummy",
    name: "Jaiho Rummy",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/jaiho_rummy_logo_1779120588855.png",
    category: "High Bonus"
  },
  {
    id: "rummy-bloc",
    name: "Rummy Bloc",
    bonus: "Rs.51",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_bloc_logo_1779120551091.png",
    category: "Top"
  },
  {
    id: "rummy-perfect",
    name: "Rummy Perfect",
    bonus: "Rs.20",
    downloads: "230K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_perfect_logo_1779225371285.png",
    category: "New"
  },
  {
    id: "rummy-palace",
    name: "Rummy Palace",
    bonus: "Rs.71",
    downloads: "420K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_palace_logo_1779120533653.png",
    category: "Top"
  },
  {
    id: "rummy-king",
    name: "Rummy King",
    bonus: "Rs.75",
    downloads: "160K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_king_logo_1779120520116.png",
    category: "High Bonus"
  },
  {
    id: "yoswin",
    name: "Yoswin",
    bonus: "Rs.71",
    downloads: "465K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/yoswin_logo_1779120502006.png",
    category: "New"
  },
  {
    id: "rummy-se",
    name: "Rummy SE",
    bonus: "Rs.1500",
    downloads: "120K+",
    minWithdrawal: "₹2000",
    downloadLink: "#",
    iconUrl: "/images/rummy_se_logo_1779120485580.png",
    category: "High Bonus"
  },
  {
    id: "rummy-try",
    name: "Rummy Try",
    bonus: "Rs.75",
    downloads: "400K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_try_logo_1779120467687.png",
    category: "High Bonus"
  },
  {
    id: "rummy-villa",
    name: "Rummy Villa",
    bonus: "Rs.71",
    downloads: "250K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "https:/api.dicebear.com/7.x/shapes/svg?seed=villa",
    category: "Top"
  },
  {
    id: "rummy-modern",
    name: "Rummy Modern",
    bonus: "Rs.51",
    downloads: "480K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_modern_logo_1779120451387.png",
    category: "Top"
  },
  {
    id: "rummy-good",
    name: "Rummy Good",
    bonus: "Rs.71",
    downloads: "290K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_good_logo_1779120433763.png",
    category: "New"
  },
  {
    id: "rummy-ares",
    name: "Rummy Ares",
    bonus: "Rs.20",
    downloads: "580K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_ares_logo_1779120397880.png",
    category: "Top"
  },
  {
    id: "rummy-gems",
    name: "Rummy Gems",
    bonus: "Rs.71",
    downloads: "185K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_gems_logo_1779120380405.png",
    category: "New"
  },
  {
    id: "royally-rummy",
    name: "Royally Rummy",
    bonus: "Rs.75",
    downloads: "185K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/royally_rummy_logo_1779120362517.png",
    category: "High Bonus"
  },
  {
    id: "rummy-most",
    name: "Rummy Most",
    bonus: "Rs.20",
    downloads: "320K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/rummy_most_logo_1779120641223.png",
    category: "Top"
  },
  {
    id: "mpl-rummy",
    name: "MPL Rummy",
    bonus: "Rs.20",
    downloads: "180K+",
    minWithdrawal: "₹50",
    downloadLink: "#",
    iconUrl: "/images/mpl_rummy_logo_1779120345561.png",
    category: "Top"
  },
  {
    id: "rummy-adda",
    name: "Rummy Adda",
    bonus: "Rs.75",
    downloads: "210K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_adda_logo_1779120329702.png",
    category: "New"
  },
  {
    id: "rummy-mate",
    name: "Rummy Mate",
    bonus: "Rs.41",
    downloads: "290K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/rummy_mate_logo_1779120312999.png",
    category: "Top"
  },
  {
    id: "kash-rummy",
    name: "Kash Rummy",
    bonus: "Rs.51",
    downloads: "450K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/kash_rummy_logo_1779120295938.png",
    category: "Top"
  },
  {
    id: "334-rummy",
    name: "334 Rummy",
    bonus: "Rs.75",
    downloads: "110K+",
    minWithdrawal: "₹100",
    downloadLink: "#",
    iconUrl: "/images/334_rummy_logo_1779120279038.png",
    category: "New"
  }
];
function AppDetailPage({
  appNameOverride,
  downloadLinkOverride
} = {}) {
  const { appName: routeAppName } = useParams();
  const { pathname } = useLocation();
  const targetName = appNameOverride || routeAppName;
  const app = RUMMY_APPS.find(
    (a) => a.name === targetName || a.name.toLowerCase().replace(/\s+/g, "-") === (targetName == null ? void 0 : targetName.toLowerCase()) || a.id === (targetName == null ? void 0 : targetName.toLowerCase())
  );
  if (!app) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl font-black mb-4", children: "App Not Found" }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-brand-primary hover:underline flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        " Back to Home"
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AppDetailPage.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this);
  }
  let effectiveDownloadLink = downloadLinkOverride;
  if (!effectiveDownloadLink) {
    effectiveDownloadLink = app.downloadLink === "#" ? "https://www.junglehaan.vip/share/6IOe3xy=1538" : app.downloadLink;
  }
  const canonicalUrl = `https://www.rummybonusapps.com/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`;
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#0f172a] text-white pb-20", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: `${app.name} Download APK - Get ${app.bonus} Signup Bonus | All Rummy Apps 2026` }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: `Download ${app.name} APK officially. Get ${app.bonus} bonus on signup. Min withdrawal ${app.minWithdrawal}. Part of our All Rummy App List with live withdrawal proof.` }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: `${app.name} download, ${app.name} apk, All Rummy Apps, Rummy All Apps, Rummy All Apk Download, rummy bonus apps, rummy 51 bonus, new rummy app today, Teen Patti Game, Yono Rummy All Games, free signup bonus rummy, new rummy app 2026, all rummy app list, rummy game download, live withdrawal proof rummy, download all rummy downloads, trending rummy games` }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonicalUrl }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: `${app.name} Download APK - Get ${app.bonus} Signup Bonus | All Rummy Apps 2026` }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: `Download ${app.name} APK officially. Get ${app.bonus} bonus on signup. Min withdrawal ${app.minWithdrawal}.` }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonicalUrl }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": app.name,
        "url": canonicalUrl,
        "operatingSystem": "Android, iOS",
        "applicationCategory": "GameApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": app.name === "Rummy Gold" ? "4.7" : "4.8",
          "ratingCount": app.name === "Rummy Gold" ? "18450" : app.downloads.replace(/[^0-9]/g, "") || "18450"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      }) }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AppDetailPage.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-[#1e293b] border-b border-white/5 sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "p-2 hover:bg-white/5 rounded-full transition-colors", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-6 h-6" }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:opacity-90 transition-opacity", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-brand-primary truncate max-w-[200px] sm:max-w-none m-0", children: [
        app.name,
        " - Download APK & Play"
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "w-10" }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AppDetailPage.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/AppDetailPage.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-6xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" }, void 0, false, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative flex flex-col sm:flex-row items-center gap-8", children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: "relative group",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-4 bg-brand-primary/20 blur-xl group-hover:bg-brand-primary/30 transition-all rounded-full" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 109,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: app.iconUrl,
                    alt: app.name,
                    className: "w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] relative shadow-2xl border-2 border-white/10",
                    referrerPolicy: "no-referrer"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/AppDetailPage.tsx",
                    lineNumber: 110,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 104,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center sm:text-left", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center sm:justify-start gap-2 mb-4", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-brand-primary/30", children: app.category }, void 0, false, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 120,
                columnNumber: 17
              }, this),
              app.isTrending && /* @__PURE__ */ jsxDEV("span", { className: "bg-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-orange-500/30", children: "Trending" }, void 0, false, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none italic uppercase", children: app.name }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 129,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center sm:justify-start items-center gap-6 text-white/60 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4 text-brand-primary" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 134,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: [
                  app.downloads,
                  " Downloads"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 135,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 133,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-yellow-400", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current" }, i, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 140,
                  columnNumber: 23
                }, this)) }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 138,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: "5.0 Rating" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 143,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 132,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: effectiveDownloadLink,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-3 w-full bg-brand-primary text-black py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)]",
              children: [
                /* @__PURE__ */ jsxDEV(Download, { className: "w-6 h-6 stroke-[3]" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 156,
                  columnNumber: 15
                }, this),
                "Download APK Now"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 150,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-center text-white/40 text-[10px] mt-4 font-bold uppercase tracking-widest", children: "Safe & Secure Download • Direct APK Link" }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 159,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8", children: [
        { label: "Signup Bonus", value: app.bonus, icon: Zap },
        { label: "Min Withdrawal", value: app.minWithdrawal, icon: Trophy },
        { label: "App Size", value: "35 MB", icon: Smartphone },
        { label: "Security", value: "Verified", icon: ShieldCheck }
      ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b] p-4 rounded-2xl border border-white/5 text-center", children: [
        /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-brand-primary mx-auto mb-2" }, void 0, false, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1", children: item.label }, void 0, false, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-lg font-black text-white italic", children: item.value }, void 0, false, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxDEV(Trophy, { className: "w-6 h-6 text-brand-primary animate-bounce shrink-0" }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl sm:text-2xl font-black uppercase italic tracking-tight text-white m-0", children: "Top Recommended Apps" }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 185,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: RUMMY_APPS.filter((item) => item.id !== app.id).slice(0, 8).map((item) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: item.iconUrl,
                alt: item.name,
                className: "w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 194,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors truncate m-0", children: item.name }, void 0, false, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 201,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-bold text-slate-400 mt-0.5 whitespace-nowrap", children: [
                "Bonus: ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary-light font-black", children: item.bonus }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 205,
                  columnNumber: 30
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 204,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-bold text-slate-500 whitespace-nowrap", children: [
                "Min. Withdraw: ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-white italic", children: item.minWithdrawal }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 208,
                  columnNumber: 38
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 207,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 200,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: item.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(item.name.replace(/\s+/g, "-"))}`,
              className: "px-3 py-2 bg-brand-primary text-black text-[9px] font-black uppercase tracking-wider rounded-lg hover:scale-105 active:scale-95 transition-all shrink-0 text-center flex items-center gap-1 ml-2",
              children: [
                /* @__PURE__ */ jsxDEV(Download, { className: "w-3 h-3 stroke-[2.5]" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 217,
                  columnNumber: 19
                }, this),
                "Get"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 213,
              columnNumber: 17
            },
            this
          )
        ] }, item.id, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 text-center", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-[9px] font-black uppercase tracking-widest text-brand-primary mb-1", children: "⚡ Instant Cashout ⚡" }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/55 font-semibold", children: "All recommended apps are verified, secure, and offer direct UPI withdrawals." }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 236,
              columnNumber: 17
            }, this),
            "1. Complete Overview of ",
            app.name
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 235,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "The digital mobile gaming landscape in India has witnessed an extraordinary revolution over recent years, and at the absolute forefront of this card-gaming movement stands ",
              /* @__PURE__ */ jsxDEV("strong", { children: app.name }, void 0, false, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 241,
                columnNumber: 191
              }, this),
              ". Highly requested by strategy gaming enthusiasts and casual players alike, this premium platform is meticulously engineered to provide an elite, low-latency gaming environment. By combining premium visual designs with a highly secure multi-layer backend, ",
              app.name,
              " guarantees that every card shuffle is completely randomized and safe from external interference."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "With an active community exceeding ",
              app.downloads,
              " downloads, you never have to experience empty game lobbies or wait extensively to find active players. Whether you prefer fast 2-player quick-matches or long tournaments involving thousands of players, the lobbies run 24 hours a day, 7 days a week. For new users, joining the community comes with an exciting immediate incentive: a welcome signup bonus of ",
              app.bonus,
              " credited directly upon mobile number verification. This is a perfect starter kit to test cash tables, familiarize yourself with game rules, and develop winning card-melding plans without risking your own initial capital."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this),
            "2. Direct Download & Installation Manual"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 251,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Because advanced cash skill-based games are highly tailored, installing the game via a direct APK file is the recommended industry method for optimal security and real-time updates. The installation package is completely optimized, requiring approximately 35 MB of local space to ensure ultra-smooth performance even on modest devices." }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 256,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-black/20 rounded-xl p-5 border border-white/5 space-y-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-brand-primary font-black", children: "01." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 261,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/80", children: [
                  /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "Fetch the Installer:" }, void 0, false, {
                    fileName: "/app/applet/src/components/AppDetailPage.tsx",
                    lineNumber: 262,
                    columnNumber: 58
                  }, this),
                  ' Click the prominent direct "Download APK Now" button found on this page to securely download the authentic ',
                  app.name,
                  " package."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 262,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 260,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-brand-primary font-black", children: "02." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 265,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/80", children: [
                  /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "Enable Source Approvals:" }, void 0, false, {
                    fileName: "/app/applet/src/components/AppDetailPage.tsx",
                    lineNumber: 266,
                    columnNumber: 58
                  }, this),
                  ' Go to settings on your Android device, tap "Security" or "Apps & Notifications", and enable "Install from Unknown Sources" or "Install Unknown Apps" for your web browser or file explorer.'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 266,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 264,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-brand-primary font-black", children: "03." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 269,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/80", children: [
                  /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "Execute Installation:" }, void 0, false, {
                    fileName: "/app/applet/src/components/AppDetailPage.tsx",
                    lineNumber: 270,
                    columnNumber: 58
                  }, this),
                  ' Locate the retrieved package in your "Downloads" directory, tap it, and click "Install". The system will process everything securely within seconds.'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 270,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 268,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-brand-primary font-black", children: "04." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 273,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/80", children: [
                  /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "Launch the Lobby:" }, void 0, false, {
                    fileName: "/app/applet/src/components/AppDetailPage.tsx",
                    lineNumber: 274,
                    columnNumber: 58
                  }, this),
                  " Open the newly appeared icon, grant standard network permissions, and prepare to enter the premium visual dashboard."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 274,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 272,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 259,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            "3. Claiming Your ",
            app.bonus,
            " Free Register Bonus"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "The welcome bonus is highly valuable because it provides a fully funded test drive of the actual cash rooms. In order to keep your private wallet safe and fulfill legal gaming guidelines, your account must be registered using a valid mobile phone number." }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 287,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "To secure your bonus, open the newly installed ",
              app.name,
              ' and choose the "Register Account" or "Bind Mobile" menu. Type in your standard ten-digit mobile number, choose an active alphanumeric password to shield your future chips, and press "Send OTP". You will quickly receive a secure 4-digit or 6-digit confirmation code via standard SMS. Enter this code into the active input box to bind your device permanently. The second verification completes, the system instantly deposits the ',
              app.bonus,
              " signup bonus straight into your playable virtual wallet balance!"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 290,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 286,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 281,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 299,
              columnNumber: 17
            }, this),
            "4. Rummy Varieties & Special Lobby Formats"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "An exceptional advantage of playing ",
              app.name,
              " is the sheer volume of games available in a single client interface. Players are never tied to a single play style, allowing you to cycle through multiple dynamic variants:"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 303,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 mt-2", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "bg-black/10 p-4 rounded-xl border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-primary uppercase italic block mb-1", children: "Points Rummy (The Quick Action)" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 308,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/70", children: "Perfect for fast sessions, this mode assigns a fixed point rate to every deal. Melding your 13 cards with low points decides the winner quickly, providing fast turnover values." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 309,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 307,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "bg-black/10 p-4 rounded-xl border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-primary uppercase italic block mb-1", children: "Pool Rummy (101 & 201)" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 312,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/70", children: "A classic, high-endurance test. Any player who crosses the 101 or 201 point threshold is immediately eliminated. Long-range patience and master logical maneuvers determine who claims the entire prize pool." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 313,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 311,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "bg-black/10 p-4 rounded-xl border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-primary uppercase italic block mb-1", children: "Deals Rummy (Set Matches)" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 316,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/70", children: "This format distributes equal chips and plays over a predefined number of deals. At the end of the deal rounds, the player with the most chips takes the crown." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 317,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 315,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "bg-black/10 p-4 rounded-xl border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-primary uppercase italic block mb-1", children: "Highly Engaging Casual Games" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 320,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/70", children: "Looking for lightning fast predictions? Take a visual detour and explore secondary titles such as Teen Patti, Dragon vs Tiger, Andar Bahar, or Car Roulette with immersive lighting effects." }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 321,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 319,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 306,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 330,
              columnNumber: 17
            }, this),
            "5. Fund Management & Withdrawal Procedures"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 329,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Adding funds to access high-tier VIP tournaments is smooth and modern. By joining hands with India's primary direct payment structures, ",
              app.name,
              " lets you configure quick deposits using any UPI platform (Google Pay, PhonePe, Paytm, BHIM), NetBanking, or Bank Cards. Standard encryption processes check your funds instantly, and they normally reflect in your dashboard wallet in less than five seconds."
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 334,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Redeeming your accumulated card winnings is equally streamlined. The platform maintains a direct-to-bank and direct-to-UPI extraction structure. The minimum withdrawal limit is an accessible ",
              /* @__PURE__ */ jsxDEV("strong", { children: app.minWithdrawal }, void 0, false, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 338,
                columnNumber: 210
              }, this),
              `, meaning you don't need huge balances to enjoy real payouts. Simply tap the "Withdraw/Wallet" button, enter your preferred UPI credentials or bank routing details, specify the amount, and submit. The platform uses instant clearing channels so that withdrawals are safely processed and arrive in your actual bank account within 10 to 30 minutes!`
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 337,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 333,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-[#1e293b] p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 346,
              columnNumber: 17
            }, this),
            "6. Champion Level Tips & Strategies"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 345,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Card gaming requires analytical observation, logical thinking, and active mental notes. Master players rely on critical strategies to continuously edge out opponents on active tables:" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 350,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4 mt-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-black text-brand-primary uppercase italic block mb-1", children: "Set Pure Sequences First" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 355,
                  columnNumber: 21
                }, this),
                "Identify sequences right away. Without a pure sequence (at least three consecutive cards of the same suit), your remaining cards are counted fully with no discounts, incurring heavy point losses."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 354,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-black text-brand-primary uppercase italic block mb-1", children: "Discard High-Point cards" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 359,
                  columnNumber: 21
                }, this),
                "Kings, Queens, Jacks, and Tens carry a heavy weight of 10 points each. In unfavorable matches, try to discard these high-point cards early if they can't be used, successfully hedging against negative outcomes."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 358,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-black text-brand-primary uppercase italic block mb-1", children: "Track Competitor Discards" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 363,
                  columnNumber: 21
                }, this),
                "Watch what your opponents discard or pick from the open stack. This allows you to deduce which card groups they are holding, helping you hold back critical missing cards they desperately need to declare."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 362,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-black/10 rounded-xl border border-[#2e3e56] text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-black text-brand-primary uppercase italic block mb-1", children: "Rely on Early Drops" }, void 0, false, {
                  fileName: "/app/applet/src/components/AppDetailPage.tsx",
                  lineNumber: 367,
                  columnNumber: 21
                }, this),
                "A critical secret to saving money over long periods is knowing when to drop. An initial drop costs a tiny fraction of total negative points, protecting your wallet so you can thrive inside high-yielding hands later."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AppDetailPage.tsx",
                lineNumber: 366,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 353,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 349,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 344,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase italic mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-8 bg-brand-primary rounded-full" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, this),
            "7. Technical Fair Play & Security Certification"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: /* @__PURE__ */ jsxDEV("p", { children: [
            "Security and transparency are paramount when dealing with mobile skill gaming. ",
            app.name,
            " is licensed and operates a highly sophisticated Random Number Generator (RNG) engine, regularly verified by leading global third-party testing labs. Shuffling, dealing, drop values, and jokers are randomized on a millisecond level to guarantee a level playing field. Player accounts are protected with modern encryption layers so deposit transactions are isolated and fully guarded."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 381,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 380,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 375,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "bg-red-500/10 border border-red-500/20 rounded-3xl p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-black uppercase italic text-red-400 mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this),
            "8. Responsible Gaming Policy"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 389,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-400/80 leading-relaxed", children: [
            "Playing ",
            /* @__PURE__ */ jsxDEV("strong", { children: app.name }, void 0, false, {
              fileName: "/app/applet/src/components/AppDetailPage.tsx",
              lineNumber: 394,
              columnNumber: 25
            }, this),
            " involves an element of financial risk and may lead to addictive behavior under persistent play. Players must be aged 18 and above, and fully comply with state and local gaming regulations. We highly advocate for setting fixed play budgets, and enjoying cards strictly as recreational exercises rather than professional income sources."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 393,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AppDetailPage.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AppDetailPage.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "sm:hidden fixed bottom-6 left-4 right-4 z-50", children: /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: effectiveDownloadLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center justify-center gap-3 w-full bg-brand-primary text-black py-4 rounded-xl font-black text-lg uppercase tracking-widest shadow-2xl",
        children: [
          /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5 stroke-[3]" }, void 0, false, {
            fileName: "/app/applet/src/components/AppDetailPage.tsx",
            lineNumber: 409,
            columnNumber: 11
          }, this),
          "Download App"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/AppDetailPage.tsx",
        lineNumber: 403,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/AppDetailPage.tsx",
      lineNumber: 402,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/AppDetailPage.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function DynamicUttamPage({ idOverride }) {
  const { pathname } = useLocation();
  const app = RUMMY_APPS.find((a) => a.id === "jungle-haan");
  let idValue = idOverride;
  if (!idValue) {
    const pathMatch = pathname.match(/\/uttam(\d+)/);
    idValue = pathMatch ? pathMatch[1] : null;
  }
  let redirectUrl = "https://www.junglehaan.vip/share/6IOe3xy=1538";
  if (idValue) {
    if (idValue === "1" || idValue === "1538") {
      redirectUrl = "https://www.junglehaan.vip/share/6IOe3xy=1538";
    } else {
      redirectUrl = `https://www.junglehaan.vip/share/6IOe3xy=${idValue}`;
    }
  }
  useEffect(() => {
    window.location.href = redirectUrl;
  }, [redirectUrl]);
  if (!app) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#0f172a] text-white pb-20", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: `${app.name} - Redirecting...` }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: `Download ${app.name} APK officially. Redirecting to official site.` }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-[#1e293b] border-b border-white/5 sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "p-2 hover:bg-white/5 rounded-full transition-colors", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-6 h-6" }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-lg font-black uppercase italic tracking-wider text-brand-primary truncate max-w-[200px] sm:max-w-none", children: app.name }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "w-10" }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxDEV("p", { className: "text-brand-primary font-black uppercase tracking-widest text-sm animate-pulse", children: "Redirecting to official website..." }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden mb-8 opacity-50", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" }, void 0, false, {
          fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative flex flex-col sm:flex-row items-center gap-8", children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: "relative group",
              children: /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: app.iconUrl,
                  alt: app.name,
                  className: "w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] relative shadow-2xl border-2 border-white/10"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
                  lineNumber: 73,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
              lineNumber: 68,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-center sm:text-left", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none italic uppercase", children: app.name }, void 0, false, {
              fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center sm:justify-start items-center gap-6 text-white/60 text-sm", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4 text-brand-primary" }, void 0, false, {
                fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
                lineNumber: 86,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-bold", children: [
                app.downloads,
                " Downloads"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
                lineNumber: 87,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
              lineNumber: 85,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-8 opacity-50", children: /* @__PURE__ */ jsxDEV("section", { className: "bg-[#1e293b] rounded-3xl p-6 sm:p-8 border border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-white/60 text-sm italic", children: [
        "If you are not redirected within 5 seconds, ",
        /* @__PURE__ */ jsxDEV("a", { href: redirectUrl, className: "text-brand-primary underline font-bold", children: "click here" }, void 0, false, {
          fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
          lineNumber: 98,
          columnNumber: 59
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/DynamicUttamPage.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
const RummyBlogPage = () => {
  const topGames = RUMMY_APPS.filter((app) => ["jungle-haan", "rummy-boss", "rummy-wealth", "rummy-noble"].includes(app.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "All Rummy App List 2026 - Download Best Rummy All Apk & Get Bonus" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Ultimate extensive guide to All Rummy Apps 2026. Get the complete Rummy All Apk download list. Learn how to get Rummy 51 bonus, new rummy app today updates and more." }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "All Rummy Apps, Rummy All Apps, Rummy All Apk Download, rummy bonus apps, rummy 51 bonus, new rummy app today, Teen Patti Game, Yono Rummy All Games, free signup bonus rummy, new rummy app 2026, all rummy app list" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://allrummybonus.com/rummyblog1" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary border-b border-brand-primary/30 py-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: "/images/all_rummy_1to1_logo_1779225745385.png",
          alt: "Bonus Rummy Apps Logo",
          className: "h-10 w-auto object-contain rounded-lg shadow-md border border-brand-primary/20",
          referrerPolicy: "no-referrer"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-white", children: "All Rummy Bonus Apps" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxDEV(
        motion.article,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "bg-[#1e293b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 sm:h-80 bg-gradient-to-br from-brand-secondary to-bg-dark flex items-center justify-center p-8", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/40" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 text-center", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block", children: "Latest Guide 2026 - नई गाइड" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 54,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl sm:text-4xl font-black uppercase italic leading-tight text-white mb-4 drop-shadow-xl", children: [
                  "The Ultimate Guide to ",
                  /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "All Rummy Apps" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 58,
                    columnNumber: 39
                  }, void 0),
                  " List 2026: सभी रमी ऐप्स की लिस्ट"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 57,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-4 text-xs text-white/60 font-bold uppercase tracking-widest", children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "By Admin" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "w-1 h-1 bg-white/20 rounded-full" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: "May 19, 2026" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 60,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 53,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlogPage.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-10 prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-a:text-brand-primary hover:prose-a:text-brand-primary-light prose-strong:text-brand-primary-light", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium text-white/90", children: [
                "Kya aap sabse best ",
                /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy App List" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 72,
                  columnNumber: 34
                }, void 0),
                " dhund rahe hain? Look no further! 2026 mein online Rummy ki duniya badal chuki hai. Naye apps, bade bonuses, aur fast withdrawals ke saath ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apk download" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 72,
                  columnNumber: 209
                }, void 0),
                " ki complete list hum yahan provide kar rahe hain. Is comprehensive guide mein hum rami khelne ke tarike, bonus claim karne ke rules, aur pure safe downloads details ke baare mein baat karenge. Humara maqsad aapko digital rummy ke sabhi pehluon se rubaru karana hai taaki aap safely khel sakein aur behtareen munafa kama sakein."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "history-rummy", children: "History of Online Rummy in India - भारत में रमी का इतिहास और विकास" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: [
                "Rummy India ka ek bahut purana aur sanskritik game hai. Pehle log diwali ya family gatherings mein ise physically cards ke saath khelte thhe, lekin digital revolution aur high-speed internet ke baad, ",
                /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy Apps" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 77,
                  columnNumber: 215
                }, void 0),
                ' ne ise har ghar tak pahuncha diya hai. Supreme Court of India ne online Rummy ko "Game of Skill" ka darja diya hai, jisse iski legality bilkul clear ho gayi hai. Online formats mein digital shuffling systems aur random number generators use kiye jaate hain, jiski wajah se online rummy aur bhi transparent aur fair ban gayi hai. Aaj kal log ise sirf doston ke sath hi nahi balki bade national tournaments mein professional stars ke taur par khelte hain jahan lakhs ke cash prize pools hote hain.'
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 76,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "why-all-rummy-apps", children: "Why People Love All Rummy Apps? - रमी ऐप्स क्यों पसंद हैं?" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 80,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: [
                "India mein ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apps" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 82,
                  columnNumber: 26
                }, void 0),
                " ka craze bahut badh gaya hai. Iska sabse bada reason hai ki aap apni skills dikha kar ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Real Cash" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 82,
                  columnNumber: 144
                }, void 0),
                " jeet sakte hain. Local clubs ya casinos jaane ki zaroorat nahi, ab aapke pocket mein hi pura game hai through ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apk" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 82,
                  columnNumber: 281
                }, void 0),
                ". Iske sath hi, online apps par user interfaces itne advanced ho chuke hain ki aapko bilkul real-time table par baithne ka ehsaas hota hai."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Iske alawa, online platforms par aapko kayi tarah ke variants milte hain jaise Points Rummy, Pool Rummy, aur Deals Rummy jo offline physical card game mein possible nahi thhe. Aap kisi bhi samay, chahe travel karte waqt ho ya office break mein, seconds ke andar live matches shuru kar sakte hain aur fast payouts le sakte hain." }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 84,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "my-10 bg-gradient-to-br from-bg-secondary to-bg-dark rounded-3xl p-6 border border-brand-primary/20 shadow-xl", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase italic tracking-wider text-white m-0", children: "🔥 Top Recommended Rummy Games to Download - बेहतरीन गेम्स लिस्ट" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 90,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/60 mb-6", children: "Ye 2026 ke sabse zyada downloaded aur verify kiye hue and trusted Rummy applications hain. Inhe abhi download karke free sign-up bonus claim karein:" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 96,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none", children: topGames.map((app) => /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-dark/80 rounded-2xl p-4 border border-white/5 flex gap-4 items-center justify-between hover:border-brand-primary/30 transition-all", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: [
                    /* @__PURE__ */ jsxDEV("img", { src: app.iconUrl, alt: app.name, className: "w-14 h-14 rounded-xl object-cover border border-white/10", referrerPolicy: "no-referrer" }, void 0, false, {
                      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                      lineNumber: 104,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black text-white m-0 uppercase tracking-tight", children: app.name }, void 0, false, {
                        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-[10px] text-green-400 font-bold m-0 mt-1", children: [
                        "Bonus: ",
                        app.bonus
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                        lineNumber: 107,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-white/40 font-bold m-0", children: [
                        "Min. Withdraw: ",
                        app.minWithdrawal
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                        lineNumber: 110,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                      lineNumber: 105,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 103,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(
                    Link,
                    {
                      to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                      className: "bg-brand-primary text-black font-black uppercase text-[10px] px-3.5 py-2.5 rounded-lg tracking-widest flex items-center gap-1 hover:scale-105 active:scale-95 transition-all",
                      children: [
                        /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                          lineNumber: 119,
                          columnNumber: 23
                        }, void 0),
                        "GET"
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                      lineNumber: 115,
                      columnNumber: 21
                    },
                    void 0
                  )
                ] }, app.id, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 102,
                  columnNumber: 19
                }, void 0)) }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 100,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 89,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-dark/50 p-6 rounded-2xl border border-white/5 my-8", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "flex items-center gap-2 mt-0", children: [
                  /* @__PURE__ */ jsxDEV(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, void 0),
                  "Top Benefits of New Rummy Apps - खास फायदे"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 128,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("ul", { className: "list-none p-0 space-y-3", children: [
                  "Bada Signup Bonus (₹41 to ₹51 Free): Bina kisi deposit ke khelne ka mauka directly.",
                  "Instant Withdrawal direct Bank/UPI mein: Aapka jeeta hua paisa 2 minute mein bank account mein transfer.",
                  "Multiple Games (Dragon vs Tiger, Teen Patti, etc.): Ek hi app ke andar 20+ exciting variations.",
                  "24/7 Dedicated Customer Support: Koi bhi balance issue ho, solution turant Telegram ya Whatsapp par.",
                  "100% Safe and Secure Payment Method: Fully encrypted gateway support.",
                  "Refer and Earn Scheme: Doston ko link refer karke lifetime commissions aur referral cash kamaein."
                ].map((item, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-white/70", children: [
                  /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4 text-brand-primary mt-0.5 shrink-0" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                  }, void 0),
                  item
                ] }, index, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 141,
                  columnNumber: 19
                }, void 0)) }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 132,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 127,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "rummy-51-bonus", children: "Understanding the Rummy 51 Bonus - ₹51 बोनस कैसे मिलेगा?" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 149,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: [
                "Aaj kal online gaming landscape mein har user ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Rummy 51 Bonus" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 151,
                  columnNumber: 61
                }, void 0),
                " ke baare mein search kar raha hai. Rummy Wealth, Rummy Noble, aur Rummy Ares jaise iconic apps aapko mobile number bind karte hi ₹51 ka guaranteed free cash dete hain. Is free bonus se aap real cash tables par cash games khel sakte hain."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 150,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Lekin humesha dhyan rakhein, ye signup bonus directly withdrawable nahi hota. Iske badle aapko game play ke rules ke certain wagering bounds clear karne hote hain. For example, agar aapko registration par ₹51 bonus mila hai, toh aapko lagbhag half or equal wagering turnover levels poore karne honge. Isliye hamesha play button dabane se pehle game app ke legal conditions padh len." }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 153,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "how-to-download", children: "How to Safely Download? - सुरक्षित डाउनलोड कैसे करें?" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Real money skill apps download karte waqt aur personal profile set up karte waqt humesha safety maintain karni chahiye. In security measures ko carefully follow karein:" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 158,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("ol", { children: [
                /* @__PURE__ */ jsxDEV("li", { children: [
                  "Humesha trusted sources jaise ",
                  /* @__PURE__ */ jsxDEV("strong", { children: "allrummybonus.com" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 162,
                    columnNumber: 49
                  }, void 0),
                  " use karein jo 100% organic verified links deliver karte hain. Play Store aksar in real cash gaming platforms ko host nahi karta security policies aur local legal system restrictions ki vajah se."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 162,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("li", { children: 'Sarf download complete karne ke baad, phone setting me jaakar "Install from Unknown Sources" option activate karein.' }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 163,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("li", { children: "Direct downloading page par official identity verify karein. Duplicate phishing software se safe rahein kyunki wo user transactions exploit kar sakte hain." }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 164,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("li", { children: "Size verify karein, ideal apps hamesha 30 to 70 MB size scale parameters ke standard bounds me hi build hote hain." }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 165,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 161,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "my-12 text-center", children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/",
                  className: "inline-flex items-center gap-3 bg-brand-primary text-black font-black px-10 py-5 rounded-full shadow-2xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest",
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5" }, void 0, false, {
                      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                      lineNumber: 173,
                      columnNumber: 17
                    }, void 0),
                    "Go to Main List - सभी रमी ऐप्स देखें"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 169,
                  columnNumber: 15
                },
                void 0
              ) }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "advanced-strategies", children: "Professional Rummy Strategies - जीतने के बेहतरीन गुप्त सीक्रेट्स" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Indian Rummy sirf luck ya kismat ke bharose nahi kheli jati, ye purely ek mental skills ki skill warfare hai. Agar aap All Rummy apps list me topper banna chahte hain, toh ye tips follow karein:" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 179,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { children: [
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("strong", { children: "Prioritize Pure Sequence:" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 183,
                    columnNumber: 19
                  }, void 0),
                  " Ek proper pure sequence ke bina (same brand color suits sequence, e.g., 5-6-7 of club), aap valid and winning declaration nahi kar sakte. Match shuru hote hi ispe focus karein."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 183,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("strong", { children: "Discard High Value Cards:" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 184,
                    columnNumber: 19
                  }, void 0),
                  " Kings, Queens, Aces aur Jacks high points carry karte hain. Agar ye sets me form nahi ho rahe, to inhein early discard karein taaki loss points low rahein."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 184,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("strong", { children: "Observe Opponent Moves:" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 185,
                    columnNumber: 19
                  }, void 0),
                  " Dusra player pile se kaunse card select kar raha hai aur kaunse discard, ispe close and strict monitoring lagayein taaki unki strategy counter ki ja sake."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 185,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("strong", { children: "Smart Joker Usage:" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 186,
                    columnNumber: 19
                  }, void 0),
                  " Joker cards are lifesavers. Inhein long value sequence setups complete karne ya blocks join karne me efficiently use karein."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 186,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 182,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "faq", children: "Frequent Asked Questions (FAQ) - सामान्य बुनियादी सवाल" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 189,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/10 pb-4", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-brand-primary text-base mb-2 italic", children: "1. Kya online real cash rummy legal hai India mein?" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 192,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "Haan, Honourable Supreme Court of India ke legal parameters ke anusar, rummy pure mathematical logic aur mental precision pe based skill activity hai, jisse iska status legal consider hota hai. Halanki, Telangana, Andhra Pradesh aur Assam jaise states me limits ho sakti hain." }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 193,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 191,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/10 pb-4", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-brand-primary text-base mb-2 italic", children: "2. Rummy 51 signing bonus directly transfer kiya ja sakta hai?" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 196,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "Nahi, registration ke immediately baad milne wala bonus matches play karne ke liye diya jata hai. Jab aap matches jeet kar threshold clear kar lete hain tab balance pay out safe ho jata hai." }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 195,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/10 pb-4", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-brand-primary text-base mb-2 italic", children: "3. Deposits handle karne ka sabse safe option kya hai?" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 200,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "UPI (Unified Payments Interface) payments integration is instant, safe, aur lightning-fast, isliye iska processing experience smooth hai aur direct payment updates ho jate hain." }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 199,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 190,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { id: "conclusion", children: "Concluding Thoughts - फाइनल वर्ड" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 205,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: [
                "2026 gaming community ke mutabik ",
                /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy Apps" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 207,
                  columnNumber: 48
                }, void 0),
                " ka market kaafi robust aur dynamic ho gaya hai. Humari experts team har ek ",
                /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apk" }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                  lineNumber: 207,
                  columnNumber: 155
                }, void 0),
                " ki safety, testing performance parameters, checkout speeds aur genuine customer interaction status verify karti hai, tabhi use list me update karti hai."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 206,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { children: "Lekin humesha strictly guidelines keep karein: gaming ko as an entertainment and hobby scale hi design karein. Gusse me aakar, pressure me aakar ya udhaar lekar balance load na karein. Play and win with absolute logic and wisdom. Claim your signup incentives safely today!" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 209,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlogPage.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-10 bg-black/20 border-t border-white/5", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black uppercase tracking-widest text-white/40 mb-4", children: "Related Search Terms" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 217,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: [
                "All Rummy Mini",
                "Teen Patti Joy",
                "Rummy Modern Apk",
                "Dragon vs Tiger App",
                "Rummy 51 Bonus List",
                "New Teen Patti App",
                "Best Rummy App 2026"
              ].map((tag, i) => /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold uppercase tracking-wider text-white/30 px-3 py-1 bg-white/5 rounded-md border border-white/10 hover:border-brand-primary/30 transition-colors", children: tag }, i, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 223,
                columnNumber: 17
              }, void 0)) }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlogPage.tsx",
                lineNumber: 218,
                columnNumber: 13
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlogPage.tsx",
              lineNumber: 216,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 44,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "mt-12 p-8 bg-red-500/5 border border-red-500/10 rounded-2xl text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-1 bg-red-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded", children: "18+ Warning" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 234,
          columnNumber: 14
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 233,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-white/40 text-xs italic leading-relaxed font-bold", children: "These games involve an element of financial risk and may be addictive. Please play responsibly and at your own risk. This article is for informational purposes only." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("footer", { className: "py-8 bg-bg-secondary border-t border-white/5 text-center px-4", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/30 uppercase font-black tracking-[0.2em]", children: "© 2026 rummyBonusapps.com • All Rummy App Guide" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex justify-center gap-6 text-[10px] text-brand-primary font-black uppercase", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "Home" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 250,
          columnNumber: 12
        }, void 0),
        /* @__PURE__ */ jsxDEV("a", { href: "https://t.me/tech_apex", target: "_blank", rel: "noopener noreferrer", className: "hover:underline", children: "Telegram" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlogPage.tsx",
          lineNumber: 251,
          columnNumber: 12
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlogPage.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlogPage.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/RummyBlogPage.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, void 0);
};
const RummyBlog2 = () => {
  const newGames = RUMMY_APPS.filter((app) => ["rummy-mars", "yono-rummy", "rummy-leader", "game-rummy"].includes(app.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "New Rummy App Today 2026 - Latest Rummy All App List May Update" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Looking for a new rummy app today? Check our daily extensive updated list of All Rummy Apps launched in May 2026. Get free signup bonus and fast withdrawals." }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "new rummy app today, latest rummy app, all rummy app list 2026, rummy bonus today, new rummy bonus apk, best rummy apps may 2026" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://allrummybonus.com/rummyblog2" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary border-b border-brand-primary/30 py-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("img", { src: "/images/all_rummy_1to1_logo_1779225745385.png", alt: "Logo", className: "h-10 w-auto object-contain rounded-lg shadow-md border border-brand-primary/20", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-white", children: "All Rummy Bonus Apps" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxDEV(motion.article, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "bg-[#1e293b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 sm:h-80 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/rummy_hero_banner_1779265218620.png",
            alt: "New Rummy App Today",
            className: "w-full h-full object-cover opacity-60"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-8 left-8 right-8 text-center animate-pulse-slow", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2 bg-brand-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full", children: [
            /* @__PURE__ */ jsxDEV(RefreshCw, { className: "w-3 h-3 animate-spin" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 48,
              columnNumber: 19
            }, void 0),
            "Updated Today - आज का सबसे नया अपडेट"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl sm:text-5xl font-black uppercase italic text-white drop-shadow-2xl", children: [
            "New ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "Rummy App" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 53,
              columnNumber: 21
            }, void 0),
            " Today: आज का नया रमी ऐप"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-10 prose prose-invert max-w-none prose-p:text-white/70 prose-headings:text-white prose-a:text-brand-primary", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl italic font-bold text-brand-primary-light", children: "Latest extensive releases on every new rummy app launched in India. Hum har naye launch ko minute-by-minute track karte hain taaki aapko sabse behtareen early sign-up benefits aur highest welcome bonus mil sake." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "why-new-app", children: "Why Search for a New Rummy App Today? - नया रमी ऐप डाउनलोड करने के फायदे" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Online card gaming space bahut fast speed se expand ho raha hai aur almost daily basis par nirmaan ho rahe hain behtareen platforms. Ab sawal ye aata hai ki jab log purane popular platforms par satisfied hain, to fir unhein ",
          /* @__PURE__ */ jsxDEV("strong", { children: "New Rummy App Today" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 65,
            columnNumber: 239
          }, void 0),
          " dhundhne ki kya aavashyakta hai? Iska sabse seedha aur sateek javab hai—Heavy Promos aur User Acquisition policies!"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Har naye developers chahte hain ki unka app jaldi se download ho aur market me unka ek bada space ban sake. Is user growth ko boost karne ke liye, naye apps initial 1 to 3 months ke doran massive sign-up bonuses, highest referral rewards, aur minimum processing margins offer karte hain. Isi phase me players and smart gamers sabse badi loot earn kar sakte hain. Iske alawa naye server architectures par matchmaking systems super-fast hoti hain jo lag-free execution aur optimal multi-game performance ensure karti hain." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 my-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-dark/50 p-6 rounded-2xl border border-brand-primary/10", children: [
            /* @__PURE__ */ jsxDEV(Zap, { className: "text-brand-primary mb-2" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-black mt-0 italic", children: "Double Add Cash Bonus - दोगुना कैशबैक" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm m-0", children: "Naye platforms initial deposits par exact matching percentage codes ya double credits rules deploy karte hain, jo players ko extra matches explore karne ka shandar backup dete hain." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-dark/50 p-6 rounded-2xl border border-brand-primary/10", children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "text-brand-primary mb-2" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-black mt-0 italic", children: "Instant VIP Entry - वीआईपी सुविधा" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 79,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm m-0", children: "Loyal users ko reward karne ke liye naye apps bina minimum layout constraints ke low points VIP status provide karte hain, jisse users exclusive access payein." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "how-to-find", children: "How to Identify a Genuine New App - असली और सुरक्षित ऐप की सटीक पहचान कैसे करें?" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Internet par bahut se copycats ya malicious phishing apks bhi spread hote rahte hain jo real cash app ke brand labels copy karte hain. Humein humesha safe and fully verified Rummy app chunne chahiye. Genuine game checks apply karne ke tips niche likhe hain:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Live Customer Support Integration:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, void 0),
            " Ek highly professional app hamesha reliable back-end channels jaise live Telegram support portals, automated Whatsapp bots, aur phone support numbers provide karega."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "RNG Certification verification:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, void 0),
            " Fair games me random shuffling systems are key. Safe system standards verify karne ke liye unka certificate label settings block me display hota hai."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Transaction failure protection:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, void 0),
            " Payments failed checks should be managed by automated refund gateways within 24 hours."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Smooth visual transition:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, void 0),
            " Graphics me consistency aur quality parameters must remain highly optimized."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-6 border border-brand-primary/20 shadow-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase italic tracking-wider text-white m-0", children: "⚡ Latest Launched Apps of the Month - ताज़ा लॉन्च रमी ऐप्स ⚡" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/50 mb-6", children: "Ye naye apps apne premium graphics aur heavy welcome bonuses ke liye is hafte sabse zyada popular hain:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none", children: newGames.map((app) => /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-secondary/80 rounded-2xl p-4 border border-white/5 flex gap-4 items-center justify-between hover:border-brand-primary/20 transition-all", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ jsxDEV("img", { src: app.iconUrl, alt: app.name, className: "w-14 h-14 rounded-xl object-cover border border-white/10", referrerPolicy: "no-referrer" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog2.tsx",
                lineNumber: 111,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black text-white m-0 uppercase tracking-tight", children: app.name }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlog2.tsx",
                  lineNumber: 113,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-brand-primary font-bold m-0 mt-1", children: [
                  "Bonus Offered: ",
                  app.bonus
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog2.tsx",
                  lineNumber: 114,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-white/50 font-bold m-0", children: [
                  "Min. Payout: ",
                  app.minWithdrawal
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog2.tsx",
                  lineNumber: 117,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlog2.tsx",
                lineNumber: 112,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                className: "bg-brand-primary text-black font-black uppercase text-[10px] px-3.5 py-2.5 rounded-lg tracking-widest flex items-center gap-1 hover:scale-105 active:scale-95 transition-all",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlog2.tsx",
                    lineNumber: 126,
                    columnNumber: 23
                  }, void 0),
                  "DOWNLOAD"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/RummyBlog2.tsx",
                lineNumber: 122,
                columnNumber: 21
              },
              void 0
            )
          ] }, app.id, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "technical-requirements", children: "Technical Requirements - क्या चाहिए खेलने के लिए?" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Zyaadatar modular standard Rummy games lightweight engines par develop kiye jaate hain, isliye inhein chalane ke liye kisi heavy premium phone ki aavashyakta nahi hai. Niche iski minimum requirements sheet dekhein:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Android System bounds:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, void 0),
            " Android Operating system version 5.0 (Lollipop) ya usse higher security levels."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "System Memory:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 140,
              columnNumber: 19
            }, void 0),
            " 2GB RAM performs decent, halanki multi-game high speed patterns rendering ke liye 4GB recommend hai."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Free Space:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 141,
              columnNumber: 19
            }, void 0),
            " Min 80MB are required to run cash features smoothly."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Internet connectivity:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, void 0),
            " Stable 3D/4G, LTE ya WiFi, though graphics optimized versions easily run on 3G speeds as well."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "latest-launch", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, void 0),
          "Latest Launch Spotlight: Rummy Mars and Yono Rummy - मुख्य फोकस"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Is financial year ke sabse badhiya update details lists me ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy Mars" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 150,
            columnNumber: 74
          }, void 0),
          " aur ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Yono Rummy" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 150,
            columnNumber: 106
          }, void 0),
          " ne pure benchmarks break kar diye hain. Mobile signup code implement hote hi in apps me instant signup bonus balances release hote hain. Inka security checks layout and firewall structure globally trusted auditing firms se integrated hai, islie bank card processing aur direct UPI checkout limits super swift rehti hain. Yono series me automatic anti-cheat algorithms aur bot-detection mechanisms chalte hain jisse tables matches always honest aur purely logical player experiences guarantee karte hain."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-12 text-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-3 bg-brand-primary text-black font-black px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm", children: [
          /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, void 0),
          "Go to Homepage - मुख्य सूचि देखें"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 154,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "faq-new-apps", children: "New Apps FAQ - ज़रूरी वैज्ञानिक सवाल और निदान" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary italic", children: "Q: Kya naye rummy apps safe hain ya future me band hone ka khatra hota hai?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Safe apps wahi hote hai jinhe authorized developers develop karte hain. Humari team hamesha developer authentication verify karne ke baad hi links humari site par publish karti hai, isliye humari list completely pure aur high-safeguard apps support karti hai." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary italic", children: "Q: Referral and earn balance directly withdraw ho sakta hai?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 167,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Ji haan, naye applications refer systems par multi-level model standard follow karte hain aur unme refer commission instantly UPI wallet section me withdrawable balance ban jata hai bina kisi game performance bound ke." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 168,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary italic", children: "Q: High graphics apps phone hang karte hain?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 171,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Humare listed apps highly-compressed coding parameters par custom designs check share karte hain so ye regular battery-saver devices me bhi zero lag ke sath boot up hote hain." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog2.tsx",
              lineNumber: 172,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog2.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "final-advice", children: "Our Expert Final Advice - आज के लिए हमारी सटीक राय" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Is special portal and page ko humesha browser ke bookmark folder me add karke rakhein. Humari engineering teams daily levels par har naye system update and apps release monitoring perform karti hain taaki fake apps alert report generate karke unhein filtering system se eliminate kiya jaa sake. Action always earns. Early registration offers block up fast, so do not wait, pick an attractive icon and start your game setup today!" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs opacity-50 italic", children: "Disclaimer Statement: Playing skill cash card challenges involves real fiscal transactions. Maintain optimal discipline, control limits, and avoid chasing losses emotionally. This is entirely an informational indexing hub." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog2.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog2.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("footer", { className: "py-8 bg-bg-secondary border-t border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/30 uppercase font-black tracking-[0.2em]", children: "© 2026 allrummybonus.com" }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog2.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/RummyBlog2.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, void 0);
};
const RummyBlog3 = () => {
  const withdrawalGames = RUMMY_APPS.filter((app) => ["yono-rummy", "holy-rummy", "rummy-pride", "lcg-bet"].includes(app.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Top 10 Rummy Apps with ₹51 Bonus - Instant Withdrawal Guide 2026" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Discover the best Rummy Apps offering ₹51 signup bonus. Learn how to withdraw your winnings instantly to UPI or Bank. Complete Rummy All App List 2026 guide." }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "rummy 51 bonus, rummy withdrawal, best rummy apps, rummy with 100 withdrawal, rummy real cash, rummy app list" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://allrummybonus.com/rummyblog3" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary border-b border-brand-primary/30 py-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("img", { src: "/images/all_rummy_1to1_logo_1779225745385.png", alt: "Logo", className: "h-10 w-auto object-contain rounded-lg shadow-md border border-brand-primary/20", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-white", children: "All Rummy Bonus Apps" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxDEV(motion.article, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "bg-[#1e293b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 sm:h-80 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/maha_loot_banner_1779179081106.png",
            alt: "Rummy Bonus Apps",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-block bg-yellow-500 text-black font-black px-4 py-1 rounded-sm skew-x-[-10deg] mb-4", children: "MAHA LOOT 2026 - महा लूट और विथड्रॉल" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl sm:text-6xl font-black uppercase italic text-white leading-none", children: [
            "₹51 ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "Free" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 50,
              columnNumber: 23
            }, void 0),
            " Bonus"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold uppercase tracking-widest mt-4 text-white/80", children: "On Mobile Binding - मोबाइल बाइंड करें और तुरंत पाएं" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-10 prose prose-invert max-w-none prose-p:text-white/70", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-brand-primary flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Gem, { className: "w-6 h-6" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, void 0),
          "The Rummy 51 Bonus Phenomena - रमी ₹51 बोनस का धमाका"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg", children: [
          "2026 mein online gaming ecosystem ki sabse badi sensation ban chuka hai ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy 51 Bonus" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 63,
            columnNumber: 87
          }, void 0),
          " scheme. ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy Noble" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 63,
            columnNumber: 127
          }, void 0),
          ", ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy Modern" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 63,
            columnNumber: 157
          }, void 0),
          ", aur ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy Wealth" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 63,
            columnNumber: 192
          }, void 0),
          " jaise giants ne is custom sign-up trends ko launch kiya tha, jo aaj is industry ka sabse bada player acquisition strategy ban chuka hai. Is behtareen welcome reward ka sabse bada motive ye hai ki players bina apna real money load kiye, real environment me high stakes digital Rummy and tables explore kar sakein."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Par lagbhag 80% gamers start me ek bahut badi galti kar baithte hain—wo app download karte hain, verify and bound status setting configure nahi karte, aur unhein lagta hai ki automatically wallet and profile sections me ₹51 balances update ho jayenge. Asal me, is free welcome amount ko claim karne ke liye mobile profile confirmation and linking (binding) strictly required hai, jiske bina security modules transaction clearance approve nahi karte." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-dark/80 p-8 rounded-3xl border-l-4 border-brand-primary my-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-white mt-0 font-black italic uppercase", children: "How to Claim Your ₹51 Bonus - बोनस सफलतापूर्वक प्राप्त करने के स्टेप्स:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("ol", { className: "m-0 space-y-4", children: [
            /* @__PURE__ */ jsxDEV("li", { children: "Sabse pahle direct verified portals jaise high-speed safe servers download list use karke original Apk setup phone me save karein." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 72,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: "Download verification complete hone par double click karke installation procedures handle karein." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: "App start screen par 'Play as Guest' method switch choose karein dashboard look access karne ke liye." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: "Profile details options dashboard block corner (usually top left click area) explore karein." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: "Niche visible 'Bound' key action call button activate karein apna safe 10-digit mobile number input credentials handle karne ke liye." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 76,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("li", { children: "Strong and unique password create karein, 'Get OTP' button trigger verify confirm click action handle karein. OTP code set verify hone se profile directly bound status active me convert ho jati hai aur bonus instantly wallet ledger update handle ho jata hai!" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 77,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Wallet, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, void 0),
          "Instant Withdrawal: The Ultimate Performance Test - तुरंत विथड्रॉल गाइड"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Matches jeetna cards arrangements logic sikh kar asaan hai, lekin original cash gamer satisfaction tabhi claim hota hai jab aapki wallet winnings direct aapke personal bank details or UPI codes checks parameters standard timing bounds complete karke balance safe mode me drop karein. Humari comprehensive ",
          /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy App List" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 86,
            columnNumber: 320
          }, void 0),
          " me index kiye gaye har ek product me digital integration models deployment levels kafi sound rakha jata hai taaki withdrawals seamless aur fast processing handle karein."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Zyaadatar modular standard apks dual payouts methodologies choose karne ka flexibility allow karte hain, jise commonly users dashboard areas me ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Chips to Bank" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 89,
            columnNumber: 159
          }, void 0),
          " aur ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Chips to UPI" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 89,
            columnNumber: 194
          }, void 0),
          " systems settings blocks ke format me view kar paate hain. Experts and master analysts always guide and support to prefer UPI payments options because UPI address updates are robust, bank details formatting validation are less complex, and payments processing speeds are relatively zero latency."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-6 border border-brand-primary/20 shadow-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Trophy, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase italic tracking-wider text-white m-0", children: "🏆 Fast Withdrawal Verified Apps of the Season - सर्वोत्तम पेमेंट निकासी ऐप्स 🏆" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/50 mb-6", children: "Ye platforms transactions parameters and speeds tests checking boards me hamesha top performer rating score secure karte hain:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none", children: withdrawalGames.map((app) => /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-secondary/90 rounded-2xl p-4 border border-white/5 flex gap-4 items-center justify-between hover:border-brand-primary/30 transition-all", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ jsxDEV("img", { src: app.iconUrl, alt: app.name, className: "w-14 h-14 rounded-xl object-cover border border-white/10", referrerPolicy: "no-referrer" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog3.tsx",
                lineNumber: 108,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black text-white m-0 uppercase tracking-tight", children: app.name }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlog3.tsx",
                  lineNumber: 110,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-green-400 font-bold m-0 mt-1", children: [
                  "Bonus Status: ",
                  app.bonus
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog3.tsx",
                  lineNumber: 111,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-white/50 font-bold m-0", children: [
                  "Verified Cashout: ",
                  app.minWithdrawal
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog3.tsx",
                  lineNumber: 114,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlog3.tsx",
                lineNumber: 109,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 107,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                className: "bg-brand-primary text-black font-black uppercase text-[10px] px-3.5 py-2.5 rounded-lg tracking-widest flex items-center gap-1 hover:scale-105 active:scale-95 transition-all",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlog3.tsx",
                    lineNumber: 123,
                    columnNumber: 23
                  }, void 0),
                  "PAYOUT"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/RummyBlog3.tsx",
                lineNumber: 119,
                columnNumber: 21
              },
              void 0
            )
          ] }, app.id, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-4 my-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Coins, { className: "w-4 h-4 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold font-mono", children: "Minimum Limit: ₹100" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Trophy, { className: "w-4 h-4 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold font-mono", children: "Average Processing Speed: Under 120 Seconds" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "withdrawal-tips", children: "Golden Rules for Seamless Cashouts - विथड्रॉल को निर्बाध बनाने के स्वर्णिम नियम" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Agar aap chahte hain ki aapki real money payments bina kisi delay system checks ya manual auditing blocks ke complete ho jayein, toh in strict measures security standard points rules strictly maintain karein:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Absolute Name Compatibility Matching:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, void 0),
            " Jis bank account or personal card detail me aap credit request post kar rahe hain, uska account holder name profile credentials and phone bound metadata match profile properties perfectly correspond honi chahiye."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Zero Duplicate Device Account creation:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, void 0),
            " Ek hi network environment ya mobile hardware system layers par self-referral or bonus exploits system loops loop holes manipulate na karein. Firewall detection blocks duplicate profiles tracking directly apply bank system levels."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Turnover and Wagering tracking:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, void 0),
            " Dashboard layout system checks parameters look limits verify karein whether actual bonus margins require particular wagers levels completions beforehand."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Avoid Late-Night Processing on Slow Days:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 150,
              columnNumber: 19
            }, void 0),
            " Bank holiday phases me servers processing delayed settings delay processing rates run handle karti hain so week start days or early working hours are perfect schedules for cashouts."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "bonus-faq", children: "Common Questions About ₹51 Bonus & Cashouts - बोनस और निकासी के संबंध में महत्वपूर्ण सवाल" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Kya signing up bonus ₹51 direct bank me wire transfer transfer kiya jaa sakta hai bina gaming played handle kiye?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Bilkul nahi! Real money Rummy servers fair guidelines adhere karte hai jaha anti-money laundering layers system standards keep rehte hain, so players are required first convert incentive bonuses to real cash balance by playing skill games." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Failed transaction errors ke case me recovery steps kya hain?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Failed entries and funds always bounce back securely to system wallet inside 5 to 10 working minutes. Safe measures check apply karein check history parameters dashboard page contact chat support tools to speed resolve." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 161,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 159,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: VIP levels me standard withdrawal limits parameters raise kiya jata hai?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Haan, VIP standard parameters highly prioritized payouts models access provide karte hain jo per transaction threshold and maximum limit parameters levels significantly raise kar dete hain." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog3.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-12 text-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-3 bg-brand-primary text-black font-black px-10 py-5 rounded-full shadow-2xl hover:brightness-110 transition-all uppercase tracking-widest text-sm", children: [
          /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog3.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, void 0),
          "View Main Application List - रमी ऐप्स डाउनलोड लिस्ट"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 170,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs text-white/40 italic", children: "Responsible Gaming Note Statement: Online card matches skill play contain fiscal elements risk structures, isliye balance control aur physical mental discipline set safe patterns operate rules zaroori hain. Enjoy games with purely analytical models!" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog3.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog3.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("footer", { className: "py-8 bg-bg-secondary border-t border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/30 uppercase font-black tracking-[0.2em]", children: "© 2026 allrummybonus.com" }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 184,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog3.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/RummyBlog3.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, void 0);
};
const RummyBlog4 = () => {
  const dragonTigerGames = RUMMY_APPS.filter((app) => ["jungle-haan", "rummy-ares", "rummy-mate", "bappa-rummy"].includes(app.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Dragon vs Tiger Strategy - Win Big in All Rummy Apps 2026" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Master Dragon vs Tiger with our secret winning strategies. Learn the extensive 3x investment rule and how to read patterns. Master the Rummy All Apk games." }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "dragon vs tiger trick, dragon vs tiger strategy, rummy tricks, win money in rummy, dragon tiger pattern, all rummy app games" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://allrummybonus.com/rummyblog4" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary border-b border-brand-primary/30 py-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("img", { src: "/images/all_rummy_1to1_logo_1779225745385.png", alt: "Logo", className: "h-10 w-auto object-contain rounded-lg shadow-md border border-brand-primary/20", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-white", children: "All Rummy Bonus Apps" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxDEV(motion.article, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, className: "bg-[#1e293b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 sm:h-80 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/roz_rummy_banner_1779179099457.png",
            alt: "Dragon vs Tiger Tricks",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-red-600/40 to-blue-600/40 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-6xl font-black uppercase italic text-white text-center drop-shadow-xl px-4 leading-none", children: [
          "Dragon vs ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-yellow-400 font-serif", children: "Tiger" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 46,
            columnNumber: 28
          }, void 0),
          " ",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 46,
            columnNumber: 86
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary text-xl sm:text-3xl", children: "Winning Secrets - ड्रैगन वर्सेज टाइगर सीक्रेट्स" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 47,
            columnNumber: 18
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 45,
          columnNumber: 16
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-10 prose prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold text-center border-b border-brand-primary/20 pb-6 leading-relaxed", children: [
          "Dragon vs Tiger har single ",
          /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy App List" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 54,
            columnNumber: 42
          }, void 0),
          " ke andar hosted sabse super fast aur high frequency games me se ek hai. Ye game jitna fast speed se chalta hai, utna hi highly profitable bhi ban sakta hai agar aap professional tricks aur solid mathematical control check adopt karein."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "basics", className: "uppercase italic font-black", children: "How to Play Dragon vs Tiger - खेल का बुनियादी ज्ञान कैसे पाएं?" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Dragon vs Tiger basically ek extremely simple cards layout gameplay model hai. Live dealer deck me se simple do discrete cards deal karta hai—ek specialized Dragon slot card area par aur ek parallel Tiger card area par. End of card distribution cycle, dono side card numeric weights match kiye jaate hain. Jis specific side ka slot superior or value card hold karta hai, wo slot round win karta hai. High-payout structure zero-delay match tracking algorithms par deploy ki jati hai." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Card Hierarchy system order:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, void 0),
            " Kings are the ultimate card values (King represents the biggest card values indices), system order goes: King ",
            ">",
            " Queen ",
            ">",
            " Jack ",
            ">",
            " 10 ... ",
            ">",
            " Ace (Aces are commonly designated as the lowest values)."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Payout return multiplier bounds:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, void 0),
            " Simple selection model 1:1 balance returns allow karta hai. For example, if you bet ₹100 inside the winning slot, you will receive ₹200 back immediately."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Tie scenario exceptions:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, void 0),
            " In absolute equal distribution scenarios (when identical numeric weight ranks appear on both slots), the round declares a 'Tie'. In tie situation layouts, normal selection slots return standard percentages or 50% recovery depending on specific system limits, while direct bet on Tiger-Dragon Tie slot awards a staggering 8x up to 9x returns!"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "investment-rule", className: "flex items-center gap-2 uppercase italic font-black", children: [
          /* @__PURE__ */ jsxDEV(BrainCircuit, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, void 0),
          "The 3x Investment Martingale Rule - 3 गुणा निवेश प्रबंधन रणनीति"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Professional Rummy app users and master gamers hamesha ",
          /* @__PURE__ */ jsxDEV("strong", { children: "3x Martingale Compound System" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 72,
            columnNumber: 70
          }, void 0),
          " apply karte hain taaki odds variations unhein loss pools me na phansayein. Is mechanical calculation rule ka ultimate vision ye hai ki, consecutive losing rounds ke badle ek single win layout aapke previous aggregate losses ko successfully nullify / recover kar de aur direct standard net profits ledger dashboard me credit update kar de."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Halanki is absolute systematic calculation rule ko implement karne ke liye, users ke profile wallets section me balance backups optimal (minimum 8 up to 10 scale deep stages) levels ke standard maintain hone required hain. Agar dynamic fund system flow early stage break-out hota hai, to risk boundaries limits break ho jate hain, isiliye balance buffer limits check set rakhiye." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-black/30 p-6 rounded-2xl border border-white/10 my-8", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-mono text-sm uppercase mb-4 text-brand-primary-light font-black tracking-widest", children: "Calculated Sequence Stages Example - ३ गुणा निवेश चार्ट:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2 font-bold uppercase tracking-tight text-xs", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between border-b border-white/5 pb-2", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "1st Bet Amount Slot: ₹10" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 80,
                columnNumber: 84
              }, void 0),
              " ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-red-400 italic font-black", children: "Initial Round Loss - प्रारंभिक नुकसान" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 80,
                columnNumber: 122
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between border-b border-white/5 pb-2", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "2nd Bet Amount (3x scale): ₹30" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 81,
                columnNumber: 84
              }, void 0),
              " ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-red-400 italic font-black", children: "Round Loss - नुकसान नियंत्रण" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 81,
                columnNumber: 128
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between border-b border-white/5 pb-2", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "3rd Bet Amount (3x scale): ₹90" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 82,
                columnNumber: 84
              }, void 0),
              " ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-red-400 italic font-black", children: "Round Loss - धैर्य बनाए रखें" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 82,
                columnNumber: 128
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between pb-2 text-green-400", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "4th Bet Amount (3x scale): ₹270" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 83,
                columnNumber: 75
              }, void 0),
              " ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-green-400 italic font-black", children: "Round WIN - महा विजय (Grand Recover + Net Profits: ₹140)" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 83,
                columnNumber: 120
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-6 border border-brand-primary/20 shadow-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV(Sword, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase italic tracking-wider text-white m-0", children: "🔥 Best Dragon vs Tiger Games To Download - शीर्ष गेमिंग एप्स सूचि 🔥" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/50 mb-6", children: "In gaming applications ke andar custom RNG systems aur live pattern trends boards are fully transparent aur payouts super rapid run hote hain:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none", children: dragonTigerGames.map((app) => /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-secondary/90 rounded-2xl p-4 border border-white/5 flex gap-4 items-center justify-between hover:border-brand-primary/30 transition-all", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ jsxDEV("img", { src: app.iconUrl, alt: app.name, className: "w-14 h-14 rounded-xl object-cover border border-white/10", referrerPolicy: "no-referrer" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 103,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black text-white m-0 uppercase tracking-tight", children: app.name }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlog4.tsx",
                  lineNumber: 105,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-brand-primary font-bold m-0 mt-1", children: [
                  "Bonus Available: ",
                  app.bonus
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog4.tsx",
                  lineNumber: 106,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-white/50 font-bold m-0", children: [
                  "Min. Cashout: ",
                  app.minWithdrawal
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog4.tsx",
                  lineNumber: 109,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 104,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 102,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                className: "bg-brand-primary text-black font-black uppercase text-[10px] px-3.5 py-2.5 rounded-lg tracking-widest flex items-center gap-1 hover:scale-105 active:scale-95 transition-all",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlog4.tsx",
                    lineNumber: 118,
                    columnNumber: 23
                  }, void 0),
                  "PLAY"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/RummyBlog4.tsx",
                lineNumber: 114,
                columnNumber: 21
              },
              void 0
            )
          ] }, app.id, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "patterns", className: "flex items-center gap-2 uppercase italic font-black", children: [
          /* @__PURE__ */ jsxDEV(Target, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, void 0),
          "Pattern Analysis & Trend Mapping - पैटर्न समझने का जादुई विज्ञान"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Dragon vs Tiger completely random patterns display nahi karta; iske database history rows standard repeating patterns follow karte hain jise system bottom menu charts board me render kiya jata hai. In configurations ko analyze karke winning odds ko double up kiya ja sakat hai:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Continuous Streak patterns (The Dragon / Tiger Dragon):" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, void 0),
            " Kabhi kabhi achanak ek specific slot consecutive 8 to 15 rounds clean loop standard check clear karta hai. Gamers is phase me general human bias ke basis par opposite bet scale up karna shuru karte hain jise 'Streak Break' trade bolte hain. This is highly risky. Trend breaks focus are dangerous; follow high streak pattern setups gracefully!"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "1-1 Alternative oscillation pattern setup:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, void 0),
            " Dragon-Tiger-Dragon-Tiger sequences. Oscillations me jumping bet method models utilize karni chahiye."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Dual-block duplicate clusters (2-2 series structure):" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, void 0),
            " Dragon-Dragon to Tiger-Tiger block transitions. Is sequence bounds me setup breaks handle karne ke sateek rules target set rakhein."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "psychology", className: "uppercase italic font-black", children: "Emotional Demarcation & Control - मनोवैज्ञानिक नियंत्रण और अनुशासन" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Online fast gaming setups me card weights control are relatively simple par human psychological constraints systems represent standard failures areas. Safe mindset keys:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Pre-determined Win target limit bounds:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, void 0),
            " Match dashboard start se pahle exact target limits configure karein, say you achieve +₹1000 margin profit status, stop playing immediately and terminate application blocks."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Eradicate Grief Chasing methods:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, void 0),
            " Jab lagatar 3 or 4 losing stages clear ho jayein, to rage playing or blind entries lagakar larger balances risks me load na karein. Take a walk, calm down, change table or app."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Stop Loss margin configurations:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, void 0),
            " Mental checks should have absolute negative boundaries limits threshold parameters so that you preserve cash securely."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "dragon-faq", children: "Frequently Asked Questions: Dragon vs Tiger Challenges - अक्सर पूछे जाने वाले सवाल" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Is matching predictor tool scripts or cheat codes working inside All Rummy Apps?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Absolutely NOT! Any third party links, calculators, predictor bots websites or WhatsApp links promoting Dragon Tiger hack are entirely spam. Play strictly with logic systems, pattern tracking sheets, and budget sheets control methods." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Best timing zones parameters for playing high frequency games?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Noon scales and early evening periods are great as active real users numbers are peaks, which translates to balanced matching patterns setups and optimal server performance speeds." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Minimum scale margins values for standard starting bets?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: In most standard updated Rummy download lists apps, minimum round stakes starts anywhere from safe ₹10 or ₹20 limits which helps in smoothly implementing the initial Martingale steps." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog4.tsx",
              lineNumber: 161,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 159,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-12 text-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-3 bg-brand-primary text-black font-black px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm text-center", children: [
          /* @__PURE__ */ jsxDEV(Sword, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, void 0),
          "Go back to All Games List - मुख्य सूचि पर लौटें"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { children: "Final Summary Conclusion - निष्कर्ष" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Dragon vs Tiger dynamic card action games standard are spectacular options for active and skilled smart developers or players who can safely control behavioral systems. Master Martingale 3x sequence charts and secure payments bounds, stay analytical rather than greedy, and win." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Pick an organic download from our verified ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apk" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog4.tsx",
            lineNumber: 177,
            columnNumber: 59
          }, void 0),
          " list systems setup and test your skills and analytic patterns today!"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog4.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog4.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("footer", { className: "py-8 bg-bg-secondary border-t border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/30 uppercase font-black tracking-[0.2em]", children: "© 2026 allrummybonus.com" }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 184,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog4.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/RummyBlog4.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, void 0);
};
const RummyBlog5 = () => {
  const teenPattiGames = RUMMY_APPS.filter((app) => ["teen-patti-joy", "bappa-rummy", "gogo-rummy", "yoyo-slots"].includes(app.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Best Teen Patti Apps for Real Cash 2026 - Rummy All App List" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Looking for Teen Patti? Read our extensive, comprehensive guide on the best Teen Patti Joy, Teen Patti Master, and Teen Patti Gold apps inside the Rummy All Apk ecosystem. Win real cash today." }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "teen patti app, teen patti real cash, teen patti joy, teen patti master apk download, best teen patti bonus, 3 patti real money" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://allrummybonus.com/rummyblog5" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary border-b border-brand-primary/30 py-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("img", { src: "/images/all_rummy_1to1_logo_1779225745385.png", alt: "Logo", className: "h-10 w-auto object-contain rounded-lg shadow-md border border-brand-primary/20", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-white", children: "All Rummy Bonus Apps" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxDEV(motion.article, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: "bg-[#1e293b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 sm:h-80 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/withdrawal_proof_banner_1779179116289.png",
            alt: "Teen Patti Real Cash",
            className: "w-full h-full object-cover opacity-80"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-black flex items-end p-8", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl sm:text-5xl font-black uppercase italic text-white flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(Crown, { className: "w-10 h-10 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 45,
            columnNumber: 18
          }, void 0),
          "Teen Patti ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "Kings" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 46,
            columnNumber: 29
          }, void 0),
          " 2026 - तीन पत्ती मास्टर गाइड"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 44,
          columnNumber: 16
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-10 prose prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-bold italic text-brand-primary-light", children: "Teen Patti sirf ek normal card game nahi hai, ye Bharat ki har festive season, weddings aur parties ki absolute shaan hai. 2026 mein digital cash card platforms ne is traditional game rules ko naye andaz me transform kiya hai." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "basics", className: "flex items-center gap-2", children: "How to Play Teen Patti - तीन पत्ती गेम खेलने के बुनियादी नियम क्या हैं?" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Teen Patti (jise general local language pools me '3 Cards Flash' or 'Desi Poker Flush' bhi kaha jata hai), traditional poker rules ka ek simplify aur very fast Indian customized cards version hai. Game starting tables par single regular cards deck utilize kiya jata hai aur matches me har active seat par dealer system standard three direct cards deliver karta hai block areas set pe. Niche iski sateek order values sequence details check set likhi hai:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Trail / Trio / Set structure (Ranks top high):" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 61,
              columnNumber: 19
            }, void 0),
            " Jab dynamic seats par matching Rank numeric values ke teen card deal ho jayein, use Trail or Trio block bolte hain. Trio of Aces (A-A-A) represents the ultimate king of combinations inside Teen Patti tables."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Pure Sequence / Straight Flush structures:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, void 0),
            " Teen consecutive cards belonging to identical suit and color. Pattern sequence sample represents (A-2-3 or Q-K-A of hearts, diamonds, clubs or spades)."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Sequence / Simple Run structures:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, void 0),
            " Traditional sequence where numeric weights ranks corresponding to consecutive orders but cards belong to multiple suit types. Pattern sample runs as 4-5-6 or 9-10-Jack of multiple colors."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Color suit flush structures:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, void 0),
            " Scenario layouts where three separate cards correspond to exact identical color suit indices layout but numeric sequence order is not consecutive."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Pair configurations:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, void 0),
            " Matches combinations where two cards carry corresponding ranks value (e.g., King/King/Ten)."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "High Card index rankings:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 66,
              columnNumber: 19
            }, void 0),
            " In cases where no sets or pattern sequence runs are formed on active player hands, value rankings are decided strictly based on individual high cards weight hierarchy order."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "vs-rummy", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Spade, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, void 0),
          "Teen Patti vs Rummy - दोनों प्रमुख गेमों की व्यावहारिक तुलना"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Bharat ke leading skill apks lists and ",
          /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy Apps" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 74,
            columnNumber: 54
          }, void 0),
          " jahan complete sequence arrangements, mathematical matching patterns aur analytical deduction skills use karte hain, wahan Teen Patti psychological confidence, face reading limits (blind mode thresholds), aur bluffing techniques margins par operate kiya jane wala dynamic game hai."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Online boards par Rummy table setups me cards arrange karna direct numeric logical bounds maintain karta hai, par Teen Patti boards me agar aapke card indicators relatively weaker level represent kar rahe hain tab bhi smart bluffing codes execute karke, blind bet scaling increase karke risk raise dynamic controls implement karke, aap front opponents seats players ko fold rules confirm decision lene par transform and push back kar sakte hain. Dono systems and lists are perfectly embedded in today's mobile formats apk downloads." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-6 border border-brand-primary/20 shadow-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV(ThumbsUp, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase italic tracking-wider text-white m-0", children: "🏆 Download Safe and High Payout Teen Patti Apps - तीन पत्ती बेस्ट डाउनलोड सूचि 🏆" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/50 mb-6 font-bold", children: "Ye apps 2026 cash games and slots variations me highest bonuses limits aur lightning-fast payment processors features offer karte hain:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none font-bold", children: teenPattiGames.map((app) => /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-secondary/90 rounded-2xl p-4 border border-white/5 flex gap-4 items-center justify-between hover:border-brand-primary/30 transition-all", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ jsxDEV("img", { src: app.iconUrl, alt: app.name, className: "w-14 h-14 rounded-xl object-cover border border-white/10", referrerPolicy: "no-referrer" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog5.tsx",
                lineNumber: 96,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black text-white m-0 uppercase tracking-tight", children: app.name }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlog5.tsx",
                  lineNumber: 98,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-green-400 font-bold m-0 mt-1", children: [
                  "Bonus Claim: ",
                  app.bonus
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog5.tsx",
                  lineNumber: 99,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-white/40 font-bold m-0", children: [
                  "Min. Cashout: ",
                  app.minWithdrawal
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog5.tsx",
                  lineNumber: 102,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlog5.tsx",
                lineNumber: 97,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                className: "bg-brand-primary text-black font-black uppercase text-[10px] px-3.5 py-2.5 rounded-lg tracking-widest flex items-center gap-1 hover:scale-105 active:scale-95 transition-all",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlog5.tsx",
                    lineNumber: 111,
                    columnNumber: 23
                  }, void 0),
                  "DOWNLOAD"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/RummyBlog5.tsx",
                lineNumber: 107,
                columnNumber: 21
              },
              void 0
            )
          ] }, app.id, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "variations", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Heart, { className: "w-6 h-6 text-red-500 fill-current" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, void 0),
          "Popular Game Modes and Teen Patti Variations - अलग-अलग तरीके"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Teen Patti Joy" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 123,
            columnNumber: 16
          }, void 0),
          " aur mobile ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Teen Patti Master" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 123,
            columnNumber: 59
          }, void 0),
          " systems me multiple game models represent rehte hain jo gameplay formats to thrilling and fast banate hain:"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "bg-bg-dark/50 p-4 rounded-xl border border-white/5 flex items-start gap-3 text-xs leading-relaxed m-0 text-white/70", children: [
            /* @__PURE__ */ jsxDEV(Navigation, { className: "w-4 h-4 text-brand-primary rotate-45 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, void 0),
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Muflis Mode Strategy:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 126,
              columnNumber: 97
            }, void 0),
            " Traditional reverse structure where the absolute lowest card sequence pattern claims the winning pot. High Rank of Trail card becomes instant loser here."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "bg-bg-dark/50 p-4 rounded-xl border border-white/5 flex items-start gap-3 text-xs leading-relaxed m-0 text-white/70", children: [
            /* @__PURE__ */ jsxDEV(Navigation, { className: "w-4 h-4 text-brand-primary rotate-45 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, void 0),
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: "AK47 Joker combination:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 129,
              columnNumber: 97
            }, void 0),
            " Aces, Kings, Fours, and Sevens of any suite become instant wildcards or jokers jise hand values sequence strong set complete hoti hai."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "bg-bg-dark/50 p-4 rounded-xl border border-white/5 flex items-start gap-3 text-xs leading-relaxed m-0 text-white/70", children: [
            /* @__PURE__ */ jsxDEV(Navigation, { className: "w-4 h-4 text-brand-primary rotate-45 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, void 0),
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Fixed Joker Variations layout:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 132,
              columnNumber: 97
            }, void 0),
            " One random card values on direct table acts as constant joker placeholder element to substitute empty values."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "bg-bg-dark/50 p-4 rounded-xl border border-white/5 flex items-start gap-3 text-xs leading-relaxed m-0 text-white/70", children: [
            /* @__PURE__ */ jsxDEV(Navigation, { className: "w-4 h-4 text-brand-primary rotate-45 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 135,
              columnNumber: 17
            }, void 0),
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Single Highest Card decision match:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 135,
              columnNumber: 97
            }, void 0),
            " One layout deal. Dealer gives one facing card to every player seats and decision settles inside five seconds."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "strategies", children: "Strategies of Desi Teen Patti Master - जीतने के महत्वपूर्ण गुरुमंत्र" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Teen Patti table rooms require strict control metrics. Professional levels achieve karne ke tools controls check pointers niche compile kiya gaya hai:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Master the Blind Bet methods:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, void 0),
            " Early betting rounds blind (unseen hands matching) level me play karein. Blind entries and pots amounts are very low, but it puts maximum psychological pressure on seats players who already reviewed cards and must maintain double bet prices to keep active."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Strict Betting Pattern tracking:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, void 0),
            " Focus dynamically on opponent speed limits. High prompt raises usually indicate strong sequence cards or brave bluffing checks."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Optimal Card distribution cycles:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, void 0),
            " Don't play continuous large bets on small margins pairs cards. Pairs are good but they are highly vulnerable to sequence runs during double showdown levels."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Establish proper stop limit thresholds:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, void 0),
            " Daily limits setting are mandatory to protect personal capital securely."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "tp-faq", children: "Teen Patti FAQ - अक्सर पूछे जाने वाले सवाल और उनके उत्तर" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary italic", children: "Q: Blind system limit kitne round tak maintain karna safe hota hai?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: General standard tables me continuous 2 or max 3 blind rounds of bets perform karna correct balanced decision hota hai. Zyada blind bets run karne se capital risk high run hot hai." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary italic", children: "Q: Sideline show option kya hota hai?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Sideline show options are requested when you play with adjacent player seats. You can request them to securely review matching cards and declare low value card holder folded, but the adjacent seat has full legal rights to accept or decline sideline request codes." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary italic", children: "Q: Welcome bonus amounts direct use karke VIP tournaments enter ho sakte hain?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 161,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Haan, zyaadatar real game platforms in welcome bonuses settings models ko standard match rooms me seamlessly compatible configure rakhte hain." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog5.tsx",
              lineNumber: 162,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 151,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-12 text-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-3 bg-brand-primary text-black font-black px-10 py-5 rounded-full shadow-2xl hover:scale-105 active:bg-brand-primary-light transition-all uppercase tracking-widest text-sm text-center", children: [
          /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog5.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, void 0),
          "Explore Best App Downloads - डाउनलोड पेज पर जाएं"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center font-black uppercase text-[10px] tracking-widest text-white/20 pb-10", children: "Complete organic and verified index is online free for all players around active regions. Run real skills cleanly!" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog5.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog5.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("footer", { className: "py-8 bg-bg-secondary border-t border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/30 uppercase font-black tracking-[0.2em]", children: "© 2026 allrummybonus.com" }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog5.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/RummyBlog5.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, void 0);
};
const RummyBlog6 = () => {
  const yonoGames = RUMMY_APPS.filter((app) => ["yono-rummy", "lcg-bet", "good-slots", "bappa-rummy"].includes(app.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Yono Rummy All Games List 2026 - Best Rummy All App Features" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Explore the Yono Rummy ecosystem. Review Yono Rummy All Games list, bonuses, and seamless performance. Your ultimate Rummy All Apk destination of 2026." }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "yono rummy, yono rummy all games, yono app list, yono teen patti, yono rummy bonus, yono slots apk" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://allrummybonus.com/rummyblog6" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary border-b border-brand-primary/30 py-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("img", { src: "/images/all_rummy_1to1_logo_1779225745385.png", alt: "Logo", className: "h-10 w-auto object-contain rounded-lg shadow-md border border-brand-primary/20", referrerPolicy: "no-referrer" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h1", { className: "text-sm sm:text-lg font-black uppercase italic tracking-wider text-white", children: "All Rummy Bonus Apps" }, void 0, false, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxDEV(motion.article, { initial: { opacity: 0, scale: 1.05 }, animate: { opacity: 1, scale: 1 }, className: "bg-[#1e293b] rounded-3xl border border-white/5 overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-64 sm:h-80 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/main_brand_logo_v2_1779187517106.png",
            alt: "Yono Rummy All Games",
            className: "w-full h-full object-contain bg-black p-10 opacity-70"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/40 to-transparent" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-8 left-8 right-8 text-center sm:text-left", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-6xl font-black uppercase italic text-white leading-tight", children: [
          "Yono ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "Rummy" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 47,
            columnNumber: 23
          }, void 0),
          " ",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 47,
            columnNumber: 73
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xl sm:text-2xl text-brand-primary-light", children: "The New King of Gaming Series - योनो रमी आल गेम्स लिस्ट" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 48,
            columnNumber: 18
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 46,
          columnNumber: 16
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-10 prose prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg leading-relaxed text-white/80", children: [
          "Puri online card industry aur complete ",
          /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy App List" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 55,
            columnNumber: 54
          }, void 0),
          ' ke andar, "Yono" series ne sabse kam waqt me sabse high benchmark update are secure status configure kiya hai. 2026 mein state-of-the-art server setup systems ke chalte, ',
          /* @__PURE__ */ jsxDEV("strong", { children: "Yono Rummy All Games" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 55,
            columnNumber: 260
          }, void 0),
          " players ki pehli aur antim secure pasand ban chuke hain. Is guide mein hum Yono app series ke technical benefits, gameplay dynamics aur verified download systems details review karenge."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "why-yono", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Layers, { className: "w-6 h-6 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, void 0),
          "The Structural Advancements: Why Choose Yono Series? - योनो एप क्यों सर्वश्रेष्ट है?"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Standard apks aur ordinary models ke muqable, Yono series core performance configuration me hybrid cloud database layers apply karti hai. Is highly-stable design pattern ka sabse bada result ye hota hai ki, matches starting loading time and visual transitions lag-free rehte hain, chahe player device standard budget levels ka hi kyun na ho." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Yono technology clusters absolute game stability design standards target karti hain jo massive state-level card tournaments panels run hone par bhi players dashboard interface me zero-latency processing ensure karti hain. Zero transaction crashes is multi-million network security parameters standard firewall safeguards se integrated hai. Customer care support system are automated aur multilanguage support networks dynamic solutions standard run handle karti hain." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 my-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-bg-dark rounded-xl border border-white/5 text-center", children: [
            /* @__PURE__ */ jsxDEV(Gamepad2, { className: "w-6 h-6 text-brand-primary mx-auto mb-2" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-black uppercase", children: "25+ Pro Games - खेल सूचि" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 70,
            columnNumber: 16
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-bg-dark rounded-xl border border-white/5 text-center", children: [
            /* @__PURE__ */ jsxDEV(Zap, { className: "w-6 h-6 text-brand-primary mx-auto mb-2" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-black uppercase", children: "Zero Lag Engine - सुपर फास्ट" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 74,
            columnNumber: 16
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-bg-dark rounded-xl border border-white/5 text-center", children: [
            /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-6 h-6 text-brand-primary mx-auto mb-2" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-black uppercase", children: "Light Weight APK - हलकी साइज" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 78,
            columnNumber: 16
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "all-games", children: "Comprehensive Yono Rummy All Games Analysis - योनो गेम सूचि की मुख्य विशेषताएं" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "Yono brand card lobbies and setups me multi-dimensional skill options index milenge:" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Speed Points Rummy:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, void 0),
            " Points rummy games me high-speed decision cycles apply hote hain aur matches are completed under 2 to 3 minutes which ensures immediate payout structures."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Endurance Pool Rummy limits:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, void 0),
            " 101 Points Rummy and 201 Points layouts where you participate is a tournament standard format to test your mental focus and strategies patterns."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Live Deal Rummy games:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, void 0),
            " Fixed deals of cards (usually best of 2 or 3 hands) where score weights directly settles margins payouts."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Andar Bahar Multiplier configurations:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, void 0),
            " A simplistic traditional cards guess options where live cards matching is fast, reliable and very exciting."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Minesweeper custom arcade games:" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, void 0),
            " Strategic puzzle cashout games where searching fields blocks safe of explosives raises multi-folds margins."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-6 border border-brand-primary/20 shadow-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV(CircleCheck, { className: "w-6 h-6 text-green-500" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 97,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase italic tracking-wider text-white m-0", children: "🔥 Best Verified Yono Apps list to Download - योनो रमी आल ऐप्स सूचि 🔥" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-white/50 mb-6 font-bold", children: "In top 2026 Yono platform systems layouts the download security speeds are maximum verified by admin teams:" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none font-bold", children: yonoGames.map((app) => /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-secondary/90 rounded-2xl p-4 border border-white/5 flex gap-4 items-center justify-between hover:border-brand-primary/30 transition-all", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ jsxDEV("img", { src: app.iconUrl, alt: app.name, className: "w-14 h-14 rounded-xl object-cover border border-white/10", referrerPolicy: "no-referrer" }, void 0, false, {
                fileName: "/app/applet/src/components/RummyBlog6.tsx",
                lineNumber: 110,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black text-white m-0 uppercase tracking-tight", children: app.name }, void 0, false, {
                  fileName: "/app/applet/src/components/RummyBlog6.tsx",
                  lineNumber: 112,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-brand-primary font-bold m-0 mt-1", children: [
                  "Welcome Bonus: ",
                  app.bonus
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog6.tsx",
                  lineNumber: 113,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-white/40 font-bold m-0", children: [
                  "Min. Redemptions: ",
                  app.minWithdrawal
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/RummyBlog6.tsx",
                  lineNumber: 116,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/RummyBlog6.tsx",
                lineNumber: 111,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 109,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                className: "bg-brand-primary text-black font-black uppercase text-[10px] px-3.5 py-2.5 rounded-lg tracking-widest flex items-center gap-1 hover:scale-105 active:scale-95 transition-all",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/applet/src/components/RummyBlog6.tsx",
                    lineNumber: 125,
                    columnNumber: 23
                  }, void 0),
                  "GET APP"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/RummyBlog6.tsx",
                lineNumber: 121,
                columnNumber: 21
              },
              void 0
            )
          ] }, app.id, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "yono-benefits", children: "VIP Bonuses & Reward Ecosystem in Yono - वीआईपी बोनस के नियम" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Active ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apps" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 135,
            columnNumber: 22
          }, void 0),
          " me Yono series updates systems customized benefits support karti hain. Har week players secure claims kar paate hain Weekly Cashbacks, Daily Checkpoints rewards, aur high values Referral commission setups."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { children: "VIP Level indicators parameters increase hone par levels limits auto update ho jati hain which unlocks personal relations executive desks settings for high scale transactions handling. Payout limits thresholds are dynamic, and payout fail indices are non-existent." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { id: "yono-faq", children: "Yono Apps FAQ - योनो गेमों के संबंध में बुनियादी जिज्ञासाएं" }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-xl border border-white/5", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Kya Yono app list versions standard systems par safe are monitored?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Haan, complete technical audits checks security firewalls regular apply kiye jaate hain, isiliye payouts are completely automated aur secure standard verify run rehte hain." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-xl border border-white/5", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Minimum scale values limits of deposit setups inside Yono dashboards?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 148,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Zyadatar verified applications me minimum starting threshold boundaries limits standard starts anywhere from safe ₹100 which is optimal for new joiners parameters." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 bg-white/5 rounded-xl border border-white/5", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-brand-primary", children: "Q: Referral structure me percentage commissions payouts bounds kya scale set follow karti hain?" }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: "A: Dynamic structure follow high rewards patterns jaha real referral commission limits are up to 30% of standard rake values payout parameters structure." }, void 0, false, {
              fileName: "/app/applet/src/components/RummyBlog6.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "my-12 text-center font-bold", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-3 bg-brand-primary text-black font-black px-10 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm text-center", children: [
          /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/src/components/RummyBlog6.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, void 0),
          "Go to Home Grid - होम सूचि देखें"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "border-t border-white/10 pt-10 text-center text-[10px] text-white/30 uppercase font-black tracking-widest italic pb-10", children: "Your organic destination for Downloading All Rummy Apk platforms seamlessly. Fast service, verified lists." }, void 0, false, {
          fileName: "/app/applet/src/components/RummyBlog6.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/RummyBlog6.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("footer", { className: "py-8 bg-bg-secondary border-t border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/30 uppercase font-black tracking-[0.2em]", children: "© 2026 allrummybonus.com" }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/app/applet/src/components/RummyBlog6.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/RummyBlog6.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, void 0);
};
const apexLogo = "/images/apex_hacker_logo_1779909062514.png";
function ApexdinLandingPage({ idOverride } = {}) {
  const { pathname } = useLocation();
  const isApex2 = idOverride === "2" || pathname === "/apex2";
  const isApex3 = idOverride === "3" || pathname === "/apex3";
  const isApex4 = idOverride === "4" || pathname === "/apex4";
  const isApex5 = idOverride === "5" || pathname === "/apex5";
  const telegramUrl = "https://telegram.me/+-pL_q6OlhgAwNDc1";
  const [seconds, setSeconds] = useState(184);
  const [activeUsers, setActiveUsers] = useState(3109);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          return 300;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const trafficInterval = setInterval(() => {
      setActiveUsers((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        if (next < 3080) return 3085;
        if (next > 3140) return 3135;
        return next;
      });
    }, 3500);
    return () => clearInterval(trafficInterval);
  }, []);
  const formatTime = (totalSecs) => {
    const min = Math.floor(totalSecs / 60);
    const sec = totalSecs % 60;
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedMin}:${formattedSec}`;
  };
  const handleTelegramClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
  };
  const handleFooterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open("https://t.me/tech_apex", "_blank", "noopener,noreferrer");
  };
  if (isApex3 || isApex4) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#07080a] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black animate-fade-in", children: [
      /* @__PURE__ */ jsxDEV(Helmet, { children: [
        /* @__PURE__ */ jsxDEV("title", { children: "Connecting securely to Telegram... 🚀" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Please wait, redirecting you to the channel." }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: isApex4 ? "https://www.rummybonusapps.com/apex4" : "https://www.rummybonusapps.com/apex3" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00f3ff]/5 blur-[140px] rounded-full pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-10 left-10 w-72 h-72 bg-blue-950/10 blur-[130px] rounded-full pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-4 z-10 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/60 text-slate-400 hover:text-white transition-all text-[11px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Home" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping mr-1" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-cyan-400 font-bold tracking-widest font-rajdhani uppercase", children: "SECURE REDIRECTING" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "flex-1 flex flex-col items-center justify-center px-4 max-w-md mx-auto w-full gap-7 z-10 py-6 text-center select-none", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-4 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-gradient-to-br from-[#00f3ff]/30 to-slate-950/90 border border-[#00f3ff]/30 shadow-[0_0_50px_rgba(0,243,255,0.2)] flex items-center justify-center", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full rounded-full overflow-hidden border-2 border-[#00f3ff] shadow-[0_0_30px_rgba(0,243,255,0.45)]", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: apexLogo,
                alt: "Apex Ad Works Mascot Logo",
                className: "w-full h-full object-cover transform scale-102 animate-pulse",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
                lineNumber: 119,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-2 rounded-full border border-dashed border-[#00f3ff]/40 animate-[spin_10s_linear_infinite]" }, void 0, false, {
              fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl sm:text-2xl font-black tracking-widest text-[#00f3ff] uppercase font-orbitron drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]", children: "Connecting securely to Telegram... 🚀" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs sm:text-sm text-slate-400 max-w-xs mx-auto font-rajdhani font-semibold tracking-widest", children: "PLEASE WAIT, REDIRECTING YOU TO THE CHANNEL." }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-2", children: /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "https://telegram.me/+jYgeSpfQrkozZGE1",
            className: "text-[10px] text-slate-500 hover:text-[#00f3ff] tracking-widest uppercase font-mono transition-colors border-b border-dashed border-slate-700 hover:border-[#00f3ff]",
            children: "Click here if you are not redirected automatically"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 141,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("footer", { className: "w-full text-center pb-8 pt-4 px-4 z-10 font-sans", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-block border border-teal-500/10 bg-slate-950/20 px-6 py-2.5 rounded-full", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] tracking-[0.25em] text-slate-500 font-bold font-rajdhani block uppercase", children: "POWERED BY APEX SIGNAL CORE v9.0" }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-[#07080a] text-white flex flex-col justify-between relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "India's Most Demanding Channel - Official Join Portal" }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Join India's most demanding Telegram signal channel. Secure access, premium signals, real-time AI and live status." }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "Apex Ad Works, Telegram Signals, Tech Apex, Demanding Channel, AI Bot v9" }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: isApex5 ? "https://www.rummybonusapps.com/apex5" : isApex4 ? "https://www.rummybonusapps.com/apex4" : isApex3 ? "https://www.rummybonusapps.com/apex3" : isApex2 ? "https://www.rummybonusapps.com/apex2" : "https://www.rummybonusapps.com/apex1" }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00f3ff]/5 blur-[140px] rounded-full pointer-events-none" }, void 0, false, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-10 left-10 w-72 h-72 bg-blue-950/10 blur-[130px] rounded-full pointer-events-none" }, void 0, false, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "p-4 z-10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/60 text-slate-400 hover:text-white transition-all text-[11px] font-bold uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-3.5 h-3.5" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "Home" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-slate-500 font-black tracking-widest font-rajdhani uppercase", children: "ONLINE CONNECTION SAFE" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 flex flex-col items-center justify-center px-4 max-w-md mx-auto w-full gap-7 z-10 py-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center space-y-1 select-none", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-xl sm:text-2xl font-black italic tracking-widest text-[#00f3ff] uppercase drop-shadow-[0_0_8px_rgba(0,243,255,0.4)] font-orbitron m-0", children: "INDIA'S MOST" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-3xl font-black italic tracking-widest text-white uppercase font-orbitron m-0", children: "DEMANDING CHANNEL" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative group select-none", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-4 rounded-full bg-cyan-400/20 blur-3xl group-hover:bg-cyan-400/35 transition-all duration-700 animate-pulse" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-gradient-to-br from-[#00f3ff]/30 to-slate-950/90 border border-[#00f3ff]/30 shadow-[0_0_50px_rgba(0,243,255,0.2)] flex items-center justify-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full rounded-full overflow-hidden border-2 border-[#00f3ff] shadow-[0_0_30px_rgba(0,243,255,0.45)]", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: apexLogo,
              alt: "Apex Ad Works Mascot Logo",
              className: "w-full h-full object-cover transform scale-102 group-hover:scale-106 transition-all duration-700 ease-out",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
              lineNumber: 210,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-2 rounded-full border border-dashed border-[#00f3ff]/30 animate-[spin_60s_linear_infinite]" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 218,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "w-full px-2", children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: telegramUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: handleTelegramClick,
          className: "group relative w-full flex items-center justify-center text-center bg-[#00f3ff] hover:bg-[#1ef5ff] active:scale-[0.98] text-slate-950 py-5 px-6 rounded-[1.45rem] shadow-[0_0_35px_rgba(0,243,255,0.4)] hover:shadow-[0_0_55px_rgba(0,243,255,0.7)] transition-all duration-300 select-none cursor-pointer border-b-4 border-cyan-600/30",
          children: /* @__PURE__ */ jsxDEV("span", { className: "text-[15px] sm:text-[17px] font-black tracking-widest uppercase font-orbitron text-black", children: "JOIN TELEGRAM" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 232,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 224,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0b0c0f]/80 backdrop-blur-md border border-slate-900/90 rounded-full px-6 py-3 flex items-center gap-2.5 text-xs text-slate-300 font-rajdhani select-none shadow-md", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "relative flex h-2 w-2 shrink-0", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 mr-1 bg-teal-500" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-teal-400" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "uppercase text-slate-400 font-bold ml-1 tracking-widest", children: "SYSTEM RESET IN:" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-white font-black tracking-widest font-mono ml-0.5 text-sm", children: formatTime(seconds) }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-3 w-full px-1", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#070b10]/95 border border-slate-900/90 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden group shadow-lg min-h-[114px] justify-between transition-colors hover:border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 bottom-0 h-[3px] bg-[#00f3ff] opacity-40 group-hover:opacity-100 transition-opacity" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Shield, { className: "w-5 h-5 text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.4)]" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-slate-500 font-black tracking-widest uppercase mt-2 font-rajdhani", children: "STATUS" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] sm:text-xs text-white font-black tracking-wider uppercase mt-1 flex items-center gap-1 font-orbitron", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this),
            "SECURE"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#070b10]/95 border border-slate-900/90 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden group shadow-lg min-h-[114px] justify-between transition-colors hover:border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 bottom-0 h-[3px] bg-[#00f3ff] opacity-40 group-hover:opacity-100 transition-opacity" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Cpu, { className: "w-5 h-5 text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.4)] animate-pulse" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-slate-500 font-black tracking-widest uppercase mt-2 font-rajdhani", children: "AI BOT" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 267,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] sm:text-xs text-white font-black tracking-wider uppercase mt-1 font-orbitron", children: "V9.0" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 268,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#070b10]/95 border border-slate-900/90 rounded-2xl p-4 flex flex-col items-center text-center relative overflow-hidden group shadow-lg min-h-[114px] justify-between transition-colors hover:border-slate-800", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 bottom-0 h-[3px] bg-[#00f3ff] opacity-40 group-hover:opacity-100 transition-opacity" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Users, { className: "w-5 h-5 text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.4)]" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 276,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-slate-500 font-black tracking-widest uppercase mt-2 font-rajdhani", children: "ACTIVE" }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] sm:text-xs text-[#00f3ff] font-black font-orbitron tracking-tight mt-1", children: activeUsers.toLocaleString() }, void 0, false, {
            fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 274,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "w-full text-center pb-8 pt-4 px-4 z-10 select-none font-sans", children: /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "https://t.me/tech_apex",
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: handleFooterClick,
        className: "inline-block border border-teal-500/20 bg-slate-950/40 hover:border-[#00f3ff]/40 hover:bg-[#00f3ff]/5 hover:scale-105 active:scale-95 transition-all px-6 py-2.5 rounded-full shadow-inner cursor-pointer",
        children: /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] sm:text-[9px] tracking-[0.25em] text-cyan-400 font-black font-rajdhani block uppercase leading-none", children: "MANAGED BY - APEX AD WORKS" }, void 0, false, {
          fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
        lineNumber: 289,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/ApexdinLandingPage.tsx",
    lineNumber: 164,
    columnNumber: 5
  }, this);
}
function AllRummyAppsPage() {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialQuery = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortOrder, setSortOrder] = useState("name-asc");
  const sortedAndFilteredApps = useMemo(() => {
    const filtered = RUMMY_APPS.filter(
      (app) => app.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return [...filtered].sort((a, b) => {
      if (sortOrder === "name-asc") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "name-desc") {
        return b.name.localeCompare(a.name);
      } else if (sortOrder === "bonus-high") {
        const bonusA = parseInt(a.bonus.replace(/\D/g, "")) || 0;
        const bonusB = parseInt(b.bonus.replace(/\D/g, "")) || 0;
        return bonusB - bonusA;
      }
      return 0;
    });
  }, [searchQuery, sortOrder]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "All Rummy Apps List & Directory - Download Rummy APKs" }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Discover the complete master directory of All Rummy Apps released. Browse our comprehensive list, search bonuses, and download official, 100% verified rummy files securely." }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "all rummy app directory, download all rummy games, real money rummy catalog, new rummy listing, verified rummy apk files" }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://www.rummybonusapps.com/all-rummy-apps" }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary/90 backdrop-blur-md border-b border-brand-primary/20 sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2 hover:text-brand-primary transition-colors text-slate-300 group", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-5 h-5 group-hover:-translate-x-1 transition-transform" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-black uppercase tracking-wider", children: "Back to Hub" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2.5 hover:opacity-90 transition-opacity", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/all_rummy_1to1_logo_1779225745385.png",
            alt: "Brand Logo",
            className: "h-8 w-8 object-contain rounded-lg border border-brand-primary/20",
            referrerPolicy: "no-referrer"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 68,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-sm font-black uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-300", children: "ALL RUMMY DIRECTORY" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex items-center gap-1", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] uppercase font-bold tracking-widest text-slate-400", children: "Directory Synced" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-white/5 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute right-0 top-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 relative z-10 text-center sm:text-left", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full", children: "SEO Silo Directory Block" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl sm:text-5xl font-black uppercase italic mt-4 mb-3 tracking-tight font-display", children: [
          "ALL RUMMY ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "GAMES DIRECTORY" }, void 0, false, {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 94,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-7xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-bg-secondary p-4 rounded-2xl border border-white/5 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative group w-full md:w-96 shrink-0", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-primary transition-colors" }, void 0, false, {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Search directory of 100+ games...",
              className: "w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold uppercase tracking-widest text-white focus:outline-none focus:border-brand-primary/50 transition-all",
              value: searchQuery,
              onChange: (e) => {
                setSearchQuery(e.target.value);
              }
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 107,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("span", { children: [
            "TOTAL DATABASE: ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary font-black", children: [
              RUMMY_APPS.length,
              " apps"
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 120,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: "|" }, void 0, false, {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: [
            "MATCHES: ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-white font-black", children: sortedAndFilteredApps.length }, void 0, false, {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 122,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 w-full md:w-auto justify-end", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap", children: "Sort By:" }, void 0, false, {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              value: sortOrder,
              onChange: (e) => setSortOrder(e.target.value),
              className: "bg-slate-900 border border-white/10 rounded-xl py-2.5 px-3 text-xs uppercase font-extrabold text-white focus:outline-none focus:border-brand-primary/30",
              children: [
                /* @__PURE__ */ jsxDEV("option", { value: "name-asc", children: "Name (A - Z)" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 133,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("option", { value: "name-desc", children: "Name (Z - A)" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 134,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("option", { value: "bonus-high", children: "Highest Welcome Bonus" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 135,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 128,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "popLayout", children: sortedAndFilteredApps.length > 0 ? sortedAndFilteredApps.map((app, index) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 },
          transition: { duration: 0.2 },
          className: "bg-bg-secondary/70 border border-white/10 hover:border-brand-primary/40 rounded-2xl p-4 flex items-center justify-between group transition-all hover:bg-bg-secondary",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3.5 min-w-0", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-[9px] text-slate-600 font-bold shrink-0", children: (index + 1).toString().padStart(2, "0") }, void 0, false, {
                fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "relative shrink-0", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: app.iconUrl,
                    alt: app.name,
                    className: "w-12 h-12 rounded-xl object-contain border border-white/15",
                    referrerPolicy: "no-referrer"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                    lineNumber: 161,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-0.5 rounded-xl bg-brand-primary/5 blur-[2px]" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 167,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                lineNumber: 160,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic text-white group-hover:text-brand-primary transition-colors truncate m-0 leading-tight", children: app.name }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 171,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-[10px] font-bold text-slate-400", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary-light font-black", children: [
                    "Bonus: ",
                    app.bonus
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                    lineNumber: 175,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: "•" }, void 0, false, {
                    fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                    lineNumber: 176,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: [
                    "Min. Out: ",
                    app.minWithdrawal
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                    lineNumber: 177,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 174,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                lineNumber: 170,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                className: "flex items-center justify-center gap-1.5 px-4.5 py-3.5 bg-gradient-to-r from-brand-primary to-amber-500 hover:brightness-110 active:scale-95 text-black text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-md shrink-0",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5 stroke-[3]" }, void 0, false, {
                    fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                    lineNumber: 186,
                    columnNumber: 21
                  }, this),
                  "GET"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                lineNumber: 182,
                columnNumber: 19
              },
              this
            )
          ]
        },
        app.id,
        true,
        {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 145,
          columnNumber: 17
        },
        this
      )) : /* @__PURE__ */ jsxDEV("div", { className: "col-span-full py-20 text-center bg-bg-secondary/30 rounded-3xl border border-white/5", children: [
        /* @__PURE__ */ jsxDEV(ShieldAlert, { className: "w-12 h-12 text-slate-500 mx-auto mb-4" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-black uppercase text-slate-400", children: "No Apps Match Your Search" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 194,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-600 uppercase tracking-widest font-bold mt-1", children: "Try another search term above." }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 195,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              setSearchQuery("");
            },
            className: "mt-4 px-4 py-2 bg-brand-primary hover:bg-brand-primary-light text-black font-black text-xs uppercase rounded-lg shadow-md transition-colors",
            children: "Clear Search"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
            lineNumber: 196,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "mt-20 border-t border-white/5 pt-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black uppercase italic mb-6 tracking-wide text-brand-primary", children: "Explore Rummy Directory Silos" }, void 0, false, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/rummy-51-bonus",
              className: "bg-gradient-to-r from-amber-500/10 to-transparent border border-brand-primary/30 rounded-2xl p-6 hover:brightness-110 transition-all group",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary text-black text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded", children: "Special Silo Hub" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 219,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black uppercase italic text-white group-hover:text-brand-primary-light mt-2 mb-1", children: "₹51 Bonus Apps Only ➔" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 220,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 m-0 leading-relaxed font-semibold", children: "Looking only for the absolute highest signup bonus apps? Browse our landing page exclusively built for ₹51 register incentives." }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 223,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 215,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/",
              className: "bg-bg-secondary border border-white/10 rounded-2xl p-6 hover:border-brand-primary/30 transition-all group",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "bg-slate-800 text-slate-400 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded", children: "Parent Portal" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 232,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black uppercase italic text-white group-hover:text-brand-primary mt-2 mb-1", children: "Go to Recommended Hub ➔" }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 233,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 m-0 leading-relaxed font-semibold", children: "Access the visual table of India's Top 10 recommended rummy applications, with details, withdrawal speed audits, and premium rewards." }, void 0, false, {
                  fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
                  lineNumber: 236,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
              lineNumber: 228,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-black/40 py-8 px-4 border-t border-white/5 text-center text-[10px] uppercase tracking-wider text-slate-500 font-bold", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto space-y-2", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "This master directory list is for general informational and educational compilation purposes only." }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "© 2026 RummyBonusApps Directory. All trademarks belong to respective partners." }, void 0, false, {
        fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 246,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/AllRummyAppsPage.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function Rummy51BonusPage() {
  const bonus51Apps = useMemo(() => {
    return RUMMY_APPS.filter(
      (app) => app.bonus.includes("51") || app.bonus.toLowerCase().includes("51")
    );
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black pb-20", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Rummy 51 Bonus Apps List 2026 - Claim ₹51 Free SignUp Rewards" }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Looking for Rummy 51 Bonus Apps? Get the active curated list of all rummy apps providing ₹51 signup incentives. Double check guides and secure instant mobile cashouts." }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "Rummy 51 Bonus, Rummy 51 Bonus Apps, ₹51 Free Rummy bonus, Teen Patti 51 bonus games, All Rummy 51 bonus list" }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://www.rummybonusapps.com/rummy-51-bonus" }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "bg-bg-secondary/90 backdrop-blur-md border-b border-brand-primary/20 sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2 hover:text-brand-primary transition-colors text-slate-300 group", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-5 h-5 group-hover:-translate-x-1 transition-transform" }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-black uppercase tracking-wider", children: "Back to Hub" }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center gap-2 hover:opacity-90 transition-opacity", children: [
        /* @__PURE__ */ jsxDEV(Gift, { className: "w-5 h-5 text-brand-primary animate-pulse" }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-sm font-black uppercase italic tracking-widest text-[#fbbf24]", children: "RUMMY 51 BONUS PORTAL" }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex items-center gap-1", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-yellow-500 animate-ping" }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] uppercase font-bold tracking-widest text-brand-primary-light", children: "Promo Code Active" }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-16 bg-gradient-to-b from-amber-500/10 via-bg-secondary to-bg-dark border-b border-white/5 relative overflow-hidden text-center sm:text-left", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute right-0 bottom-0 w-96 h-96 bg-[#f59e0b]/5 blur-[130px] rounded-full" }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute left-10 top-10 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full" }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded-full text-brand-primary text-[9px] font-black uppercase tracking-widest mb-4", children: [
          /* @__PURE__ */ jsxDEV(Coins, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          " High-Yield VIP Segment Only"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-6xl font-black uppercase italic leading-none m-0 tracking-tight font-display text-white", children: [
          "RUMMY ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-amber-300", children: "51 BONUS" }, void 0, false, {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 65,
            columnNumber: 19
          }, this),
          " PLATFORMS"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-7xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4 mb-8", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black uppercase italic tracking-tight m-0 text-brand-primary flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "h-4 w-1.5 bg-brand-primary rounded" }, void 0, false, {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          " Curated ₹51 Signup Reward Tiers (",
          bonus51Apps.length,
          " Apps)"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: bonus51Apps.map((app) => {
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "bg-bg-secondary p-5 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all flex flex-col justify-between hover:scale-[1.01]",
              children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end items-center gap-4 mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary-light text-[9px] font-black uppercase px-2 py-0.5 rounded-full", children: "₹51 REWARD" }, void 0, false, {
                    fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                    lineNumber: 90,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                    lineNumber: 89,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3.5 mb-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "relative shrink-0", children: [
                      /* @__PURE__ */ jsxDEV(
                        "img",
                        {
                          src: app.iconUrl,
                          alt: app.name,
                          className: "w-14 h-14 rounded-xl object-contain border border-white/10",
                          referrerPolicy: "no-referrer"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                          lineNumber: 97,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-0.5 rounded-xl bg-brand-primary/10 blur-[1px]" }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 103,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                      lineNumber: 96,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black uppercase italic truncate text-white leading-tight mt-0.5 mb-1 group-hover:text-brand-primary", children: app.name }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                        [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-3 h-3 text-yellow-500 fill-current" }, i, false, {
                          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                          lineNumber: 111,
                          columnNumber: 29
                        }, this)),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase", children: "Verified" }, void 0, false, {
                          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                          lineNumber: 113,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 109,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                      lineNumber: 105,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                    lineNumber: 95,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 bg-black/25 rounded-xl p-3 border border-white/5 text-center mb-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] text-slate-500 font-bold uppercase block", children: "Withdrawal limit" }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 120,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-white font-black text-xs italic", children: app.minWithdrawal }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 121,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                      lineNumber: 119,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] text-slate-500 font-bold uppercase block", children: "Active downloads" }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 124,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary-light font-black text-xs italic", children: app.downloads }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 125,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                      lineNumber: 123,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                    lineNumber: 118,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                  lineNumber: 87,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                    onClick: (e) => e.stopPropagation(),
                    className: "w-full bg-gradient-to-r from-brand-primary to-amber-500 hover:brightness-110 active:scale-95 text-black font-black py-3 rounded-xl uppercase tracking-widest text-[10px] text-center transition-all flex items-center justify-center gap-1.5 font-sans",
                    children: [
                      /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5 stroke-[3]" }, void 0, false, {
                        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                        lineNumber: 135,
                        columnNumber: 21
                      }, this),
                      "DOWNLOAD SECURE APK"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                    lineNumber: 130,
                    columnNumber: 19
                  },
                  this
                )
              ]
            },
            app.id,
            true,
            {
              fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "bg-bg-secondary p-6 sm:p-10 rounded-3xl border border-white/5 mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl sm:text-2xl font-black uppercase italic text-brand-primary mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(FileText, { className: "w-5 h-5 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          " Comprehensive Guide: Claiming ₹51 Welcome Rewards Successfully"
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/70 leading-relaxed text-sm space-y-4", children: [
          /* @__PURE__ */ jsxDEV("p", { children: [
            "The ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Rummy 51 Bonus" }, void 0, false, {
              fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            " is highly regarded across India as the gold standard of sign-up incentives for skill-based gaming apps. By choosing certified ₹51 reward packages, players get an direct lobby buffer to participate in live Points and Pools tables. Here's what you need to master to ensure your sign-up credits are processed correctly by active gaming backends:"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 151,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 bg-black/20 p-5 rounded-2xl border border-white/5 font-semibold", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-black uppercase italic text-xs mb-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-green-400" }, void 0, false, {
                  fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this),
                " 1. Profile Verification (OTP Binding)"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 157,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 m-0 leading-relaxed", children: 'Most modern Rummy networks require binding an active cellular node. Upon launching the game, bypass the temporary Guest Mode and select "Instant Register Profile". Enter your 10-digit smartphone number and verify through the standard SMS OTP sequence to trigger the automatically credited ₹51.' }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 160,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 bg-black/20 p-5 rounded-2xl border border-white/5 font-semibold", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-black uppercase italic text-xs mb-1 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 text-green-400" }, void 0, false, {
                  fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                  lineNumber: 167,
                  columnNumber: 19
                }, this),
                " 2. One Account per Device Limits"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 166,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 m-0 leading-relaxed", children: "Anti-fraud algorithms detect device and IP telemetry blocks. If you register multiple profiles from a single phone, the bonus claims might be flagged and locked immediately. To keep your cashouts and UPI pipelines entirely secure, maintain only one exclusive member profile per app client." }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 169,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
              lineNumber: 165,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-12", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/all-rummy-apps",
            className: "bg-[#1e293b]/50 border border-white/10 rounded-2xl p-6 hover:border-brand-primary/30 transition-all group",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "bg-slate-800 text-slate-400 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded", children: "All Database Directory" }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 183,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black uppercase italic text-white group-hover:text-brand-primary mt-2 mb-1", children: "Browse Rummy Directory ➔" }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 184,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 m-0 leading-relaxed font-semibold", children: "Browse our complete master catalog search index of every Rummy and Teen Patti game thoroughly inside our directory." }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 187,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 179,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/",
            className: "bg-[#1a2333]/70 border border-brand-primary/25 rounded-2xl p-6 hover:brightness-110 transition-all group",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary text-black text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded", children: "Primary Hub" }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 196,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black uppercase italic text-white group-hover:text-brand-primary-light mt-2 mb-1", children: "View Top 10 Recommended ➔" }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 m-0 leading-relaxed font-semibold", children: "Go back to the homepage to see the highly optimized curated table of the premier rummy apps." }, void 0, false, {
                fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
                lineNumber: 200,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
            lineNumber: 192,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "border-t border-white/5 pt-8 pb-4 text-center text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-black/20", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto space-y-1", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "These real money table games involve financial risk. Under 18 gameplay is strictly restricted." }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "© 2026 RummyBonusApps. Free Sign up reward promotions list." }, void 0, false, {
        fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Rummy51BonusPage.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
const TOP_5_COMPARISON_APPS = [
  {
    id: "rummy-wealth",
    rank: 1,
    name: "Rummy Wealth",
    iconUrl: "/images/rummy_wealth_logo_v2_1779115748787.png",
    badge: "MOST POPULAR",
    badgeType: "hot",
    signupBonus: "₹51",
    bonusDetail: "Instant OTP Credit",
    minWithdrawal: "₹100",
    withdrawalDetail: "Instant UPI & Bank",
    rating: 5,
    reviewCount: "48.2K",
    apkSize: "38 MB",
    downloadLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    buttonTheme: "green",
    detailRoute: "/Rummy-Wealth"
  },
  {
    id: "teen-patti-master",
    rank: 2,
    name: "Teen Patti Master",
    iconUrl: "/images/rummy_master_logo_1779225326294.png",
    badge: "TOP PAYOUT",
    badgeType: "best",
    signupBonus: "₹41",
    bonusDetail: "Free Welcome Cash",
    minWithdrawal: "₹100",
    withdrawalDetail: "Zero Commission",
    rating: 4.9,
    reviewCount: "39.8K",
    apkSize: "42 MB",
    downloadLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    buttonTheme: "red",
    detailRoute: "/Teen-Patti-Master"
  },
  {
    id: "rummy-east",
    rank: 3,
    name: "Rummy East",
    iconUrl: "/images/rummy_east_logo_1779121095779.png",
    badge: "FAST CASHOUT",
    badgeType: "fast",
    signupBonus: "₹51",
    bonusDetail: "100% Free Signup",
    minWithdrawal: "₹100",
    withdrawalDetail: "24x7 IMPS / UPI",
    rating: 4.9,
    reviewCount: "35.4K",
    apkSize: "36 MB",
    downloadLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    buttonTheme: "green",
    detailRoute: "/Rummy-East"
  },
  {
    id: "rummy-royale",
    rank: 4,
    name: "Rummy Royale",
    iconUrl: "/images/royally_rummy_logo_1779120362517.png",
    badge: "VIP REWARDS",
    badgeType: "vip",
    signupBonus: "₹51",
    bonusDetail: "Daily Free Bonus",
    minWithdrawal: "₹100",
    withdrawalDetail: "Direct UPI Transfer",
    rating: 4.8,
    reviewCount: "29.1K",
    apkSize: "35 MB",
    downloadLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    buttonTheme: "red",
    detailRoute: "/Royally-Rummy"
  },
  {
    id: "rummy-gold",
    rank: 5,
    name: "Rummy Gold",
    iconUrl: "/images/Rummy_Gold.webp",
    badge: "ALL TIME FAVORITE",
    badgeType: "verified",
    signupBonus: "₹41",
    bonusDetail: "Live Cash Tables",
    minWithdrawal: "₹100",
    withdrawalDetail: "3 Min Auto Cashout",
    rating: 5,
    reviewCount: "52.7K",
    apkSize: "40 MB",
    downloadLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    buttonTheme: "green",
    detailRoute: "/Rummy-Gold"
  }
];
function TopRummyAppsComparisonTable() {
  const [mobileView, setMobileView] = useState("cards");
  const getBadgeStyle = (type) => {
    switch (type) {
      case "hot":
        return "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 border-red-500/40";
      case "best":
        return "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-400 border-yellow-500/40";
      case "fast":
        return "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40";
      case "vip":
        return "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/40";
      default:
        return "bg-brand-primary/20 text-brand-primary border-brand-primary/40";
    }
  };
  return /* @__PURE__ */ jsxDEV("section", { id: "comparison-table", className: "py-8 sm:py-12 bg-gradient-to-b from-[#0b1120] via-[#0f172a] to-[#0b1120] border-b border-white/10 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-brand-primary/10 blur-[130px] rounded-full pointer-events-none" }, void 0, false, {
      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" }, void 0, false, {
      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 -left-40 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" }, void 0, false, {
      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6 sm:mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(251,191,36,0.15)]", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-brand-primary animate-spin", style: { animationDuration: "4s" } }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 159,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "2026 Live High-Converting Ranking" }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Flame, { className: "w-3.5 h-3.5 text-red-400 animate-pulse" }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-4xl lg:text-5xl font-black uppercase italic text-white tracking-tight leading-tight", children: [
          "Top Rummy Apps ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-amber-400 to-yellow-300", children: "Comparison Table" }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 165,
            columnNumber: 28
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "max-w-3xl mx-auto mt-2.5 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed", children: "Compare signup bonus, minimum cashout limits, rating, and download 100% verified authentic APKs directly." }, void 0, false, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 text-[10px] sm:text-xs font-bold text-slate-400", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Instant UPI Withdrawal" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 176,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full border border-brand-primary/20", children: [
            /* @__PURE__ */ jsxDEV(Zap, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 179,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Free Signup ₹41 & ₹51" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 180,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20", children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 183,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "100% Virus & Malware Free" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 184,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex sm:hidden justify-center items-center gap-2 mt-5", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setMobileView("cards"),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${mobileView === "cards" ? "bg-brand-primary text-black shadow-md" : "bg-white/5 text-slate-400 border border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxDEV(Layers, { className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 198,
                  columnNumber: 15
                }, this),
                "Card View"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 190,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setMobileView("table"),
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${mobileView === "table" ? "bg-brand-primary text-black shadow-md" : "bg-white/5 text-slate-400 border border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxDEV(Table, { className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 209,
                  columnNumber: 15
                }, this),
                "Table View"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 201,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: `${mobileView === "cards" ? "hidden sm:block" : "block"} rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl bg-[#131b2e]/90 backdrop-blur-md overflow-hidden`, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto no-scrollbar sm:overflow-visible", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left border-collapse min-w-[700px] sm:min-w-full", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-[#1e293b]/90 border-b border-white/15 text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-black select-none", children: [
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-4 sm:px-6 w-16 text-center", children: "Rank" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 224,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-4 sm:px-6", children: "App Name & Logo" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-4 sm:px-6 text-center", children: "Signup Bonus" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 226,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-4 sm:px-6 text-center", children: "Min. Withdrawal" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 227,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-4 sm:px-6 text-center", children: "Rating" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 228,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-4 sm:px-6 text-center w-52", children: "Direct Download" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 229,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 223,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { className: "divide-y divide-white/10", children: TOP_5_COMPARISON_APPS.map((app) => {
            const isGreen = app.buttonTheme === "green";
            return /* @__PURE__ */ jsxDEV(
              "tr",
              {
                className: "hover:bg-[#1a253c] transition-all duration-200 group",
                children: [
                  /* @__PURE__ */ jsxDEV("td", { className: "py-4 sm:py-5 px-4 sm:px-6 text-center font-mono", children: /* @__PURE__ */ jsxDEV("div", { className: `w-8 h-8 mx-auto rounded-xl flex items-center justify-center font-black text-sm ${app.rank === 1 ? "bg-gradient-to-br from-amber-400 to-yellow-600 text-black shadow-md shadow-amber-500/20" : app.rank === 2 ? "bg-gradient-to-br from-slate-200 to-slate-400 text-black" : app.rank === 3 ? "bg-gradient-to-br from-amber-700 to-amber-900 text-white" : "bg-white/5 text-slate-300 border border-white/10"}`, children: [
                    "#",
                    app.rank
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 242,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 241,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { className: "py-4 sm:py-5 px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 sm:gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "relative shrink-0", children: [
                      /* @__PURE__ */ jsxDEV(
                        "img",
                        {
                          src: app.iconUrl,
                          alt: app.name,
                          className: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-white/15 shadow-md group-hover:scale-105 transition-transform",
                          referrerPolicy: "no-referrer"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                          lineNumber: 259,
                          columnNumber: 29
                        },
                        this
                      ),
                      app.rank === 1 && /* @__PURE__ */ jsxDEV("span", { className: "absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow animate-bounce", children: "#1" }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 266,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 258,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxDEV(
                          Link,
                          {
                            to: app.detailRoute,
                            className: "font-black uppercase italic text-white text-sm sm:text-base group-hover:text-brand-primary transition-colors tracking-tight hover:underline",
                            children: app.name
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                            lineNumber: 273,
                            columnNumber: 31
                          },
                          this
                        ),
                        app.badge && /* @__PURE__ */ jsxDEV("span", { className: `text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${getBadgeStyle(app.badgeType)}`, children: app.badge }, void 0, false, {
                          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                          lineNumber: 280,
                          columnNumber: 33
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 272,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mt-1 text-[10px] sm:text-[11px] text-slate-400 font-semibold", children: [
                        /* @__PURE__ */ jsxDEV("span", { children: [
                          "Size: ",
                          /* @__PURE__ */ jsxDEV("strong", { className: "text-slate-200", children: app.apkSize }, void 0, false, {
                            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                            lineNumber: 286,
                            columnNumber: 43
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                          lineNumber: 286,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-white/20", children: "•" }, void 0, false, {
                          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                          lineNumber: 287,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 flex items-center gap-0.5", children: [
                          /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-3 h-3" }, void 0, false, {
                            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                            lineNumber: 289,
                            columnNumber: 33
                          }, this),
                          " Safe APK"
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                          lineNumber: 288,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 285,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 271,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 257,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 256,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { className: "py-4 sm:py-5 px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-400/40 text-brand-primary-light font-black text-sm sm:text-lg italic shadow-inner", children: app.signupBonus }, void 0, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 299,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1", children: app.bonusDetail }, void 0, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 302,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 298,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 297,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { className: "py-4 sm:py-5 px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "font-black text-white text-sm sm:text-base italic", children: app.minWithdrawal }, void 0, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 311,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] sm:text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider mt-0.5 flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-2.5 h-2.5" }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 315,
                        columnNumber: 29
                      }, this),
                      app.withdrawalDetail
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 314,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 310,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 309,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { className: "py-4 sm:py-5 px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-0.5 text-yellow-400", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-3.5 h-3.5 fill-current" }, i, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 326,
                      columnNumber: 31
                    }, this)) }, void 0, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 324,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "mt-1 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "font-black text-xs text-white", children: app.rating.toFixed(1) }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 330,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-slate-400 font-semibold", children: [
                        "(",
                        app.reviewCount,
                        ")"
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 331,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 329,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 323,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 322,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { className: "py-4 sm:py-5 px-4 sm:px-6 text-center", children: [
                    /* @__PURE__ */ jsxDEV(
                      "a",
                      {
                        href: app.downloadLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-xl ${isGreen ? "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-black shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-[1.03]" : "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-red-600/30 hover:shadow-red-600/55 hover:scale-[1.03]"}`,
                        children: [
                          /* @__PURE__ */ jsxDEV(Download, { className: `w-4 h-4 stroke-[3] transition-transform group-hover/btn:-translate-y-0.5 ${isGreen ? "text-black" : "text-white"}` }, void 0, false, {
                            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                            lineNumber: 348,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { children: "DOWNLOAD NOW" }, void 0, false, {
                            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                            lineNumber: 351,
                            columnNumber: 27
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 338,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 flex items-center justify-center gap-1", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 354,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { children: "Instant APK Download" }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 355,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 353,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 337,
                    columnNumber: 23
                  }, this)
                ]
              },
              app.id,
              true,
              {
                fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                lineNumber: 236,
                columnNumber: 21
              },
              this
            );
          }) }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0e1424] px-6 py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-400 font-semibold", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1.5 text-white/80", children: [
            /* @__PURE__ */ jsxDEV(Award, { className: "w-4 h-4 text-brand-primary" }, void 0, false, {
              fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
              lineNumber: 368,
              columnNumber: 15
            }, this),
            "Rankings verified daily based on live withdrawal success rate & real user reviews."
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 367,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary font-bold", children: "⚡ 100% Instant UPI & Bank Transfer Supported" }, void 0, false, {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 371,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
          lineNumber: 366,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      mobileView === "cards" && /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-4 sm:hidden", children: TOP_5_COMPARISON_APPS.map((app) => {
        const isGreen = app.buttonTheme === "green";
        return /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-[#131b2e] rounded-2xl border border-white/15 p-4 relative overflow-hidden shadow-xl",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: `w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-black ${app.rank === 1 ? "bg-amber-400 text-black font-black" : "bg-white/10 text-white"}`, children: [
                    "#",
                    app.rank
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 392,
                    columnNumber: 23
                  }, this),
                  app.badge && /* @__PURE__ */ jsxDEV("span", { className: `text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${getBadgeStyle(app.badgeType)}`, children: app.badge }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 400,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 391,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 text-yellow-400 text-xs font-black", children: [
                  /* @__PURE__ */ jsxDEV(Star, { className: "w-3.5 h-3.5 fill-current" }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 407,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { children: app.rating.toFixed(1) }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 408,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-slate-400 font-medium", children: [
                    "(",
                    app.reviewCount,
                    ")"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 409,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 406,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                lineNumber: 390,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3.5 mb-3.5", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: app.iconUrl,
                    alt: app.name,
                    className: "w-14 h-14 rounded-2xl object-cover border border-white/15 shadow-md shrink-0",
                    referrerPolicy: "no-referrer"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 415,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxDEV(
                    Link,
                    {
                      to: app.detailRoute,
                      className: "font-black uppercase italic text-white text-base leading-tight block truncate hover:text-brand-primary",
                      children: app.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 422,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-[10px] text-slate-400 mt-1 font-semibold", children: [
                    /* @__PURE__ */ jsxDEV("span", { children: [
                      "Size: ",
                      /* @__PURE__ */ jsxDEV("strong", { className: "text-slate-200", children: app.apkSize }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 429,
                        columnNumber: 37
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 429,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-white/20", children: "•" }, void 0, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 430,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-3 h-3" }, void 0, false, {
                        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                        lineNumber: 432,
                        columnNumber: 27
                      }, this),
                      " Verified Safe"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 431,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 428,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 421,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                lineNumber: 414,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 bg-black/30 rounded-xl p-3 border border-white/5 mb-3.5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-center border-r border-white/10 pr-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase block mb-0.5", children: "SIGNUP BONUS" }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 441,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary-light font-black text-base italic block", children: app.signupBonus }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 444,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] text-slate-500 font-bold uppercase block", children: app.bonusDetail }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 447,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 440,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-center pl-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-slate-400 font-extrabold uppercase block mb-0.5", children: "MIN. CASHOUT" }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 453,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-white font-black text-base italic block", children: app.minWithdrawal }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 456,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] text-emerald-400 font-bold uppercase block", children: app.withdrawalDetail }, void 0, false, {
                    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                    lineNumber: 459,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 452,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                lineNumber: 439,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: app.downloadLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all ${isGreen ? "bg-gradient-to-r from-emerald-500 to-green-500 text-black shadow-emerald-500/20" : "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-600/30"}`,
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { className: `w-4 h-4 stroke-[3] ${isGreen ? "text-black" : "text-white"}` }, void 0, false, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 476,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: [
                      "DOWNLOAD APK & GET ",
                      app.signupBonus
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                      lineNumber: 477,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
                  lineNumber: 466,
                  columnNumber: 19
                },
                this
              )
            ]
          },
          app.id,
          true,
          {
            fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
            lineNumber: 385,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
        lineNumber: 381,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/TopRummyAppsComparisonTable.tsx",
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const mahaLootBanner = "/images/maha_loot_banner_1779179081106.png";
  const rozRummyBanner = "/images/roz_rummy_banner_1779179099457.png";
  const withdrawalProofBanner = "/images/withdrawal_proof_banner_1779179116289.png";
  const topRecommendedApps = useMemo(() => {
    const list = RUMMY_APPS.slice(0, 10);
    if (!searchQuery) return list;
    return list.filter((app) => app.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-bg-dark text-white selection:bg-brand-primary selection:text-black", children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Rummy Bonus Apps - Top 10 Recommended Rummy All Apk List 2026" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Welcome to RummyBonusApps.com, the premier structured Rummy Silo Hub. Download the Top 10 Recommended Rummy All Apk, check out our 100+ master directory list, or claim ₹51 rewards." }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: "Rummy Bonus Apps, Top 10 Rummy apps, Rummy All Apk download, Best Rummy bonuses 2026, ₹51 bonus rummy links, complete master rummy directory" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://rummybonusapps.com/" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV("nav", { className: "bg-bg-secondary border-b border-brand-primary/30 py-1.5", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "max-w-7xl mx-auto px-4 text-center flex justify-center items-center gap-3 hover:opacity-90 transition-opacity", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "/images/all_rummy_1to1_logo_1779225745385.png",
            alt: "Bonus Rummy Apps Logo",
            className: "h-10 sm:h-12 w-auto object-contain rounded-lg shadow-lg border border-brand-primary/20",
            referrerPolicy: "no-referrer"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 64,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-[10px] sm:text-lg font-black uppercase italic tracking-wider text-white", children: [
          "All Rummy Apps List: ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "Download Apk" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 71,
            columnNumber: 36
          }, this),
          " & Get ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary-light", children: "Free Bonus 2026" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 71,
            columnNumber: 99
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "bg-bg-dark border-b border-white/5 py-2", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-white/60", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:text-brand-primary transition-colors text-brand-primary font-black", children: "Home" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/rummy-51-bonus", className: "hover:text-brand-primary transition-colors font-black text-white", children: "₹51 BONUS" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.preventDefault();
                setIsDisclaimerOpen(true);
              },
              className: "hover:text-brand-primary transition-colors cursor-pointer uppercase font-black",
              children: "Disclaimer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 82,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.preventDefault();
                setIsContactOpen(true);
              },
              className: "hover:text-brand-primary transition-colors cursor-pointer uppercase font-black",
              children: "Contact"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 91,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative group w-full sm:w-64", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-primary transition-colors" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Search recommended...",
              className: "w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-3 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-primary/50 transition-all focus:bg-white/10",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 105,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { children: [
      /* @__PURE__ */ jsxDEV("section", { className: "relative pt-6 sm:pt-10 pb-6 bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#0f172a] border-b border-white/5 overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Verified 2026 Rummy Apps • Instant ₹51 & ₹41 Bonus" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 126,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tight text-white leading-tight", children: [
            "Best Rummy Bonus Apps ",
            /* @__PURE__ */ jsxDEV("br", { className: "hidden sm:inline" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 130,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-amber-400 to-yellow-300", children: "With Live Cashout Proof" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "max-w-2xl mx-auto mt-2.5 text-xs sm:text-sm text-slate-300 font-medium", children: "Download tested Rummy & Teen Patti APKs with guaranteed signup bonuses and instant UPI withdrawals directly to your bank account." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-center gap-3 mt-5", children: [
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#comparison-table",
                className: "bg-brand-primary hover:bg-brand-primary-light text-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-black stroke-[3]" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                  }, this),
                  "Top 5 Apps Comparison"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 142,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "https://www.junglehaan.vip/share/6IOe3xy=1538",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5 stroke-[3]" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                  }, this),
                  "Instant APK Download"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 149,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-6 bg-[#0f172a] border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-5 h-5 text-brand-primary" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-black uppercase tracking-[0.2em] text-white/80", children: "Hot Promotions" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://www.junglehaan.vip/share/6IOe3xy=1538",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-shrink-0 w-[280px] sm:w-[450px] aspect-[16/6] bg-gradient-to-br from-indigo-600 to-blue-800 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer block",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: mahaLootBanner,
                    alt: "Promotion 1",
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary text-black text-[8px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1", children: "Big Loot" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 184,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm sm:text-lg font-black uppercase italic leading-tight text-white drop-shadow-md", children: "New Maha Loot Teen Patti App - Get ₹41" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 185,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 183,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 172,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://www.junglehaan.vip/share/6IOe3xy=1538",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-shrink-0 w-[280px] sm:w-[450px] aspect-[16/6] bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer block",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: rozRummyBanner,
                    alt: "Promotion 2",
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 196,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-white/20 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1", children: "Free Bonus" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 202,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm sm:text-lg font-black uppercase italic leading-tight text-white drop-shadow-md", children: "Roz Rummy - Free ₹25 SignUp Bonus" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 203,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 201,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 190,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://www.junglehaan.vip/share/6IOe3xy=1538",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-shrink-0 w-[280px] sm:w-[450px] aspect-[16/6] bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer block",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: withdrawalProofBanner,
                    alt: "Promotion 3",
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 214,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "bg-white/20 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1", children: "Verified" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 220,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm sm:text-lg font-black uppercase italic leading-tight text-white drop-shadow-md", children: "₹51 Bonus with Live Withdrawal Proof" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 221,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 219,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 208,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TopRummyAppsComparisonTable, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 229,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "apps", className: "py-12 sm:py-16 bg-[#0f172a]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-4xl font-black uppercase italic text-white tracking-tight", children: "TOP 10 RUMMY APPS" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 235,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-[#131b2e] hidden md:block", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-[#1e293b]/55 border-b border-white/10 text-[10px] uppercase tracking-wider text-slate-400 font-extrabold select-none", children: [
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6 text-center w-16", children: "Rank" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 245,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6", children: "App Master Profile" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 246,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6 text-center w-36", children: "Stars Rating" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 247,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6 text-center w-36", children: "SignUp Bonus" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 248,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6 text-center w-36", children: "Min. Cashout" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6 text-center w-32", children: "Downloads" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "py-4 px-6 text-center w-40", children: "Safe Channel" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 244,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 243,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { className: "divide-y divide-white/5", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "popLayout", children: topRecommendedApps.map((app, index) => /* @__PURE__ */ jsxDEV(
            motion.tr,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0 },
              transition: { duration: 0.2, delay: index * 0.02 },
              className: "hover:bg-[#1a253c] transition-colors group cursor-default",
              children: [
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6 text-center font-mono text-sm font-black text-brand-primary", children: [
                  "#",
                  String(index + 1).padStart(2, "0")
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 266,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3.5", children: [
                  /* @__PURE__ */ jsxDEV(
                    "img",
                    {
                      src: app.iconUrl,
                      alt: app.name,
                      className: "w-11 h-11 rounded-xl object-contain border border-white/10 shadow-md transform group-hover:scale-105 transition-transform",
                      referrerPolicy: "no-referrer"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 273,
                      columnNumber: 29
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "font-black uppercase italic text-white text-sm group-hover:text-brand-primary-light transition-colors flex items-center gap-1.5", children: [
                      app.name,
                      app.isTrending && /* @__PURE__ */ jsxDEV("span", { className: "bg-red-500/10 border border-red-500/20 text-red-400 text-[8px] font-black uppercase px-1.5 py-0.5 rounded tracking-wide animate-pulse", children: "HOT" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 283,
                        columnNumber: 35
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 280,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider", children: "Client Approved Secure Link" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 288,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 279,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 272,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 271,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6 text-center", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-3.5 h-3.5 text-yellow-400 fill-yellow-400" }, i, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 299,
                    columnNumber: 31
                  }, this)) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 297,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-green-400 uppercase font-black tracking-widest block mt-1", children: "Verified Safe" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 302,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 296,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6 text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md text-brand-primary text-xs font-black uppercase italic", children: [
                  /* @__PURE__ */ jsxDEV(Coins, { className: "w-3 h-3 text-brand-primary-light" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 310,
                    columnNumber: 29
                  }, this),
                  app.bonus
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 309,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 308,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6 text-center font-black text-white italic text-sm", children: app.minWithdrawal }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 316,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6 text-center font-bold text-slate-400 text-xs", children: app.downloads }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 321,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "py-4 px-6 text-center", children: /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                    className: "w-full bg-gradient-to-r from-brand-primary to-amber-500 hover:brightness-110 active:scale-95 text-black font-black py-2.5 px-3 rounded-lg text-[10px] uppercase tracking-wider text-center transition-all inline-flex items-center justify-center gap-1.5 font-sans shadow-md",
                    children: [
                      /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5 stroke-[3]" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 331,
                        columnNumber: 29
                      }, this),
                      "GET LINK"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 327,
                    columnNumber: 27
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 326,
                  columnNumber: 25
                }, this)
              ]
            },
            app.id,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 257,
              columnNumber: 23
            },
            this
          )) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 255,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 254,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-4 md:hidden", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "popLayout", children: topRecommendedApps.map((app, index) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            className: "bg-[#131b2e] rounded-2xl border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "absolute top-3 right-4 font-mono text-xs font-black text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded border border-brand-primary/20", children: [
                "RANK #",
                String(index + 1).padStart(2, "0")
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 354,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3.5 items-center mb-4", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: app.iconUrl,
                    alt: app.name,
                    className: "w-12 h-12 rounded-xl object-contain border border-white/10",
                    referrerPolicy: "no-referrer"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 359,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-black uppercase italic text-white text-base leading-tight", children: app.name }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 366,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 mt-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-3 h-3 text-yellow-400 fill-yellow-400" }, i, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 371,
                    columnNumber: 29
                  }, this)) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 369,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 365,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 358,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-2 bg-black/20 rounded-xl p-3 border border-white/5 text-center mb-4 text-[10px] font-bold", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-slate-500 font-extrabold uppercase text-[8px] block mb-0.5", children: "BONUS" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 379,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary-light font-black uppercase italic", children: app.bonus }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 380,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 378,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-slate-500 font-extrabold uppercase text-[8px] block mb-0.5", children: "CASHOUT" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 383,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-white font-black italic", children: app.minWithdrawal }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 384,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 382,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-slate-500 font-extrabold uppercase text-[8px] block mb-0.5", children: "USERS" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 387,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-slate-400 font-black", children: app.downloads }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 388,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 386,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 377,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: app.id === "rummy-apple" ? "/uttam1" : `/${encodeURIComponent(app.name.replace(/\s+/g, "-"))}`,
                  className: "w-full bg-gradient-to-r from-brand-primary to-amber-500 text-black font-black py-3 rounded-xl uppercase tracking-widest text-[10px] text-center transition-all flex items-center justify-center gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4 stroke-[3]" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 396,
                      columnNumber: 23
                    }, this),
                    "DOWNLOAD SECURE APK"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 392,
                  columnNumber: 21
                },
                this
              )
            ]
          },
          app.id,
          true,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 346,
            columnNumber: 19
          },
          this
        )) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 344,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 343,
          columnNumber: 13
        }, this),
        topRecommendedApps.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "p-10 bg-[#131b2e] border border-white/10 rounded-2xl text-center max-w-lg mx-auto mt-6", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "w-10 h-10 text-slate-500 mx-auto mb-3" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 407,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-base font-black uppercase", children: "Not listed in Top 10" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 408,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 mt-2 font-semibold", children: "We only showcase our top 10 recommended apps on the Home hub. However, your game may be cataloged inside our comprehensive directories!" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 409,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: `/all-rummy-apps?q=${encodeURIComponent(searchQuery)}`,
              className: "mt-5 inline-flex items-center gap-1 bg-brand-primary text-black font-black text-xs px-5 py-3 rounded-lg shadow-md uppercase hover:brightness-110 transition-all",
              children: [
                'Search master list directory for "',
                searchQuery,
                '" ',
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-1" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 417,
                  columnNumber: 68
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 413,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 406,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 233,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-16 bg-gradient-to-b from-[#0e1423] to-[#0c0f1a] border-t border-b border-white/10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#141d30] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden group hover:border-brand-primary/40 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 blur-[80px] rounded-full" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 w-full", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 inline-block", children: "Silo Portal 01" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 437,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "my-4 rounded-2xl overflow-hidden border border-white/10 h-44 bg-[#0a0f1d] relative", children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: "/images/rummy_hero_banner_1779265218620.png",
                  alt: "Download All Rummy Apps",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  referrerPolicy: "no-referrer"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 442,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 flex flex-col justify-end", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "bg-brand-primary text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-md w-fit mb-1.5 font-sans", children: "100+ Games Live" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 449,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-black uppercase italic text-white leading-tight", children: "DOWNLOAD ALL RUMMY APPS TODAY" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 450,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 448,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 441,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 436,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/all-rummy-apps",
              className: "w-full bg-gradient-to-r from-brand-primary via-brand-primary-light to-yellow-400 hover:brightness-110 text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest text-center transition-all inline-flex items-center justify-center gap-2 mt-4 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 hover:scale-[1.02] active:scale-95 transform duration-300",
              children: [
                "ALL RUMMY APPS",
                /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4 text-black stroke-[3]" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 460,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 455,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 433,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#141d30] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden group hover:border-amber-500/40 transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-48 h-48 bg-amber-500/5 blur-[80px] rounded-full" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 466,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full", children: "Silo Portal 02" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 469,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl sm:text-2xl font-black uppercase italic text-white mt-4 mb-2 group-hover:text-brand-primary-light transition-colors", children: "₹51 Welcome Benefits Hub" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 473,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 font-semibold leading-relaxed mb-6", children: [
              "Filter by incentives size immediately! Jump directly to high-margin welcome apps that guarantee ",
              /* @__PURE__ */ jsxDEV("strong", { children: "exactly ₹51 on mobile OTP binding" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 478,
                columnNumber: 117
              }, this),
              " with calculated totals estimator rules."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 477,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 468,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/rummy-51-bonus",
              className: "w-full bg-gradient-to-r from-brand-primary to-amber-500 hover:brightness-110 text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest text-center transition-all inline-flex items-center justify-center gap-2",
              children: [
                "Access ₹51 Bonus Apps",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 stroke-[3]" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 487,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 482,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 465,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 431,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 428,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 427,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "about", className: "py-20 bg-[#0f172a]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b] rounded-[2rem] border border-white/5 p-6 sm:p-12 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px]" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 498,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-black uppercase italic mb-8", children: [
              "Why ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-brand-primary", children: "rummyBonusapps" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 502,
                columnNumber: 83
              }, this),
              "?"
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 502,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/10", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-5 h-5 text-brand-primary" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 506,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 505,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase tracking-wider mb-1", children: "Safe & Official APKs" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 509,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-white/40 text-xs", children: "We only list official download links from trusted publishers to ensure your safety." }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 510,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 508,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 504,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/10", children: /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-5 h-5 text-brand-primary" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 515,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 514,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase tracking-wider mb-1", children: "Instant Bonus Updates" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 518,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-white/40 text-xs", children: "Get real-time updates on latest bonus codes and promotional offers." }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 519,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 517,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 513,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 503,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 501,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-black/20 rounded-xl p-5 sm:p-8 border border-white/5", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg sm:text-xl font-black uppercase tracking-tighter mb-1", children: "Important Disclaimer" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 526,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white/20 text-[10px] font-bold uppercase tracking-widest", children: "Read Before Playing" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 527,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 525,
              columnNumber: 22
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-white/50 text-xs leading-relaxed mb-6 italic", children: "These games involve an element of financial risk and may be addictive. Players must be 18+ years of age. Please play responsibly and at your own risk. RummyBonus is an informational platform and not a gaming provider." }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 529,
              columnNumber: 22
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-[10px] font-black uppercase tracking-[0.2em]", children: "18+ Responsible Gaming" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 533,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 532,
              columnNumber: 22
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 524,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 500,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 497,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 496,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 495,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-12 bg-bg-dark border-t border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b]/50 rounded-3xl p-8 border border-white/5 mb-8", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-black uppercase italic mb-6 text-brand-primary", children: "Latest News & Rummy Tips" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 547,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxDEV(Link, { to: "/rummyblog1", className: "p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all group", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic group-hover:text-brand-primary mb-2", children: "The Ultimate Rummy Guide 2026" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 550,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 leading-relaxed line-clamp-2", children: "Complete list of all rummy apps and how to claim bonuses safely." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 551,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 549,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/rummyblog2", className: "p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all group", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic group-hover:text-brand-primary mb-2", children: "New Rummy App Today Update" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 554,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 leading-relaxed line-clamp-2", children: "Daily updated list of the newest rummy and teen patti apps." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 555,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 553,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/rummyblog3", className: "p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all group", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic group-hover:text-brand-primary mb-2", children: "Rummy 51 Bonus Secrets" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 558,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 leading-relaxed line-clamp-2", children: "How to claim and withdraw the ₹51 sign-up bonus from all apps." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 559,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 557,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/rummyblog4", className: "p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all group", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic group-hover:text-brand-primary mb-2", children: "Dragon vs Tiger Tricks" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 562,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 leading-relaxed line-clamp-2", children: "Master the 3x investment rule and win big in Dragon vs Tiger." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 563,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 561,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/rummyblog5", className: "p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all group", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic group-hover:text-brand-primary mb-2", children: "Teen Patti Kings Guide" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 566,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 leading-relaxed line-clamp-2", children: "Top variations and winning strategies for Teen Patti in 2026." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 567,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 565,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: "/rummyblog6", className: "p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all group", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase italic group-hover:text-brand-primary mb-2", children: "Yono Rummy Evolution" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 570,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-white/40 leading-relaxed line-clamp-2", children: "Why Yono Rummy is the most trusted series in the market today." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 571,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 569,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 548,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 546,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1e293b]/50 rounded-3xl p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-black uppercase italic mb-6 text-brand-primary", children: "Search All Rummy Apps & Rummy All Apk Download" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 577,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "prose prose-invert max-w-none text-white/40 text-xs leading-loose space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Welcome to the ultimate destination for ",
              /* @__PURE__ */ jsxDEV("strong", { children: "All Rummy Apps" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 580,
                columnNumber: 59
              }, this),
              ". If you are looking for ",
              /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apps" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 580,
                columnNumber: 115
              }, this),
              " with the best features, you've come to the right place. We provide ",
              /* @__PURE__ */ jsxDEV("strong", { children: "Rummy All Apk Download" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 580,
                columnNumber: 214
              }, this),
              " links that are 100% safe and verified. Whether you want ",
              /* @__PURE__ */ jsxDEV("strong", { children: "rummy bonus apps" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 580,
                columnNumber: 310
              }, this),
              " or searching for the latest ",
              /* @__PURE__ */ jsxDEV("strong", { children: "rummy 51 bonus" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 580,
                columnNumber: 372
              }, this),
              ", our comprehensive ",
              /* @__PURE__ */ jsxDEV("strong", { children: "all rummy app list" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 580,
                columnNumber: 423
              }, this),
              " has everything you need."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 579,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Discover the ",
              /* @__PURE__ */ jsxDEV("strong", { children: "new rummy app today" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 583,
                columnNumber: 32
              }, this),
              " and start your winning journey. We also feature popular ",
              /* @__PURE__ */ jsxDEV("strong", { children: "Teen Patti Game" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 583,
                columnNumber: 125
              }, this),
              " downloads and ",
              /* @__PURE__ */ jsxDEV("strong", { children: "Yono Rummy All Games" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 583,
                columnNumber: 172
              }, this),
              " for fans of skill-based gaming. Don't miss out on the ",
              /* @__PURE__ */ jsxDEV("strong", { children: "free signup bonus rummy" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 583,
                columnNumber: 264
              }, this),
              " offers available only for our users. Our ",
              /* @__PURE__ */ jsxDEV("strong", { children: "new rummy app 2026" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 583,
                columnNumber: 346
              }, this),
              " collection is updated daily to ensure you have access to ",
              /* @__PURE__ */ jsxDEV("strong", { children: "trending rummy games" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 583,
                columnNumber: 439
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 582,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Every ",
              /* @__PURE__ */ jsxDEV("strong", { children: "rummy game download" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 586,
                columnNumber: 25
              }, this),
              " on our platform comes with a guarantee of speed and reliability. We provide ",
              /* @__PURE__ */ jsxDEV("strong", { children: "live withdrawal proof rummy" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 586,
                columnNumber: 138
              }, this),
              " videos and screenshots to build trust with our community. When you ",
              /* @__PURE__ */ jsxDEV("strong", { children: "download all rummy downloads" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 586,
                columnNumber: 250
              }, this),
              " from our site, you get access to exclusive tournaments and high-stakes games."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 585,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 pt-4", children: [
              "All Rummy Apps",
              "Rummy All Apps",
              "Rummy All Apk Download",
              "rummy bonus apps",
              "rummy 51 bonus",
              "new rummy app today",
              "Teen Patti Game",
              "Yono Rummy All Games",
              "free signup bonus rummy",
              "new rummy app 2026",
              "all rummy app list",
              "rummy game download",
              "live withdrawal proof rummy",
              "download all rummy downloads",
              "trending rummy games"
            ].map((tag, i) => /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-brand-primary/30 transition-colors cursor-default", children: [
              "#",
              tag.replace(/\s+/g, "")
            ] }, i, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 595,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 588,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 578,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 576,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 545,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 544,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { id: "contact", className: "bg-black/50 py-6 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold", children: [
      /* @__PURE__ */ jsxDEV("span", { children: "© 2024 rummyBonusapps.com. All Rights Reserved." }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 608,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center items-center gap-6", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/all-rummy-apps", className: "hover:text-brand-primary text-slate-300 transition-colors font-black", children: "RUMMY DIRECTORY" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 610,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => setIsAboutOpen(true),
            className: "hover:text-brand-primary text-slate-300 transition-colors uppercase font-black cursor-pointer",
            children: "ABOUT"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 611,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => setIsDisclaimerOpen(true),
            className: "hover:text-brand-primary text-slate-300 transition-colors uppercase font-black cursor-pointer",
            children: "DISCLAIMER"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 618,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "hover:text-brand-primary cursor-pointer transition-colors", children: "T&C Apply" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 625,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "hover:text-brand-primary cursor-pointer transition-colors", children: "18+ Responsible Gaming" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 626,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "mailto:support@rummybonus.com", className: "hover:text-brand-primary transition-colors lowercase", children: "support@rummybonus.com" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 627,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setIsContactOpen(true),
            className: "flex items-center gap-1 hover:text-brand-primary transition-colors uppercase font-bold cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDEV(Send, { className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 632,
                columnNumber: 13
              }, this),
              "Telegram: @tech_apex"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 628,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 609,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 607,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isDisclaimerOpen && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-[100] flex items-center justify-center px-4", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsDisclaimerOpen(false),
          className: "absolute inset-0 bg-black/80 backdrop-blur-sm"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 642,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.9, y: 20 },
          className: "relative w-full max-w-2xl bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between p-4 border-b border-white/5", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black uppercase italic text-brand-primary", children: "Important Notice" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 656,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setIsDisclaimerOpen(false),
                  className: "p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white",
                  children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 661,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 657,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 655,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-8 space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed", children: "This website is an informational app landing page only. We do not own, operate, or provide any real-money gaming or gambling services." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 666,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed", children: "All third-party apps displayed or linked on this website are owned and operated by their respective owners. Any gameplay, deposits, withdrawals, or transactions are solely between users and the app operators." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 669,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed", children: "Playing games for real money involves financial risk and may be addictive. Users are advised to play responsibly and only if permitted by local laws." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 672,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed italic border-l-2 border-brand-primary pl-4 py-1", children: "By using this website, you acknowledge that you are using third-party services at your own risk." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 675,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 665,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setIsDisclaimerOpen(false),
                  className: "w-full bg-brand-primary text-black font-black py-4 rounded-xl shadow-lg shadow-brand-primary/20 uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all",
                  children: "I Understand & Accept"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 679,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 664,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 649,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 641,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 639,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isAboutOpen && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-[100] flex items-center justify-center px-4", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsAboutOpen(false),
          className: "absolute inset-0 bg-black/80 backdrop-blur-sm"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 695,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.9, y: 20 },
          className: "relative w-full max-w-2xl bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between p-4 border-b border-white/5", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black uppercase italic text-brand-primary", children: "About Us" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 709,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setIsAboutOpen(false),
                  className: "p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white",
                  children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 714,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 710,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 708,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-8 space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed", children: "allrummybonus.com is an independent app landing page that provides information and download links for third-party rummy and skill-based gaming applications for Android users." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 719,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed", children: "This website is designed to help users discover mobile gaming apps, view basic app details, and access publicly available download options in one place." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 722,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/80 text-sm leading-relaxed", children: "allrummybonus.com does not own, operate, or represent any of the mobile applications listed on this website. All app names, trademarks, and logos belong to their respective owners." }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 725,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 718,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setIsAboutOpen(false),
                  className: "w-full bg-brand-primary text-black font-black py-4 rounded-xl shadow-lg shadow-brand-primary/20 uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all",
                  children: "Close"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 729,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 717,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 702,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 694,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 692,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isContactOpen && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-[100] flex items-center justify-center px-4", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsContactOpen(false),
          className: "absolute inset-0 bg-black/80 backdrop-blur-sm"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 745,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.9, y: 20 },
          className: "relative w-full max-w-md bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between p-4 border-b border-white/5", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black uppercase italic text-brand-primary", children: "Contact Support" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 759,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setIsContactOpen(false),
                  className: "p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white",
                  children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 764,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 760,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 758,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8 text-center", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-primary/20", children: /* @__PURE__ */ jsxDEV(Send, { className: "w-10 h-10 text-brand-primary" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 769,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 768,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-black uppercase italic mb-2", children: "Telegram Support" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 771,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "mb-8 flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/40 text-xs uppercase tracking-widest font-bold", children: "Fastest response for queries" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 773,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-brand-primary text-[10px] uppercase font-black tracking-[0.2em] border border-brand-primary/20 bg-brand-primary/5 py-1 px-3 rounded-full self-center", children: "FOR BRANDS ONLY" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 774,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 772,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "https://t.me/tech_apex",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center justify-center gap-3 w-full bg-brand-primary text-black font-black py-4 rounded-xl shadow-lg shadow-brand-primary/20 uppercase tracking-widest text-sm hover:scale-[1.05] transition-all",
                  children: [
                    /* @__PURE__ */ jsxDEV(Send, { className: "w-5 h-5" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 783,
                      columnNumber: 19
                    }, this),
                    "Message @tech_apex"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 777,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]", children: "Available 24/7 for you" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 787,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 767,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 752,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 744,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 742,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
function AppRouteHandler() {
  const { appName } = useParams();
  if (appName && appName.startsWith("apexdin")) {
    const idStr = appName.replace("apexdin", "");
    const idVal = parseInt(idStr, 10);
    if (!isNaN(idVal) && idVal >= 1001 && idVal <= 1100) {
      return /* @__PURE__ */ jsxDEV(ApexdinLandingPage, { idOverride: idStr }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 806,
        columnNumber: 14
      }, this);
    }
  }
  return /* @__PURE__ */ jsxDEV(AppDetailPage, {}, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 810,
    columnNumber: 10
  }, this);
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function AppRoutes() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 826,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(HomePage, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 828,
        columnNumber: 34
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 828,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/all-rummy-apps", element: /* @__PURE__ */ jsxDEV(AllRummyAppsPage, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 830,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 830,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummy-51-bonus", element: /* @__PURE__ */ jsxDEV(Rummy51BonusPage, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 831,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 831,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/apex1", element: /* @__PURE__ */ jsxDEV(ApexdinLandingPage, { idOverride: "1" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 834,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 834,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/apex2", element: /* @__PURE__ */ jsxDEV(ApexdinLandingPage, { idOverride: "2" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 835,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 835,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/apex3", element: /* @__PURE__ */ jsxDEV(ApexdinLandingPage, { idOverride: "3" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 836,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 836,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/apex4", element: /* @__PURE__ */ jsxDEV(ApexdinLandingPage, { idOverride: "4" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 837,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 837,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/apex5", element: /* @__PURE__ */ jsxDEV(ApexdinLandingPage, { idOverride: "5" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 838,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 838,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/uttam1", element: /* @__PURE__ */ jsxDEV(DynamicUttamPage, { idOverride: "1538" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 839,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 839,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummyblog1", element: /* @__PURE__ */ jsxDEV(RummyBlogPage, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 841,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 841,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummyblog2", element: /* @__PURE__ */ jsxDEV(RummyBlog2, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 842,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 842,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummyblog3", element: /* @__PURE__ */ jsxDEV(RummyBlog3, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 843,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 843,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummyblog4", element: /* @__PURE__ */ jsxDEV(RummyBlog4, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 844,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 844,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummyblog5", element: /* @__PURE__ */ jsxDEV(RummyBlog5, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 845,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 845,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/rummyblog6", element: /* @__PURE__ */ jsxDEV(RummyBlog6, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 846,
        columnNumber: 44
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 846,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/:appName", element: /* @__PURE__ */ jsxDEV(AppRouteHandler, {}, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 847,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 847,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 827,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 825,
    columnNumber: 5
  }, this);
}
function render(url) {
  var _a, _b, _c, _d;
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsxDEV(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxDEV(StaticRouter, { location: url, children: /* @__PURE__ */ jsxDEV(AppRoutes, {}, void 0, false, {
      fileName: "/app/applet/src/entry-server.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/entry-server.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/entry-server.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  );
  let headTags = "";
  const helmet = helmetContext.helmet;
  if (helmet) {
    headTags = [
      ((_a = helmet.title) == null ? void 0 : _a.toString()) || "",
      ((_b = helmet.meta) == null ? void 0 : _b.toString()) || "",
      ((_c = helmet.link) == null ? void 0 : _c.toString()) || "",
      ((_d = helmet.script) == null ? void 0 : _d.toString()) || ""
    ].filter(Boolean).join("\n");
  }
  return { html, headTags };
}
export {
  render
};
