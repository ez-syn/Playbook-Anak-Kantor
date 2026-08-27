import React, { useState, useEffect } from 'react';
import { Platform } from './types';
import { Navbar } from './components/Navbar';
import { DashboardHub, MODULE_LIST } from './components/DashboardHub';
import { HeroSection } from './components/HeroSection';
import { MauNgapainSection } from './components/MauNgapainSection';
import { TopWajibHafalSection } from './components/TopWajibHafalSection';
import { ShortcutLibrary } from './components/ShortcutLibrary';
import { ExcelSpecialSection } from './components/ExcelSpecialSection';
import { BankKalimatSection } from './components/BankKalimatSection';
import { MeetingSurvivalSection } from './components/MeetingSurvivalSection';
import { OfficeTipsSection } from './components/OfficeTipsSection';
import { CareerBridgeSection } from './components/CareerBridgeSection';
import { FormulaMasterSection } from './components/FormulaMasterSection';
import { LoginForm } from './components/LoginForm';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Toast } from './components/Toast';
import { ArrowLeft, ArrowRight, Home, ChevronRight, Sparkles, Layers } from 'lucide-react';

export function App() {
  const [platform, setPlatform] = useState<Platform>('windows');
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [viewAllMode, setViewAllMode] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ez_playbook_logged_in') === 'true';
    }
    return false;
  });

  // Auto detect user OS on initial render
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator) {
      const userAgent = navigator.userAgent || '';
      if (/Macintosh|Mac OS X/i.test(userAgent)) {
        setPlatform('mac');
      } else {
        setPlatform('windows');
      }
    }
  }, []);

  // Toast auto-dismiss
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3000);
  };

  const handleSelectModule = (moduleId: string) => {
    setActiveSection(moduleId);
    setViewAllMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = () => {
    setActiveSection('shortcut-library');
    setViewAllMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentModuleIndex = MODULE_LIST.findIndex(m => m.id === activeSection);
  const currentModule = MODULE_LIST[currentModuleIndex];
  const nextModule = currentModuleIndex >= 0 && currentModuleIndex < MODULE_LIST.length - 1 
    ? MODULE_LIST[currentModuleIndex + 1] 
    : null;
  const prevModule = currentModuleIndex > 0 
    ? MODULE_LIST[currentModuleIndex - 1] 
    : null;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
        <LoginForm onLoginSuccess={() => {
          setIsLoggedIn(true);
          showToast("Login Berhasil! Selamat belajar sat-set.");
        }} />
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* Top Navigation Bar with Pill Navigation */}
      <Navbar
        platform={platform}
        setPlatform={setPlatform}
        activeSection={activeSection}
        setActiveSection={(s) => {
          setActiveSection(s);
          setViewAllMode(false);
        }}
        onLogout={() => {
          localStorage.removeItem('ez_playbook_logged_in');
          setIsLoggedIn(false);
          setActiveSection('beranda');
          showToast("Berhasil Keluar! Sesi belajar Anda telah diamankan.");
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        
        {/* VIEW 1: Beranda / Dashboard Portal Hub (Clean 3-column stage cards) */}
        {activeSection === 'beranda' && !viewAllMode && (
          <DashboardHub
            platform={platform}
            setPlatform={setPlatform}
            onSelectModule={handleSelectModule}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearchSubmit={handleSearchSubmit}
          />
        )}

        {/* VIEW 2: Single Focused Module View with Breadcrumb & Back Button */}
        {activeSection !== 'beranda' && !viewAllMode && (
          <div className="animate-in fade-in duration-200">
            
            {/* Modular Header / Breadcrumb Bar */}
            <div className="bg-white border-b-2 border-[#E2E8F0] sticky top-16 sm:top-20 z-30 shadow-xs">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  
                  {/* Left: Back to Home + Breadcrumbs */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => handleSelectModule('beranda')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1] text-xs font-black transition-all shadow-2xs group"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#1E40AF]" />
                      <span>Kembali ke Beranda</span>
                    </button>

                    <div className="hidden sm:flex items-center gap-2 text-xs text-[#475569] font-bold">
                      <span>/</span>
                      <span className="font-black text-[#0F172A] bg-[#EFF6FF] px-2.5 py-1 rounded-lg border border-[#BFDBFE] text-[#1E40AF]">
                        {currentModule ? `${currentModule.stepLabel}: ${currentModule.title}` : activeSection}
                      </span>
                    </div>
                  </div>

                  {/* Right: Quick Module Switcher pills */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 custom-scrollbar">
                    {prevModule && (
                      <button
                        onClick={() => handleSelectModule(prevModule.id)}
                        className="px-3 py-1.5 text-xs font-extrabold text-[#334155] hover:text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-xl border border-[#CBD5E1] transition-colors shrink-0"
                        title={`Sebelumnya: ${prevModule.title}`}
                      >
                        &larr; {prevModule.stepLabel}
                      </button>
                    )}
                    {nextModule && (
                      <button
                        onClick={() => handleSelectModule(nextModule.id)}
                        className="px-3.5 py-1.5 text-xs font-black text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-xl border border-[#0F172A] transition-colors shrink-0 flex items-center gap-1 shadow-xs"
                        title={`Selanjutnya: ${nextModule.title}`}
                      >
                        <span>{nextModule.stepLabel}</span>
                        <span>&rarr;</span>
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>

            {/* Render the Active Module Content */}
            <div className="py-4">
              {activeSection === 'wajib-hafal' && (
                <TopWajibHafalSection platform={platform} onCopySuccess={showToast} />
              )}

              {activeSection === 'mau-ngapain' && (
                <MauNgapainSection platform={platform} onCopySuccess={showToast} />
              )}

              {activeSection === 'shortcut-library' && (
                <ShortcutLibrary
                  platform={platform}
                  setPlatform={setPlatform}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onCopySuccess={showToast}
                />
              )}

              {activeSection === 'excel-khusus' && (
                <ExcelSpecialSection platform={platform} setPlatform={setPlatform} onCopySuccess={showToast} />
              )}

              {activeSection === 'bank-kalimat' && (
                <BankKalimatSection onCopySuccess={showToast} />
              )}

              {activeSection === 'meeting-kit' && (
                <MeetingSurvivalSection platform={platform} onCopySuccess={showToast} />
              )}

              {activeSection === 'tips-kerja' && (
                <OfficeTipsSection onCopySuccess={showToast} />
              )}

              {activeSection === 'karier-bridge' && (
                <CareerBridgeSection onCopySuccess={showToast} />
              )}

              {activeSection === 'formula-master' && (
                <FormulaMasterSection onCopySuccess={showToast} />
              )}
            </div>

            {/* Bottom Module Pagination / Next Step Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
              <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                  <span className="text-xs font-black uppercase text-[#2563EB] tracking-wider mb-1 block">
                    Lanjut Belajar
                  </span>
                  <h3 className="text-2xl font-black text-[#0F172A]">
                    {nextModule ? nextModule.title : 'Semua Modul Telah Diselesaikan!'}
                  </h3>
                  <p className="text-sm text-[#334155] font-semibold mt-1 max-w-xl">
                    {nextModule 
                      ? nextModule.description 
                      : 'Kembali ke portal utama untuk mencari shortcut atau melihat panduan lainnya.'
                    }
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleSelectModule('beranda')}
                    className="px-5 py-3 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] font-extrabold text-xs sm:text-sm rounded-xl border border-[#CBD5E1] transition-colors"
                  >
                    Kembali ke Beranda
                  </button>
                  {nextModule && (
                    <button
                      onClick={() => handleSelectModule(nextModule.id)}
                      className="px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
                    >
                      <span>Buka {nextModule.stepLabel}</span>
                      <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 3: Optional Full Continuous Scroll View Mode */}
        {viewAllMode && (
          <div className="space-y-4">
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchFocus={() => {
                const el = document.getElementById('shortcut-library');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreClick={() => {
                const el = document.getElementById('mau-ngapain');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <TopWajibHafalSection platform={platform} onCopySuccess={showToast} />
            <MauNgapainSection platform={platform} onCopySuccess={showToast} />
            <ShortcutLibrary
              platform={platform}
              setPlatform={setPlatform}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onCopySuccess={showToast}
            />
            <ExcelSpecialSection platform={platform} setPlatform={setPlatform} onCopySuccess={showToast} />
            <BankKalimatSection onCopySuccess={showToast} />
            <MeetingSurvivalSection platform={platform} onCopySuccess={showToast} />
            <OfficeTipsSection onCopySuccess={showToast} />
            <CareerBridgeSection onCopySuccess={showToast} />
            <FormulaMasterSection onCopySuccess={showToast} />
          </div>
        )}

      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Mobile-first Bottom Navigation Bar */}
      <MobileBottomNav
        activeSection={activeSection}
        setActiveSection={handleSelectModule}
      />

      {/* Floating Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}

export default App;

