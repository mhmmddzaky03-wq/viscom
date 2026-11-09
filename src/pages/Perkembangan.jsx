import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { weeklyChartData } from '../data/mockData';
import {
  TrendingUp,
  Calendar,
  Activity,
  CheckCircle2,
  ChevronRight,
  Info,
  Clock,
} from '../components/common/Icons';

export default function Perkembangan() {
  const { hasData, setHasData } = useApp();
  const [activeTab, setActiveTab] = useState('mingguan'); // 'mingguan' or 'harian'

  // EMPTY STATE (Page 41)
  if (!hasData) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Perkembangan</h1>
            <p className="text-xs text-slate-500">Kenali ritme latihanmu dari hari ke hari.</p>
          </div>
          <button
            onClick={() => setHasData(true)}
            className="text-xs text-brand-blue hover:underline"
          >
            [Tampilkan data contoh]
          </button>
        </div>

        <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm text-center max-w-lg mx-auto my-12">
          <div className="w-16 h-16 bg-sky-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Belum cukup data untuk melihat pola.
          </h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Selesaikan latihan pada beberapa hari berbeda. Grafik akan terisi dari hasil latihanmu; angka belum ditampilkan karena belum ada data yang cukup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/app/riwayat"
              className="text-xs font-semibold py-3 px-6 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700"
            >
              Lihat riwayat latihan
            </Link>
            <Link
              to="/app/dashboard"
              className="text-xs font-bold py-3 px-6 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white shadow-pink"
            >
              Mulai Latihan
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">
              {activeTab === 'mingguan' ? 'Perkembangan' : 'Perkembangan harian'}
            </h1>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Data contoh
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {activeTab === 'mingguan'
              ? 'Kenali ritme latihanmu dari hari ke hari.'
              : '14 Juli 2025 • Ringkasan satu hari latihan.'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveTab('mingguan')}
            className={`text-xs font-bold px-4 py-1.5 rounded-lg transition-all ${
              activeTab === 'mingguan'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Mingguan
          </button>
          <button
            onClick={() => setActiveTab('harian')}
            className={`text-xs font-bold px-4 py-1.5 rounded-lg transition-all ${
              activeTab === 'harian'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Harian
          </button>
        </div>
      </div>

      {/* WEEKLY VIEW (Page 5) */}
      {activeTab === 'mingguan' && (
        <div className="space-y-6">
          {/* Ritme Latihan Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-xs text-slate-400">8–14 Juli 2025</span>
                <h2 className="text-base font-bold text-slate-900">
                  Ritme latihan minggu ini
                </h2>
                <p className="text-xs text-brand-pink font-semibold mt-0.5">
                  135 menit valid • 6 hari aktif
                </p>
              </div>
            </div>

            {/* Weekly Bars */}
            <div className="flex items-end justify-between gap-3 h-36 pt-6 pb-2 border-b border-slate-100">
              {weeklyChartData.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                  <div
                    className={`w-full max-w-[44px] rounded-t-lg transition-all ${
                      item.isCurrent
                        ? 'bg-brand-blue/80 hover:bg-brand-blue'
                        : item.value === 0
                        ? 'bg-slate-200'
                        : 'bg-brand-pink hover:bg-brand-pink-hover'
                    }`}
                    style={{ height: item.height }}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[11px] text-slate-400 pt-2">
              {weeklyChartData.map((item, idx) => (
                <span key={idx} className="flex-1 text-center truncate">
                  {item.day}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-3">
              0–30 menit • Hari tanpa sesi ditampilkan sebagai nol.
            </p>
          </div>

          {/* Konsistensi Minggu Ini Banner */}
          <div className="bg-[#e9f5fc] p-6 rounded-2xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                Konsistensi minggu ini
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 mt-1">
                6 dari 7 <span className="text-sm font-semibold text-slate-600">hari mencatat latihan</span>
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                Kamu kembali berlatih pada enam hari. Hari tanpa latihan tidak menghapus progresmu.
              </p>
            </div>
            <Link
              to="/app/riwayat"
              className="text-xs font-bold text-brand-pink hover:underline whitespace-nowrap self-start sm:self-center"
            >
              Lihat riwayat latihan →
            </Link>
          </div>

          {/* Persentase Waktu Tegak & Distribusi */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400">Persentase waktu tegak</span>
                <div className="text-4xl font-black text-brand-pink mt-1 mb-1">80%</div>
                <p className="text-xs text-slate-600">pada setiap sesi valid di periode ini</p>
              </div>

              {/* Progress scale */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-pink rounded-full w-[80%]" />
                </div>
                <p className="text-[10px] text-slate-400 mt-2">
                  Skala 0–100% • 9 Jul – 14 Jul
                </p>
              </div>
            </div>

            <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  Dari 135 menit yang terbaca
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-pink" />
                      Tegak
                    </span>
                    <span className="font-bold text-slate-900">108 m • 80%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      Condong ke depan
                    </span>
                    <span className="font-bold text-slate-900">21 m • 15.6%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-2 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      Condong ke belakang
                    </span>
                    <span className="font-bold text-slate-900">6 m • 4.4%</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 mt-6 pt-3 border-t border-slate-100">
                Data sesi, bukan penilaian kesehatan. Engine V3.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DAILY VIEW (Page 39) */}
      {activeTab === 'harian' && (
        <div className="space-y-6">
          {/* Daily Highlight Card */}
          <div className="bg-[#e9f5fc] p-6 rounded-2xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                Sesi selesai
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">1</h2>
              <p className="text-xs text-slate-600 mt-0.5">09.15–09.45 WIB</p>
            </div>
            <div className="sm:text-right">
              <span className="text-xs font-semibold text-slate-500">Waktu valid</span>
              <p className="text-2xl font-bold text-brand-pink">25 m</p>
              <p className="text-xs text-slate-500">Dari total 30 menit</p>
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-4">
              Waktu duduk yang terbaca
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-pink-50/70 rounded-xl border border-pink-100 text-center">
                <span className="text-xs font-semibold text-slate-500">Tegak</span>
                <p className="text-2xl font-extrabold text-brand-pink mt-1">20 menit</p>
              </div>

              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-100 text-center">
                <span className="text-xs font-semibold text-slate-500">Condong ke depan</span>
                <p className="text-2xl font-extrabold text-amber-700 mt-1">4 menit</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <span className="text-xs font-semibold text-slate-500">Condong ke belakang</span>
                <p className="text-2xl font-extrabold text-slate-700 mt-1">1 menit</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg text-center">
              Jeda: 3 menit • Tidak terpantau: 2 menit
            </p>
          </div>

          {/* Bottom CTA Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-blue">Satu sesi selesai.</span>
              <p className="text-sm text-slate-700 mt-0.5">
                Lihat durasi, pengingat, dan rincian +25 poin pada sesi hari ini.
              </p>
            </div>
            <Link
              to="/app/riwayat/sesi-1"
              className="bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold py-2.5 px-6 rounded-full shadow-pink transition-colors whitespace-nowrap self-start sm:self-center"
            >
              Lihat detail sesi
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

