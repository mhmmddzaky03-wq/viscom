import React from 'react';
import { Link } from 'react-router-dom';
import AboutBungkok from '../components/landing/AboutBungkok';
import {
  Activity,
  Bell,
  TrendingUp,
  Award,
  Video,
  Camera,
  BarChart,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Smile,
  Star,
  Check,
  Maximize2,
  X,
  Calendar,
  Lock,
  Armchair,
} from '../components/common/Icons';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7fbfe] text-slate-800 font-sans selection:bg-pink-100 selection:text-brand-pink overflow-x-hidden">
      {/* =========================================================================
          HERO SECTION (Sky Blue Radiant Header & Glowing Spine Illustration)
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#2597db] via-[#48a9e6] via-70% to-[#f7fbfe] pt-6 pb-20 px-4 sm:px-8 text-white overflow-hidden">
        {/* Top Navbar */}
        <header className="max-w-6xl mx-auto flex items-center justify-between h-16 relative z-30">
          {/* Left Nav Links */}
          <nav className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium tracking-wide">
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors uppercase tracking-widest text-[11px] sm:text-xs font-semibold"
            >
              about
            </a>
            <a
              href="#cara-kerja"
              className="text-white/90 hover:text-white transition-colors uppercase tracking-widest text-[11px] sm:text-xs font-semibold"
            >
              how it works
            </a>
          </nav>

          {/* Center Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
            <Link
              to="/"
              className="font-display tracking-[0.25em] text-2xl sm:text-3xl font-extrabold text-white drop-shadow-sm hover:opacity-90 transition-opacity"
            >
              BUNGKOK
            </Link>
          </div>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-block text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-white px-3 py-1.5 transition-colors"
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="text-[11px] sm:text-xs uppercase tracking-wider font-bold bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-md px-5 sm:px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-sm"
            >
              let's start
            </Link>
          </div>
        </header>

        {/* Hero Title & Typography */}
        <div className="max-w-5xl mx-auto text-center mt-12 sm:mt-16 mb-4 relative z-20">
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold tracking-wider text-white drop-shadow-md uppercase leading-tight sm:leading-none">
            DUDUK LEBIH SADAR
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-2 sm:mt-4">
            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white uppercase drop-shadow-sm">
              MULAI
            </span>
            <span className="font-script text-2xl sm:text-4xl md:text-5xl text-white/90 italic lowercase -mt-1 sm:-mt-2">
              dari
            </span>
            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white uppercase drop-shadow-sm">
              HARI INI
            </span>
          </div>
        </div>

        {/* Hero Visual Image: Woman with glowing spinal alignment path */}
        <div className="relative max-w-4xl mx-auto -mt-6 sm:-mt-10 z-10 flex justify-center">
          <div className="relative w-full max-w-[620px] aspect-[16/11] sm:aspect-[16/10] flex items-center justify-center">
            {/* Ambient Radial Glow underneath */}
            <div className="absolute inset-0 bg-radial from-pink-400/25 via-sky-300/20 to-transparent blur-3xl pointer-events-none" />
            
            <img
              src="/assets/hero_spine_woman.png"
              alt="Duduk Lebih Sadar - Posture Tracker BUNGKOK"
              className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT BUNGKOK & FLOATING PHOTO MOSAIC (Modular Component)
          ========================================================================= */}
      <AboutBungkok />

      {/* =========================================================================
          SECTION 3: CARA KERJA (01, 02, 03 Numbered Feature Cards)
          ========================================================================= */}
      <section id="cara-kerja" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-widest text-[#1e5485] uppercase">
            CARA KERJA
          </h2>
          <div className="w-12 h-0.5 bg-brand-pink mx-auto mt-3 rounded-full opacity-60" />
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 01 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-brand-pink bg-pink-50 px-3 py-1 rounded-full">
                  01
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Langkah 1
                </span>
              </div>

              {/* Step Graphic / Illustration */}
              <div className="h-40 bg-gradient-to-b from-sky-50/80 to-white rounded-2xl flex items-center justify-center p-3 mb-6 border border-sky-100/40 overflow-hidden group">
                <img
                  src="/assets/laptop_step1.png"
                  alt="Siapkan Kamera"
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Siapkan Kamera
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Izinkan akses webcam di browser untuk memulai pemantauan tanpa instalasi aplikasi luar.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-brand-pink bg-pink-50 px-3 py-1 rounded-full">
                  02
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Langkah 2
                </span>
              </div>

              {/* Step Graphic / Illustration: Calibration Guide */}
              <div className="h-40 bg-gradient-to-b from-sky-50/80 to-white rounded-2xl flex items-center justify-center p-4 mb-6 border border-sky-100/40 overflow-hidden group relative">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-brand-pink/40 shadow-xs">
                  <img
                    src="/assets/posture_cam.png"
                    alt="Kalibrasi Posisi Duduk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {/* Calibration Guide Lines */}
                  <div className="absolute inset-1 border border-dashed border-brand-pink/70 rounded-xl pointer-events-none" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Kalibrasi Posisi Duduk
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Ambil posisi duduk tegak yang nyaman sebagai acuan posturmu selama sesi berlangsung.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-brand-pink bg-pink-50 px-3 py-1 rounded-full">
                  03
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Langkah 3
                </span>
              </div>

              {/* Step Graphic / Illustration: 3D Glass Bar Chart */}
              <div className="h-40 bg-gradient-to-b from-sky-50/80 to-white rounded-2xl flex items-center justify-center p-3 mb-6 border border-sky-100/40 overflow-hidden group">
                <img
                  src="/assets/chart_step3.png"
                  alt="Pantau & Lihat Ringkasan"
                  className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Pantau & Lihat Ringkasan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Dapatkan pemantauan real-time, pengingat saat postur mulai buruk, dan ringkasan kebiasaanmu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FITUR UTAMA (Exact Image 2 Reference Layout)
          ========================================================================= */}
      <section id="fitur" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-widest text-[#1e5485] uppercase">
            FITUR UTAMA
          </h2>
        </div>

        {/* 2-Column Grid Layout matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column (Posture Tracking Large Card) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  Posture Tracking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pantau posisi dudukmu secara real-time melalui webcam dengan estimasi postur yang akurat.
                </p>
              </div>

              {/* Photo with Overlaid Posture Alignment Line & Badges */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] border border-slate-100 group shadow-xs">
                <img
                  src="/assets/woman_desk_working.jpg"
                  alt="Posture Tracking Live Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlaid Vector Posture Line (Exact Pink Curve with Anchor Dots) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 420"
                  fill="none"
                >
                  {/* Glowing filter */}
                  <defs>
                    <filter id="pinkGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ff4d8d" floodOpacity="0.8" />
                    </filter>
                  </defs>

                  {/* Spinal curvature line */}
                  <path
                    d="M 205 240 Q 212 280 198 335"
                    stroke="#ff4d8d"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#pinkGlow)"
                  />

                  {/* Top anchor dot (ear/neck) */}
                  <circle cx="205" cy="240" r="4.5" fill="#ffffff" stroke="#ff4d8d" strokeWidth="3" />
                  
                  {/* Bottom anchor dot (lumbar) */}
                  <circle cx="198" cy="335" r="4.5" fill="#ffffff" stroke="#ff4d8d" strokeWidth="3" />
                </svg>

                {/* Overlaid Top Badge: ✓ Postur Baik */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-brand-pink text-white shadow-pink">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    Postur Baik
                  </span>
                </div>

                {/* Overlaid Bottom Label: ⛶ Estimasi postur real-time */}
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-900/60 backdrop-blur-xs text-white">
                    <Maximize2 className="w-3 h-3" />
                    Estimasi postur real-time
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Cards (Top Reminder + Bottom 2 Split Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Top Card: Reminder Ramah with Floating Toast */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="max-w-[220px]">
                <div className="w-8 h-8 rounded-full bg-pink-50 text-brand-pink flex items-center justify-center mb-3">
                  <Bell className="w-4 h-4 text-brand-pink" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  Reminder Ramah
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dapatkan pengingat yang sopan dan tidak mengganggu saat postur mulai membungkuk.
                </p>
              </div>

              {/* Toast Notification Banner (Exact Image 2 Style) */}
              <div className="sm:max-w-[280px] w-full bg-white/95 border border-pink-100 rounded-2xl p-4 shadow-pink shrink-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <Bell className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        Ayo tegakkan posturmu! <span>🌿</span>
                      </p>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        Kamu mulai membungkuk. Yuk, kembali ke posisi yang lebih tegak.
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 text-xs font-bold shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: 2 Split Cards (Riwayat Kebiasaan & Poin Badge) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Riwayat Kebiasaan */}
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-0.5">
                    Riwayat Kebiasaan
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                    Lihat perkembangan kebiasaan dudukmu dari hari ke hari.
                  </p>

                  <div className="mb-4">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Konsistensi Postur Baik
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-slate-800">82%</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                        <span>▲</span> +12% dari minggu lalu
                      </span>
                    </div>
                  </div>
                </div>

                {/* 7-Day Pink Gradient Bars (Exact Image 2) */}
                <div className="flex items-end justify-between gap-1.5 h-20 pt-2 border-t border-slate-50">
                  {[
                    { day: 'Sen', pct: 35 },
                    { day: 'Sel', pct: 48 },
                    { day: 'Rab', pct: 62 },
                    { day: 'Kam', pct: 75 },
                    { day: 'Jum', pct: 60 },
                    { day: 'Sab', pct: 88 },
                    { day: 'Min', pct: 82 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full bg-pink-100/70 rounded-t-md relative flex items-end justify-center overflow-hidden h-full">
                        <div
                          className="w-full bg-gradient-to-t from-brand-pink to-pink-400 rounded-t-md transition-all duration-500"
                          style={{ height: `${item.pct}%` }}
                        />
                      </div>
                      <span className="text-[9px] font-semibold text-slate-400">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Poin & Badge */}
              <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-0.5">
                    Poin & Badge
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                    Tetap termotivasi dengan poin harian dan badge pencapaian yang seru.
                  </p>

                  {/* 720 Poin Highlight Card */}
                  <div className="bg-pink-50/50 border border-pink-100/70 rounded-xl py-2 px-3 flex items-center justify-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-brand-pink fill-brand-pink" />
                    <span className="text-xl font-black text-slate-800">720 Poin</span>
                  </div>
                </div>

                {/* 3 Badges (Chair, Calendar, Lock) */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-50">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-pink-100 text-brand-pink flex items-center justify-center mb-1">
                      <Armchair className="w-4 h-4 text-brand-pink" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 leading-tight">
                      7 Hari Konsisten
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-1">
                      <Calendar className="w-4 h-4 text-sky-600" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 leading-tight">
                      14 Hari Konsisten
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mb-1">
                      <Lock className="w-4 h-4 text-slate-500" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 leading-tight">
                      30 Hari Konsisten
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: BOTTOM CALL-TO-ACTION (Exact Image 3 Reference Layout)
          ========================================================================= */}
      <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#eef7fc] via-white to-pink-50/40 text-center overflow-hidden">
        {/* Ambient Radial Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-pink-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Top Pill Badge with Pink Dot */}
          <div className="inline-flex items-center gap-1.5 bg-pink-50 text-brand-pink text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-5 border border-pink-100">
            <span className="w-2 h-2 rounded-full bg-brand-pink" />
            LANGSUNG DARI BROWSER
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-[#1e5485] uppercase mb-4 leading-tight">
            DUDUK LEBIH BAIK, <br className="hidden sm:block" />
            MULAI SEKARANG
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed font-medium">
            Pantau posturmu langsung dari browser. <br />
            Tanpa download, tanpa ribet — cukup kamera dan kamu.
          </p>

          {/* Action Buttons (Exact Image 3 Style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-brand-pink hover:bg-brand-pink-hover text-white font-bold py-3.5 px-8 rounded-full shadow-pink transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm tracking-wider uppercase"
            >
              MULAI PANTAU POSTUR
            </Link>

            <a
              href="#cara-kerja"
              className="w-full sm:w-auto bg-[#dff1fd] hover:bg-[#cbe8fc] text-[#0284c7] font-bold py-3.5 px-8 rounded-full transition-colors text-xs sm:text-sm tracking-wider uppercase"
            >
              LIHAT CARA KERJA
            </a>
          </div>

          <p className="text-xs text-slate-400 font-medium mb-16">
            Siapkan kamera, duduk nyaman, dan mulai pantau posturmu.
          </p>
        </div>

        {/* Tilted / Layered 3-Card Fan Visual (Exact Image 3 Layout) */}
        <div className="max-w-4xl mx-auto flex items-center justify-center relative z-20 pb-12 overflow-x-hidden scale-90 sm:scale-100">
          {/* Left Card: Kalibrasi Posisi Duduk (Tilted Left) */}
          <div className="w-56 sm:w-64 rounded-3xl bg-white/95 backdrop-blur-md p-4 shadow-xl border border-white/80 transform -rotate-6 translate-x-8 sm:translate-x-10 translate-y-6 hover:rotate-0 transition-transform duration-300 z-10 text-left">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-slate-100 relative">
              <img
                src="/assets/posture_cam.png"
                alt="Kalibrasi Posisi Duduk"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-1.5 border border-dashed border-brand-pink/70 rounded-xl pointer-events-none" />
            </div>
            <h4 className="font-display text-sm font-bold text-slate-800 leading-snug">
              Kalibrasi Posisi Duduk
            </h4>
            <p className="text-[10px] text-slate-500 mt-1 leading-normal">
              Ambil posisi duduk tegak yang nyaman sebagai acuan posturmu.
            </p>
          </div>

          {/* Center Card: High-res Woman at Desk with Posture Lines (Elevated in Front) */}
          <div className="w-64 sm:w-80 rounded-3xl bg-white p-4 shadow-2xl border border-slate-100 z-30 relative transform hover:scale-105 transition-transform duration-300">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] border border-slate-100">
              <img
                src="/assets/woman_desk_working.jpg"
                alt="Postur Baik"
                className="w-full h-full object-cover"
              />

              {/* Glowing Spine Alignment Curve */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 420"
                fill="none"
              >
                <path
                  d="M 205 240 Q 212 280 198 335"
                  stroke="#ff4d8d"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="205" cy="240" r="4.5" fill="#ffffff" stroke="#ff4d8d" strokeWidth="3" />
                <circle cx="198" cy="335" r="4.5" fill="#ffffff" stroke="#ff4d8d" strokeWidth="3" />
              </svg>

              {/* Top Badge: ✓ Postur Baik */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-brand-pink text-white shadow-pink">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  Postur Baik
                </span>
              </div>

              {/* Bottom Badge: ⛶ Pemantauan real-time */}
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-900/60 backdrop-blur-xs text-white">
                  <Maximize2 className="w-3 h-3" />
                  Pemantauan real-time
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: Glowing Spine Silhouette (Tilted Right) */}
          <div className="w-56 sm:w-64 rounded-3xl bg-white/95 backdrop-blur-md p-4 shadow-xl border border-white/80 transform rotate-6 -translate-x-8 sm:-translate-x-10 translate-y-6 hover:rotate-0 transition-transform duration-300 z-10 text-center relative overflow-hidden">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-slate-100 bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-2">
              <img
                src="/assets/hero_spine_woman.png"
                alt="Pemantauan Real-time"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <h4 className="font-display text-sm font-bold text-slate-800 leading-snug">
              Pemantauan Real-time
            </h4>
            <p className="text-[10px] text-slate-500 mt-1 leading-normal">
              Ingatkan dengan sopan saat postur mulai turun.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="bg-white border-t border-slate-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display tracking-widest text-xl font-bold text-slate-900">
              BUNGKOK
            </span>
            <span className="text-xs text-slate-400 font-medium">
              · Teman kebiasaan dudukmu
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <a href="#about" className="hover:text-brand-pink transition-colors">
              About
            </a>
            <a href="#cara-kerja" className="hover:text-brand-pink transition-colors">
              How It Works
            </a>
            <a href="#fitur" className="hover:text-brand-pink transition-colors">
              Features
            </a>
            <Link to="/app" className="hover:text-brand-pink font-semibold text-slate-700 transition-colors">
              Buka Dashboard
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            © 2025 BUNGKOK. Posture Tracker.
          </p>
        </div>
      </footer>
    </div>
  );
}
