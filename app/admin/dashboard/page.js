'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ── SVG Icons ── */
const I = {
  phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  fire: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>,
  trend: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  folder: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>,
  plus: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  arrow: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>,
  globe: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
};

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/apps')
      .then(res => res.json())
      .then(data => { if (data.success) setApps(data.apps); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const totalApps = apps.length;
  const newApps = apps.filter(a => a.isNew).length;
  const trendingApps = apps.filter(a => a.isTrending).length;
  const categories = [...new Set(apps.map(a => (a.category || 'Uncategorized').toLowerCase()))];

  const stats = [
    { label: 'Total Apps', value: totalApps, icon: I.phone, gradient: 'from-blue-500/15 to-cyan-500/5', border: 'border-blue-500/15', text: 'text-blue-400', iconBg: 'bg-blue-500/10 text-blue-400' },
    { label: 'New Apps', value: newApps, icon: I.fire, gradient: 'from-orange-500/15 to-amber-500/5', border: 'border-orange-500/15', text: 'text-orange-400', iconBg: 'bg-orange-500/10 text-orange-400' },
    { label: 'Trending', value: trendingApps, icon: I.trend, gradient: 'from-emerald-500/15 to-green-500/5', border: 'border-emerald-500/15', text: 'text-emerald-400', iconBg: 'bg-emerald-500/10 text-emerald-400' },
    { label: 'Categories', value: categories.length, icon: I.folder, gradient: 'from-violet-500/15 to-purple-500/5', border: 'border-violet-500/15', text: 'text-violet-400', iconBg: 'bg-violet-500/10 text-violet-400' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="animate-spin h-6 w-6 text-slate-500" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600/10 via-[#12121a] to-orange-600/10 border border-white/5 p-6">
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl" />
        <h2 className="text-xl font-bold text-white">Welcome back, Admin</h2>
        <p className="text-slate-400 text-sm mt-1">Here&apos;s what&apos;s happening with your apps today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.gradient} border ${s.border}`}>
            <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center mb-3`}>{s.icon}</div>
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className={`text-xs font-medium ${s.text} mt-0.5`}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
        <h3 className="text-sm font-bold text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/add-app"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-sm font-semibold shadow-lg shadow-red-900/30 transition-all duration-200">
            {I.plus} Add New App
          </Link>
          <Link href="/admin/apps"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/15 hover:text-white transition-all">
            {I.phone} Manage Apps
          </Link>
          <Link href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/15 hover:text-white transition-all">
            {I.globe} View Site
          </Link>
        </div>
      </div>

      {/* Recent Apps */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white">Recent Apps</h3>
          <Link href="/admin/apps" className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
            View All {I.arrow}
          </Link>
        </div>
        <div className="space-y-2">
          {apps.slice(-5).reverse().map(app => (
            <div key={app.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-all duration-200">
              {app.icon ? (
                <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-xl object-cover border border-white/10" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 text-sm font-bold border border-white/10">{app.name?.charAt(0) || '?'}</div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{app.name}</p>
                <p className="text-xs text-slate-500">{app.bonus || '—'} bonus · {app.category || 'N/A'}</p>
              </div>
              <div className="flex gap-1.5">
                {app.isNew && <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold border border-orange-500/20">NEW</span>}
                {app.isTrending && <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">TREND</span>}
              </div>
            </div>
          ))}
          {apps.length === 0 && <p className="text-center text-slate-500 text-sm py-8">No apps yet. Add your first app!</p>}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
        <h3 className="text-sm font-bold text-white mb-4">Category Breakdown</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => {
            const count = apps.filter(a => (a.category || '').toLowerCase() === cat).length;
            return (
              <span key={cat} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                <span className="px-1.5 py-0.5 rounded-md bg-white/10 text-slate-400 text-[10px] font-bold">{count}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
