'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus, X, CheckCircle2, AlertTriangle, Link2, Sparkles,
  ChevronUp, ChevronDown, ListPlus, Download, HelpCircle,
  Search as SearchIcon, Star, FileText, Tag, Layers
} from 'lucide-react';
 /* ── Alert Modal ── */
function AlertModal({ show, type, title, message, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            type === 'success' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'
          }`}>
            {type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white">{title}</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{message}</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition shrink-0 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 mt-4">
          {type === 'success' && (
            <button onClick={() => { onClose(); window.location.href = '/admin/apps'; }}
              className="flex-1 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/[0.08] transition">
              View All Apps
            </button>
          )}
          <button onClick={onClose} className={`${type === 'success' ? 'flex-1' : 'w-full'} py-2.5 rounded-xl text-sm font-semibold transition-all ${
            type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20'
              : 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20'
          }`}>
            {type === 'success' ? 'Add Another' : 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Default Data Generators ── */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* ── DESCRIPTION GENERATOR (ANTI-DUPLICATE) ── */
const getDefaultDescription = (name, category, bonus) => {
  const n = name || "This App";
  const b = bonus || "₹100";
  const cat = category || "rummy";

  const intros = [
    `${n} is one of the fastest-growing ${cat} gaming platforms in India that allows users to earn real cash while playing.`,
    `If you're looking for a trusted ${cat} earning app, ${n} is currently trending among Indian players.`,
    `${n} has quickly gained popularity as a reliable real money gaming app with smooth gameplay and instant rewards.`,
    `${n} is designed for players who want both entertainment and real cash winnings in one place.`,
  ];

  const features = [
    `The platform offers multiple game modes, low entry tables, and high-reward competitions for both beginners and pro users.`,
    `Users can enjoy seamless gameplay with optimized performance even on low-end devices and slow networks.`,
    `With fast servers and smooth UI, the experience remains lag-free during gameplay sessions.`,
  ];

  const security = [
    `${n} uses secure payment systems with SSL encryption and fair gameplay algorithms.`,
    `All transactions are protected with advanced security layers and verified payment gateways.`,
    `The app ensures fair results using certified RNG systems and transparent gameplay.`,
  ];

  const withdrawal = [
    `Players can withdraw their earnings instantly using UPI, Paytm, or bank transfer.`,
    `Withdrawal requests are processed quickly, usually within minutes.`,
    `The minimum withdrawal is low, making it easy for users to cash out anytime.`,
  ];

  const closing = [
    `Additionally, the referral program allows users to earn passive income by inviting friends.`,
    `With regular bonuses, login rewards, and cashback offers, users always have earning opportunities.`,
    `${n} continues to attract new users daily due to its fast withdrawals and rewarding system.`,
  ];

  return `
${pick(intros)}

${pick(features)}

New users get a welcome bonus of ${b}, along with daily login rewards and deposit offers.

${pick(security)}

${pick(withdrawal)}

${pick(closing)}
  `.trim();
};

/* ── FAQ GENERATOR (RANDOMIZED) ── */
const getDefaultFaqs = (name, bonus, minWithdrawal) => {
  const n = name || "this app";
  const b = bonus || "₹100";
  const min = minWithdrawal || "₹100";

  const faqPool = [
    {
      q: `What is ${n} and how does it work?`,
      a: `${n} is a real money gaming app where users can play skill-based games and earn cash rewards. It offers multiple game modes, secure transactions, and a smooth user experience for both beginners and advanced players.`
    },
    {
      q: `How to download ${n} APK safely?`,
      a: `To download ${n}, click the official link, install the APK file, and register using your mobile number. Make sure to enable unknown sources in your device settings before installation.`
    },
    {
      q: `What is the minimum withdrawal in ${n}?`,
      a: `The minimum withdrawal amount in ${n} is ${min}. Users can withdraw their earnings instantly through UPI, Paytm, or bank transfer.`
    },
    {
      q: `Is ${n} real or fake?`,
      a: `${n} is a trusted platform used by thousands of players. It provides secure payments, fast withdrawals, and fair gameplay systems.`
    },
    {
      q: `How can I earn money from ${n}?`,
      a: `You can earn money by playing games, winning matches, participating in events, and using the referral program to invite friends.`
    },
    {
      q: `Does ${n} provide a welcome bonus?`,
      a: `Yes, new users get a welcome bonus of ${b} after registration. Additional rewards are available through login bonuses and promotions.`
    },
    {
      q: `Is ${n} safe to use?`,
      a: `${n} uses encrypted payment systems and secure login methods to protect user data and transactions.`
    },
    {
      q: `How long do withdrawals take in ${n}?`,
      a: `Withdrawals in ${n} are typically processed within 10-30 minutes. VIP users get priority processing within 5 minutes.`
    },
    {
      q: `Can I play ${n} without depositing money?`,
      a: `Yes, you can use the welcome bonus and daily login rewards to play games without making an initial deposit.`
    },
    {
      q: `What games are available in ${n}?`,
      a: `${n} offers rummy, teen patti, slots, bingo, and arcade games. New games are added regularly.`
    },
    {
      q: `Does ${n} have a referral program?`,
      a: `Yes, you can earn up to 25% commission on your friends' deposits. Referral rewards are credited instantly to your wallet.`
    },
    {
      q: `Is ${n} available for iOS?`,
      a: `Currently ${n} is optimized for Android devices. iOS users can access via web browser.`
    },
    {
      q: `How do I contact ${n} customer support?`,
      a: `You can contact support via in-app live chat 24/7 or email support@${n.toLowerCase().replace(/ /g, '')}.com.`
    },
    {
      q: `What is the maximum withdrawal limit in ${n}?`,
      a: `Standard users can withdraw up to ₹50,000 per day. VIP members have limits up to ₹5,00,000 per day.`
    },
    {
      q: `Does ${n} have daily bonuses?`,
      a: `Yes, daily login bonuses, streak rewards, and free spins are available for active players.`
    },
    {
      q: `Is KYC required for withdrawal in ${n}?`,
      a: `Basic mobile verification is enough for withdrawals up to ₹10,000. For larger amounts, simple KYC is required.`
    },
    {
      q: `Can I play ${n} on multiple devices?`,
      a: `Yes, you can log in to your account on multiple devices, but only one device can be active at a time.`
    }
  ];

  // Shuffle function
  const shuffled = [...faqPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return random 5-6 FAQs
  const count = Math.floor(Math.random() * 2) + 5; // 5 or 6
  return shuffled.slice(0, count).map(f => ({ question: f.q, answer: f.a }));
};
/* ── FEATURES GENERATOR (NO DUPLICATE) ── */
const getDefaultFeatures = () => {
  const pool = [
    // Payment & Withdrawal (8)
    "Instant UPI Withdrawal",
    "Fast Bank Transfer",
    "Zero Fee Transactions",
    "24/7 Withdrawal Available",
    "Multiple Payment Options",
    "Auto Cashout Feature",
    "Same Day Payouts",
    "No Hidden Charges",

    // Bonuses & Rewards (8)
    "Daily Login Rewards",
    "Refer & Earn Commission",
    "Welcome Bonus Available",
    "Weekly Cashback Offers",
    "Festival Bonus Events",
    "Lucky Spin Rewards",
    "VIP Exclusive Bonuses",
    "Streak Bonus Rewards",

    // Game Features (8)
    "Low Entry Tables",
    "High Reward Matches",
    "Multiple Game Variants",
    "Private Tables for Friends",
    "Practice Mode Available",
    "Tournament Entry",
    "Live Dealer Games",
    "Quick Match Making",

    // Technical & Security (8)
    "Smooth Gameplay",
    "Secure Payments",
    "Anti-Cheat System",
    "Data Encryption",
    "Low Data Usage",
    "Lightweight App",
    "Regular Updates",
    "Fast Loading Time",

    // Support & Community (8)
    "24/7 Customer Support",
    "Hindi Language Support",
    "Multi Language UI",
    "Player Community Chat",
    "Dedicated VIP Manager",
    "Email Support Available",
    "Live Chat Support",
    "FAQ & Help Center"
  ];

  // Shuffle function
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return random 6-8 features
  const count = Math.floor(Math.random() * 3) + 6; // 6, 7, or 8
  return shuffled.slice(0, count);
};

/* ── HOW TO DOWNLOAD (DYNAMIC) ── */
const getDefaultHowToDownload = (appName, bonus) => {
  const stepsSet = [
    [
      `Click the "Download ${appName}" button to get the APK file`,
      `Enable "Install from Unknown Sources" in your phone's Security settings`,
      `Open the downloaded APK file from your notification panel`,
      `Tap "Install" and wait for the installation to complete`,
      `Open ${appName} from your home screen after installation`,
      `Tap "Register" and enter your mobile number to create an account`,
      `Enter the OTP sent to your phone to verify your number`,
      `Your ${bonus} welcome bonus will be credited to your wallet instantly`
    ],
    [
      `Tap the green "Download ${appName}" button to start downloading`,
      `Go to Settings > Security and enable "Unknown Sources"`,
      `Swipe down and tap on the downloaded ${appName} APK file`,
      `Press "Install" and wait a few seconds for the process to finish`,
      `Tap "Open" to launch ${appName} on your device`,
      `Click "Sign Up" and type your mobile number`,
      `Enter the OTP received via SMS to verify your account`,
      `${bonus} welcome bonus will be added to your wallet automatically`
    ],
    [
      `Click the "Get ${appName}" button to download the official APK`,
      `Enable "Unknown Sources" in Settings > Security > Unknown Sources`,
      `Locate the downloaded file in your file manager`,
      `Tap on the file and select "Install" to begin`,
      `Wait a few seconds for installation to complete`,
      `Open ${appName} by tapping "Open" on the installation screen`,
      `Click "Register" and enter your mobile number`,
      `Enter OTP to verify and get ${bonus} welcome bonus instantly`
    ],
    [
      `Click the "Install ${appName}" button to get the APK file`,
      `Go to Settings > Security and enable "Install from Unknown Sources"`,
      `Find the downloaded ${appName.toLowerCase().replace(/ /g, '-')}.apk in your Downloads folder`,
      `Tap the file and press "Install" to start`,
      `After installation, tap "Open" to launch ${appName}`,
      `Tap "Sign Up" and enter your mobile number`,
      `Enter the OTP code sent via SMS to verify`,
      `Your ${bonus} welcome bonus will be credited automatically`
    ],
    [
      `Click the "${appName} Download" button to save the APK file`,
      `Enable "Unknown Sources" in your device's Security settings`,
      `Open the downloaded APK file and tap "Install"`,
      `Wait for installation to complete (10-15 seconds)`,
      `Tap "Open" once installation is complete to launch ${appName}`,
      `Click "Register" and enter your mobile number`,
      `Enter the OTP sent to your mobile number for verification`,
      `${bonus} welcome bonus will be added to your main wallet instantly`
    ],
    [
      `Click the "Download ${appName}" button to get the APK file`,
      `Allow installation from unknown sources in Settings > Security`,
      `Open the downloaded APK file from your notification bar`,
      `Tap "Install" and wait for the installation to complete`,
      `Launch ${appName} from your app drawer or home screen`,
      `Tap "New User? Register" and enter your mobile number`,
      `Enter the OTP code sent via SMS to verify your account`,
      `Your ${bonus} welcome bonus will be credited automatically`
    ],
    [
      `Click the "${appName} APK Download" button to start`,
      `Enable "Unknown Sources" in your phone's security settings`,
      `Tap on the downloaded APK file to begin installation`,
      `Press "Install" and wait for the process to finish`,
      `Open ${appName} by tapping "Open" after installation`,
      `Register using your mobile number (OTP verification required)`,
      `Enter the OTP sent to your phone to verify your identity`,
      `${bonus} welcome bonus will be added to your wallet instantly`
    ],
    [
      `Click the "${appName} Install" button to download APK`,
      `Go to Settings > Security > Enable "Unknown Sources"`,
      `Locate the APK in your Downloads folder or notification panel`,
      `Tap the file and select "Install" to proceed`,
      `After installation, tap "Open" to launch ${appName}`,
      `Click "Sign Up" and enter your active mobile number`,
      `Request OTP and enter the code received via SMS`,
      `Your ${bonus} welcome bonus will be credited automatically`
    ],
    [
      `Click the "Get ${appName}" button to download the APK file`,
      `Enable installation from unknown sources in your device settings`,
      `Open the downloaded APK file from your file manager`,
      `Tap "Install" and wait a few seconds for completion`,
      `Launch ${appName} by tapping "Open" on the installation screen`,
      `Register with your mobile number (OTP verification required)`,
      `Enter the verification code sent to your phone via SMS`,
      `${bonus} welcome bonus will be instantly credited to your wallet`
    ],
    [
      `Click the "${appName} Download" button to get the APK`,
      `Enable "Unknown Sources" in Settings > Security`,
      `Find the downloaded APK in your notification panel`,
      `Tap the file and press "Install" to begin`,
      `Wait for installation to complete (10-15 seconds)`,
      `Tap "Open" to launch ${appName} on your device`,
      `Click "Register" and enter your mobile number`,
      `Enter the OTP sent to your phone to get ${bonus} welcome bonus`
    ]
  ];

  const randomIndex = Math.floor(Math.random() * stepsSet.length);
  return stepsSet[randomIndex];
};

/* ── SEO GENERATOR (LONG-TAIL HEAVY) ── */
const getDefaultSeo = (name, bonus, category) => {
  const n = name || "App";
  const b = bonus || "₹100";
  const cat = category || "rummy";
  const clean = n.toLowerCase();

  return {
    metaTitle: `${n} APK Download - ${b} Signup Bonus | All Yono Max - Real Cash`,
    metaDescription: `Download ${n} APK and get ${b} signup bonus. Play skill based games, instant withdrawal, real earning app 2026.`,
    keywords: [
      `${clean} apk download`,
      `${clean} app download`,
      `${clean} real or fake`,
      `${clean} earning app`,
      `${clean} withdrawal proof`,
      `${clean} referral code`,
      `${clean} latest version`,
      `${clean} bonus`,
      `${clean} review`,
      `${clean} real money app`,
      `${clean} apk 2026`,
    ],
  };
};

const initialFormData = {
  name: '', category: 'rummy', referLink: '', bonus: `₹${getRandomNumber(51, 201)}`, minWithdrawal: '₹100',
  appSize: `${getRandomNumber(40, 70)}MB`, rating: `4.${getRandomNumber(0, 7)}`, totalDownloads: `${getRandomNumber(200, 990)}K+`, description: '',
  isNew: true, isTrending: false, features: [], howToDownload: [],
  faq: [{ question: '', answer: '' }], metaTitle: '', metaDescription: '', keywords: [],
};

/* ── Section Header ── */
function SectionHeader({ icon: Icon, color, title, count, isOpen, onToggle }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2">
        <span className={`w-7 h-7 rounded-lg bg-${color}/10 text-${color} flex items-center justify-center`}><Icon className="w-3.5 h-3.5" /></span>
        {title}
        {count !== undefined && <span className="text-[11px] text-slate-500 font-normal">({count})</span>}
      </h2>
      {onToggle && (
        <button type="button" onClick={onToggle} className="text-slate-500 hover:text-white transition p-1">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
}

export default function AddApp() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', title: '', message: '' });
  const [collapsed, setCollapsed] = useState({ features: false, howToDownload: false, faq: false, seo: false });

  const toggle = (key) => setCollapsed(p => ({ ...p, [key]: !p[key] }));

  const handleNameChange = (value) => {
    const seo = getDefaultSeo(value, formData.bonus, formData.category);

    setFormData(prev => ({
      ...prev,
      name: value,
      description: getDefaultDescription(value, prev.category, prev.bonus),
      faq: getDefaultFaqs(value, prev.bonus, prev.minWithdrawal),
      features: getDefaultFeatures(prev.category),
      howToDownload: getDefaultHowToDownload(value, prev.bonus),
      ...seo,
    }));
  };

  const handleCategoryChange = (value) => {
    const seo = getDefaultSeo(formData.name, formData.bonus, value);
    setFormData(prev => ({
      ...prev,
      category: value,
      features: getDefaultFeatures(value),
      description: getDefaultDescription(prev.name, value, prev.bonus),
      ...seo,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'name') { handleNameChange(value); return; }
    if (name === 'category') { handleCategoryChange(value); return; }
    if (name === 'bonus') {
      const seo = getDefaultSeo(formData.name, value, formData.category);
      setFormData(prev => ({ ...prev, bonus: value, ...seo })); return;
    }
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFaqChange = (i, field, val) => { const faq = [...formData.faq]; faq[i][field] = val; setFormData(prev => ({ ...prev, faq })); };
  const addFaq = () => setFormData(prev => ({ ...prev, faq: [...prev.faq, { question: '', answer: '' }] }));
  const removeFaq = (i) => setFormData(prev => ({ ...prev, faq: prev.faq.filter((_, idx) => idx !== i) }));

  const handleFeatureChange = (i, val) => { const f = [...formData.features]; f[i] = val; setFormData(prev => ({ ...prev, features: f })); };
  const addFeature = () => setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));
  const removeFeature = (i) => setFormData(prev => ({ ...prev, features: prev.features.filter((_, idx) => idx !== i) }));

  const handleStepChange = (i, val) => { const s = [...formData.howToDownload]; s[i] = val; setFormData(prev => ({ ...prev, howToDownload: s })); };
  const addStep = () => setFormData(prev => ({ ...prev, howToDownload: [...prev.howToDownload, ''] }));
  const removeStep = (i) => setFormData(prev => ({ ...prev, howToDownload: prev.howToDownload.filter((_, idx) => idx !== i) }));

  const handleKeywords = (e) => setFormData(prev => ({ ...prev, keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k) }));

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true);
    if (!formData.name.trim()) { setAlert({ show: true, type: 'error', title: 'Validation Error', message: 'App name is required.' }); setLoading(false); return; }
    const slug = formData.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    const metaTitle = formData.metaTitle || `${formData.name} APK Download — ${formData.bonus} Bonus | AllYonoMax`;
    const metaDescription = formData.metaDescription || `Download ${formData.name} APK and get ${formData.bonus} sign up bonus. Instant UPI withdrawal.`;
    try {
      const res = await fetch('/api/admin/apps', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, slug, metaTitle, metaDescription }) });
      const data = await res.json();
      if (data.success) {
        setAlert({ show: true, type: 'success', title: 'App Added!', message: `"${formData.name}" has been added successfully.${data.icon ? ` Icon saved: ${data.icon}` : ' No icon was downloaded — add one manually.'}` });
        setFormData(initialFormData);
      } else setAlert({ show: true, type: 'error', title: 'Error', message: data.error || 'Something went wrong.' });
    } catch { setAlert({ show: true, type: 'error', title: 'Network Error', message: 'Could not connect to server. Please try again.' }); }
    setLoading(false);
  };

  const inputCls = "w-full px-4 py-2.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition bg-white/5 text-white text-sm placeholder-slate-500";

  return (
    <div className="max-w-3xl mx-auto">
      <AlertModal {...alert} onClose={() => setAlert(p => ({ ...p, show: false }))} />

      {/* Auto hint */}
      <div className="mb-5 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium flex items-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0" /> <span>Type the <strong>App Name</strong> and all fields auto-fill with smart defaults. You can customize anything.</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Basic Info */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Layers} color="red-500" title="Basic Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">App Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" value={formData.name || ""} onChange={handleChange} placeholder="e.g., Joy Rummy" className={inputCls} required />
              {formData.name && <p className="text-[11px] text-slate-500 mt-1">Slug: /{formData.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className={inputCls}>
                {['rummy', 'slots', 'teen-patti', 'casino', 'bingo', 'arcade', 'spin', 'all'].map(c => (
                  <option key={c} value={c} className="bg-[#12121a]">{c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Game Details */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Star} color="sky-500" title="Game Details" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Bonus', name: 'bonus', placeholder: '₹550' },
              { label: 'Min Withdrawal', name: 'minWithdrawal', placeholder: '₹100' },
              { label: 'App Size', name: 'appSize', placeholder: '65MB' },
              { label: 'Rating', name: 'rating', placeholder: '4.6', type: 'number', step: '0.1', min: '0', max: '5' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">{f.label}</label>
                <input type={f.type || 'text'} name={f.name} value={formData[f.name] || ""} onChange={handleChange} placeholder={f.placeholder} step={f.step} min={f.min} max={f.max} className={inputCls} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Total Downloads</label>
              <input type="text" name="totalDownloads" value={formData.totalDownloads || ""} onChange={handleChange} placeholder="250K+" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Refer Link</label>
              <input type="text" name="referLink" value={formData.referLink || ""} onChange={handleChange} placeholder="https://example.com/?code=abc123" className={inputCls} />
              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1"><Link2 className="w-3 h-3" /> Icon auto-downloaded from this domain</p>
            </div>
          </div>
        </div>

        {/* Flags */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Tag} color="amber-500" title="Flags" />
          <div className="flex gap-6">
            {[
              { name: 'isNew', label: 'New App', color: 'text-orange-400' },
              { name: 'isTrending', label: 'Trending', color: 'text-emerald-400' },
            ].map(f => (
              <label key={f.name} className="flex items-center gap-2.5 cursor-pointer group">
                <input type="checkbox" name={f.name} checked={formData[f.name]} onChange={handleChange} className="w-4 h-4 rounded bg-white/5 border-white/20 text-red-600 focus:ring-red-500/30" />
                <span className={`text-sm ${f.color} group-hover:brightness-125 transition`}>{f.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={FileText} color="emerald-500" title="Description" />
          <textarea name="description" value={formData.description || ""} onChange={handleChange} rows="5" placeholder="Auto-generated when you type app name…" className={inputCls + " resize-y"} />
          {formData.description && <p className="text-[11px] text-slate-500 mt-1">{formData.description.length} characters</p>}
        </div>

        {/* Features */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={ListPlus} color="pink-500" title="Features" count={formData.features.length} isOpen={!collapsed.features} onToggle={() => toggle('features')} />
          {!collapsed.features && (
            <>
              <div className="space-y-2">
                {formData.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">{i + 1}</span>
                    <input type="text" value={feat || ""} onChange={(e) => handleFeatureChange(i, e.target.value)} placeholder="Feature name" className={inputCls} />
                    <button type="button" onClick={() => removeFeature(i)} className="text-rose-400 hover:text-rose-300 transition shrink-0 p-1"><X className="w-3.5 h-3.5" /></button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={addFeature} className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition font-medium">
                <Plus className="w-3.5 h-3.5" /> Add Feature
              </button>
            </>
          )}
        </div>

        {/* How To Download */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Download} color="orange-500" title="How To Download Steps" count={formData.howToDownload.length} isOpen={!collapsed.howToDownload} onToggle={() => toggle('howToDownload')} />
          {!collapsed.howToDownload && (
            <>
              <div className="space-y-2">
                {formData.howToDownload.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">{i + 1}</span>
                    <input type="text" value={step || ""} onChange={(e) => handleStepChange(i, e.target.value)} placeholder={`Step ${i + 1}`} className={inputCls} />
                    {formData.howToDownload.length > 1 && <button type="button" onClick={() => removeStep(i)} className="text-rose-400 hover:text-rose-300 transition shrink-0 p-1"><X className="w-3.5 h-3.5" /></button>}
                  </div>
                ))}
              </div>
              <button type="button" onClick={addStep} className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition font-medium">
                <Plus className="w-3.5 h-3.5" /> Add Step
              </button>
            </>
          )}
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={HelpCircle} color="violet-500" title="FAQs" count={formData.faq.length} isOpen={!collapsed.faq} onToggle={() => toggle('faq')} />
          {!collapsed.faq && (
            <>
              <div className="space-y-3">
                {formData.faq.map((faq, i) => (
                  <div key={i} className="border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-slate-500">FAQ #{i + 1}</span>
                      {formData.faq.length > 1 && (
                        <button type="button" onClick={() => removeFaq(i)} className="inline-flex items-center gap-1 text-rose-400 text-xs hover:text-rose-300 transition"><X className="w-3 h-3" /> Remove</button>
                      )}
                    </div>
                    <input type="text" placeholder="Question" value={faq.question || ""} onChange={(e) => handleFaqChange(i, 'question', e.target.value)} className={inputCls + " mb-2"} />
                    <textarea placeholder="Answer" value={faq.answer || ""} onChange={(e) => handleFaqChange(i, 'answer', e.target.value)} rows="2" className={inputCls + " resize-y"} />
                  </div>
                ))}
              </div>
              <button type="button" onClick={addFaq} className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition font-medium">
                <Plus className="w-3.5 h-3.5" /> Add FAQ
              </button>
            </>
          )}
        </div>

        {/* SEO */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={SearchIcon} color="cyan-500" title="SEO Settings" isOpen={!collapsed.seo} onToggle={() => toggle('seo')} />
          {!collapsed.seo && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Title</label>
                <input type="text" name="metaTitle" value={formData.metaTitle || ""} onChange={handleChange} placeholder="Auto-generated" className={inputCls} />
                {formData.metaTitle && <p className={`text-[11px] mt-1 ${formData.metaTitle.length > 60 ? 'text-amber-400' : 'text-slate-500'}`}>{formData.metaTitle.length}/60 chars {formData.metaTitle.length > 60 && '⚠ too long'}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Description</label>
                <textarea name="metaDescription" value={formData.metaDescription || ""} onChange={handleChange} rows="2" placeholder="Auto-generated" className={inputCls + " resize-y"} />
                {formData.metaDescription && <p className={`text-[11px] mt-1 ${formData.metaDescription.length > 160 ? 'text-amber-400' : 'text-slate-500'}`}>{formData.metaDescription.length}/160 chars {formData.metaDescription.length > 160 && '⚠ too long'}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Keywords (comma separated)</label>
                <input type="text" value={formData.keywords.join(', ')} onChange={handleKeywords} placeholder="app name apk, app name download" className={inputCls} />
                {formData.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {formData.keywords.map((kw, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] rounded-full font-medium">{kw}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
          {loading ? (
            <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Adding App…</>
          ) : <><Plus className="w-4 h-4" /> Add App</>}
        </button>
      </form>
    </div>
  );
}