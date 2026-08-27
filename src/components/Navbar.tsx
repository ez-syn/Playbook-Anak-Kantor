import React, { useState, useRef, useEffect } from 'react';
import { Platform } from '../types';
import { useKeycapTheme, KEYCAP_THEMES, KeycapTheme } from '../context/KeycapThemeContext';
import { 
  BookmarkCheck, 
  Monitor, 
  Laptop, 
  ChevronDown,
  Sparkles,
  Flame,
  Table,
  MessageSquareText,
  Video,
  FolderTree,
  Compass,
  Layers,
  Palette,
  Check,
  Zap,
  Calculator,
  LogOut
} from 'lucide-react';

interface NavbarProps {
  platform: Platform;
  setPlatform: (p: Platform) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  platform,
  setPlatform,
  activeSection,
  setActiveSection,
  onLogout,
}) => {
  const { keycapTheme, setKeycapTheme } = useKeycapTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownModules = [
    { id: 'wajib-hafal', label: '01. 20 Wajib Hafal', icon: Flame, tag: 'Dasar' },
    { id: 'mau-ngapain', label: '02. Mau Ngapain? (Aksi)', icon: Zap, tag: 'Aksi' },
    { id: 'shortcut-library', label: '03. Pustaka Shortcut', icon: Layers, tag: 'Pustaka' },
    { id: 'excel-khusus', label: '04. Navigasi & Tips Excel', icon: Table, tag: 'Excel' },
    { id: 'bank-kalimat', label: '05. Bank Kalimat Kantor', icon: MessageSquareText, tag: 'Pesan' },
    { id: 'meeting-kit', label: '06. Meeting Survival Kit', icon: Video, tag: 'Meeting' },
    { id: 'tips-kerja', label: '07. File & Naming Guide', icon: FolderTree, tag: 'File' },
    { id: 'karier-bridge', label: '08. Jurnal Progres Karier', icon: Compass, tag: 'Karier' },
    { id: 'formula-master', label: '09. Rumus GSheet & Excel', icon: Calculator, tag: 'Formula' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDropdownActive = dropdownModules.some(m => m.id === activeSection);
  const activeThemeObj = KEYCAP_THEMES.find(t => t.id === keycapTheme) || KEYCAP_THEMES[0];


  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#CBD5E1] transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Pill Tag */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleNavClick('beranda')}
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-md shrink-0 border border-[#1D4ED8]">
              <BookmarkCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#BFDBFE]">
                  PLAYBOOK BY EZPLAN
                </span>
              </div>
              <h1 className="font-black text-[#0F172A] text-base sm:text-xl tracking-tight font-sans leading-tight">
                Playbook Anak Kantor
              </h1>
            </div>
          </div>

          {/* Desktop Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {/* Beranda Pill */}
            <button
              id="nav-link-beranda"
              onClick={() => handleNavClick('beranda')}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                activeSection === 'beranda'
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
              }`}
            >
              Beranda
            </button>

            {/* Pustaka Shortcut Pill */}
            <button
              id="nav-link-shortcut-library"
              onClick={() => handleNavClick('shortcut-library')}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                activeSection === 'shortcut-library'
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
              }`}
            >
              Pustaka Shortcut
            </button>

            {/* Panduan Khusus Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="nav-dropdown-panduan"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black transition-all ${
                  isDropdownActive
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#334155] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
                }`}
              >
                <span>Panduan Modul (9)</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl border-2 border-[#CBD5E1] shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 text-[11px] font-black text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0] mb-1">
                    Pilih Panduan Spesifik
                  </div>
                  {dropdownModules.map((item) => {
                    const Icon = item.icon;
                    const isItemActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                          isItemActive
                            ? 'bg-[#EFF6FF] text-[#1D4ED8] font-bold border border-[#BFDBFE]'
                            : 'hover:bg-[#F8FAFC] text-[#0F172A]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isItemActive ? 'text-[#1D4ED8]' : 'text-[#475569]'}`} />
                          <span className="text-xs font-bold">{item.label}</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#475569] bg-[#F1F5F9] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                          {item.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Controls: Keycap Theme Switcher + Platform Switcher */}
          <div className="flex items-center gap-2">
            
            {/* Keycap Theme Switcher for Content Creators */}
            <div className="relative" ref={themeDropdownRef}>
              <button
                id="btn-keycap-theme-dropdown"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF6FF] hover:bg-[#DBEAFE] border-2 border-[#BFDBFE] text-xs font-black text-[#1D4ED8] transition-all shadow-xs"
                title="Pilih Tampilan Tombol Shortcut untuk Konten"
              >
                <Palette className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="hidden sm:inline">Gaya Tombol:</span>
                <span className="truncate max-w-[90px] sm:max-w-[120px]">{activeThemeObj.name.split(' ')[0]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl border-2 border-[#CBD5E1] shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 text-[11px] font-black text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0] mb-1 flex items-center justify-between">
                    <span>Gaya Tombol Konten</span>
                    <span className="text-[10px] font-extrabold text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded-md">
                      3D Taktil
                    </span>
                  </div>

                  <div className="space-y-1.5 p-1">
                    {KEYCAP_THEMES.map((theme) => {
                      const isSelected = keycapTheme === theme.id;
                      return (
                        <button
                          key={theme.id}
                          onClick={() => {
                            setKeycapTheme(theme.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl border-2 transition-all flex items-start justify-between gap-2 ${
                            isSelected
                              ? 'bg-[#EFF6FF] border-[#2563EB] text-[#1D4ED8] shadow-xs'
                              : 'bg-white border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] text-[#0F172A]'
                          }`}
                        >
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-xs font-black">{theme.name}</span>
                              {theme.badge && (
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                                  isSelected ? 'bg-[#2563EB] text-white' : 'bg-[#F1F5F9] text-[#475569]'
                                }`}>
                                  {theme.badge}
                                </span>
                              )}
                            </div>
                          </div>
                          {isSelected && (
                            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Platform Switcher Pill (Windows / Mac) */}
            <div 
              id="platform-switcher"
              className="flex items-center p-1 bg-[#F1F5F9] rounded-full border-2 border-[#CBD5E1] text-xs font-bold"
            >
              <button
                id="btn-platform-windows"
                onClick={() => setPlatform('windows')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  platform === 'windows'
                    ? 'bg-[#1E293B] text-white shadow-sm font-black'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
                title="Tampilkan shortcut Windows"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Windows</span>
              </button>
              <button
                id="btn-platform-mac"
                onClick={() => setPlatform('mac')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  platform === 'mac'
                    ? 'bg-[#1E293B] text-white shadow-sm font-black'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
                title="Tampilkan shortcut macOS"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>macOS</span>
              </button>
            </div>

            {/* Logout Button */}
            <button
              id="btn-logout"
              onClick={onLogout}
              className="flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs font-black bg-red-50 hover:bg-red-100 text-red-600 border-2 border-red-200 transition-all shadow-xs shrink-0 cursor-pointer"
              title="Keluar dari Playbook"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
