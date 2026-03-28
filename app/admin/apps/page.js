'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
      .then(data => {
        if (data.success) setApps(data.apps);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => { loadApps(); }, []);

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`)) return;
    setDeleting(id);

    try {
      const res = await fetch('/api/admin/apps', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        setApps(prev => prev.filter(a => a.id !== id));
      } else {
        alert('Delete failed: ' + data.error);
      }
    } catch {
      alert('Delete failed');
    }
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
        <svg className="animate-spin h-6 w-6 text-slate-400" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-3 flex-1 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
          />
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === 'all' ? 'All Categories' : c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
        <Link
          href="/admin/add-app"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition shadow-sm whitespace-nowrap"
        >
          ➕ Add New App
        </Link>
      </div>

      {/* Count */}
      <p className="text-xs font-medium text-slate-500">
        Showing {filtered.length} of {apps.length} apps
      </p>

      {/* Table / Cards */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">App</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bonus</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rating</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Flags</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(app => (
                <tr key={app.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      {app.icon ? (
                        <img src={app.icon} alt={app.name} className="w-9 h-9 rounded-xl object-cover border border-slate-200" />
                      ) : (
                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">
                          {app.name?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-slate-800">{app.name}</p>
                        <p className="text-xs text-slate-400">/{app.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                      {app.category || 'N/A'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-slate-800">{app.bonus || '—'}</td>
                  <td className="px-5 py-3.5 text-slate-600">{app.rating || '—'} ⭐</td>
                  <td className="px-5 py-3.5">
                    <div className="flex gap-1.5">
                      {app.isNew && <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold">NEW</span>}
                      {app.isTrending && <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">TREND</span>}
                      {!app.isNew && !app.isTrending && <span className="text-slate-300 text-xs">—</span>}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/edit-app/${app.id}`}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-medium hover:bg-blue-100 transition"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(app.id, app.name)}
                        disabled={deleting === app.id}
                        className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 transition disabled:opacity-50"
                      >
                        {deleting === app.id ? '...' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-slate-100">
          {filtered.map(app => (
            <div key={app.id} className="p-4">
              <div className="flex items-center gap-3 mb-3">
                {app.icon ? (
                  <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-xl object-cover border border-slate-200" />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-bold">
                    {app.name?.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 truncate">{app.name}</p>
                  <p className="text-xs text-slate-400">{app.category || 'N/A'} • {app.bonus || '—'}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/edit-app/${app.id}`}
                  className="flex-1 text-center px-3 py-2 rounded-lg bg-blue-50 text-blue-600 text-xs font-medium hover:bg-blue-100 transition"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => handleDelete(app.id, app.name)}
                  disabled={deleting === app.id}
                  className="flex-1 px-3 py-2 rounded-lg bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 transition disabled:opacity-50"
                >
                  {deleting === app.id ? '...' : '🗑 Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No apps found. {search || filterCat !== 'all' ? 'Try changing filters.' : 'Add your first app!'}
          </div>
        )}
      </div>
    </div>
  );
}
