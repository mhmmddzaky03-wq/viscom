import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  ChevronRight,
} from '../components/common/Icons';
import { faqsData } from '../data/mockData';

export default function Bantuan() {
  const location = useLocation();
  const isLaporanView = location.pathname.includes('/laporan');
  const { reports, addReport, openModal } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Form State
  const [kategori, setKategori] = useState('Kamera / kalibrasi');
  const [judul, setJudul] = useState('Kamera belum tampil');
  const [deskripsi, setDeskripsi] = useState(
    'Saya sudah mengizinkan kamera, tetapi pratinjau tetap kosong setelah halaman dimuat ulang.'
  );
  const [perangkat, setPerangkat] = useState('Chrome • Windows • Laptop');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addReport({
      title: judul,
      category: kategori,
      description: deskripsi,
      device: perangkat,
    });
  };

  const filteredFaqs = faqsData.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // VIEW 2: LAPORAN SAYA (Page 46)
  if (isLaporanView) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link
              to="/app/bantuan"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-700 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke bantuan
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Laporan Saya</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Pantau kendala yang sudah kamu kirim.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md self-start sm:self-center">
            Data contoh
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-700">
              {reports.length} laporan • 1 sedang ditangani
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 uppercase font-semibold border-b border-slate-100">
                <tr>
                  <th className="py-3 px-5">Nomor tiket</th>
                  <th className="py-3 px-5">Judul</th>
                  <th className="py-3 px-5">Tanggal</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5 text-right">Tindakan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {reports.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                      {r.id}
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-slate-800">
                      {r.title}
                    </td>
                    <td className="py-3.5 px-5 text-slate-500">{r.date}</td>
                    <td className="py-3.5 px-5">
                      <span
                        className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${r.statusBadgeColor}`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() =>
                          openModal(
                            r.status === 'Ditangani'
                              ? 'tiket-detail-ditangani'
                              : 'tiket-detail-diterima',
                            { ticket: r }
                          )
                        }
                        className="text-xs font-bold text-brand-pink hover:underline"
                      >
                        {r.status === 'Ditangani' ? `Tanggapan ${r.id}` : `Detail ${r.id}`}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // VIEW 1: MAIN HELP PAGE (Page 9)
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Ada yang bisa kami bantu?
            </h1>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Data contoh
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Temukan panduan atau ceritakan kendala yang kamu alami.
          </p>
        </div>

        <Link
          to="/app/bantuan/laporan"
          className="bg-sky-50 hover:bg-sky-100 text-brand-blue text-xs font-bold py-2 px-3.5 rounded-xl border border-sky-100 transition-colors self-start sm:self-center flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          1 laporan sedang ditangani • Lihat laporan saya →
        </Link>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari kamera, kalibrasi, poin, atau akun…"
          className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-sm focus:border-brand-pink focus:outline-none shadow-xs"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Panduan Penggunaan (Accordion) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1">
              Panduan penggunaan
            </h2>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Mulai Menggunakan / Kamera / Kalibrasi / Latihan / Akun & Privasi
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div key={faq.id} className="py-3">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left text-xs font-bold text-slate-800 hover:text-brand-pink transition-colors gap-3 py-1"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-400 text-base font-normal">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="text-xs text-slate-600 mt-2 pl-1 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Laporkan Kendala Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-1">
            Laporkan kendala
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Tim kami siap membantu kendala teknismu.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kategori
              </label>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:border-brand-pink focus:outline-none cursor-pointer"
              >
                <option value="Kamera / kalibrasi">Kamera / kalibrasi</option>
                <option value="Poin & Level">Poin & Level</option>
                <option value="Akun & Privasi">Akun & Privasi</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Judul laporan
              </label>
              <input
                type="text"
                required
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-brand-pink focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Deskripsi
              </label>
              <textarea
                required
                rows={3}
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-brand-pink focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Browser / perangkat
              </label>
              <input
                type="text"
                required
                value={perangkat}
                onChange={(e) => setPerangkat(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-brand-pink focus:outline-none"
              />
            </div>

            <p className="text-[11px] text-slate-400 leading-tight">
              Periksa informasi sebelum dikirim. Jangan sertakan kata sandi atau foto pribadi.
            </p>

            <button
              type="submit"
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-pink transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Kirim laporan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

