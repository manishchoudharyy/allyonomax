'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus, X, CheckCircle2, AlertTriangle, Link2, Sparkles,
  ChevronUp, ChevronDown,
  Search as SearchIcon, Star, FileText, Tag, Layers
} from 'lucide-react';
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
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
/* ── FEATURES GENERATOR ── */
// Removed as features section is deleted

/* ── HOW TO DOWNLOAD (DYNAMIC) ── */
// Removed as howToDownload section is deleted

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
  name: '', categories: ['rummy'], referLink: '', bonus: `₹${getRandomNumber(51, 201)}`, minWithdrawal: '₹100',
  appSize: `${getRandomNumber(40, 70)}MB`, rating: `4.${getRandomNumber(0, 7)}`, totalDownloads: `${getRandomNumber(200, 990)}K+`, description: '',
  isNew: true, isTrending: false,
  metaTitle: '', metaDescription: '', keywords: [],
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
  const [collapsed, setCollapsed] = useState({ seo: false });

  const toggle = (key) => setCollapsed(p => ({ ...p, [key]: !p[key] }));

  const handleNameChange = (value) => {
    const primaryCat = formData.categories[0] || 'rummy';
    const seo = getDefaultSeo(value, formData.bonus, primaryCat);

    setFormData(prev => ({
      ...prev,
      name: value,
      description: getDefaultDescription(value, primaryCat, prev.bonus),
      ...seo,
    }));
  };

  const handleCategoryToggle = (cat) => {
    setFormData(prev => {
      const isSelected = prev.categories.includes(cat);
      const newCats = isSelected 
        ? prev.categories.filter(c => c !== cat) 
        : [...prev.categories, cat];
      
      const primaryCat = newCats[0] || 'rummy';
      const seo = getDefaultSeo(prev.name, prev.bonus, primaryCat);
      
      return {
        ...prev,
        categories: newCats,
        description: getDefaultDescription(prev.name, primaryCat, prev.bonus),
        ...seo,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'name') { handleNameChange(value); return; }
    if (name === 'bonus') {
      const primaryCat = formData.categories[0] || 'rummy';
      const seo = getDefaultSeo(formData.name, value, primaryCat);
      setFormData(prev => ({ ...prev, bonus: value, ...seo })); return;
    }
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleDescriptionChange = (val) => {
    setFormData(prev => ({ ...prev, description: val }));
  };

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
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Categories (Multiple)</label>
              <div className="flex flex-wrap gap-2">
                {['rummy', 'slots', 'teen-patti', 'casino', 'bingo', 'arcade', 'spin', 'all'].map(c => {
                  const isSelected = formData.categories.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => handleCategoryToggle(c)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                        isSelected 
                          ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Position (Index)</label>
              <input type="number" name="position" value={formData.position || ""} onChange={handleChange} placeholder="Leave blank to add at the bottom. E.g., 1 for top." className={inputCls} />
              <p className="text-[11px] text-slate-500 mt-1">1-based index (1 = first app, 2 = second app, etc.)</p>
            </div>
            
            {/* Merged Game Details */}
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
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden [&_.ql-toolbar]:border-none [&_.ql-toolbar]:bg-white/5 [&_.ql-container]:border-none [&_.ql-editor]:min-h-[150px] [&_.ql-editor]:text-sm [&_.ql-editor]:text-slate-300 [&_.ql-editor]:leading-relaxed [&_.ql-toolbar_button]:text-slate-400 [&_.ql-stroke]:stroke-slate-400 [&_.ql-fill]:fill-slate-400 [&_.ql-picker]:text-slate-400">
            <ReactQuill
              theme="snow"
              value={formData.description || ""}
              onChange={handleDescriptionChange}
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['link', 'clean']
                ],
              }}
            />
          </div>
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