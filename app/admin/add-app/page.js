'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddApp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    category: 'rummy',
    referLink: '',
    bonus: '',
    minWithdrawal: '₹100',
    appSize: '',
    rating: '',
    totalDownloads: '',
    description: '',
    isNew: false,
    isTrending: false,
    faq: [{ question: '', answer: '' }],
    metaTitle: '',
    metaDescription: '',
    keywords: []
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFaqChange = (index, field, value) => {
    const newFaq = [...formData.faq];
    newFaq[index][field] = value;
    setFormData({ ...formData, faq: newFaq });
  };

  const addFaq = () => {
    setFormData({ ...formData, faq: [...formData.faq, { question: '', answer: '' }] });
  };

  const removeFaq = (index) => {
    setFormData({ ...formData, faq: formData.faq.filter((_, i) => i !== index) });
  };

  const handleKeywords = (e) => {
    const arr = e.target.value.split(',').map(k => k.trim()).filter(k => k);
    setFormData({ ...formData, keywords: arr });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!formData.name.trim()) {
      setMessage({ type: 'error', text: 'App name is required' });
      setLoading(false);
      return;
    }
    if (!formData.referLink.trim()) {
      setMessage({ type: 'error', text: 'Refer link is required' });
      setLoading(false);
      return;
    }

    const slug = formData.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    const metaTitle = formData.metaTitle || `${formData.name} APK Download — ${formData.bonus} Bonus | AllYonoMax`;
    const metaDescription = formData.metaDescription || `Download ${formData.name} APK and get ${formData.bonus} sign up bonus. ${formData.appSize} size, ${formData.minWithdrawal} minimum withdrawal. Instant UPI withdrawal.`;

    try {
      const res = await fetch('/api/admin/apps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, slug, metaTitle, metaDescription })
      });

      const data = await res.json();

      if (data.success) {
        setMessage({ type: 'success', text: `✅ App added successfully! Icon: ${data.icon || 'None'}` });
        setFormData({
          name: '', category: 'rummy', referLink: '', bonus: '', minWithdrawal: '₹100',
          appSize: '', rating: '', totalDownloads: '', description: '',
          isNew: false, isTrending: false, faq: [{ question: '', answer: '' }],
          metaTitle: '', metaDescription: '', keywords: []
        });
      } else {
        setMessage({ type: 'error', text: '❌ Error: ' + data.error });
      }
    } catch {
      setMessage({ type: 'error', text: '❌ Error saving app' });
    }
    setLoading(false);
  };

  const inputCls = "w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white text-sm";

  return (
    <div className="max-w-3xl mx-auto">
      {/* Message */}
      {message.text && (
        <div className={`mb-5 p-4 rounded-xl text-sm font-medium ${
          message.type === 'success'
            ? 'bg-green-50 border border-green-200 text-green-800'
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-800 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">App Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Joy Rummy" className={inputCls} required />
              {formData.name && (
                <p className="text-[11px] text-slate-400 mt-1">Slug: {formData.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className={inputCls}>
                <option value="rummy">Rummy</option>
                <option value="slots">Slots</option>
                <option value="teen-patti">Teen Patti</option>
                <option value="casino">Casino</option>
                <option value="bingo">Bingo</option>
                <option value="arcade">Arcade</option>
                <option value="spin">Spin</option>
                <option value="all">All Games</option>
              </select>
            </div>
          </div>
        </div>

        {/* Game Details */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-800 mb-4">Game Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Bonus</label>
              <input type="text" name="bonus" value={formData.bonus} onChange={handleChange} placeholder="₹550" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Min Withdrawal</label>
              <input type="text" name="minWithdrawal" value={formData.minWithdrawal} onChange={handleChange} placeholder="₹100" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">App Size</label>
              <input type="text" name="appSize" value={formData.appSize} onChange={handleChange} placeholder="65MB" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Rating</label>
              <input type="number" name="rating" value={formData.rating} onChange={handleChange} step="0.1" min="0" max="5" placeholder="4.6" className={inputCls} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Total Downloads</label>
              <input type="text" name="totalDownloads" value={formData.totalDownloads} onChange={handleChange} placeholder="250K+" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Refer Link <span className="text-red-500">*</span></label>
              <input type="url" name="referLink" value={formData.referLink} onChange={handleChange} placeholder="https://example.com/?code=abc123" className={inputCls} required />
              <p className="text-[11px] text-slate-400 mt-1">🔍 Icon auto-downloaded from this domain</p>
            </div>
          </div>
        </div>

        {/* Flags */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-800 mb-4">Flags</h2>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="isNew" checked={formData.isNew} onChange={handleChange} className="w-4 h-4 text-red-600 rounded" />
              <span className="text-sm text-slate-700">🔥 New App</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="isTrending" checked={formData.isTrending} onChange={handleChange} className="w-4 h-4 text-red-600 rounded" />
              <span className="text-sm text-slate-700">📈 Trending</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-800 mb-4">Description</h2>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder="Write a detailed description..." className={inputCls + " resize-y"} />
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-slate-800">FAQs</h2>
            <button type="button" onClick={addFaq} className="px-3 py-1.5 text-xs bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition font-medium">
              + Add FAQ
            </button>
          </div>
          <div className="space-y-3">
            {formData.faq.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-400">FAQ #{i + 1}</span>
                  {formData.faq.length > 1 && (
                    <button type="button" onClick={() => removeFaq(i)} className="text-red-500 text-xs hover:text-red-700">Remove</button>
                  )}
                </div>
                <input type="text" placeholder="Question" value={faq.question} onChange={(e) => handleFaqChange(i, 'question', e.target.value)} className={inputCls + " mb-2"} />
                <textarea placeholder="Answer" value={faq.answer} onChange={(e) => handleFaqChange(i, 'answer', e.target.value)} rows="2" className={inputCls + " resize-y"} />
              </div>
            ))}
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-800 mb-4">SEO Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Meta Title</label>
              <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} placeholder="Auto-generated if empty" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Meta Description</label>
              <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows="2" placeholder="Auto-generated if empty" className={inputCls + " resize-y"} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Keywords (comma separated)</label>
              <input type="text" onChange={handleKeywords} placeholder="rummy app, rummy download, rummy bonus" className={inputCls} />
              {formData.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {formData.keywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] rounded-full">{kw}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-lg shadow-red-500/25"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Adding App...
            </span>
          ) : '➕ Add App'}
        </button>
      </form>
    </div>
  );
}