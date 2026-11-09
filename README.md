# BUNGKOK — Posture Tracker Web App 🧘‍♀️💻

Aplikasi web pemantau postur duduk berbasis web cam yang responsif dan interaktif, direproduksi secara presisi dari desain Figma.

---

## 🚀 Fitur Utama

- **Landing Page Interaktif:**
  - Hero Section dengan ilustrasi postur tulang belakang bercahaya (*glowing spine*).
  - **About Bungkok:** Tampilan *glassmorphism* modern dikelilingi 7 foto floating kebiasaan kerja *edge-to-edge* ("ujung ke ujung").
  - **Cara Kerja:** Panduan 3 langkah (Siapkan Kamera, Kalibrasi Duduk, Pantau & Dapatkan Ringkasan).
  - **Fitur Utama:** Simulasi pelacakan postur real-time, pengingat ramah (*gentle reminder*), grafik konsistensi, dan pencapaian poin/badge.
- **Dashboard Posture Tracker (`/app/dashboard`):**
  - Pemantauan real-time status kamera aktif/nonaktif.
  - Kartu statistik (Poin Hari Ini, Total Poin, Waktu Terpantau, Postur Tegak 80%).
  - Grafik durasi valid mingguan interaktif.
  - Sesi terbaru, koleksi badge, dan tantangan aktif.
- **Autentikasi:**
  - Halaman **Login** (`/login`) & **Register** (`/register`) responsif dengan integrasi OAuth Google dan showcase ilustrasi.
- **Subhalaman Dashboard Lengkap:**
  - Riwayat Latihan (`/app/riwayat`) & Detail Sesi (`/app/riwayat/:sessionId`).
  - Perkembangan (`/app/perkembangan`).
  - Tantangan (`/app/tantangan`).
  - Reward & Badge (`/app/reward`).
  - Profil & Pengaturan (`/app/profil`).
  - Bantuan (`/app/bantuan`).
- **Responsif di Semua Perangkat:**
  - Optimal di layar ponsel (HP), tablet, laptop, hingga monitor desktop lebar (*widescreen*).

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Routing:** React Router v6
- **Styling:** Tailwind CSS + Custom Design Tokens (Cinzel, Playfair Display, Plus Jakarta Sans)
- **Icons:** Custom SVG Icon Set + Lucide React
- **Build Tool:** Vite

---

## 💻 Panduan Menjalankan Project

### 1. Clone Repositori (Jika belum ada di komputer)
```bash
git clone https://github.com/mhmmddzaky03-wq/viscom.git
cd viscom
```

### 2. Install Dependensi
Pastikan [Node.js](https://nodejs.org/) (versi 18+) sudah terinstall di komputer, lalu jalankan:
```bash
npm install
```

### 3. Jalankan Development Server
Untuk menjalankan website dalam mode development:
```bash
npm run dev
```
Buka browser dan akses alamat yang tertera di terminal, biasanya:
👉 **http://localhost:5173/**

---

### 4. Build untuk Production
Jika ingin mengompilasi website untuk keperluan deployment production:
```bash
npm run build
```
Hasil kompilasi akan berada di folder `dist/`.

Untuk menjalankan server hasil build secara lokal:
```bash
npm run serve
```
Lalu buka browser di **http://localhost:5173/**.

---

## 📁 Struktur Folder Project

```
viscom/
├── public/
│   └── assets/
│       ├── avatar_rafi.png          # Avatar pengguna
│       ├── chart_step3.png          # Ilustrasi chart langkah 3
│       ├── hero_spine_woman.png     # Ilustrasi wanita glowing spine
│       ├── laptop_step1.png         # Ilustrasi laptop langkah 1
│       ├── posture_cam.png          # Ilustrasi webcam posisi duduk
│       ├── woman_desk_working.jpg   # Foto wanita bekerja di meja
│       └── landing/
│           └── mosaic/              # 7 Foto workspace untuk section About
├── src/
│   ├── components/
│   │   ├── common/                  # Modal global, Icons SVG
│   │   ├── landing/                 # Komponen khusus landing page (AboutBungkok)
│   │   └── layout/                  # Shell aplikasi (AppLayout, Sidebar)
│   ├── context/                     # State management React (AppContext)
│   ├── data/                        # Mock data sesi, tantangan, dan badge
│   ├── pages/                       # Halaman aplikasi (Landing, Dashboard, Login, Register, dll)
│   ├── App.jsx                      # Routing aplikasi
│   ├── index.css                    # Styling global
│   └── main.jsx                     # Entry point React
├── index.html                       # Entry HTML + Google Fonts
├── package.json                     # Daftar paket dan scripts
└── vite.config.js                   # Konfigurasi Vite
```

---

## 📄 Lisensi
Hak cipta © 2026 Bungkok Posture Tracker.
