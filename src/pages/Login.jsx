import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Bell, TrendingUp, Check } from '../components/common/Icons';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('nadia@email.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#eef7fc] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-100">
        {/* Left Form Area */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            {/* Logo & Navigation */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="text-2xl font-extrabold text-slate-800 tracking-tight">
                BUNGKoK.
              </Link>
              <Link to="/" className="text-xs font-semibold text-slate-500 hover:text-slate-800">
                Beranda
              </Link>
            </div>

            <p className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-1">
              Kebiasaan kecil, dampak baik.
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Halo lagi!
            </h1>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Masuk untuk melanjutkan kebiasaan baikmu. Duduk lebih sadar, satu hari demi satu hari.
            </p>

            {/* Google OAuth Button */}
            <button
              type="button"
              onClick={() => navigate('/app/dashboard')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors mb-5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Lanjutkan dengan Google</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-xs text-slate-400 font-medium absolute">
                atau masuk dengan email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink focus:outline-none"
                  placeholder="nadia@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kata sandi
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink focus:outline-none"
                  placeholder="••••••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-brand-pink focus:ring-brand-pink"
                  />
                  <span>Ingat saya</span>
                </label>
                <a href="#lupa" className="text-brand-pink font-semibold hover:underline">
                  Lupa kata sandi?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-bold py-3 px-4 rounded-xl shadow-pink transition-all transform hover:-translate-y-0.5 mt-2"
              >
                Masuk
              </button>
            </form>
          </div>

          <div className="pt-8 border-t border-slate-100 mt-8 text-center text-xs text-slate-500">
            <span>Belum punya akun? </span>
            <Link to="/register" className="font-bold text-brand-pink hover:underline">
              Daftar sekarang
            </Link>
          </div>
        </div>

        {/* Right Visual Brand Area */}
        <div className="hidden lg:col-span-5 bg-gradient-to-br from-brand-sky via-[#e2f1f8] to-[#d6eef9] p-10 flex flex-col justify-between border-l border-sky-100">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-blue bg-white/70 px-3 py-1 rounded-full">
              Teman kebiasaan dudukmu
            </span>

            <div className="my-12">
              <h2 className="text-3xl font-extrabold text-slate-800 leading-tight mb-2">
                Duduk lebih <br />
                sadar.
              </h2>
              <p className="text-xs font-semibold text-brand-pink tracking-widest uppercase mb-8">
                mulai dari kamu
              </p>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl shadow-xs border border-white space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-pink-100 text-brand-pink flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Pantau postur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Bell className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Pengingat ramah</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-brand-blue flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Lacak kebiasaan</span>
                </div>
              </div>

              {/* Visual spine illustration badge */}
              <div className="flex justify-center mb-6">
                <div className="w-36 h-36 rounded-2xl bg-white/70 p-2 border border-white/80 shadow-xs flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/hero_spine_woman.png"
                    alt="Postur Tegak"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>

              <div className="inline-block bg-white text-brand-pink font-bold text-xs px-4 py-2 rounded-full shadow-xs">
                Yuk, tegakkan posturmu! 🌿
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Teman duduk, bukan penghakim. <br />
              Pendamping kebiasaan, bukan alat diagnosis kesehatan.
            </p>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-sky-200/50 pt-4">
              <span>© 2026 Bungkok</span>
              <div className="flex gap-4">
                <a href="#privasi" className="hover:underline">Privasi</a>
                <a href="#ketentuan" className="hover:underline">Ketentuan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

