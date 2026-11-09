import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Clock,
  Activity,
  CheckCircle,
  Calendar,
  Filter,
  RotateCcw,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Info,
} from '../components/common/Icons';

export default function RiwayatLatihan() {
  const { sessionId } = useParams();
  const { sessions, hasData, setHasData, user } = useApp();
  const navigate = useNavigate();

  const [statusFilter, setStatusFilter] = useState('Semua');

  // If viewing a detail page (Pages 10, 11, 12, 18, 19, 20)
  if (sessionId) {
    const session = sessions.find((s) => s.id === sessionId) || sessions[0];

    return (
      <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
        {/* Back Link & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link
              to="/app/riwayat"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-700 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke riwayat
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">
              Detail sesi latihan
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              {session.fullDate} • {session.timeRange}
            </p>
          </div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-center">
            Data contoh
          </span>
        </div>

        {/* Total Duration & Points Result Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left: Duration Stat */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400">Durasi total</span>
              <div className="text-3xl font-extrabold text-slate-900 mt-1 mb-1">
                {session.totalDuration}
              </div>
              <p className="text-xs text-slate-500">{session.timeRange}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-500">Waktu valid</span>
              <span className="font-bold text-slate-800">{session.validDuration}</span>
            </div>
          </div>

          {/* Right: Points Result */}
          <div className="bg-[#e9f5fc] p-6 rounded-2xl border border-sky-100 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-brand-blue">Hasil selesai diproses</span>
              <div className="text-3xl font-extrabold text-brand-pink mt-1 mb-1">
                +{session.pointsEarned} poin
              </div>
              <p className="text-xs text-slate-600">ditambahkan ke saldo</p>
            </div>

            <div className="pt-4 border-t border-sky-200/60 mt-4 text-[11px] text-slate-600">
              Rancangan poin: 1 poin per menit valid, maksimal 25 poin per sesi.
            </div>
          </div>
        </div>

        {/* Posture Distribution Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-bold text-slate-900">
              Dari {session.validDuration} yang terbaca
            </h2>
            <span className="text-xs font-semibold text-brand-pink bg-pink-50 px-2.5 py-0.5 rounded-full">
              Pengingat postur: {session.remindersCount} kali
            </span>
          </div>

          {/* Progress Visual Bar */}
          <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex mb-4">
            <div
              className="bg-brand-pink h-full transition-all"
              style={{ width: `${session.uprightPercentage}%` }}
              title="Tegak"
            />
            <div className="bg-amber-400 h-full w-[15%]" title="Condong ke depan" />
            <div className="bg-slate-300 h-full w-[5%]" title="Condong ke belakang" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3 bg-pink-50/60 rounded-xl border border-pink-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-pink" />
                <span className="text-xs font-semibold text-slate-700">Tegak</span>
              </div>
              <p className="text-lg font-bold text-slate-900">
                {session.uprightDuration} • {session.uprightPercentage}%
              </p>
            </div>

            <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold text-slate-700">Condong ke depan</span>
              </div>
              <p className="text-lg font-bold text-slate-900">
                {session.forwardLean}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <span className="text-xs font-semibold text-slate-700">Condong ke belakang</span>
              </div>
              <p className="text-lg font-bold text-slate-900">
                {session.backwardLean}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Waktu jeda ({session.pauseDuration}) dan tidak terpantau ({session.unmonitoredDuration}) dipisahkan dari distribusi postur.
          </p>
        </div>

        {/* Coverage & Validation Rules Card */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">Coverage {session.coverage}%</span>
              <span className="text-slate-400">• Minimal 70%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">{session.validDuration} valid</span>
              <span className="text-slate-400">• Minimal 5 menit</span>
            </div>
          </div>

          <p className="leading-relaxed">
            Poin diberikan setelah sesi selesai dan hasil berhasil diproses. Coverage = waktu valid ÷ (total − jeda). Jeda tidak mengurangi saldo.
          </p>
          <p className="text-[11px] text-slate-400">
            Mesin V3 • Aturan poin contoh produk.
          </p>
        </div>
      </div>
    );
  }

  // EMPTY STATE (Page 40)
  if (!hasData) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Riwayat Latihan</h1>
            <p className="text-xs text-slate-500">Lihat kembali latihan dan kebiasaan dudukmu.</p>
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
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Belum ada data
          </h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Belum ada latihan yang tersimpan. Mulai sesi pertamamu. Setelah hasil diproses, ringkasannya akan muncul di sini.
          </p>
          <Link
            to="/app/dashboard"
            className="inline-block bg-brand-pink hover:bg-brand-pink-hover text-white font-bold py-3 px-8 rounded-full shadow-pink transition-all transform hover:-translate-y-0.5 text-sm"
          >
            Mulai Latihan
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            Kembali ke Dashboard untuk menyiapkan webcam.
          </p>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW (Page 4)
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">Riwayat Latihan</h1>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Data contoh
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Lihat kembali latihan dan kebiasaan dudukmu.
          </p>
        </div>

        <button
          onClick={() => setHasData(false)}
          className="text-xs text-slate-400 hover:text-slate-600 self-start sm:self-center"
        >
          [Lihat tampilan kosong]
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <span className="text-xs font-semibold text-slate-400">Sesi selesai</span>
          <div className="text-3xl font-extrabold text-slate-800 mt-1">6</div>
          <p className="text-xs text-slate-500 mt-1">Dalam 7 hari</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <span className="text-xs font-semibold text-slate-400">Waktu valid</span>
          <div className="text-3xl font-extrabold text-slate-800 mt-1">135 m</div>
          <p className="text-xs text-slate-500 mt-1">108 menit tegak</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          <span className="text-xs font-semibold text-slate-400">Poin sesi</span>
          <div className="text-3xl font-extrabold text-brand-pink mt-1">+130</div>
          <p className="text-xs text-slate-500 mt-1">Dari 6 sesi valid</p>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            8–14 Juli 2025
          </span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border-0 focus:ring-1 focus:ring-brand-pink cursor-pointer"
          >
            <option value="Semua">Semua status</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        <button
          onClick={() => setStatusFilter('Semua')}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset filter
        </button>
      </div>

      {/* Featured Last Session Banner */}
      <div className="bg-[#e9f5fc] p-5 sm:p-6 rounded-2xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
            Sesi terakhir • 14 Juli
          </span>
          <h2 className="text-lg font-bold text-slate-900 mt-0.5">
            Satu sesi, satu langkah.
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            25 menit terpantau • 20 menit tegak
          </p>
        </div>
        <Link
          to="/app/riwayat/sesi-1"
          className="bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-pink transition-colors self-start sm:self-center"
        >
          Lihat detail sesi
        </Link>
      </div>

      {/* Sessions Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-sm font-bold text-slate-800">
            Latihan yang tersimpan
          </h2>
          <span className="text-xs text-slate-400">
            {sessions.length} sesi ditampilkan
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-400 uppercase font-semibold border-b border-slate-100">
              <tr>
                <th className="py-3 px-5">Tanggal & waktu</th>
                <th className="py-3 px-5">Total</th>
                <th className="py-3 px-5">Valid</th>
                <th className="py-3 px-5">Tegak</th>
                <th className="py-3 px-5">Poin</th>
                <th className="py-3 px-5 text-right">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {sessions.map((sesi) => (
                <tr key={sesi.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900">
                    {sesi.date}, {sesi.time}
                  </td>
                  <td className="py-3.5 px-5">{sesi.totalDuration}</td>
                  <td className="py-3.5 px-5">{sesi.validDuration}</td>
                  <td className="py-3.5 px-5 font-semibold text-brand-pink">
                    {sesi.uprightPercentage}%
                  </td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600">
                    +{sesi.pointsEarned}
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <Link
                      to={`/app/riwayat/${sesi.id}`}
                      className="text-brand-blue font-semibold hover:underline inline-flex items-center gap-0.5"
                    >
                      Lihat detail
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer Note */}
        <div className="p-4 bg-slate-50/60 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
          <p className="mb-1">
            • Persentase tegak dihitung dari waktu valid.
          </p>
          <p>
            Jeda tetap bagian dari latihanmu. Waktu jeda dan tidak terpantau disajikan terpisah. Keduanya tidak mengurangi poin yang sudah kamu miliki.
          </p>
        </div>
      </div>
    </div>
  );
}

