'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus, X, CheckCircle2, AlertTriangle, ArrowLeft, ExternalLink,
  ChevronUp, ChevronDown, ListPlus, Download, HelpCircle,
  Search as SearchIcon, Star, FileText, Tag, Layers, BookmarkPlus, Link2
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
        <button onClick={onClose} className={`w-full mt-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
          type === 'success'
            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20'
            : 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20'
        }`}>
          OK
        </button>
      </div>
    </div>
  );
}

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

export default function EditApp({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', title: '', message: '' });
  const [collapsed, setCollapsed] = useState({ features: false, howToDownload: false, faq: false, seo: false });

  const toggle = (key) => setCollapsed(p => ({ ...p, [key]: !p[key] }));

  useEffect(() => {
    fetch('/api/admin/apps')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const app = data.apps.find(a => a.id === Number(id));
          if (app) {
            if (!app.faq || !Array.isArray(app.faq)) app.faq = [{ question: '', answer: '' }];
            if (!app.keywords || !Array.isArray(app.keywords)) app.keywords = [];
            if (!app.features || !Array.isArray(app.features)) app.features = [];
            if (!app.howToDownload || !Array.isArray(app.howToDownload)) app.howToDownload = [];
            setFormData(app);
          } else setAlert({ show: true, type: 'error', title: 'Not Found', message: 'App not found.' });
        }
        setLoading(false);
      })
      .catch(() => { setAlert({ show: true, type: 'error', title: 'Error', message: 'Failed to load app.' }); setLoading(false); });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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
    e.preventDefault(); setSaving(true);
    try {
      const res = await fetch('/api/admin/apps', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await res.json();
      if (data.success) setAlert({ show: true, type: 'success', title: 'Saved!', message: `"${formData.name}" has been updated successfully.` });
      else setAlert({ show: true, type: 'error', title: 'Error', message: data.error || 'Something went wrong.' });
    } catch { setAlert({ show: true, type: 'error', title: 'Network Error', message: 'Could not connect. Please try again.' }); }
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
        <button onClick={() => router.push('/admin/apps')} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Apps
        </button>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-2.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition bg-white/5 text-white text-sm placeholder-slate-500";

  return (
    <div className="max-w-3xl mx-auto">
      <AlertModal {...alert} onClose={() => setAlert(p => ({ ...p, show: false }))} />

      {/* Top nav */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={() => router.push('/admin/apps')} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to All Apps
        </button>
        <a href={`/${formData.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition">
          <ExternalLink className="w-3.5 h-3.5" /> View Live Page
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Preview Header */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6 flex items-center gap-4">
          {formData.icon ? (
            <img src={formData.icon} alt={formData.name} className="w-14 h-14 rounded-2xl object-cover border border-white/10" />
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 text-lg font-bold border border-white/10">{formData.name?.charAt(0)}</div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-white truncate">{formData.name}</h2>
            <p className="text-xs text-slate-500">ID: {formData.id} · /{formData.slug} · {formData.category}</p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {formData.isNew && <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold border border-orange-500/20">NEW</span>}
            {formData.isTrending && <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">TREND</span>}
          </div>
        </div>

        {/* Basic Info */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Layers} color="red-500" title="Basic Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">App Name</label>
              <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Slug</label>
              <input type="text" name="slug" value={formData.slug || ''} onChange={handleChange} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Category</label>
              <select name="category" value={formData.category || ''} onChange={handleChange} className={inputCls}>
                {['Rummy', 'Slots', 'Teen-Patti', 'Casino', 'Bingo', 'Arcade', 'Spin', 'All'].map(c => (
                  <option key={c} value={c} className="bg-[#12121a]">{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Icon Path</label>
              <input type="text" name="icon" value={formData.icon || ''} onChange={handleChange} placeholder="/icons/app-name.webp" className={inputCls} />
            </div>
          </div>
        </div>

        {/* Game Details */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Star} color="sky-500" title="Game Details" />
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
              <input type="text" name="totalDownloads" value={formData.totalDownloads || ''} onChange={handleChange} placeholder="250K+" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Refer Link</label>
              <input type="text" name="referLink" value={formData.referLink || ''} onChange={handleChange} className={inputCls} />
              {formData.referLink === '#' && (
                <p className="text-[11px] text-amber-400 mt-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Placeholder — replace with real URL</p>
              )}
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
                <input type="checkbox" name={f.name} checked={formData[f.name] || false} onChange={handleChange} className="w-4 h-4 rounded bg-white/5 border-white/20 text-red-600 focus:ring-red-500/30" />
                <span className={`text-sm ${f.color} group-hover:brightness-125 transition`}>{f.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={FileText} color="emerald-500" title="Description" />
          <textarea name="description" value={formData.description || ''} onChange={handleChange} rows="5" className={inputCls + " resize-y"} />
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
                    <input type="text" value={feat} onChange={(e) => handleFeatureChange(i, e.target.value)} placeholder="Feature" className={inputCls} />
                    <button type="button" onClick={() => removeFeature(i)} className="text-rose-400 hover:text-rose-300 transition shrink-0 p-1"><X className="w-3.5 h-3.5" /></button>
                  </div>
                ))}
                {formData.features.length === 0 && <p className="text-xs text-slate-500 py-2">No features added.</p>}
              </div>
              <button type="button" onClick={addFeature} className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/[0.04] border border-white/10 text-slate-300 rounded-lg hover:bg-white/[0.08] hover:text-white transition font-medium">
                <Plus className="w-3.5 h-3.5" /> Add Feature
              </button>
            </>
          )}
        </div>

        {/* How To Download */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Download} color="orange-500" title="How To Download" count={formData.howToDownload.length} isOpen={!collapsed.howToDownload} onToggle={() => toggle('howToDownload')} />
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
                {formData.howToDownload.length === 0 && <p className="text-xs text-slate-500 py-2">No steps added.</p>}
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
                <input type="text" name="metaTitle" value={formData.metaTitle || ''} onChange={handleChange} className={inputCls} />
                {formData.metaTitle && <p className={`text-[11px] mt-1 ${formData.metaTitle.length > 60 ? 'text-amber-400' : 'text-slate-500'}`}>{formData.metaTitle.length}/60 chars {formData.metaTitle.length > 60 && '⚠ too long'}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Meta Description</label>
                <textarea name="metaDescription" value={formData.metaDescription || ''} onChange={handleChange} rows="2" className={inputCls + " resize-y"} />
                {formData.metaDescription && <p className={`text-[11px] mt-1 ${formData.metaDescription.length > 160 ? 'text-amber-400' : 'text-slate-500'}`}>{formData.metaDescription.length}/160 chars {formData.metaDescription.length > 160 && '⚠ too long'}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Keywords (comma separated)</label>
                <input type="text" value={(formData.keywords || []).join(', ')} onChange={handleKeywords} className={inputCls} />
                {formData.keywords?.length > 0 && (
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
        <div className="flex gap-3">
          <button type="button" onClick={() => router.push('/admin/apps')}
            className="flex-1 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition">
            Cancel
          </button>
          <button type="submit" disabled={saving}
            className="flex-[2] py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
            {saving ? (
              <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Saving…</>
            ) : <><BookmarkPlus className="w-4 h-4" /> Save Changes</>}
          </button>
        </div>
      </form>
    </div>
  );
}
