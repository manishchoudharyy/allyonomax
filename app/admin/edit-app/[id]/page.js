'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

const I = {
  plus: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  x: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  check: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
  warn: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>,
  save: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>,
  back: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>,
};

export default function EditApp({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetch('/api/admin/apps')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const app = data.apps.find(a => a.id === Number(id));
          if (app) {
            if (!app.faq || !Array.isArray(app.faq)) app.faq = [{ question: '', answer: '' }];
            if (!app.keywords || !Array.isArray(app.keywords)) app.keywords = [];
            setFormData(app);
          } else setMessage({ type: 'error', text: 'App not found' });
        }
        setLoading(false);
      })
      .catch(() => { setMessage({ type: 'error', text: 'Failed to load app' }); setLoading(false); });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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
    e.preventDefault(); setSaving(true); setMessage({ type: '', text: '' });
    try {
      const res = await fetch('/api/admin/apps', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await res.json();
      if (data.success) setMessage({ type: 'success', text: 'App updated successfully!' });
      else setMessage({ type: 'error', text: 'Error: ' + data.error });
    } catch { setMessage({ type: 'error', text: 'Error updating app' }); }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="animate-spin h-6 w-6 text-slate-500" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-400 mb-4">App not found</p>
        <button onClick={() => router.push('/admin/apps')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition">
          {I.back} Back to Apps
        </button>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-2.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition bg-white/5 text-white text-sm placeholder-slate-500";

  return (
    <div className="max-w-3xl mx-auto">
      <button onClick={() => router.push('/admin/apps')}
        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white mb-5 transition">
        {I.back} Back to All Apps
      </button>

      {message.text && (
        <div className={`mb-5 p-4 rounded-xl text-sm font-medium flex items-center gap-2 ${
          message.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'
        }`}>{message.type === 'success' ? I.check : I.warn} {message.text}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* App Preview */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6 flex items-center gap-4">
          {formData.icon ? (
            <img src={formData.icon} alt={formData.name} className="w-14 h-14 rounded-2xl object-cover border border-white/10" />
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 text-lg font-bold border border-white/10">{formData.name?.charAt(0)}</div>
          )}
          <div>
            <h2 className="font-bold text-white">{formData.name}</h2>
            <p className="text-xs text-slate-500">ID: {formData.id} · Slug: /{formData.slug}</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">App Name</label>
              <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Category</label>
              <select name="category" value={formData.category || ''} onChange={handleChange} className={inputCls}>
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
              { label: 'Bonus', name: 'bonus' }, { label: 'Min Withdrawal', name: 'minWithdrawal' },
              { label: 'App Size', name: 'appSize' }, { label: 'Rating', name: 'rating', type: 'number', step: '0.1', min: '0', max: '5' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">{f.label}</label>
                <input type={f.type || 'text'} name={f.name} value={formData[f.name] || ''} onChange={handleChange} step={f.step} min={f.min} max={f.max} className={inputCls} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Total Downloads</label>
              <input type="text" name="totalDownloads" value={formData.totalDownloads || ''} onChange={handleChange} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Refer Link</label>
              <input type="text" name="referLink" value={formData.referLink || ''} onChange={handleChange} className={inputCls} />
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
                <input type="checkbox" name={f.name} checked={formData[f.name] || false} onChange={handleChange} className="w-4 h-4 rounded bg-white/5 border-white/20 text-red-600 focus:ring-red-500/30" />
                <span className={`text-sm ${f.color} group-hover:brightness-125 transition`}>{f.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Description</h2>
          <textarea name="description" value={formData.description || ''} onChange={handleChange} rows="5" className={inputCls + " resize-y"} />
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
              <input type="text" name="metaTitle" value={formData.metaTitle || ''} onChange={handleChange} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Description</label>
              <textarea name="metaDescription" value={formData.metaDescription || ''} onChange={handleChange} rows="2" className={inputCls + " resize-y"} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Keywords (comma separated)</label>
              <input type="text" value={(formData.keywords || []).join(', ')} onChange={handleKeywords} className={inputCls} />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3">
          <button type="button" onClick={() => router.push('/admin/apps')}
            className="flex-1 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition">
            Cancel
          </button>
          <button type="submit" disabled={saving}
            className="flex-[2] py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
            {saving ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                Saving…
              </>
            ) : <>{I.save} Save Changes</>}
          </button>
        </div>
      </form>
    </div>
  );
}
