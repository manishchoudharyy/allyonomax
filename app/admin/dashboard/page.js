'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Smartphone, Flame, TrendingUp, FolderOpen, Plus, ArrowRight, Globe } from 'lucide-react';

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
    { label: 'Total Apps', value: totalApps, icon: Smartphone, gradient: 'from-blue-500/15 to-cyan-500/5', border: 'border-blue-500/15', text: 'text-blue-400', iconBg: 'bg-blue-500/10 text-blue-400' },
    { label: 'New Apps', value: newApps, icon: Flame, gradient: 'from-orange-500/15 to-amber-500/5', border: 'border-orange-500/15', text: 'text-orange-400', iconBg: 'bg-orange-500/10 text-orange-400' },
    { label: 'Trending', value: trendingApps, icon: TrendingUp, gradient: 'from-emerald-500/15 to-green-500/5', border: 'border-emerald-500/15', text: 'text-emerald-400', iconBg: 'bg-emerald-500/10 text-emerald-400' },
    { label: 'Categories', value: categories.length, icon: FolderOpen, gradient: 'from-violet-500/15 to-purple-500/5', border: 'border-violet-500/15', text: 'text-violet-400', iconBg: 'bg-violet-500/10 text-violet-400' },
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
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.gradient} border ${s.border}`}>
              <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center mb-3`}><Icon className="w-5 h-5" /></div>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className={`text-xs font-medium ${s.text} mt-0.5`}>{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
        <h3 className="text-sm font-bold text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/add-app"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-sm font-semibold shadow-lg shadow-red-900/30 transition-all duration-200">
            <Plus className="w-4 h-4" /> Add New App
          </Link>
          <Link href="/admin/apps"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/15 hover:text-white transition-all">
            <Smartphone className="w-4 h-4" /> Manage Apps
          </Link>
          <Link href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/15 hover:text-white transition-all">
            <Globe className="w-4 h-4" /> View Site
          </Link>
        </div>
      </div>

      {/* Recent Apps */}
      <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white">Recent Apps</h3>
          <Link href="/admin/apps" className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
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
