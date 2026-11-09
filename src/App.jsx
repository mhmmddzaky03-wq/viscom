import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Public Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

// App Layout & App Pages
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import RiwayatLatihan from './pages/RiwayatLatihan';
import Perkembangan from './pages/Perkembangan';
import Tantangan from './pages/Tantangan';
import RewardBadge from './pages/RewardBadge';
import ProfilPengaturan from './pages/ProfilPengaturan';
import Bantuan from './pages/Bantuan';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Marketing & Auth */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Logged In App Routes */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="riwayat" element={<RiwayatLatihan />} />
            <Route path="riwayat/:sessionId" element={<RiwayatLatihan />} />
            <Route path="perkembangan" element={<Perkembangan />} />
            <Route path="tantangan" element={<Tantangan />} />
            <Route path="reward" element={<RewardBadge />} />
            <Route path="profil" element={<ProfilPengaturan />} />
            <Route path="bantuan" element={<Bantuan />} />
            <Route path="bantuan/laporan" element={<Bantuan />} />
          </Route>

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

