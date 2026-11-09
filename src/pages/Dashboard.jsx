import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Star,
  Zap,
  Clock,
  Activity,
  Camera,
  Check,
  RefreshCw,
  Trophy,
  ChevronRight,
  Maximize2,
} from '../components/common/Icons';
import { weeklyChartData } from '../data/mockData';

export default function Dashboard() {
  const { user, openModal, sessions, challenges, badges } = useApp();
  const navigate = useNavigate();
  const [cameraActive, setCameraActive] = useState(false);

  return (
    <div className="space-y-3.5 xl:space-y-4 max-w-[1240px] mx-auto animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
            Halo, Rafi! <span className="inline-block animate-bounce">👋</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Senin, 14 Juli 2025 · <span className="font-medium text-slate-600">Data contoh</span>
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-medium text-slate-600">
              Sesi terakhir: 14 Juli, 09.45
            </p>
            <p className="text-[11px] text-slate-400">
              {cameraActive ? 'Kamera aktif memantau postur.' : 'Kamera belum aktif. Mulai saat kamu siap.'}
            </p>
          </div>
          <Link to="/app/profil" className="shrink-0" title="Buka profil">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm hover:ring-2 hover:ring-brand-pink transition-all"
            />
          </Link>
        </div>
      </div>

      {/* Row of 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Card 1: Poin Hari Ini */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-slate-500">Poin Hari Ini</span>
            <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center text-brand-pink">
              <Star className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-800 tracking-tight">25</div>
          <p className="text-[11px] font-medium text-emerald-600 mt-0.5 flex items-center gap-0.5">
            <span>▲</span> +25 dari sesi tadi
          </p>
        </div>

        {/* Card 2: Total Poin */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-slate-500">Total Poin</span>
            <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-brand-blue">
              <Zap className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-800 tracking-tight">
            {user.points}
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Level {user.level} · 65 poin ke Level {user.targetLevel}
          </p>
        </div>

        {/* Card 3: Waktu Terpantau */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-slate-500">Waktu Terpantau</span>
            <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-brand-blue">
              <Clock className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-800 tracking-tight">25m</div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            dari 30 menit total sesi
          </p>
        </div>

        {/* Card 4: Postur Tegak (Vibrant Pink Card) */}
        <div className="bg-brand-pink text-white p-4 rounded-2xl shadow-pink hover:bg-brand-pink-hover transition-colors">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-white/90">Postur Tegak</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Activity className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white tracking-tight">80%</div>
          <p className="text-[11px] text-white/80 mt-0.5">
            20 dari 25 menit valid
          </p>
        </div>
      </div>

      {/* Middle Row: Hero CTA + Live Camera / Pose Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {/* Left: Hero CTA Card */}
        <div className="lg:col-span-7 bg-[#e2f1f8] p-5 sm:p-6 rounded-2xl border border-sky-100 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-white text-slate-700 text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs mb-3">
              Aktif hari ini
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mb-1.5">
              Siap Berlatih?
            </h2>
            <p className="text-xs text-slate-600 mb-4 max-w-md">
              Sesi terakhir: 14 Juli · 25 menit valid · 80% tegak
            </p>
          </div>

          <div>
            <button
              onClick={() => setCameraActive(!cameraActive)}
              className="bg-brand-pink hover:bg-brand-pink-hover text-white font-bold py-2.5 px-5 rounded-2xl shadow-pink transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm flex items-center gap-2"
            >
              <Activity className="w-4 h-4" />
              <span>{cameraActive ? 'Hentikan Latihan' : 'Mulai Latihan Sekarang'}</span>
            </button>
          </div>
        </div>

        {/* Right: Camera Preview / Posture Illustration */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between">
          {/* Image Container with Badges */}
          <div className="relative h-36 sm:h-40 bg-slate-100 overflow-hidden group">
            <img
              src="/assets/posture_cam.png"
              alt="Ilustrasi posisi duduk"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Top Badge: Camera Status */}
            <div className="absolute top-2.5 left-2.5">
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full text-white shadow-sm ${
                  cameraActive ? 'bg-emerald-500' : 'bg-brand-pink'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {cameraActive ? 'Kamera aktif memantau' : 'Kamera belum aktif'}
              </span>
            </div>

            {/* Bottom Badge: Label */}
            <div className="absolute bottom-2.5 left-2.5">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-medium px-2 py-0.5 rounded bg-slate-900/60 backdrop-blur-xs text-white">
                <Maximize2 className="w-3 h-3" />
                Ilustrasi posisi duduk
              </span>
            </div>
          </div>

          {/* Bottom 3 Mini Stats */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 py-2.5 bg-white text-center">
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-800">25m</div>
              <div className="text-[10px] text-slate-500">Waktu valid</div>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-800">80%</div>
              <div className="text-[10px] text-slate-500">Tegak</div>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-800">25</div>
              <div className="text-[10px] text-slate-500">Poin dapat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Middle Row: Durasi Valid (Bar Chart) + Total Poin Kumulatif */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {/* Left: Weekly Bar Chart Card */}
        <div className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
              Durasi valid minggu ini
            </h3>
            <span className="text-[11px] text-slate-400">8–14 Juli 2025</span>
          </div>

          <div className="mb-2">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              135 m
            </span>
            <span className="text-[11px] text-slate-500 ml-2">6 dari 7 hari aktif</span>
          </div>

          {/* Chart Bars */}
          <div className="flex items-end justify-between gap-2 sm:gap-3.5 h-20 sm:h-24 pt-2 pb-1 border-b border-slate-100">
            {weeklyChartData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                {/* Bar */}
                <div
                  className={`w-full max-w-[34px] rounded-t-lg transition-all duration-300 relative ${
                    item.isCurrent
                      ? 'bg-[#bae6fd] hover:bg-[#7dd3fc]'
                      : item.value === 0
                      ? 'bg-slate-200'
                      : 'bg-brand-pink hover:bg-brand-pink-hover'
                  }`}
                  style={{ height: item.height }}
                >
                  {/* Tooltip on hover */}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {item.value} m
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Day Labels */}
          <div className="flex justify-between text-[10px] text-slate-400 pt-1.5">
            {weeklyChartData.map((item, idx) => (
              <span
                key={idx}
                className={`flex-1 text-center truncate ${
                  item.isCurrent ? 'font-bold text-brand-blue' : ''
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Total Poin Kumulatif Card */}
        <div className="lg:col-span-5 bg-[#e1f2fb] p-4 sm:p-5 rounded-2xl border border-sky-100 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
              Total Poin Kumulatif
            </h3>
            <span className="text-[11px] font-semibold text-slate-500">
              Level {user.level}
            </span>
          </div>

          <div className="my-2 sm:my-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              {user.totalPointsCumulative}
            </span>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-600 mb-1 font-medium">
              <span>Progress ke Level {user.targetLevel}</span>
              <span>
                {user.totalPointsCumulative} / {user.levelProgressMax}
              </span>
            </div>
            {/* Progress track */}
            <div className="w-full h-2.5 bg-white/70 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-brand-sky-accent rounded-full transition-all duration-300"
                style={{
                  width: `${(user.totalPointsCumulative / user.levelProgressMax) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: 3 Cards (Sesi Terbaru, Badge Koleksi, Tantangan Aktif) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {/* Card 1: Sesi Terbaru */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-800">Sesi Terbaru</h3>
              <Link
                to="/app/riwayat"
                className="text-xs font-medium text-brand-blue hover:underline"
              >
                Lihat semua
              </Link>
            </div>

            <div className="space-y-3">
              {/* Session 1 */}
              <div
                onClick={() => navigate('/app/riwayat/sesi-1')}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-brand-blue">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Senin, 14 Juli</p>
                    <p className="text-[11px] text-slate-400">30 menit · 80% tegak</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +25 poin
                </span>
              </div>

              {/* Session 2 */}
              <div
                onClick={() => navigate('/app/riwayat/sesi-2')}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-brand-blue">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Minggu, 13 Juli</p>
                    <p className="text-[11px] text-slate-400">35 menit · 80% tegak</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +25 poin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Badge Koleksi */}
        <div className="bg-[#dcf0fb] p-4 rounded-2xl border border-sky-100 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-800">Badge Koleksi</h3>
              <Link
                to="/app/reward"
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                4 / 5 diperoleh
              </Link>
            </div>

            {/* Badges in a horizontal row */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {/* Badge 1: Langkah Pertama */}
              <button
                onClick={() =>
                  openModal('badge-detail', {
                    title: 'Langkah Pertama',
                    description: 'Sesi valid pertama selesai.',
                    date: '9 Juli 2025',
                    unlocked: true,
                    icon: 'check',
                  })
                }
                className="flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <span className="text-[10px] font-medium text-slate-700 mt-1.5 line-clamp-2 leading-tight">
                  Langkah Pertama
                </span>
              </button>

              {/* Badge 2: Kalibrasi Siap */}
              <button
                onClick={() =>
                  openModal('badge-detail', {
                    title: 'Kalibrasi Siap',
                    description: 'Kalibrasi pertama berhasil.',
                    date: '9 Juli 2025',
                    unlocked: true,
                    icon: 'camera',
                  })
                }
                className="flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-slate-700 mt-1.5 line-clamp-2 leading-tight">
                  Kalibrasi Siap
                </span>
              </button>

              {/* Badge 3: Mulai Konsisten */}
              <button
                onClick={() =>
                  openModal('badge-detail', {
                    title: 'Mulai Konsisten',
                    description: 'Latihan pada 3 hari berbeda.',
                    date: '11 Juli 2025',
                    unlocked: true,
                    icon: 'refresh',
                  })
                }
                className="flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-slate-700 mt-1.5 line-clamp-2 leading-tight">
                  Mulai Konsisten
                </span>
              </button>

              {/* Badge 4: Pengamat Mingguan */}
              <button
                onClick={() =>
                  openModal('badge-detail', {
                    title: 'Pengamat Mingguan',
                    description: '5 sesi valid dalam seminggu.',
                    date: '13 Juli 2025',
                    unlocked: true,
                    icon: 'check',
                  })
                }
                className="flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <span className="text-[10px] font-medium text-slate-700 mt-1.5 line-clamp-2 leading-tight">
                  Pengamat Mingguan
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Tantangan Aktif */}
        <div className="bg-gradient-to-br from-pink-50/60 to-sky-50/80 p-4 rounded-2xl border border-pink-100/50 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-800">Tantangan Aktif</h3>
              <span className="text-[11px] font-bold text-brand-pink bg-pink-100/70 px-2 py-0.5 rounded-full">
                2 aktif
              </span>
            </div>

            {/* Active Challenge Box */}
            <div
              onClick={() =>
                openModal('tantangan-detail', {
                  id: 'tiga-hari',
                  title: 'Tiga Hari Mulai',
                  period: '13–19 Juli 2025',
                  status: 'Sedang diikuti',
                  requirement:
                    'Satu sesi valid pada tiap hari berbeda dihitung satu kali. Sesi harus selesai, minimal 5 menit valid, dan coverage minimal 70%.',
                  current: 2,
                  total: 3,
                  unit: 'hari',
                })
              }
              className="bg-white/80 p-3 rounded-xl border border-white hover:bg-white cursor-pointer transition-colors mb-3 shadow-2xs"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-pink-100 text-brand-pink flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-800 truncate">
                    Tiga Hari Mulai
                  </p>
                  <p className="text-[10px] text-slate-500 truncate">
                    Hadiah: +15 poin · Otomatis saat selesai
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-pink rounded-full w-2/3" />
                </div>
                <span className="text-[11px] font-bold text-slate-600">2 / 3 hari</span>
              </div>
            </div>
          </div>

          <Link
            to="/app/tantangan"
            className="w-full py-2 px-3 text-center text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-colors shadow-2xs block"
          >
            Lihat semua tantangan
          </Link>
        </div>
      </div>
    </div>
  );
}

