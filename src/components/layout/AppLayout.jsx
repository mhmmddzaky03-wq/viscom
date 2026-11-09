import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import GlobalModal from '../common/GlobalModal';
import { Menu, X } from '../common/Icons';

export default function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-[#eef7fc] flex items-center justify-center p-0 lg:p-3 xl:p-4 text-slate-800 overflow-hidden">
      {/* Outer App Window Shell - Stuck to viewport height, perfectly framed */}
      <div className="w-full max-w-[1440px] h-full lg:h-[96vh] bg-white lg:rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-100 sticky top-0 z-30 shrink-0">
          <div>
            <span className="text-xl font-extrabold text-slate-800 tracking-tight">
              BUNGKOK
            </span>
            <p className="text-[9px] font-semibold text-slate-400 tracking-widest uppercase">
              Posture Tracker
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-xs text-slate-500 hover:text-slate-800 px-2 py-1 rounded"
            >
              Beranda
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs flex"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-72 bg-white h-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar onNavClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}

        {/* Desktop Sidebar (Full Height of Window Shell) */}
        <div className="hidden lg:block shrink-0 h-full">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 bg-[#f8fbfe] overflow-y-auto h-full p-3 sm:p-5 lg:p-5 xl:p-6">
          <Outlet />
        </main>
      </div>

      {/* Global Modals for All Pages */}
      <GlobalModal />
    </div>
  );
}
