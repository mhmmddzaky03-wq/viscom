import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Settings,
  Volume2,
  Clock,
  Shield,
  Download,
  LogOut,
  Trash2,
  AlertTriangle,
  Check,
} from '../components/common/Icons';

export default function ProfilPengaturan() {
  const { user, setUser, openModal, updateUserProfile } = useApp();

  const [displayName, setDisplayName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [targetDuration, setTargetDuration] = useState(user.targetDuration);
  const [soundActive, setSoundActive] = useState(user.reminderSoundActive);
  const [volume, setVolume] = useState(user.reminderVolume);
  const [breakActive, setBreakActive] = useState(user.breakReminderActive);

  const handleSave = (e) => {
    e.preventDefault();
    updateUserProfile({
      name: displayName,
      email: email,
      targetDuration,
      reminderSoundActive: soundActive,
      reminderVolume: volume,
      breakReminderActive: breakActive,
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Profil & Pengaturan
            </h1>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Data contoh
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Atur identitas, target pribadi, dan kenyamanan latihanmu.
          </p>
        </div>
      </div>

      {/* Card 1: Informasi Profil */}
      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 mb-6">
          Informasi profil
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Form */}
          <form onSubmit={handleSave} className="md:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama tampilan
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-pink transition-colors"
              >
                Simpan perubahan
              </button>
              <button
                type="button"
                onClick={() => openModal('ubah-password')}
                className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Ubah kata sandi
              </button>
            </div>

            <button
              type="button"
              onClick={() => openModal('profil-error')}
              className="text-xs text-slate-400 hover:text-slate-600 underline block pt-1"
            >
              Lihat contoh validasi formulir
            </button>
          </form>

          {/* Right Avatar Card */}
          <div className="md:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-white shadow-sm"
            />
            <h3 className="font-bold text-slate-900 text-sm">{user.name}</h3>
            <p className="text-xs text-slate-500 mb-1">{user.email}</p>
            <p className="text-xs font-semibold text-brand-pink mb-1">
              Level {user.level} • {user.points} poin
            </p>
            <p className="text-[11px] text-slate-400 mb-4">
              Badge pilihan: {user.selectedBadge}
            </p>

            <button
              type="button"
              onClick={() => openModal('pilih-avatar')}
              className="w-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold py-2 px-3 rounded-xl transition-colors"
            >
              Ubah avatar
            </button>
          </div>
        </div>
      </div>

      {/* Card 2: Latihan yang Nyaman Untukmu */}
      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Latihan yang nyaman untukmu
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Sesuaikan suara, jeda, dan preferensi latihan harian.
          </p>
        </div>

        <div className="space-y-5">
          {/* Target Durasi */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <p className="text-xs font-bold text-slate-800">Target durasi pribadi</p>
              <p className="text-xs text-slate-500">15 menit per sesi latihan optimal</p>
            </div>
            <select
              value={targetDuration}
              onChange={(e) => setTargetDuration(Number(e.target.value))}
              className="text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 self-start sm:self-auto cursor-pointer"
            >
              <option value={10}>10 menit per sesi</option>
              <option value={15}>15 menit per sesi</option>
              <option value={20}>20 menit per sesi</option>
              <option value={30}>30 menit per sesi</option>
            </select>
          </div>

          {/* Suara Pengingat */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <p className="text-xs font-bold text-slate-800">Suara pengingat</p>
              <p className="text-xs text-slate-500">
                Aktif saat postur perlu disesuaikan
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={soundActive}
                onChange={(e) => setSoundActive(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-pink" />
            </label>
          </div>

          {/* Volume Slider & Tes Suara */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <p className="text-xs font-bold text-slate-800">Volume {volume}%</p>
              <div className="flex items-center gap-3 mt-1.5">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-48 accent-brand-pink cursor-pointer"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => openModal('tes-suara')}
              className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-2 px-4 rounded-xl transition-colors self-start sm:self-auto flex items-center gap-1.5"
            >
              <Volume2 className="w-3.5 h-3.5" />
              Tes suara
            </button>
          </div>

          {/* Pengingat Jeda */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-800">Pengingat jeda</p>
              <p className="text-xs text-slate-500">
                Ingatkan untuk beristirahat sejenak
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={breakActive}
                onChange={(e) => setBreakActive(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-pink" />
            </label>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
          Target adalah preferensi kebiasaan, bukan anjuran medis.
        </p>
      </div>

      {/* Card 3: Akun & Privasi */}
      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Akun & privasi
          </h2>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Kamera digunakan saat persiapan, kalibrasi, dan latihan. Riwayat menyimpan ringkasan, bukan foto atau video.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openModal('unduh-data')}
            className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Unduh data
          </button>
          <button
            type="button"
            onClick={() => openModal('keluar-akun')}
            className="border border-red-200 hover:bg-red-50 text-red-600 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            Keluar akun
          </button>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs font-bold text-slate-800 mb-1">
            Kelola data akun
          </p>
          <p className="text-xs text-slate-500 mb-3">
            Tindakan ini membutuhkan konfirmasi terpisah.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openModal('hapus-riwayat')}
              className="text-xs font-semibold text-slate-600 hover:text-red-600 underline"
            >
              Hapus riwayat
            </button>
            <button
              type="button"
              onClick={() => openModal('hapus-akun')}
              className="text-xs font-semibold text-red-600 hover:underline"
            >
              Hapus akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

