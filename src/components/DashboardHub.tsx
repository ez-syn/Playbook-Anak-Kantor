import React from 'react';
import { Platform } from '../types';
import { Keycap } from './Keycap';
import { 
  ArrowRight, 
  Flame, 
  Zap, 
  Layers, 
  Table, 
  MessageSquareText, 
  Video, 
  FolderTree, 
  Compass, 
  Search, 
  Sparkles,
  Award,
  CheckCircle2,
  Calculator
} from 'lucide-react';

export interface ModuleItem {
  id: string;
  stepNumber: string;
  stepLabel: string;
  badgeLabel: string;
  badgeIcon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  highlightColor?: string;
}

interface DashboardHubProps {
  platform: Platform;
  setPlatform: (p: Platform) => void;
  onSelectModule: (moduleId: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSearchSubmit: () => void;
}

export const MODULE_LIST: ModuleItem[] = [
  {
    id: 'wajib-hafal',
    stepNumber: '01',
    stepLabel: 'MODUL 01',
    badgeLabel: 'Wajib Hafal',
    badgeIcon: Flame,
    title: '20 SHORTCUT WAJIB HAFAL',
    subtitle: 'Paling sering kepakai setiap hari',
    description: '20 kombinasi tombol paling mendasar untuk Windows, Mac, browser, dan dokumen. Kuasai ini dulu sebelum menghafal yang lain.',
    actionText: 'Buka Modul'
  },
  {
    id: 'mau-ngapain',
    stepNumber: '02',
    stepLabel: 'MODUL 02',
    badgeLabel: 'Aktivitas Harian',
    badgeIcon: Zap,
    title: 'MAU NGAPAIN? (AKSI CEPAT)',
    subtitle: 'Tinggal pilih apa yang mau kamu lakukan',
    description: 'Nggak perlu ngafalin nama menu atau tombol. Cukup klik aktivitas yang kamu butuhin: screenshot layar, split window, sampai rapihin tab.',
    actionText: 'Buka Modul'
  },
  {
    id: 'shortcut-library',
    stepNumber: '03',
    stepLabel: 'MODUL 03',
    badgeLabel: '150+ Shortcut',
    badgeIcon: Layers,
    title: 'PUSTAKA SHORTCUT KERJA',
    subtitle: 'Koleksi lengkap ratusan shortcut',
    description: 'Daftar lengkap shortcut keyboard untuk Windows & Mac. Bisa difilter per aplikasi (Excel, Word, Chrome, dll) atau dicari pakai kata kunci bebas.',
    actionText: 'Buka Modul'
  },
  {
    id: 'excel-khusus',
    stepNumber: '04',
    stepLabel: 'MODUL 04',
    badgeLabel: 'Excel & Data',
    badgeIcon: Table,
    title: 'EXCEL & SPREADSHEET MASTER',
    subtitle: 'Trik navigasi & olah data kilat',
    description: 'Pintasan penting buat geser cell kilat, kunci rumus dengan F4 ($), AutoSum cepat, sampai filter dan atur baris-kolom tanpa mouse.',
    actionText: 'Buka Modul'
  },
  {
    id: 'bank-kalimat',
    stepNumber: '05',
    stepLabel: 'MODUL 05',
    badgeLabel: 'Chat & Email',
    badgeIcon: MessageSquareText,
    title: 'BANK KALIMAT KANTOR',
    subtitle: 'Template chat & email siap kirim',
    description: 'Kumpulan template pesan WhatsApp, Slack, dan email: follow-up kerjaan, minta data, kirim revisi, sampai izin berhalangan kerja.',
    actionText: 'Buka Modul'
  },
  {
    id: 'meeting-kit',
    stepNumber: '06',
    stepLabel: 'MODUL 06',
    badgeLabel: 'Siaga Meeting',
    badgeIcon: Video,
    title: 'MEETING SURVIVAL KIT',
    subtitle: 'Persiapan sebelum, saat, & setelah rapat',
    description: 'Checklist sebelum share screen, shortcut mute/kamera cepat, plus format notulensi (MoM) ringkas biar hasil rapat beneran jalan.',
    actionText: 'Buka Modul'
  },
  {
    id: 'tips-kerja',
    stepNumber: '07',
    stepLabel: 'MODUL 07',
    badgeLabel: 'Manajemen File',
    badgeIcon: FolderTree,
    title: 'MANAJEMEN FILE & KERJA',
    subtitle: 'Standar nama file & susunan folder',
    description: 'Biar nggak ada lagi file bernama "final_fix_banget.xlsx". Plus cara rapihin folder proyek dan to-do list harian.',
    actionText: 'Buka Modul'
  },
  {
    id: 'karier-bridge',
    stepNumber: '08',
    stepLabel: 'MODUL 08',
    badgeLabel: 'Perspektif Karier',
    badgeIcon: Compass,
    title: 'JURNAL & PROGRES KARIER',
    subtitle: 'Catatan pencapaian & skill kerja',
    description: 'Biar pencapaian dan skill barumu nggak nguap begitu aja. Berguna banget pas evaluasi kerja tahunan atau update CV.',
    actionText: 'Buka Modul'
  },
  {
    id: 'formula-master',
    stepNumber: '09',
    stepLabel: 'MODUL 09',
    badgeLabel: 'Rumus Sakti',
    badgeIcon: Calculator,
    title: 'RUMUS EXCEL & GSHEET POPULER',
    subtitle: 'Rumus dasar wajib & formula kerja harian',
    description: 'Dari rumus basic wajib hafal (SUM, AVERAGE, COUNT, MAX/MIN, IF, potong teks) sampai XLOOKUP dan olah data antar sheet.',
    actionText: 'Buka Modul'
  }
];

export const DashboardHub: React.FC<DashboardHubProps> = ({
  platform,
  setPlatform,
  onSelectModule,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Hero Welcome & Quick Search */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#2563EB]" />
          <span>PANDUAN & CHEAT SHEET KERJA KANTOR</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
          Kerjaan Numpuk? Ini Shortcut & Trik Biar Cepat Beres.
        </h1>
        
        <p className="text-base sm:text-lg text-[#334155] font-semibold leading-relaxed mb-8">
          Pilih modul atau panduan di bawah untuk nemuin shortcut dan trik kerja praktis di Windows, Mac, Excel, email, sampai meeting.
        </p>

        {/* Universal Search Input */}
        <div className="relative max-w-xl mx-auto flex items-center bg-white rounded-2xl border-2 border-[#CBD5E1] focus-within:ring-4 focus-within:ring-[#BFDBFE] focus-within:border-[#1E40AF] shadow-md transition-all p-1.5">
          <div className="pl-3.5 pr-2 text-[#475569]">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSearchSubmit();
              }
            }}
            placeholder="Cari shortcut atau trik: misal 'screenshot', 'filter', 'zoom'..."
            className="flex-1 min-w-0 py-2.5 px-1 bg-transparent text-[#0F172A] placeholder:text-[#64748B] text-sm sm:text-base font-bold focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mr-2 text-xs font-extrabold text-[#475569] hover:text-[#0F172A] px-2.5 py-1.5 bg-[#F1F5F9] rounded-lg border border-[#CBD5E1] shrink-0"
            >
              Reset
            </button>
          )}
          <button
            onClick={onSearchSubmit}
            className="px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-sm font-black rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
          >
            <span>Cari</span>
          </button>
        </div>
      </div>

      {/* Quick Summary Pill Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 mb-6 border-b-2 border-[#E2E8F0]">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-7 bg-[#2563EB] rounded-full inline-block"></span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
            Daftar Modul & Panduan
          </h2>
          <span className="text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE] ml-1">
            9 Modul Siap Pakai
          </span>
        </div>

        {/* Operating System Switcher */}
        <div className="flex items-center gap-2 text-xs font-extrabold text-[#334155]">
          <span className="hidden sm:inline">Keyboard OS:</span>
          <div className="flex p-1 bg-white rounded-xl border-2 border-[#CBD5E1] shadow-xs">
            <button
              onClick={() => setPlatform('windows')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                platform === 'windows' ? 'bg-[#1E293B] text-white font-black shadow-xs' : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Windows (⊞)
            </button>
            <button
              onClick={() => setPlatform('mac')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                platform === 'mac' ? 'bg-[#1E293B] text-white font-black shadow-xs' : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              macOS (⌘)
            </button>
          </div>
        </div>
      </div>

      {/* Modular 3-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODULE_LIST.map((module) => {
          const BadgeIcon = module.badgeIcon;
          return (
            <div
              key={module.id}
              id={`card-module-${module.id}`}
              onClick={() => onSelectModule(module.id)}
              className="bg-white rounded-3xl border-2 border-[#CBD5E1] hover:border-[#2563EB] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Meta Row (Stage Badge + Category Tag) */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-[#1E293B] text-white text-xs font-black flex items-center justify-center shadow-xs">
                      {module.stepNumber}
                    </span>
                    <span className="text-xs font-black uppercase text-[#475569] tracking-wider">
                      {module.stepLabel}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] text-xs font-extrabold shadow-xs">
                    <BadgeIcon className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>{module.badgeLabel}</span>
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-[#1D4ED8] tracking-tight leading-snug mb-1 transition-colors">
                  {module.title}
                </h3>

                {/* Subtitle in quotes */}
                <p className="text-xs font-extrabold text-[#2563EB] italic mb-3">
                  {module.subtitle}
                </p>

                {/* Concise 3-4 Line Description with rich contrast */}
                <p className="text-sm text-[#334155] font-semibold leading-relaxed mb-6">
                  {module.description}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t-2 border-[#F1F5F9] flex items-center justify-between mt-auto">
                <span className="text-sm font-extrabold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                  {module.actionText}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] group-hover:bg-[#EFF6FF] border border-[#CBD5E1] group-hover:border-[#BFDBFE] flex items-center justify-center text-[#475569] group-hover:text-[#1D4ED8] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Information Highlight Banner */}
      <div className="mt-12 bg-[#1E293B] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#334155]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-[#93C5FD]" />
          </div>
          <div>
            <h3 className="text-xl font-black mb-1 text-white">
              "Kerjaan Hari Ini, Karier Besok"
            </h3>
            <p className="text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
              Gunakan playbook ini sebagai referensi harian di meja kerjamu. Setiap shortcut dan template dirancang agar kamu bekerja lebih teratur, efisien, dan siap berkembang.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectModule('wajib-hafal')}
            className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            <span>Mulai dari 20 Shortcut Wajib</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
