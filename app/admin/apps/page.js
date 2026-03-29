'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const I = {
  plus: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  pencil: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
  trash: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  search: <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
};

export default function AllApps() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('all');

  const loadApps = () => {
    setLoading(true);
    fetch('/api/admin/apps')
      .then(res => res.json())
      .then(data => { if (data.success) setApps(data.apps); setLoading(false); })
      .catch(() => setLoading(false));
  };

  useEffect(() => { loadApps(); }, []);

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      const res = await fetch('/api/admin/apps', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      const data = await res.json();
      if (data.success) setApps(prev => prev.filter(a => a.id !== id));
      else alert('Delete failed: ' + data.error);
    } catch { alert('Delete failed'); }
    setDeleting(null);
  };

  const categories = ['all', ...new Set(apps.map(a => (a.category || 'uncategorized').toLowerCase()))];
  const filtered = apps.filter(app => {
    const matchSearch = app.name?.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === 'all' || (app.category || '').toLowerCase() === filterCat;
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
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-3 flex-1 w-full sm:w-auto">
          <div className="flex-1 relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2">{I.search}</div>
            <input type="text" placeholder="Search apps…" value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition" />
          </div>
          <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 text-sm outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 transition">
            {categories.map(c => (
              <option key={c} value={c} className="bg-[#12121a] text-white">{c === 'all' ? 'All Categories' : c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
        <Link href="/admin/add-app"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-sm font-semibold shadow-lg shadow-red-900/30 transition-all whitespace-nowrap">
          {I.plus} Add New App
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
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">{app.category || 'N/A'}</span>
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
                      <Link href={`/admin/edit-app/${app.id}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 text-xs font-medium hover:bg-sky-500/20 border border-sky-500/20 transition">
                        {I.pencil} Edit
                      </Link>
                      <button onClick={() => handleDelete(app.id, app.name)} disabled={deleting === app.id}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 text-xs font-medium hover:bg-rose-500/20 border border-rose-500/20 transition disabled:opacity-50">
                        {deleting === app.id ? '…' : <>{I.trash} Delete</>}
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
                  <p className="text-xs text-slate-500">{app.category || 'N/A'} · {app.bonus || '—'}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/edit-app/${app.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-500/10 text-sky-400 text-xs font-medium hover:bg-sky-500/20 border border-sky-500/20 transition">
                  {I.pencil} Edit
                </Link>
                <button onClick={() => handleDelete(app.id, app.name)} disabled={deleting === app.id}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-rose-500/10 text-rose-400 text-xs font-medium hover:bg-rose-500/20 border border-rose-500/20 transition disabled:opacity-50">
                  {deleting === app.id ? '…' : <>{I.trash} Delete</>}
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
  );
}
