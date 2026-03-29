'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const I = {
  plus: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  x: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  check: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
  warn: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>,
  link: <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-1.03a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.22" /></svg>,
};

const getDefaultFaqs = (appName) => {
  const name = appName || 'All Yono Games';
  return [
    { question: `Q.1 What Is The ${name} Apk?`, answer: `The ${name} APK is an excellent application that offers users a sign-up bonus of ₹500 when they join. This game includes a fantastic bonus program, and you can learn more by reading the complete post. Additionally, ${name} is a popular slots game with a minimum withdrawal amount of ₹100 and a minimum deposit of ₹100.` },
    { question: `Q.2 How Do I Sign Up For This ${name} APK?`, answer: `To sign up, download the ${name} APK from the official website, install it on your device, and register using your mobile number. Enter the OTP, complete your profile, and start playing to claim your welcome bonus.` },
    { question: `Q.3 How Many Games Are Available In The ${name}?`, answer: `The ${name} app offers multiple games including Rummy, Slots, Spin Wheel, Fishing Games, and various card-based and casual games that allow users to earn rewards and real cash.` },
    { question: `Q.4 What Is The Minimum Withdrawal Amount In ${name}?`, answer: `The minimum withdrawal amount in ${name} is ₹100. Once you accumulate ₹100 or more, you can easily withdraw your earnings to your bank account.` },
  ];
};

const getDefaultDescription = (appName) => {
  const name = appName || 'All Yono Games';
  return `Join ${name} today and receive a bonus ranging from ₹35 to ₹500! Enjoy seamless withdrawals with a minimum limit of only ₹100. Sign up now and start winning real cash instantly!`;
};

const getDefaultSeo = (appName) => {
  const name = appName || 'All Yono Games';
  const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
  return {
    metaTitle: `${name} APK Download — Bonus Up To ₹500 | AllYonoMax`,
    metaDescription: `Download ${name} APK and get up to ₹500 sign up bonus. Minimum withdrawal ₹100. Play Rummy, Slots, and more. Instant UPI withdrawal on AllYonoMax.`,
    keywords: [`${slug}`, `${slug}-apk`, `${slug}-download`, `${name.toLowerCase()} app`, `${name.toLowerCase()} bonus`, 'yono games', 'rummy app download', 'real money games']
  };
};

export default function AddApp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '', category: 'rummy', referLink: '', bonus: '', minWithdrawal: '₹100',
    appSize: '', rating: '', totalDownloads: '', description: '',
    isNew: false, isTrending: false, faq: [{ question: '', answer: '' }],
    metaTitle: '', metaDescription: '', keywords: []
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'name') {
      setFormData(prev => ({
        ...prev, name: value, description: getDefaultDescription(value),
        faq: getDefaultFaqs(value), ...getDefaultSeo(value)
      }));
      return;
    }
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFaqChange = (index, field, value) => {
    const newFaq = [...formData.faq]; newFaq[index][field] = value;
    setFormData({ ...formData, faq: newFaq });
  };
  const addFaq = () => setFormData({ ...formData, faq: [...formData.faq, { question: '', answer: '' }] });
  const removeFaq = (index) => setFormData({ ...formData, faq: formData.faq.filter((_, i) => i !== index) });
  const handleKeywords = (e) => setFormData({ ...formData, keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setMessage({ type: '', text: '' });

    if (!formData.name.trim()) { setMessage({ type: 'error', text: 'App name is required' }); setLoading(false); return; }
    if (!formData.referLink.trim()) { setMessage({ type: 'error', text: 'Refer link is required' }); setLoading(false); return; }

    const slug = formData.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    const metaTitle = formData.metaTitle || `${formData.name} APK Download — ${formData.bonus} Bonus | AllYonoMax`;
    const metaDescription = formData.metaDescription || `Download ${formData.name} APK and get ${formData.bonus} sign up bonus. ${formData.appSize} size, ${formData.minWithdrawal} minimum withdrawal. Instant UPI withdrawal.`;

    try {
      const res = await fetch('/api/admin/apps', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, slug, metaTitle, metaDescription }) });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: 'success', text: `App added successfully! Icon: ${data.icon || 'None'}` });
        setFormData({ name: '', category: 'rummy', referLink: '', bonus: '', minWithdrawal: '₹100', appSize: '', rating: '', totalDownloads: '', description: '', isNew: false, isTrending: false, faq: [{ question: '', answer: '' }], metaTitle: '', metaDescription: '', keywords: [] });
      } else setMessage({ type: 'error', text: 'Error: ' + data.error });
    } catch { setMessage({ type: 'error', text: 'Error saving app' }); }
    setLoading(false);
  };

  const inputCls = "w-full px-4 py-2.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition bg-white/5 text-white text-sm placeholder-slate-500";

  return (
    <div className="max-w-3xl mx-auto">
      {message.text && (
        <div className={`mb-5 p-4 rounded-xl text-sm font-medium flex items-center gap-2 ${
          message.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'
        }`}>
          {message.type === 'success' ? I.check : I.warn} {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">App Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Joy Rummy" className={inputCls} required />
              {formData.name && <p className="text-[11px] text-slate-500 mt-1">Slug: {formData.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className={inputCls}>
                {['rummy','slots','teen-patti','casino','bingo','arcade','spin','all'].map(c => (
                  <option key={c} value={c} className="bg-[#12121a]">{c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Game Details */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" />Game Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Bonus', name: 'bonus', placeholder: '₹550', type: 'text' },
              { label: 'Min Withdrawal', name: 'minWithdrawal', placeholder: '₹100', type: 'text' },
              { label: 'App Size', name: 'appSize', placeholder: '65MB', type: 'text' },
              { label: 'Rating', name: 'rating', placeholder: '4.6', type: 'number', step: '0.1', min: '0', max: '5' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">{f.label}</label>
                <input type={f.type} name={f.name} value={formData[f.name]} onChange={handleChange} placeholder={f.placeholder} step={f.step} min={f.min} max={f.max} className={inputCls} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Total Downloads</label>
              <input type="text" name="totalDownloads" value={formData.totalDownloads} onChange={handleChange} placeholder="250K+" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Refer Link <span className="text-red-500">*</span></label>
              <input type="url" name="referLink" value={formData.referLink} onChange={handleChange} placeholder="https://example.com/?code=abc123" className={inputCls} required />
              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">{I.link} Icon auto-downloaded from this domain</p>
            </div>
          </div>
        </div>

        {/* Flags */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Flags</h2>
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
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Description</h2>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder="Write a detailed description…" className={inputCls + " resize-y"} />
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500" />FAQs</h2>
            <button type="button" onClick={addFaq}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition font-medium">
              {I.plus} Add FAQ
            </button>
          </div>
          <div className="space-y-3">
            {formData.faq.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-500">FAQ #{i + 1}</span>
                  {formData.faq.length > 1 && (
                    <button type="button" onClick={() => removeFaq(i)}
                      className="inline-flex items-center gap-1 text-rose-400 text-xs hover:text-rose-300 transition">{I.x} Remove</button>
                  )}
                </div>
                <input type="text" placeholder="Question" value={faq.question} onChange={(e) => handleFaqChange(i, 'question', e.target.value)} className={inputCls + " mb-2"} />
                <textarea placeholder="Answer" value={faq.answer} onChange={(e) => handleFaqChange(i, 'answer', e.target.value)} rows="2" className={inputCls + " resize-y"} />
              </div>
            ))}
          </div>
        </div>

        {/* SEO */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />SEO Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Title</label>
              <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} placeholder="Auto-generated if empty" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Description</label>
              <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows="2" placeholder="Auto-generated if empty" className={inputCls + " resize-y"} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Keywords (comma separated)</label>
              <input type="text" value={formData.keywords.join(', ')} onChange={handleKeywords} placeholder="rummy app, rummy download, rummy bonus" className={inputCls} />
              {formData.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {formData.keywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] rounded-full font-medium">{kw}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Adding App…
            </>
          ) : <>{I.plus} Add App</>}
        </button>
      </form>
    </div>
  );
}