import React, { useState } from 'react';
import { OfficeFormulaItem } from '../types';
import { OFFICE_FORMULAS_DATA } from '../data/formulasData';
import { 
  Calculator, 
  Search, 
  Copy, 
  Check, 
  Sparkles, 
  Lightbulb, 
  Layers, 
  FileSpreadsheet, 
  Table, 
  AlertTriangle,
  Flame,
  Filter,
  CheckCircle2,
  Code
} from 'lucide-react';

interface FormulaMasterSectionProps {
  onCopySuccess: (msg: string) => void;
}

export const FormulaMasterSection: React.FC<FormulaMasterSectionProps> = ({ onCopySuccess }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'excel' | 'gsheets'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Rumus' },
    { id: 'lookup', label: 'Pencarian / Lookup' },
    { id: 'aggregation', label: 'Hitung & Total (SUM/COUNT)' },
    { id: 'logic', label: 'Logika & Anti-Error' },
    { id: 'text', label: 'Olah Teks & Cleaning' },
    { id: 'date', label: 'Tanggal & Masa Kerja' },
    { id: 'dynamic', label: 'Dinamis (UNIQUE/FILTER)' },
    { id: 'gsheets', label: 'Khusus Google Sheets (QUERY/IMPORT)' }
  ];

  const handleCopy = (formula: OfficeFormulaItem) => {
    navigator.clipboard.writeText(formula.formulaExample);
    setCopiedId(formula.id);
    onCopySuccess(`Rumus ${formula.name.split(' ')[0]} berhasil disalin ke clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFormulas = OFFICE_FORMULAS_DATA.filter((item) => {
    // Category filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    // Platform filter
    if (selectedPlatform === 'excel' && item.supportedIn === 'gsheets') {
      return false;
    }
    if (selectedPlatform === 'gsheets' && item.supportedIn === 'excel') {
      return false;
    }
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.purpose.toLowerCase().includes(q) ||
        item.formulaExample.toLowerCase().includes(q) ||
        item.sampleCase.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section id="formula-master-section" className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border-2 border-[#334155] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#34D399]/40 text-[#6EE7B7] text-xs font-black mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>MODUL 09 • FORMULA & SPREADSHEET MASTER</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3">
            Rumus Excel & Google Sheets Wajib Kantor
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] font-medium leading-relaxed mb-6">
            Kumpulan formula kerja nyata yang paling sering ditugaskan atasan untuk rekap data, olah laporan bulanan, pencarian data antar sheet, dan otomatisasi spreadsheet tanpa ribet.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold">
            <span className="bg-[#334155]/80 px-3 py-1.5 rounded-xl border border-[#475569] text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
              Formula Siap Copas
            </span>
            <span className="bg-[#334155]/80 px-3 py-1.5 rounded-xl border border-[#475569] text-white flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-[#60A5FA]" />
              Support Excel 365 & GSheets
            </span>
            <span className="bg-[#334155]/80 px-3 py-1.5 rounded-xl border border-[#475569] text-white flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#FBBF24]" />
              Dilengkapi Contoh Kasus Nyata
            </span>
          </div>
        </div>
      </div>

      {/* Quick Troubleshooting & Cheat Sheet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border-2 border-[#CBD5E1] shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black text-[#1D4ED8] uppercase tracking-wider mb-2">
            <Code className="w-4 h-4 text-[#2563EB]" />
            <span>Tips Pemisah Parameter</span>
          </div>
          <p className="text-xs text-[#334155] font-semibold leading-relaxed">
            Jika rumus kamu error saat dicopas, periksa pengaturan regional komputer. Jika format Indonesia/Eropa gunakan <strong>titik koma (;)</strong>, jika format US/English gunakan <strong>koma (,)</strong>.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#CBD5E1] shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black text-[#047857] uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4 text-[#10B981]" />
            <span>Kunci Sel Absolut ($)</span>
          </div>
          <p className="text-xs text-[#334155] font-semibold leading-relaxed">
            Tekan tombol <strong>F4</strong> (atau <strong>Fn + F4</strong> di laptop / Mac) untuk mengunci referensi tabel seperti <code>$A$2:$E$100</code> agar tidak bergeser saat ditarik (drag) ke bawah.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border-2 border-[#CBD5E1] shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black text-[#B45309] uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
            <span>Anti Error #N/A & #VALUE!</span>
          </div>
          <p className="text-xs text-[#334155] font-semibold leading-relaxed">
            Bungkus rumus pencarian atau pembagian dengan <code>=IFERROR(rumus_kamu, "-")</code> agar sel tetap rapi dan tidak menampilkan tulisan error merah saat presentasi ke manajer.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#CBD5E1] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama rumus atau kasus kerja (misal: 'xlookup', 'gaji', 'koma', 'query')..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] rounded-xl border-2 border-[#CBD5E1] text-xs sm:text-sm font-bold text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#2563EB] focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B] hover:text-[#0F172A]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Platform Filter Selector */}
          <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl border-2 border-[#CBD5E1] self-start sm:self-auto shrink-0">
            <button
              onClick={() => setSelectedPlatform('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedPlatform === 'all'
                  ? 'bg-white text-[#0F172A] shadow-xs border border-[#CBD5E1]'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Semua Apps
            </button>
            <button
              onClick={() => setSelectedPlatform('excel')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedPlatform === 'excel'
                  ? 'bg-[#047857] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Excel 365
            </button>
            <button
              onClick={() => setSelectedPlatform('gsheets')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedPlatform === 'gsheets'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              Google Sheets
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-black whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Formula Cards Grid */}
      <div className="space-y-5">
        <div className="flex items-center justify-between text-xs font-black text-[#64748B] px-1">
          <span>Menampilkan {filteredFormulas.length} Formula Pilihan</span>
          <span>Klik "Salin Rumus" untuk langsung tempel di sel spreadsheet</span>
        </div>

        {filteredFormulas.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-[#CBD5E1]">
            <Calculator className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
            <h3 className="text-base font-black text-[#0F172A] mb-1">Rumus tidak ditemukan</h3>
            <p className="text-xs text-[#64748B] font-semibold">Coba gunakan kata kunci pencarian lain atau pilih kategori Semua Rumus.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredFormulas.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border-2 border-[#CBD5E1] hover:border-[#2563EB] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Bar / Header */}
                  <div className="p-5 sm:p-6 pb-4">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div>
                        <div className="flex items-center flex-wrap gap-2 mb-1.5">
                          <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md ${
                            item.difficulty === 'Wajib Dasar' 
                              ? 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]' 
                              : item.difficulty === 'Menengah'
                              ? 'bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE]'
                              : 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]'
                          }`}>
                            {item.difficulty}
                          </span>

                          <span className="text-[10px] font-bold text-[#475569] bg-[#F1F5F9] px-2 py-0.5 rounded-md border border-[#E2E8F0]">
                            {item.categoryLabel}
                          </span>

                          {item.supportedIn === 'gsheets' && (
                            <span className="text-[10px] font-black text-[#1D4ED8] bg-[#DBEAFE] px-2 py-0.5 rounded-md">
                              Khusus GSheets
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                          {item.name}
                        </h3>
                      </div>

                      <button
                        onClick={() => handleCopy(item)}
                        className={`p-2.5 rounded-xl border-2 transition-all shrink-0 flex items-center gap-1.5 text-xs font-black ${
                          isCopied
                            ? 'bg-[#10B981] border-[#059669] text-white'
                            : 'bg-[#F8FAFC] border-[#CBD5E1] text-[#1E293B] hover:bg-[#EFF6FF] hover:text-[#1D4ED8] hover:border-[#2563EB] active:scale-95'
                        }`}
                        title="Salin contoh rumus"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span className="hidden sm:inline">Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="hidden sm:inline">Salin Rumus</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Purpose / Kapan harus pakai ini */}
                    <p className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-relaxed mb-4">
                      {item.purpose}
                    </p>

                    {/* Formula Ready-to-use Code Box */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-black text-[#64748B] uppercase tracking-wider flex items-center justify-between">
                        <span>Contoh Formula Siap Pakai:</span>
                        <span className="text-[#2563EB] font-bold">Copy & Paste ke Sel</span>
                      </div>
                      
                      <div className="p-3.5 rounded-2xl bg-[#0F172A] text-[#38BDF8] border-2 border-[#1E293B] font-mono text-xs sm:text-[13px] font-bold leading-relaxed break-all shadow-inner select-all">
                        {item.formulaExample}
                      </div>
                    </div>

                    {/* Syntax breakdown */}
                    <div className="mt-3 text-[11px] text-[#475569] font-medium bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0]">
                      <span className="font-bold text-[#0F172A]">Struktur Syntax: </span>
                      <code className="font-mono text-[#0F172A] font-semibold">{item.syntax}</code>
                    </div>

                    {/* Sample Case */}
                    <div className="mt-3.5 pt-3 border-t border-[#F1F5F9]">
                      <div className="flex items-start gap-2">
                        <span className="text-[11px] font-black text-[#1E40AF] bg-[#EFF6FF] px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                          Kasus Kantor:
                        </span>
                        <p className="text-xs text-[#334155] font-semibold">
                          {item.sampleCase}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pro Tip Footer Bar */}
                  <div className="bg-[#FFFBEB] px-5 py-3 border-t-2 border-[#FEF3C7] text-xs font-semibold text-[#92400E] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-black text-[#78350F]">Pro Tip: </span>
                      {item.proTip}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
