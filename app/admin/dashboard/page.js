'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/apps')
      .then(res => res.json())
      .then(data => {
        if (data.success) setApps(data.apps);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalApps = apps.length;
  const newApps = apps.filter(a => a.isNew).length;
  const trendingApps = apps.filter(a => a.isTrending).length;
  const categories = [...new Set(apps.map(a => (a.category || 'Uncategorized').toLowerCase()))];

  const stats = [
    { label: 'Total Apps', value: totalApps, icon: '📱', color: 'bg-blue-500', lightBg: 'bg-blue-50', textColor: 'text-blue-700' },
    { label: 'New Apps', value: newApps, icon: '🔥', color: 'bg-orange-500', lightBg: 'bg-orange-50', textColor: 'text-orange-700' },
    { label: 'Trending', value: trendingApps, icon: '📈', color: 'bg-green-500', lightBg: 'bg-green-50', textColor: 'text-green-700' },
    { label: 'Categories', value: categories.length, icon: '📂', color: 'bg-purple-500', lightBg: 'bg-purple-50', textColor: 'text-purple-700' },
  ];

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
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
        <h2 className="text-xl font-bold">Welcome back, Admin 👋</h2>
        <p className="text-slate-400 text-sm mt-1">Here&apos;s what&apos;s happening with your apps today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${stat.lightBg} mb-3`}>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
            <p className="text-xs font-medium text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/add-app"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition shadow-sm"
          >
            ➕ Add New App
          </Link>
          <Link
            href="/admin/apps"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition"
          >
            📱 Manage Apps
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition"
          >
            🌐 View Site
          </Link>
        </div>
      </div>

      {/* Recent Apps */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-800">Recent Apps</h3>
          <Link href="/admin/apps" className="text-xs font-medium text-red-600 hover:text-red-700">
            View All →
          </Link>
        </div>
        <div className="space-y-3">
          {apps.slice(-5).reverse().map(app => (
            <div key={app.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
              {app.icon ? (
                <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-xl object-cover border border-slate-200" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-bold">
                  {app.name?.charAt(0) || '?'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{app.name}</p>
                <p className="text-xs text-slate-500">{app.bonus || '—'} bonus • {app.category || 'N/A'}</p>
              </div>
              <div className="flex gap-1.5">
                {app.isNew && <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold">NEW</span>}
                {app.isTrending && <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">TREND</span>}
              </div>
            </div>
          ))}
          {apps.length === 0 && (
            <p className="text-center text-slate-400 text-sm py-4">No apps yet. Add your first app!</p>
          )}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 mb-4">Category Breakdown</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => {
            const count = apps.filter(a => (a.category || '').toLowerCase() === cat).length;
            return (
              <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[10px] font-bold">{count}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
