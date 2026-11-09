import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Star,
  Award,
  Clock,
  Check,
  Camera,
  RefreshCw,
  Lock,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Gift,
} from '../components/common/Icons';
import { virtualShopData } from '../data/mockData';

export default function RewardBadge() {
  const {
    user,
    badges,
    ownedItems,
    pointsHistory,
    openModal,
  } = useApp();

  const [activeSection, setActiveSection] = useState('koleksi'); // 'koleksi' or 'riwayat'

  // If viewing Riwayat Poin (Pages 28, 52, 54)
  if (activeSection === 'riwayat') {
    return (
      <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => setActiveSection('koleksi')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-700 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke hadiah
            </button>
            <h1 className="text-2xl font-bold text-slate-900">Riwayat poin</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Lihat asal poin dan bagaimana saldomu berubah.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-center">
            Data contoh
          </span>
        </div>

        {/* 3 Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-xs font-semibold text-slate-400">Saldo tersedia</span>
            <div className="text-3xl font-extrabold text-slate-800 mt-1">{user.points}</div>
            <p className="text-xs text-slate-500 mt-1">
              {ownedItems['sky-morning'] || ownedItems['bingkai-cloud']
                ? 'Setelah penukaran hadiah'
                : 'Belum ada penukaran'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-xs font-semibold text-slate-400">Poin kumulatif</span>
            <div className="text-3xl font-extrabold text-brand-pink mt-1">
              {user.totalPointsCumulative}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Level {user.level} tetap • Dipakai untuk level
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-xs font-semibold text-slate-400">
              {ownedItems['sky-morning'] ? 'Poin ditukar' : 'Poin sesi minggu ini'}
            </span>
            <div className="text-3xl font-extrabold text-slate-800 mt-1">
              {ownedItems['sky-morning'] ? '−100' : '+130'}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {ownedItems['sky-morning'] ? 'Sky Morning' : '8–14 Juli 2025'}
            </p>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 uppercase font-semibold border-b border-slate-100">
                <tr>
                  <th className="py-3 px-5">Tanggal</th>
                  <th className="py-3 px-5">Aktivitas</th>
                  <th className="py-3 px-5">Masuk / keluar</th>
                  <th className="py-3 px-5">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {pointsHistory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-5 font-medium text-slate-900">{item.date}</td>
                    <td className="py-3.5 px-5 font-semibold">{item.activity}</td>
                    <td className="py-3.5 px-5 font-bold">
                      <span
                        className={
                          item.type === 'out'
                            ? 'text-red-500'
                            : 'text-emerald-600'
                        }
                      >
                        {item.change}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-slate-500">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 text-[11px] text-slate-500 border-t border-slate-100">
            Hadiah tantangan Tiga Hari Mulai belum masuk karena progres masih 2 / 3 hari.
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW (Pages 7, 51, 53)
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">Reward & Badge</h1>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Data contoh
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Rayakan langkah kecil yang sudah kamu bangun.
          </p>
        </div>

        {/* Applied Alert if any */}
        {(ownedItems['sky-morning'] || ownedItems['bingkai-cloud']) && (
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-center">
            Hadiah diterapkan • Saldo terbaru {user.points} poin.
          </span>
        )}
      </div>

      {/* Balance & Level Hero Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left: Saldo Tersedia */}
        <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400">Saldo tersedia</span>
            <div className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-1">
              {user.points}
            </div>
            <p className="text-xs text-slate-500">poin untuk hadiah virtual</p>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={() => setActiveSection('riwayat')}
              className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              Lihat riwayat poin
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Level & Progress */}
        <div className="md:col-span-7 bg-[#e9f5fc] p-6 rounded-2xl border border-sky-100 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
              Level {user.level} • {user.levelTitle}
            </span>
            <div className="text-2xl font-bold text-slate-800 mt-1 mb-1">
              {user.totalPointsCumulative} poin kumulatif
            </div>
            <p className="text-xs text-slate-600">
              65 lagi menuju Level {user.targetLevel}. Menukar hadiah tidak menurunkan levelmu.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-sky-200/50">
            <div className="flex justify-between text-xs text-slate-600 font-semibold mb-1">
              <span>Progres Level {user.level}</span>
              <span>
                {user.totalPointsCumulative} / {user.levelProgressMax} poin
              </span>
            </div>
            <div className="w-full h-2.5 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-pink rounded-full transition-all duration-300"
                style={{
                  width: `${(user.totalPointsCumulative / user.levelProgressMax) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section ("Koleksi pencapaian") */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 mb-4">
          Koleksi pencapaian
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((b) => (
            <div
              key={b.id}
              onClick={() => openModal('badge-detail', b)}
              className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                  b.unlocked
                    ? b.icon === 'camera'
                      ? 'bg-sky-100 text-brand-blue'
                      : 'bg-pink-100 text-brand-pink'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {b.icon === 'camera' ? (
                  <Camera className="w-6 h-6" />
                ) : b.icon === 'refresh' ? (
                  <RefreshCw className="w-6 h-6" />
                ) : b.icon === 'lock' ? (
                  <Lock className="w-6 h-6" />
                ) : (
                  <Check className="w-6 h-6" strokeWidth={3} />
                )}
              </div>

              <h3 className="text-xs font-bold text-slate-800 line-clamp-1 mb-0.5">
                {b.title}
              </h3>
              <p className="text-[11px] font-semibold text-slate-400 mb-1">
                {b.date}
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Virtual Rewards Section ("Hadiah Virtual") */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 mb-4">
          Hadiah Virtual
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {virtualShopData.map((item) => {
            const isOwned = ownedItems[item.id];
            const canAfford = user.points >= item.price;
            const diff = item.price - user.points;

            return (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                  isOwned
                    ? 'border-emerald-200 bg-emerald-50/40'
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-slate-400">{item.type}</span>
                    <span className="text-xs font-extrabold text-brand-pink">
                      {item.price} poin
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  {isOwned ? (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 py-2 px-3 rounded-xl block text-center">
                      Dipakai • Sudah dimiliki
                    </span>
                  ) : canAfford ? (
                    <button
                      onClick={() =>
                        openModal('tukar-konfirmasi', { item })
                      }
                      className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-pink transition-colors"
                    >
                      Tukar poin
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        openModal('poin-kurang', { item, userPoints: user.points })
                      }
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
                    >
                      Kurang {diff} poin
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

