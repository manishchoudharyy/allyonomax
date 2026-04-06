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
const getDefaultFaqs = (name) => {
  const n = name || 'This App';
  return [
    { question: `What is ${n}?`, answer: `${n} is a popular gaming app that offers users a generous sign-up bonus when they join. The app features multiple game modes, instant UPI withdrawals, and a rewarding referral program. Download ${n} from AllYonoMax to start earning real cash.` },
    { question: `How to sign up on ${n}?`, answer: `Download the ${n} APK from the download link on this page. Install it on your Android device, register using your mobile number, enter the OTP, and your sign-up bonus will be credited automatically.` },
    { question: `What is the minimum withdrawal on ${n}?`, answer: `The minimum withdrawal amount on ${n} is ₹100. Withdrawals are processed instantly to your linked UPI or bank account.` },
    { question: ` What are the best features of ${n}?`, answer: `Safe payments with verified withdrawal methods plus fast withdrawals and a clean UI.` },
  ];
};

const getDefaultDescription = (name, category) => {
  const n = name || 'This App';
  const cat = (category || 'rummy').toLowerCase();
  const gameTypes = {
    rummy: 'rummy, teen patti, poker', slots: 'slot machines, spin wheels, and jackpot games',
    casino: 'casino games, cards, and table games', 'teen-patti': 'Teen Patti, Poker, and card games',
    bingo: 'Bingo, lottery, and number games', arcade: 'arcade and casual games', spin: 'spin wheel and luck-based games',
  };
  const games = gameTypes[cat] || 'rummy, slots, and casino games';
  return `${n} is one of the most popular gaming applications in India, offering users an exciting opportunity to earn real money while playing their favorite games. With a user-friendly interface and secure payment system, this app has gained the trust of thousands of players across the country. The app features a wide variety of games including ${games} and many other skill-based games that not only provide entertainment but also offer substantial earning opportunities for skilled players.`;
};

const getDefaultFeatures = (category) => {
  const cat = (category || 'rummy').toLowerCase();
  const m = {
    rummy: ['Multiple Game Variants', 'Instant UPI Withdrawal', 'Refer & Earn', 'VIP Rewards', 'Smooth Gameplay', "Welcome Bonus", "Secure Payments", "24/7 Support", "Fair Play"],
    slots: ['20+ Slot Machines', 'Daily Free Spins', 'Jackpot System', 'Instant Withdrawal', 'Refer & Earn', 'Regular Events'],
    casino: ['Multiple Casino Games', 'Live Dealers', 'Instant Withdrawal', 'Daily Bonus', 'Refer & Earn', 'VIP Membership'],
    'teen-patti': ['Multiple Game Modes', 'Private Tables', 'Instant Withdrawal', 'Daily Bonus', 'Refer & Earn', 'Tournaments'],
    bingo: ['Multiple Bingo Rooms', 'Jackpot Games', 'Instant Withdrawal', 'Daily Bonus', 'Refer & Earn', 'Power-Ups'],
    arcade: ['50+ Games', 'Daily Rewards', 'Instant Withdrawal', 'Leaderboards', 'Refer & Earn', 'Mini Tournaments'],
    spin: ['Lucky Spin Wheel', 'Daily Free Spins', 'Jackpot System', 'Instant Withdrawal', 'Refer & Earn', 'Bonus Rounds'],
  };
  return m[cat] || m.rummy;
};

const getDefaultHowToDownload = (bonus) => [
  'Click on the download button',
  'Install the APK file once downloaded',
  'Register with your phone number',
  'Verify your account and start playing',
  `Claim your welcome bonus of ${bonus}`,
];

const getDefaultSeo = (name, bonus, category) => {
  const n = name || 'App';
  const slug = n.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
  const b = bonus || '₹500';
  const cat = (category || 'rummy').toLowerCase();
  return {
    metaTitle: `${n} APK Download — ${b} Sign Up Bonus | AllYonoMax - Yono Games`,
    metaDescription: `Download ${n} APK and get ${b} sign up bonus. Play ${cat} games with instant UPI withdrawal. Minimum withdrawal ₹100. Trusted app on AllYonoMax.`,
    keywords: [`${n} apk`, `${n} download`, `${n} refer link`, `${n} sign up bonus`, `${n.toLowerCase()} real money`, 'yono games', `${cat} app download`, 'real money games'],
  };
};

const initialFormData = {
  name: '', category: 'rummy', referLink: '', bonus: '₹500', minWithdrawal: '₹100',
  appSize: '60MB', rating: '4.5', totalDownloads: '100K+', description: '',
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
      ...prev, name: value, description: getDefaultDescription(value, prev.category),
      faq: getDefaultFaqs(value), features: getDefaultFeatures(prev.category),
      howToDownload: getDefaultHowToDownload(formData.bonus), ...seo,
    }));
  };

  const handleCategoryChange = (value) => {
    const seo = getDefaultSeo(formData.name, formData.bonus, value);
    setFormData(prev => ({
      ...prev, category: value, features: getDefaultFeatures(value),
      description: getDefaultDescription(prev.name, value), ...seo,
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
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Joy Rummy" className={inputCls} required />
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
                <input type={f.type || 'text'} name={f.name} value={formData[f.name]} onChange={handleChange} placeholder={f.placeholder} step={f.step} min={f.min} max={f.max} className={inputCls} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Total Downloads</label>
              <input type="text" name="totalDownloads" value={formData.totalDownloads} onChange={handleChange} placeholder="250K+" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Refer Link</label>
              <input type="text" name="referLink" value={formData.referLink} onChange={handleChange} placeholder="https://example.com/?code=abc123" className={inputCls} />
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
          <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder="Auto-generated when you type app name…" className={inputCls + " resize-y"} />
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
                    <input type="text" value={feat} onChange={(e) => handleFeatureChange(i, e.target.value)} placeholder="Feature name" className={inputCls} />
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
                    <input type="text" value={step} onChange={(e) => handleStepChange(i, e.target.value)} placeholder={`Step ${i + 1}`} className={inputCls} />
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
                    <input type="text" placeholder="Question" value={faq.question} onChange={(e) => handleFaqChange(i, 'question', e.target.value)} className={inputCls + " mb-2"} />
                    <textarea placeholder="Answer" value={faq.answer} onChange={(e) => handleFaqChange(i, 'answer', e.target.value)} rows="2" className={inputCls + " resize-y"} />
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
                <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} placeholder="Auto-generated" className={inputCls} />
                {formData.metaTitle && <p className={`text-[11px] mt-1 ${formData.metaTitle.length > 60 ? 'text-amber-400' : 'text-slate-500'}`}>{formData.metaTitle.length}/60 chars {formData.metaTitle.length > 60 && '⚠ too long'}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Description</label>
                <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows="2" placeholder="Auto-generated" className={inputCls + " resize-y"} />
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