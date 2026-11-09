import React from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  LayoutGrid,
  Clock,
  TrendingUp,
  Trophy,
  Star,
  Settings,
  HelpCircle,
} from '../common/Icons';

export default function Sidebar({ onNavClick }) {
  const { user } = useApp();

  const navItems = [
    { name: 'Dashboard', path: '/app/dashboard', icon: LayoutGrid },
    { name: 'Riwayat Latihan', path: '/app/riwayat', icon: Clock },
    { name: 'Perkembangan', path: '/app/perkembangan', icon: TrendingUp },
    { name: 'Tantangan', path: '/app/tantangan', icon: Trophy },
    { name: 'Reward & Badge', path: '/app/reward', icon: Star },
    { name: 'Profil & Pengaturan', path: '/app/profil', icon: Settings },
    { name: 'Bantuan', path: '/app/bantuan', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-white/90 backdrop-blur-md border-r border-slate-100 flex flex-col justify-between p-4 sm:p-5 h-full shrink-0">
      <div>
        {/* Brand Header */}
        <div className="px-3 py-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-slate-800">
              BUNGKOK
            </span>
          </div>
          <p className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase mt-0.5">
            Posture Tracker
          </p>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1.5" aria-label="Menu Utama">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => onNavClick?.()}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-pink text-white shadow-pink font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" strokeWidth={2.2} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* User Card at Bottom */}
      <NavLink
        to="/app/profil"
        className="flex items-center gap-3 p-3 rounded-2xl bg-brand-sky hover:bg-sky-100/80 transition-colors border border-sky-100/50"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-slate-800 truncate">
            {user.name}
          </p>
          <p className="text-[11px] text-slate-500 truncate">
            Level {user.level} · {user.points} poin
          </p>
        </div>
      </NavLink>
    </aside>
  );
}

