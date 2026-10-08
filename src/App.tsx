/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomeView } from './components/views/HomeView';
import { ExperiencesView } from './components/views/ExperiencesView';
import { ExperienceDetailView } from './components/views/ExperienceDetailView';
import { CustomizedEscapeView } from './components/views/CustomizedEscapeView';
import { CorporateWellnessView } from './components/views/CorporateWellnessView';
import { AboutView } from './components/views/AboutView';
import { JournalView } from './components/views/JournalView';
import { ContactView } from './components/views/ContactView';
import { CustomerAccountView } from './components/views/CustomerAccountView';
import { AdminDashboardView } from './components/views/AdminDashboardView';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <main className="min-h-screen">
      {currentView === 'home' && <HomeView />}
      {currentView === 'experiences' && <ExperiencesView />}
      {currentView === 'experience-detail' && <ExperienceDetailView />}
      {currentView === 'customized' && <CustomizedEscapeView />}
      {currentView === 'corporate' && <CorporateWellnessView />}
      {currentView === 'about' && <AboutView />}
      {currentView === 'journal' && <JournalView />}
      {currentView === 'contact' && <ContactView />}
      {currentView === 'account' && <CustomerAccountView />}
      {currentView === 'admin' && <AdminDashboardView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#243329]">
        <Header />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
        <BookingModal />
      </div>
    </AppProvider>
  );
}
