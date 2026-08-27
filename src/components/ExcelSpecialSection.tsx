import React, { useState } from 'react';
import { shortcutsData } from '../data/shortcutsData';
import { Platform } from '../types';
import { Keycap } from './Keycap';
import { 
  Table, 
  Sparkles, 
  Copy, 
  HelpCircle, 
  Check, 
  Layers, 
  Calculator,
  ArrowRight
} from 'lucide-react';

interface ExcelSpecialSectionProps {
  platform: Platform;
  setPlatform: (p: Platform) => void;
  onCopySuccess: (text: string) => void;
}

export const ExcelSpecialSection: React.FC<ExcelSpecialSectionProps> = ({
  platform,
  setPlatform,
  onCopySuccess,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const excelShortcuts = shortcutsData.filter(item => 
    item.app.toLowerCase().includes('excel') || item.app.toLowerCase().includes('sheets')
  );

  const categories = [
    { id: 'all', label: 'Semua Formula & Shortcut' },
    { id: 'Formula', label: '📐 Formula & Hitungan' },
    { id: 'Navigation', label: '🧭 Navigasi & Lompat Cell' },
    { id: 'Row & Column', label: '📊 Baris & Kolom (Row/Col)' },
    { id: 'Formatting', label: '🎨 Format Angka & Teks' },
    { id: 'Editing', label: '✏️ Edit & Duplikasi Rumus' },
    { id: 'Data', label: '🗂️ Filter, Pivot & Validasi' },
    { id: 'Selection', label: '🔍 Blok Data Cepat' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? excelShortcuts 
    : excelShortcuts.filter(item => item.category === activeCategory);

  const getKeys = (item: typeof excelShortcuts[0]) => {
    if (platform === 'mac' && item.keysMac) return item.keysMac;
    if (platform === 'windows' && item.keysWindows) return item.keysWindows;
    return item.keysWindows || item.keysMac || item.keys || [];
  };

  const handleCopy = (item: typeof excelShortcuts[0]) => {
    const keys = getKeys(item);
    const text = `Excel Shortcut - ${item.name}: ${keys.join(' + ')}`;
    navigator.clipboard.writeText(text);
    onCopySuccess(`Shortcut Excel (${item.name}) berhasil disalin!`);
  };

  return (
    <section id="excel-khusus" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#6EE7B7]">
              <Table className="w-4 h-4 text-[#047857]" />
              <span>Paling Sering Dipakai di Kantor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#047857] rounded-full inline-block shrink-0"></span>
              <span>Excel & Spreadsheet Master Guide</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Cheat sheet lengkap untuk olah data tanpa mouse. Dari rumus AutoSum, kunci formula F4, filter instan, hingga navigasi ribuan baris data.
            </p>
          </div>

          {/* Quick Platform Switcher */}
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs font-bold text-[#475569]">Layout Keyboard:</span>
            <div className="flex p-1 bg-white rounded-xl border-2 border-[#CBD5E1] text-xs font-bold shadow-xs">
              <button
                onClick={() => setPlatform('windows')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  platform === 'windows' ? 'bg-[#1E293B] text-white shadow-xs font-black' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                Windows (Ctrl)
              </button>
              <button
                onClick={() => setPlatform('mac')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  platform === 'mac' ? 'bg-[#1E293B] text-white shadow-xs font-black' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                Mac (⌘)
              </button>
            </div>
          </div>
        </div>

        {/* Top 3 Excel Super Tricks Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#CBD5E1] hover:border-[#047857] shadow-sm transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[#047857] uppercase tracking-wider bg-[#D1FAE5] px-2.5 py-0.5 rounded-md border border-[#6EE7B7]">Trik Rumus #1</span>
              <span className="text-xs bg-[#1E293B] text-white font-black px-2.5 py-0.5 rounded-md">F4 / Dollar</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-[#0F172A] mb-1.5">
              Kunci Rumus Absolut ($A$1)
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] font-semibold mb-4 leading-relaxed">
              Saat bikin rumus VLOOKUP atau perkalian target, tekan tombol ini untuk mengunci cell referensi agar tidak bergeser saat ditarik ke bawah.
            </p>
            <div className="pt-3 border-t-2 border-[#F1F5F9]">
              <Keycap keys={platform === 'mac' ? ['⌘', 'T', '(atau Fn + F4)'] : ['F4']} size="sm" variant="auto" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#CBD5E1] hover:border-[#047857] shadow-sm transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[#047857] uppercase tracking-wider bg-[#D1FAE5] px-2.5 py-0.5 rounded-md border border-[#6EE7B7]">Trik Rumus #2</span>
              <span className="text-xs bg-[#1E293B] text-white font-black px-2.5 py-0.5 rounded-md">AutoSum</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-[#0F172A] mb-1.5">
              Jumlahkan Seluruh Angka Otomatis
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] font-semibold mb-4 leading-relaxed">
              Nggak perlu ketik =SUM(A1:A50) manual. Cukup klik cell paling bawah dari deretan angka, lalu tekan kombinasi ini.
            </p>
            <div className="pt-3 border-t-2 border-[#F1F5F9]">
              <Keycap keys={platform === 'mac' ? ['⌘', 'Shift', 'T'] : ['Alt', '=']} size="sm" variant="auto" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#CBD5E1] hover:border-[#047857] shadow-sm transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-[#047857] uppercase tracking-wider bg-[#D1FAE5] px-2.5 py-0.5 rounded-md border border-[#6EE7B7]">Trik Rumus #3</span>
              <span className="text-xs bg-[#1E293B] text-white font-black px-2.5 py-0.5 rounded-md">Flash Fill</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-[#0F172A] mb-1.5">
              Pisah Teks Tanpa Rumus (Flash Fill)
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] font-semibold mb-4 leading-relaxed">
              Ketik 1 contoh nama depan di kolom samping, pindah ke baris kedua lalu tekan shortcut ini untuk mengisi 1.000 baris otomatis.
            </p>
            <div className="pt-3 border-t-2 border-[#F1F5F9]">
              <Keycap keys={platform === 'mac' ? ['Menu Data > Flash Fill'] : ['Ctrl', 'E']} size="sm" variant="auto" />
            </div>
          </div>

        </div>

        {/* Category Filter Horizontal Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1E293B] text-white shadow-xs'
                  : 'bg-white text-[#334155] hover:text-[#0F172A] hover:bg-[#E2E8F0] border-2 border-[#CBD5E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Excel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const keys = getKeys(item);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-2 border-[#CBD5E1] hover:border-[#047857] p-5 sm:p-6 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-black uppercase text-[#047857] bg-[#D1FAE5] px-2.5 py-0.5 rounded-md border border-[#6EE7B7]">
                      {item.category}
                    </span>
                    {item.isWajibHafal && (
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]">
                        WAJIB HAFAL
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-black text-[#0F172A] group-hover:text-[#047857] mb-1.5 leading-snug transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] font-semibold leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-[#F1F5F9]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <Keycap keys={keys} size="sm" variant="auto" />
                    </div>
                    <button
                      onClick={() => handleCopy(item)}
                      className="p-2.5 text-[#1E293B] bg-[#F8FAFC] hover:text-[#047857] hover:bg-[#D1FAE5] hover:border-[#047857] border-2 border-[#CBD5E1] rounded-xl transition-all shrink-0 active:scale-95 shadow-xs"
                      title="Copy shortcut"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {item.tips && (
                    <div className="mt-3 text-xs font-bold text-[#475569] bg-[#F8FAFC] p-2 rounded-lg leading-relaxed pt-2 border-t border-dashed border-[#CBD5E1]">
                      💡 <span className="text-[#0F172A] font-extrabold">{item.tips}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
