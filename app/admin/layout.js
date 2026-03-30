'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Smartphone, Plus, Globe, LogOut, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'All Apps', href: '/admin/apps', icon: Smartphone },
  { label: 'Add App', href: '/admin/add-app', icon: Plus },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checking, setChecking] = useState(true);

  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) { setChecking(false); return; }
    fetch('/api/admin/apps')
      .then(res => { if (res.status === 401) router.push('/admin/login'); else setChecking(false); })
      .catch(() => router.push('/admin/login'));
  }, [pathname, isLoginPage, router]);

  if (isLoginPage) return children;

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          Checking auth…
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const getPageTitle = () => {
    const match = navItems.find(i => i.href === pathname);
    if (match) return match.label;
    if (pathname.startsWith('/admin/edit-app')) return 'Edit App';
    return 'Admin';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {sidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-[#0d0d14] border-r border-white/5`}>
        {/* Brand */}
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-red-500/20">A</div>
              <div>
                <h2 className="text-white font-bold text-sm tracking-wide">AllYonoMax</h2>
                <p className="text-slate-500 text-[11px] font-medium">Admin Console</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="p-3 space-y-1 mt-2">
          {navItems.map(item => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-gradient-to-r from-red-600/20 to-orange-600/10 text-red-400 border border-red-500/20 shadow-lg shadow-red-900/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
                {item.label}
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/5">
          <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all mb-1">
            <Globe className="w-[18px] h-[18px]" /> View Site
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-all">
            <LogOut className="w-[18px] h-[18px]" /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-[#0d0d14]/80 backdrop-blur-xl border-b border-white/5 px-4 py-3.5 flex items-center gap-4 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-white">{getPageTitle()}</h1>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              admin
            </span>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
