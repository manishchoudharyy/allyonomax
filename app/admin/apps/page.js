'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2, Search, ExternalLink, AlertTriangle, CheckCircle2, X } from 'lucide-react';

/* ── Alert Modal Component ── */
function AlertModal({ show, type, title, message, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
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

/* ── Confirm Modal Component ── */
function ConfirmModal({ show, title, message, onConfirm, onCancel, loading }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onCancel}>
      <div className="bg-[#16161f] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
            <Trash2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">{title}</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onCancel} disabled={loading}
            className="flex-1 py-2.5 rounded-xl bg-white/4 border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/8 transition disabled:opacity-50">
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading}
            className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            ) : <Trash2 className="w-3.5 h-3.5" />}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AllApps() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('all');

  // Modal states
  const [alert, setAlert] = useState({ show: false, type: '', title: '', message: '' });
  const [confirmDelete, setConfirmDelete] = useState({ show: false, id: null, name: '' });
  const [deleting, setDeleting] = useState(false);

  const loadApps = () => {
    setLoading(true);
    fetch('/api/admin/apps')
      .then(res => res.json())
      .then(data => { if (data.success) setApps(data.apps); setLoading(false); })
      .catch(() => setLoading(false));
  };

  useEffect(() => { loadApps(); }, []);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch('/api/admin/apps', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: confirmDelete.id }) });
      const data = await res.json();
      if (data.success) {
        setApps(prev => prev.filter(a => a.id !== confirmDelete.id));
        setAlert({ show: true, type: 'success', title: 'App Deleted', message: `"${confirmDelete.name}" has been removed successfully.` });
      } else {
        setAlert({ show: true, type: 'error', title: 'Delete Failed', message: data.error || 'Something went wrong.' });
      }
    } catch {
      setAlert({ show: true, type: 'error', title: 'Delete Failed', message: 'Network error. Please try again.' });
    }
    setDeleting(false);
    setConfirmDelete({ show: false, id: null, name: '' });
  };

  const categories = ['all', ...new Set(apps.flatMap(a => a.categories || []).map(c => (c || 'uncategorized').toLowerCase()))];
  const filtered = apps.filter(app => {
    const matchSearch = app.name?.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === 'all' || app.categories?.some(c => (c || '').toLowerCase() === filterCat);
    return matchSearch && matchCat;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="animate-spin h-6 w-6 text-slate-500" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
      </div>
    );
  }

  return (
    <>
      <AlertModal {...alert} onClose={() => setAlert(p => ({ ...p, show: false }))} />
      <ConfirmModal
        show={confirmDelete.show}
        title="Delete App"
        message={`Are you sure you want to delete "${confirmDelete.name}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        onCancel={() => setConfirmDelete({ show: false, id: null, name: '' })}
        loading={deleting}
      />

      <div className="space-y-5">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-3 flex-1 w-full sm:w-auto">
            <div className="flex-1 relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2"><Search className="w-4 h-4 text-slate-500" /></div>
              <input type="text" placeholder="Search apps…" value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition" />
            </div>
            <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 text-sm outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 transition">
              {categories.map((c, i) => {
                const catStr = String(c);
                return (
                  <option key={`${catStr}-${i}`} value={catStr} className="bg-[#12121a] text-white">
                    {catStr === 'all' ? 'All Categories' : catStr.charAt(0).toUpperCase() + catStr.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
          <Link href="/admin/add-app"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-sm font-semibold shadow-lg shadow-red-900/30 transition-all whitespace-nowrap">
            <Plus className="w-4 h-4" /> Add New App
          </Link>
        </div>

        <p className="text-xs font-medium text-slate-500">Showing {filtered.length} of {apps.length} apps</p>

        {/* Table / Cards */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">App</th>
                  <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Bonus</th>
                  <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Rating</th>
                  <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Flags</th>
                  <th className="text-right px-5 py-3.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {filtered.map(app => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {app.icon ? (
                          <img src={app.icon} alt={app.name} className="w-9 h-9 rounded-xl object-cover border border-white/10" />
                        ) : (
                          <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 text-xs font-bold border border-white/10">{app.name?.charAt(0)}</div>
                        )}
                        <div>
                          <p className="font-semibold text-white">{app.name}</p>
                          <p className="text-[11px] text-slate-500">/{app.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">{app.categories?.join(', ') || 'N/A'}</span>
                    </td>
                    <td className="px-5 py-3.5 font-medium text-white">{app.bonus || '—'}</td>
                    <td className="px-5 py-3.5 text-amber-400">{app.rating || '—'} ★</td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-1.5">
                        {app.isNew && <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold border border-orange-500/20">NEW</span>}
                        {app.isTrending && <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">TREND</span>}
                        {!app.isNew && !app.isTrending && <span className="text-slate-600 text-xs">—</span>}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a href={`/${app.slug}`} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-slate-400 text-xs font-medium hover:bg-white/[0.08] hover:text-white border border-white/5 transition" title="View live">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href={`/admin/edit-app/${app.id}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition border border-white/5 hover:border-white/10">
                          <Pencil className="w-3.5 h-3.5" /> Edit
                        </a>
                        <button onClick={() => {
                          const newPos = prompt(`Enter new position (1 to ${apps.length}):`, '');
                          if (newPos && !isNaN(parseInt(newPos, 10))) {
                            fetch('/api/admin/apps', {
                              method: 'PUT',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ action: 'reorder', id: app.id, newPosition: parseInt(newPos, 10) })
                            }).then(r => r.json()).then(d => {
                              if (d.success) loadApps();
                              else alert('Failed to move: ' + d.error);
                            });
                          }
                        }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-violet-500/10 text-violet-400 text-xs font-medium hover:bg-violet-500/20 border border-violet-500/20 transition" title="Change Position">
                          Move
                        </button>
                        <button onClick={() => setConfirmDelete({ show: true, id: app.id, name: app.name })}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 text-xs font-medium hover:bg-rose-500/20 border border-rose-500/20 transition">
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-white/5">
            {filtered.map(app => (
              <div key={app.id} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  {app.icon ? (
                    <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-xl object-cover border border-white/10" />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 text-sm font-bold border border-white/10">{app.name?.charAt(0)}</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">{app.name}</p>
                    <p className="text-xs text-slate-500">{app.categories?.join(', ') || 'N/A'} · {app.bonus || '—'}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={`/admin/edit-app/${app.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition border border-white/5 hover:border-white/10">
                    <Pencil className="w-3.5 h-3.5" /> Edit
                  </a>
                  <button onClick={() => {
                    const newPos = prompt(`Enter new position (1 to ${apps.length}):`, '');
                    if (newPos && !isNaN(parseInt(newPos, 10))) {
                      fetch('/api/admin/apps', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ action: 'reorder', id: app.id, newPosition: parseInt(newPos, 10) })
                      }).then(r => r.json()).then(d => {
                        if (d.success) loadApps();
                        else alert('Failed to move: ' + d.error);
                      });
                    }
                  }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-violet-500/10 text-violet-400 text-xs font-medium hover:bg-violet-500/20 border border-violet-500/20 transition">
                    Move
                  </button>
                  <button onClick={() => setConfirmDelete({ show: true, id: app.id, name: app.name })}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-rose-500/10 text-rose-400 text-xs font-medium hover:bg-rose-500/20 border border-rose-500/20 transition">
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No apps found. {search || filterCat !== 'all' ? 'Try changing filters.' : 'Add your first app!'}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
