import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Volume2,
  Download,
  LogOut,
  Trash2,
  Award,
  Sparkles,
  Camera,
  Check,
  RefreshCw,
  Lock,
} from './Icons';

export default function GlobalModal() {
  const {
    activeModal,
    closeModal,
    user,
    setUser,
    redeemItem,
    joinChallenge,
    replyToTicket,
    openModal,
  } = useApp();
  const navigate = useNavigate();

  // Local state for modal forms
  const [ticketReplyText, setTicketReplyText] = useState('Saya akan mencoba langkah tersebut.');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, closeModal]);

  if (!activeModal) return null;

  const { type, payload } = activeModal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-7 z-10 border border-slate-100 overflow-hidden text-brand-dark animate-in fade-in zoom-in-95 duration-150">
        {/* Demo indicator tag if appropriate */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
            Data contoh
          </span>
          <button
            onClick={closeModal}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. TANTANGAN DETAIL (Pages 13, 14) */}
        {type === 'tantangan-detail' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {payload.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Periode {payload.period} • {payload.status}
            </p>

            <div className="bg-brand-sky p-4 rounded-xl mb-4">
              <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>{payload.unit === 'hari' ? 'Hari aktif sejak bergabung' : 'Pengingat jeda diikuti'}</span>
                <span className="text-brand-pink font-bold">
                  {payload.current} / {payload.total} {payload.unit}
                </span>
              </div>
              <div className="w-full h-2.5 bg-white/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-pink rounded-full transition-all duration-300"
                  style={{ width: `${(payload.current / payload.total) * 100}%` }}
                />
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              {payload.requirement}
            </p>
            <p className="text-xs text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
              {payload.id === 'tiga-hari'
                ? 'Hadiah +15 poin otomatis setelah hari ketiga memenuhi syarat. Jeda diperbolehkan; tidak perlu menahan posisi.'
                : 'Ambil jeda saat pengingat muncul, kemudian kembali saat siap. Setelah lima jeda tercatat, badge Ingat Jeda diberikan otomatis satu kali.'}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeModal();
                  navigate('/app/dashboard');
                }}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Lanjut latihan
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Kembali
              </button>
            </div>
          </div>
        )}

        {/* 2. TANTANGAN KONFIRMASI IKUT (Page 15) */}
        {type === 'tantangan-konfirmasi' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Ikuti {payload.title}?
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Periode {payload.period} • Target dua hari berbeda
            </p>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Sesi dihitung setelah selesai dan diproses, minimal 5 menit valid dengan coverage minimal 70%. Progres dihitung sejak bergabung dalam periode tantangan.
            </p>

            <div className="flex justify-between items-center bg-brand-sky p-3.5 rounded-xl mb-4 text-sm font-medium">
              <span className="text-slate-700">Hadiah saat selesai</span>
              <span className="font-bold text-brand-pink">{payload.rewardValue}</span>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Hadiah otomatis sekali. Melewatkan hari dan mengambil jeda tidak mengurangi poin.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => joinChallenge(payload.id)}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Ikuti tantangan
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 3. BERGABUNG SUKSES (Page 16) */}
        {type === 'bergabung-sukses' && (
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Kamu sudah bergabung.
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-sm mx-auto">
              Kembali Esok dimulai 15 Juli. Progres awal 0/2 hari; hadiah +10 poin belum diberikan.
            </p>
            <button
              onClick={() => {
                closeModal();
                navigate('/app/tantangan');
              }}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Kembali ke tantangan
            </button>
          </div>
        )}

        {/* 4. TUKAR KONFIRMASI (Pages 17, 22) */}
        {type === 'tukar-konfirmasi' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Tukar {payload.item.name}?
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Hadiah virtual untuk akunmu.
            </p>

            <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl mb-4 text-sm border border-slate-100">
              <div className="flex justify-between">
                <span className="text-slate-600">Harga</span>
                <span className="font-semibold text-slate-900">{payload.item.price} poin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Saldo sekarang</span>
                <span className="font-semibold text-slate-900">{user.points} poin</span>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between font-bold">
                <span className="text-slate-800">Saldo setelah tukar</span>
                <span className="text-brand-pink">
                  {user.points - payload.item.price} poin
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Total poin kumulatif tetap {user.totalPointsCumulative}. Level {user.level} tidak berubah.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => redeemItem(payload.item.id)}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Tukar poin
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 5. HADIAH BERHASIL DITUKAR (Pages 21, 23) */}
        {type === 'hadiah-berhasil' && (
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-pink-100 text-brand-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Hadiah berhasil ditukar.
            </h3>
            <p className="text-sm text-slate-600 mb-5">
              <span className="font-semibold text-slate-800">{payload.item.name}</span> sekarang menjadi milikmu.
            </p>

            <div className="grid grid-cols-2 gap-3 bg-brand-sky p-3.5 rounded-xl mb-4 text-center">
              <div>
                <p className="text-xs text-slate-500">Poin digunakan</p>
                <p className="text-lg font-bold text-brand-pink">−{payload.usedPoints}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Saldo tersedia</p>
                <p className="text-lg font-bold text-slate-800">{payload.newPoints} poin</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              {user.totalPointsCumulative} poin kumulatif • Level {user.level}
            </p>

            <button
              onClick={closeModal}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Terapkan hadiah
            </button>
          </div>
        )}

        {/* 6. POIN BELUM CUKUP (Page 24) */}
        {type === 'poin-kurang' && (
          <div>
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
              Poin belum cukup.
            </h3>
            <p className="text-sm text-slate-600 text-center mb-4">
              {payload.item.name} membutuhkan {payload.item.price} poin.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl mb-4 text-sm border border-slate-100 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600">Saldo tersedia</span>
                <span className="font-semibold text-slate-900">{payload.userPoints} poin</span>
              </div>
              <div className="flex justify-between text-brand-pink font-semibold">
                <span>Masih diperlukan</span>
                <span>{payload.item.price - payload.userPoints} poin</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6 text-center">
              Kumpulkan poin dari sesi yang selesai atau tantangan. Saldo tidak berubah.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeModal();
                  navigate('/app/tantangan');
                }}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Lihat tantangan
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Kembali ke hadiah
              </button>
            </div>
          </div>
        )}

        {/* 7. BADGE DETAIL (Pages 25, 26, 27, 31, 32) */}
        {type === 'badge-detail' && (
          <div className="text-center py-2">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                payload.unlocked
                  ? payload.icon === 'camera'
                    ? 'bg-sky-100 text-sky-600'
                    : 'bg-pink-100 text-brand-pink'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              {payload.icon === 'camera' ? (
                <Camera className="w-8 h-8" />
              ) : payload.icon === 'refresh' ? (
                <RefreshCw className="w-8 h-8" />
              ) : payload.icon === 'lock' ? (
                <Lock className="w-8 h-8" />
              ) : (
                <Check className="w-8 h-8" strokeWidth={3} />
              )}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {payload.title}
            </h3>
            <p className="text-sm text-slate-600 mb-3">{payload.description}</p>

            <div className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {payload.unlocked
                ? `Sudah diperoleh • ${payload.date}`
                : payload.progressText || 'Terkunci'}
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Badge diberikan otomatis satu kali setelah syarat terpenuhi.
            </p>

            <button
              onClick={closeModal}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-4 rounded-xl transition-colors"
            >
              Tutup
            </button>
          </div>
        )}

        {/* 8. PROFIL DISIMPAN (Page 33) */}
        {type === 'profil-disimpan' && (
          <div className="text-center py-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Perubahan berhasil disimpan
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Profil dan preferensi latihanmu sudah diperbarui.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Kembali ke profil
            </button>
          </div>
        )}

        {/* 9. PROFIL VALIDASI ERROR (Page 34) */}
        {type === 'profil-error' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Periksa kembali isianmu
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Contoh validasi formulir profil.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama tampilan
                </label>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="Nama tampilan wajib diisi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-red-300 bg-red-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  readOnly
                />
                <p className="text-xs text-red-500 mt-1">
                  Nama tampilan wajib diisi.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="rafi@"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-red-300 bg-red-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  readOnly
                />
                <p className="text-xs text-red-500 mt-1">
                  Masukkan alamat email yang lengkap.
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Perbaiki isian
            </button>
          </div>
        )}

        {/* 10. UBAH PASSWORD (Page 35) */}
        {type === 'ubah-password' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Ubah kata sandi
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Gunakan kata sandi baru untuk akses berikutnya.
            </p>

            <div className="space-y-3.5 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kata sandi sekarang
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kata sandi baru
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Konfirmasi kata sandi
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-pink"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeModal();
                  openModal('profil-disimpan');
                }}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Simpan kata sandi
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 11. PILIH AVATAR (Page 36) */}
        {type === 'pilih-avatar' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Pilih avatar
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Avatar baru akan tampil pada profil dan sidebar.
            </p>

            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-brand-pink object-cover"
              />
              <div>
                <p className="font-bold text-slate-900">{user.name}</p>
                <p className="text-xs text-slate-500">Avatar saat ini</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Gunakan avatar ini
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 12. TES SUARA PENGINGAT (Page 37) */}
        {type === 'tes-suara' && (
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-sky-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Tes suara pengingat
            </h3>
            <p className="text-sm font-semibold text-brand-pink mb-2">
              Contoh tampilan pengujian pada volume {user.reminderVolume}%.
            </p>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed max-w-sm mx-auto">
              Pada aplikasi, tombol ini memutar contoh bunyi. Prototipe ini menampilkan status tes.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Selesai
            </button>
          </div>
        )}

        {/* 13. DATA SIAP DIUNDUH (Page 38) */}
        {type === 'unduh-data' && (
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Data siap diunduh
            </h3>
            <p className="text-sm font-mono text-slate-700 bg-slate-100 py-1.5 px-3 rounded-lg inline-block mb-3">
              bungkuk-rafi-14jul2025.csv
            </p>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed max-w-sm mx-auto">
              Berisi ringkasan latihan, preferensi, dan riwayat poin. Foto dan rekaman video tidak disertakan.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Selesai
            </button>
          </div>
        )}

        {/* 14. KELUAR AKUN (Page 42) */}
        {type === 'keluar-akun' && (
          <div>
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <LogOut className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
              Keluar dari akun?
            </h3>
            <p className="text-sm text-slate-600 text-center mb-6">
              Kamu dapat masuk kembali untuk melanjutkan progres.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeModal();
                  navigate('/login');
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Keluar
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 15. HAPUS RIWAYAT LATIHAN (Page 43) */}
        {type === 'hapus-riwayat' && (
          <div>
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
              Hapus riwayat latihan?
            </h3>
            <p className="text-sm text-slate-600 text-center mb-3">
              Seluruh ringkasan sesi akan dihapus. Tindakan ini tidak bisa dibatalkan.
            </p>
            <p className="text-xs text-slate-500 text-center mb-6 bg-slate-50 p-3 rounded-lg">
              Saldo poin, level, dan badge tetap tersimpan. Grafik perkembangan tidak lagi menampilkan riwayat yang dihapus.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeModal();
                  openModal('profil-disimpan');
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Hapus riwayat
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 16. HAPUS AKUN (Page 44) */}
        {type === 'hapus-akun' && (
          <div>
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
              Hapus akun Rafi?
            </h3>
            <p className="text-sm text-slate-600 text-center mb-3">
              Profil, riwayat, poin, dan hadiah akan dihapus permanen.
            </p>
            <p className="text-xs text-slate-500 text-center mb-6 bg-slate-50 p-3 rounded-lg">
              Unduh datamu terlebih dahulu jika ingin menyimpan salinan. Kamu perlu membuat akun baru untuk menggunakan BUNGKOK lagi.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeModal();
                  openModal('akun-dihapus');
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Hapus akun
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* 17. AKUN TELAH DIHAPUS (Page 45) */}
        {type === 'akun-dihapus' && (
          <div className="text-center py-3">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Akun telah dihapus
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Contoh status setelah penghapusan berhasil.
            </p>
            <button
              onClick={() => {
                closeModal();
                navigate('/login');
              }}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Kembali ke login
            </button>
          </div>
        )}

        {/* 18. LAPORAN BERHASIL DIKIRIM (Page 47) */}
        {type === 'laporan-berhasil' && (
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Laporan berhasil dikirim
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Kami sudah menerima kendala kameramu.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl mb-4 text-left border border-slate-100 text-sm space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Nomor tiket</span>
                <span className="font-mono font-bold text-slate-900">{payload.ticket.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status</span>
                <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  {payload.ticket.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                14 Juli 2025 • {payload.ticket.title}
              </p>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Lihat perkembangan penanganannya di Laporan Saya.
            </p>

            <button
              onClick={() => {
                closeModal();
                navigate('/app/bantuan/laporan');
              }}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Lihat laporan saya
            </button>
          </div>
        )}

        {/* 19. DETAIL TIKET #BGK-0143 (Page 48) */}
        {type === 'tiket-detail-diterima' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Tiket {payload.ticket.id}
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              {payload.ticket.title} • {payload.ticket.date}
            </p>

            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              {payload.ticket.status}
            </div>

            <div className="bg-slate-50 p-4 rounded-xl mb-6 text-sm text-slate-600 border border-slate-100 leading-relaxed">
              Laporan diterima. Tim belum memberikan tanggapan. Pembaruan status akan muncul di halaman ini.
            </div>

            <button
              onClick={closeModal}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-4 rounded-xl transition-colors"
            >
              Tutup
            </button>
          </div>
        )}

        {/* 20. DETAIL TIKET #BGK-0138 DENGAN BALASAN (Page 49) */}
        {type === 'tiket-detail-ditangani' && (
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Tiket {payload.ticket.id}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {payload.ticket.title} • Status: <span className="text-emerald-700 font-semibold">{payload.ticket.status}</span>
            </p>

            <div className="bg-sky-50 border border-sky-100 p-4 rounded-xl mb-4 text-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-xs text-brand-blue mb-1">
                Tim BUNGKOK • {payload.ticket.teamReply?.date || '13 Juli 2025'}
              </p>
              <p>{payload.ticket.teamReply?.message}</p>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Balasan
              </label>
              <textarea
                value={ticketReplyText}
                onChange={(e) => setTicketReplyText(e.target.value)}
                rows={3}
                className="w-full p-3 text-sm rounded-xl border border-slate-200 focus:border-brand-pink focus:outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => replyToTicket(payload.ticket.id, ticketReplyText)}
                className="flex-1 bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
              >
                Kirim balasan
              </button>
              <button
                onClick={closeModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* 21. BALASAN TERKIRIM (Page 50) */}
        {type === 'balasan-terkirim' && (
          <div className="text-center py-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Balasan terkirim
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-sm mx-auto">
              Balasanmu ditambahkan ke tiket {payload.ticketId}. Status tetap Ditangani.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-pink"
            >
              Kembali ke laporan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

