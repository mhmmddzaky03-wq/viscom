import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Trophy, CheckCircle, ArrowRight, ShieldCheck, Clock, Award } from '../components/common/Icons';

export default function Tantangan() {
  const { challenges, openModal } = useApp();
  const [activeTab, setActiveTab] = useState('diikuti'); // 'diikuti', 'tersedia', 'selesai'

  const diikutiList = challenges.filter((c) => c.type === 'diikuti');
  const tersediaList = challenges.filter((c) => c.type === 'tersedia');
  const selesaiList = challenges.filter((c) => c.type === 'selesai');

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">
              {activeTab === 'diikuti'
                ? 'Tantangan'
                : activeTab === 'tersedia'
                ? 'Tantangan tersedia'
                : 'Tantangan selesai'}
            </h1>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Data contoh
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {activeTab === 'diikuti'
              ? 'Pilih target kecil yang sesuai dengan rutinitasmu.'
              : activeTab === 'tersedia'
              ? 'Baca syaratnya, lalu pilih target yang terasa nyaman.'
              : 'Pencapaianmu tersimpan, tanpa perlu klaim ulang.'}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveTab('diikuti')}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'diikuti'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Diikuti · {diikutiList.length}
          </button>
          <button
            onClick={() => setActiveTab('tersedia')}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'tersedia'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Tersedia
          </button>
          <button
            onClick={() => setActiveTab('selesai')}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'selesai'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Selesai · {selesaiList.length}
          </button>
        </div>
      </div>

      {/* DIKUTI TAB (Page 6) */}
      {activeTab === 'diikuti' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Challenge Cards */}
          <div className="lg:col-span-8 space-y-4">
            {/* Card 1: Tiga Hari Mulai */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-slate-400">
                  13–19 Juli • Sedang diikuti
                </span>
                <span className="text-xs font-bold text-brand-pink bg-pink-50 px-2.5 py-0.5 rounded-full">
                  +15 poin
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Tiga Hari Mulai
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Kembali berlatih pada tiga hari berbeda. Satu sesi valid per hari sudah cukup untuk menambah progres.
              </p>

              <div className="bg-brand-sky p-3.5 rounded-xl mb-4">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Progres sejak bergabung</span>
                  <span className="text-brand-pink font-bold">2 / 3 hari</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-brand-pink rounded-full w-2/3" />
                </div>
              </div>

              <button
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
                className="text-xs font-bold text-brand-blue hover:underline"
              >
                Lihat syarat tantangan →
              </button>
            </div>

            {/* Card 2: Ingat Jeda */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-slate-400">
                  Diikuti • 9–20 Juli
                </span>
                <span className="text-xs font-bold text-brand-blue bg-sky-50 px-2.5 py-0.5 rounded-full">
                  badge Ingat Jeda
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Ingat Jeda
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Ikuti lima pengingat jeda selama latihan.
              </p>

              <div className="bg-brand-sky p-3.5 rounded-xl mb-4">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Jeda yang diikuti</span>
                  <span className="text-brand-pink font-bold">3 / 5</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-brand-pink rounded-full w-3/5" />
                </div>
              </div>

              <button
                onClick={() =>
                  openModal('tantangan-detail', {
                    id: 'ingat-jeda',
                    title: 'Ingat Jeda',
                    period: '9–20 Juli 2025',
                    status: 'Sedang diikuti',
                    requirement:
                      'Ambil jeda saat pengingat muncul, kemudian kembali saat siap. Setelah lima jeda tercatat, badge Ingat Jeda diberikan otomatis satu kali.',
                    current: 3,
                    total: 5,
                    unit: 'jeda',
                  })
                }
                className="text-xs font-bold text-brand-blue hover:underline"
              >
                Lihat detail →
              </button>
            </div>

            {/* Card 3: Pengamat Mingguan (completed item) */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                Selesai • 13 Juli
              </span>
              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Pengamat Mingguan
              </h2>
              <p className="text-xs text-slate-600 mb-2">
                5 / 5 sesi • Periode 7–13 Juli 2025
              </p>
              <p className="text-xs text-slate-500 mb-3">
                Badge otomatis diperoleh pada 13 Juli.
              </p>
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
                className="text-xs font-bold text-brand-pink hover:underline"
              >
                Lihat badge yang diperoleh →
              </button>
            </div>
          </div>

          {/* Right Explanatory Card */}
          <div className="lg:col-span-4 bg-[#e9f5fc] p-6 rounded-2xl border border-sky-100 self-start text-xs space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Langkahmu tetap berarti.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Hadiah diberikan otomatis satu kali setelah target terpenuhi.
              </p>
            </div>

            <ul className="space-y-2 text-slate-600 border-t border-sky-200/60 pt-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                <span>Jeda diperbolehkan.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                <span>Tidak ada pengurangan poin.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                <span>Tidak perlu menahan posisi.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TERSEDIA TAB (Page 29) */}
      {activeTab === 'tersedia' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-slate-400">
                  Tersedia • 15–21 Juli
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  +10 poin
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Kembali Esok
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Selesaikan sesi valid pada dua hari berbeda dalam periode tantangan.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl mb-4 text-xs font-semibold text-slate-600 flex justify-between">
                <span>Progres</span>
                <span>0 / 2 hari</span>
              </div>

              <p className="text-xs text-slate-500 mb-4">
                Hadiah: +10 poin • Diberikan otomatis sekali
              </p>

              <button
                onClick={() =>
                  openModal('tantangan-konfirmasi', {
                    id: 'kembali-esok',
                    title: 'Kembali Esok',
                    period: '15–21 Juli 2025',
                    rewardValue: '+10 poin',
                  })
                }
                className="bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-pink transition-colors"
              >
                Lihat syarat & ikuti
              </button>
            </div>
          </div>

          {/* Right Rules Card */}
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 self-start text-xs space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">
              Mulai dari yang kecil.
            </h3>
            <ol className="space-y-1.5 text-slate-600 list-decimal list-inside leading-relaxed">
              <li>Baca syarat hadiah.</li>
              <li>Ikuti tantangan.</li>
              <li>Latihan sesuai rutinitas.</li>
              <li>Hadiah masuk saat selesai.</li>
            </ol>
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-200">
              Tidak ada penalti untuk jeda atau hari tanpa latihan.
            </p>
          </div>
        </div>
      )}

      {/* SELESAI TAB (Page 30) */}
      {activeTab === 'selesai' && (
        <div className="space-y-4 max-w-2xl">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
              7–13 Juli 2025 • Selesai pada 13 Juli
            </span>
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Pengamat Mingguan
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Sesi valid selesai: <span className="font-bold text-slate-800">5 / 5 sesi</span>
            </p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Badge sudah diberikan otomatis. Hadiah tidak dapat diperoleh ulang untuk tantangan yang sama.
            </p>
            <Link
              to="/app/reward"
              className="text-xs font-bold text-brand-pink hover:underline inline-block"
            >
              Lihat koleksi badge →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

