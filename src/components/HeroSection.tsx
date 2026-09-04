import React from 'react';
import { Search, Sparkles, Zap, ArrowDown, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchFocus: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSearchFocus,
  onExploreClick,
}) => {
  const quickSearchTags = [
    'Screenshot',
    'Reopen Tab',
    'Filter Excel',
    'Lock PC',
    'Mute Meeting',
    'AutoSum',
    'Paste Special',
    'Find Replace',
    'Rename File'
  ];

  return (
    <section id="beranda" className="pt-6 pb-10 sm:pt-8 sm:pb-14 border-b-2 border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Search */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div 
              id="hero-eyebrow"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] text-xs font-black tracking-wide uppercase mb-4 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>PLAYBOOK ANAK KANTOR</span>
            </div>

            {/* Headline */}
            <h1 
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1] mb-3.5"
            >
              Kerjaan Numpuk?<br />
              <span className="text-[#2563EB]">Ini Shortcut & Panduannya.</span>
            </h1>

            {/* Subheadline */}
            <p 
              id="hero-subheadline"
              className="text-base sm:text-lg text-[#334155] font-semibold leading-relaxed mb-6 max-w-2xl"
            >
              Pintasan keyboard dan panduan praktis biar kerjaan cepat beres tanpa ribet di Windows, Mac, Excel, email, sampai meeting.
            </p>

            {/* Global Search Bar */}
            <div className="w-full max-w-xl mb-4">
              <div 
                id="hero-search-wrapper"
                className="relative flex items-center bg-white rounded-2xl border-2 border-[#CBD5E1] focus-within:ring-2 focus-within:ring-[#2563EB] focus-within:border-[#2563EB] shadow-sm transition-all p-1.5"
              >
                <div className="pl-3.5 pr-2 text-[#475569]">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  id="hero-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={onSearchFocus}
                  placeholder="Cari shortcut: misal 'screenshot', 'filter', 'rename'..."
                  className="w-full py-2.5 px-1 bg-transparent text-[#0F172A] placeholder:text-[#64748B] text-sm sm:text-base font-bold focus:outline-none"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-2 text-xs font-black text-[#475569] hover:text-[#0F172A] px-2.5 py-1 bg-[#F1F5F9] rounded-lg"
                  >
                    Reset
                  </button>
                ) : (
                  <div className="hidden sm:flex items-center gap-1 mr-2 px-2.5 py-1 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[10px] text-[#475569] font-mono font-bold select-none">
                    <span>Ctrl</span>
                    <span>+</span>
                    <span>K</span>
                  </div>
                )}
                <button
                  id="hero-btn-cari"
                  onClick={onSearchFocus}
                  className="px-5 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-sm font-black rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <Zap className="w-4 h-4 text-[#93C5FD]" />
                  <span>Cari</span>
                </button>
              </div>

              {/* Quick Suggestion Chips */}
              <div className="flex items-center gap-2 flex-wrap mt-3 pt-1">
                <span className="text-[11px] font-black text-[#475569] uppercase tracking-wider mr-1">
                  Sering Dicari:
                </span>
                {quickSearchTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      onSearchFocus();
                    }}
                    className="text-xs bg-white hover:bg-[#EFF6FF] hover:border-[#2563EB] text-[#0F172A] border-2 border-[#CBD5E1] px-3 py-1 rounded-full transition-all font-bold shadow-xs"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs & Trust Points */}
            <div className="flex flex-wrap items-center gap-4 mt-2 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onSearchFocus}
                className="px-6 py-3 bg-[#1E293B] hover:bg-[#334155] text-white text-sm font-black rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Cari Shortcut</span>
              </button>
              <button
                id="hero-secondary-cta"
                onClick={onExploreClick}
                className="px-6 py-3 bg-white hover:bg-[#EFF6FF] text-[#0F172A] border-2 border-[#CBD5E1] hover:border-[#2563EB] text-sm font-black rounded-xl transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Jelajahi Kategori</span>
                <ArrowDown className="w-4 h-4 text-[#2563EB]" />
              </button>
            </div>

            {/* Key benefits / trust micro points */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t-2 border-[#E2E8F0] w-full max-w-lg text-xs text-[#334155]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="font-bold text-[#0F172A]">Windows & Mac</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="font-bold text-[#0F172A]">Praktis & Siap Pakai</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="font-bold text-[#0F172A]">Excel & Tools Lengkap</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Desk Illustration (SVG Crisp & Handcrafted) */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              id="hero-editorial-illustration"
              className="relative w-full max-w-md bg-white rounded-3xl p-6 border-2 border-[#CBD5E1] shadow-md overflow-hidden"
            >
              {/* Subtle top bar for illustration frame */}
              <div className="flex items-center justify-between border-b-2 border-[#F1F5F9] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="text-xs font-mono text-[#475569] font-bold">
                  pocket-guide.office.desk
                </div>
              </div>

              {/* Handcrafted Editorial Clean Vector Scene */}
              <svg viewBox="0 0 400 280" className="w-full h-auto drop-shadow-xs select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk Surface */}
                <rect x="20" y="220" width="360" height="12" rx="4" fill="#F1F5F9" stroke="#0F172A" strokeWidth="2.5" />
                <line x1="40" y1="232" x2="30" y2="260" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="360" y1="232" x2="370" y2="260" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />

                {/* Laptop Base & Screen */}
                <rect x="110" y="70" width="180" height="115" rx="8" fill="#0F172A" stroke="#1E293B" strokeWidth="2.5" />
                <rect x="120" y="80" width="160" height="95" rx="4" fill="#F8FAFC" />
                
                {/* Screen Content: Spreadsheet Grid + Shortcut Preview */}
                <rect x="128" y="88" width="144" height="12" rx="2" fill="#E2E8F0" />
                <rect x="132" y="92" width="24" height="4" rx="1" fill="#0F172A" />
                <rect x="160" y="92" width="30" height="4" rx="1" fill="#2563EB" />
                <rect x="194" y="92" width="30" height="4" rx="1" fill="#64748B" />
                
                {/* Spreadsheet Data Rows */}
                <rect x="128" y="104" width="144" height="8" rx="1" fill="#FFFFFF" />
                <rect x="132" y="107" width="35" height="2" rx="1" fill="#0F172A" />
                <rect x="175" y="107" width="20" height="2" rx="1" fill="#2563EB" />
                <rect x="205" y="107" width="40" height="2" rx="1" fill="#64748B" />

                <rect x="128" y="115" width="144" height="8" rx="1" fill="#F1F5F9" />
                <rect x="132" y="118" width="45" height="2" rx="1" fill="#0F172A" />
                <rect x="185" y="118" width="15" height="2" rx="1" fill="#047857" />
                
                {/* Active Keycap Prompt on Screen */}
                <rect x="138" y="132" width="124" height="34" rx="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                <rect x="144" y="138" width="30" height="14" rx="3" fill="#0F172A" />
                <text x="148" y="148" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Ctrl</text>
                <text x="178" y="148" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold">+</text>
                <rect x="186" y="138" width="34" height="14" rx="3" fill="#0F172A" />
                <text x="190" y="148" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Shift</text>
                <text x="223" y="148" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold">+</text>
                <rect x="231" y="138" width="20" height="14" rx="3" fill="#2563EB" />
                <text x="237" y="148" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">L</text>
                <text x="156" y="160" fill="#0F172A" fontSize="7" fontFamily="sans-serif" fontWeight="bold">Auto Filter Active</text>

                {/* Laptop Keyboard & Trackpad */}
                <path d="M80 185 L320 185 L330 205 L70 205 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2.5" />
                <rect x="160" y="196" width="80" height="6" rx="2" fill="#CBD5E1" />

                {/* Coffee Mug */}
                <rect x="50" y="170" width="24" height="35" rx="4" fill="#2563EB" stroke="#0F172A" strokeWidth="2" />
                <path d="M50 178 C38 178 38 196 50 196" stroke="#0F172A" strokeWidth="2.5" fill="none" />
                <path d="M58 162 Q62 155 58 148" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M64 162 Q68 155 64 148" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Sticky Notes & Pen */}
                <rect x="305" y="160" width="45" height="45" rx="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" transform="rotate(8 305 160)" />
                <line x1="316" y1="172" x2="338" y2="175" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                <line x1="314" y1="180" x2="334" y2="183" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                <line x1="312" y1="188" x2="326" y2="190" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                
                {/* Floating Shortcut Badge */}
                <g transform="translate(40, 45)">
                  <rect width="96" height="28" rx="8" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
                  <text x="8" y="18" fill="#047857" fontSize="9.5" fontFamily="sans-serif" fontWeight="bold">⚡ Shortcut Praktis</text>
                </g>

                {/* Floating Key Badge Right */}
                <g transform="translate(285, 35)">
                  <rect width="86" height="28" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
                  <text x="10" y="18" fill="#1E40AF" fontSize="9.5" fontFamily="monospace" fontWeight="bold">Alt + Tab ⊞</text>
                </g>
              </svg>

              {/* Editorial bottom caption */}
              <div className="mt-3 text-center text-xs font-bold text-[#0F172A] bg-[#F1F5F9] py-2 px-3 rounded-xl border border-[#CBD5E1]">
                💡 Tips: Simpan halaman ini di bookmark browser dengan <span className="font-mono-key font-black text-[#2563EB]">Ctrl + D</span> (atau <span className="font-mono-key font-black text-[#2563EB]">⌘ + D</span>).
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
