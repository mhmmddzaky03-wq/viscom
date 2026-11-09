import React, { createContext, useContext, useState } from 'react';
import {
  initialUserData,
  sessionsData,
  challengesData,
  badgesData,
  virtualShopData,
  pointsHistoryData,
  faqsData,
  reportsData,
} from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(initialUserData);
  const [sessions, setSessions] = useState(sessionsData);
  const [hasData, setHasData] = useState(true); // toggle for empty state showcase
  const [challenges, setChallenges] = useState(challengesData);
  const [badges, setBadges] = useState(badgesData);
  const [ownedItems, setOwnedItems] = useState({}); // { 'sky-morning': true }
  const [equippedItems, setEquippedItems] = useState({});
  const [pointsHistory, setPointsHistory] = useState(pointsHistoryData);
  const [reports, setReports] = useState(reportsData);

  // Global modal system
  const [activeModal, setActiveModal] = useState(null); // { type, payload }

  const openModal = (type, payload = {}) => {
    setActiveModal({ type, payload });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Redeem item logic
  const redeemItem = (itemId) => {
    const item = virtualShopData.find((i) => i.id === itemId);
    if (!item) return;

    if (user.points < item.price) {
      openModal('poin-kurang', { item, userPoints: user.points });
      return;
    }

    const newPoints = user.points - item.price;
    setUser((prev) => ({ ...prev, points: newPoints }));
    setOwnedItems((prev) => ({ ...prev, [itemId]: true }));
    setEquippedItems((prev) => ({ ...prev, [itemId]: true }));

    const newHistoryEntry = {
      date: '14 Jul 2025',
      activity: `Tukar ${item.name}`,
      change: `−${item.price}`,
      type: 'out',
      note: 'Berhasil • Hadiah dimiliki',
    };
    setPointsHistory((prev) => [newHistoryEntry, ...prev]);

    openModal('hadiah-berhasil', { item, newPoints, usedPoints: item.price });
  };

  // Join challenge
  const joinChallenge = (challengeId) => {
    setChallenges((prev) =>
      prev.map((c) =>
        c.id === challengeId ? { ...c, type: 'diikuti', status: 'Sedang diikuti' } : c
      )
    );
    openModal('bergabung-sukses', { challengeId });
  };

  // Add support ticket
  const addReport = (newTicket) => {
    const ticketId = `#BGK-0${144 + reports.length}`;
    const entry = {
      id: ticketId,
      title: newTicket.title,
      category: newTicket.category,
      date: '14 Jul 2025',
      status: 'Diterima',
      statusBadgeColor: 'bg-amber-100 text-amber-800',
      description: newTicket.description,
      device: newTicket.device,
      teamReply: null,
    };
    setReports([entry, ...reports]);
    openModal('laporan-berhasil', { ticket: entry });
  };

  // Reply to ticket
  const replyToTicket = (ticketId, replyText) => {
    setReports((prev) =>
      prev.map((t) =>
        t.id === ticketId && t.teamReply
          ? {
              ...t,
              teamReply: { ...t.teamReply, userReply: replyText },
            }
          : t
      )
    );
    openModal('balasan-terkirim', { ticketId });
  };

  // Update profile
  const updateUserProfile = (updated) => {
    setUser((prev) => ({ ...prev, ...updated }));
    openModal('profil-disimpan');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        sessions,
        setSessions,
        hasData,
        setHasData,
        challenges,
        setChallenges,
        badges,
        setBadges,
        ownedItems,
        equippedItems,
        pointsHistory,
        reports,
        activeModal,
        openModal,
        closeModal,
        redeemItem,
        joinChallenge,
        addReport,
        replyToTicket,
        updateUserProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

