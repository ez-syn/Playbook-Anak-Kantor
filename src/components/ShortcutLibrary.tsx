import React, { useState, useMemo } from 'react';
import { shortcutsData } from '../data/shortcutsData';
import { Platform, AppFilter, TagFilter, ShortcutItem } from '../types';
import { Keycap } from './Keycap';
import { 
  Search, 
  Filter, 
  Copy, 
  SlidersHorizontal,
  LayoutGrid,
  List,
  Sparkles,
  Award,
  Layers
} from 'lucide-react';

interface ShortcutLibraryProps {
  platform: Platform;
  setPlatform: (p: Platform) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onCopySuccess: (text: string) => void;
}

export const ShortcutLibrary: React.FC<ShortcutLibraryProps> = ({
  platform,
  setPlatform,
  searchQuery,
  setSearchQuery,
  onCopySuccess,
}) => {
  const [selectedApp, setSelectedApp] = useState<AppFilter>('all');
  const [selectedTag, setSelectedTag] = useState<TagFilter>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const appOptions: { id: AppFilter; label: string }[] = [
    { id: 'all', label: 'Semua Aplikasi' },
    { id: 'excel', label: 'Excel' },
    { id: 'word', label: 'Word' },
    { id: 'powerpoint', label: 'PowerPoint' },
    { id: 'browser', label: 'Chrome / Edge' },
    { id: 'file', label: 'File Explorer / Finder' },
    { id: 'sheets', label: 'Google Workspace' },
    { id: 'email', label: 'Outlook / Gmail' },
    { id: 'meeting', label: 'Teams / Meet / Zoom' },
    { id: 'os', label: 'Windows & Mac OS' },
  ];

  const tagOptions: { id: TagFilter; label: string }[] = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'wajib-hafal', label: '⭐ Wajib Hafal' },
    { id: 'sering-dipakai', label: '🔥 Sering Dipakai' },
    { id: 'produktivitas', label: '⚡ Produktivitas' },
    { id: 'editing', label: '✍️ Editing' },
    { id: 'navigasi', label: '🧭 Navigasi' },
    { id: 'formula', label: '📐 Formula / Rumus' },
  ];

  // Filtering Logic with comprehensive search matching
  const filteredShortcuts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return shortcutsData.filter((item) => {
      // 1. Platform Filter
      if (platform !== 'all') {
        if (item.platform !== 'both' && item.platform !== platform) {
          return false;
        }
      }

      // 2. App Filter
      if (selectedApp !== 'all') {
        const appLower = item.app.toLowerCase();
        if (selectedApp === 'excel' && !appLower.includes('excel')) return false;
        if (selectedApp === 'word' && !appLower.includes('word')) return false;
        if (selectedApp === 'powerpoint' && !appLower.includes('powerpoint') && !appLower.includes('slides')) return false;
        if (selectedApp === 'browser' && !appLower.includes('chrome') && !appLower.includes('edge') && !appLower.includes('browser') && !appLower.includes('safari')) return false;
        if (selectedApp === 'file' && !appLower.includes('finder') && !appLower.includes('explorer') && !appLower.includes('file')) return false;
        if (selectedApp === 'sheets' && !appLower.includes('sheets') && !appLower.includes('docs') && !appLower.includes('google')) return false;
        if (selectedApp === 'email' && !appLower.includes('outlook') && !appLower.includes('gmail') && !appLower.includes('mail')) return false;
        if (selectedApp === 'meeting' && !appLower.includes('teams') && !appLower.includes('meet') && !appLower.includes('zoom')) return false;
        if (selectedApp === 'os' && !appLower.includes('windows') && !appLower.includes('mac') && !appLower.includes('sistem')) return false;
      }

      // 3. Tag Filter
      if (selectedTag !== 'all') {
        if (selectedTag === 'wajib-hafal' && !item.isWajibHafal) return false;
        if (selectedTag === 'sering-dipakai' && item.tag !== 'Sering Dipakai') return false;
        if (selectedTag === 'produktivitas' && item.tag !== 'Produktivitas') return false;
        if (selectedTag === 'editing' && item.tag !== 'Editing') return false;
        if (selectedTag === 'navigasi' && item.tag !== 'Navigasi') return false;
        if (selectedTag === 'formula' && item.tag !== 'Formula') return false;
      }

      // 4. Query Matching (Name, App, Description, Tips, Synonyms, Keys)
      if (q) {
        const matchName = item.name.toLowerCase().includes(q);
        const matchApp = item.app.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchTips = item.tips ? item.tips.toLowerCase().includes(q) : false;
        const matchSynonyms = item.synonyms ? item.synonyms.some(s => s.toLowerCase().includes(q)) : false;
        
        const winKeysStr = item.keysWindows ? item.keysWindows.join(' ').toLowerCase() : '';
        const macKeysStr = item.keysMac ? item.keysMac.join(' ').toLowerCase() : '';
        const keysStr = item.keys ? item.keys.join(' ').toLowerCase() : '';
        const matchKeys = winKeysStr.includes(q) || macKeysStr.includes(q) || keysStr.includes(q);

        return matchName || matchApp || matchCategory || matchDesc || matchTips || matchSynonyms || matchKeys;
      }

      return true;
    });
  }, [platform, selectedApp, selectedTag, searchQuery]);

  const getKeys = (item: ShortcutItem) => {
    if (platform === 'mac' && item.keysMac) {
      return item.keysMac;
    }
    if (platform === 'windows' && item.keysWindows) {
      return item.keysWindows;
    }
    return item.keysWindows || item.keysMac || item.keys || [];
  };

  const handleCopy = (item: ShortcutItem) => {
    const keys = getKeys(item);
    const text = `${item.name} (${item.app}): ${keys.join(' + ')}`;
    navigator.clipboard.writeText(text);
    onCopySuccess(`Shortcut ${item.name} (${keys.join(' + ')}) disalin!`);
  };

  return (
    <section id="shortcut-library" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#BFDBFE]">
              <Layers className="w-4 h-4 text-[#2563EB]" />
              <span>Database Lengkap & Terverifikasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#2563EB] rounded-full inline-block shrink-0"></span>
              <span>Pustaka Shortcut Kerja</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Cari dan filter berdasarkan aplikasi, platform OS, atau aktivitas. Dilengkapi sinonim pencarian cerdas.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-[#F1F5F9] rounded-xl border border-[#CBD5E1]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
                title="Tampilan Grid Card"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'table' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
                title="Tampilan Tabel Ringkas"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs font-black text-[#0F172A] bg-white px-4 py-2.5 rounded-xl border-2 border-[#CBD5E1] shadow-xs">
              <span>{filteredShortcuts.length} Shortcut Terdaftar</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#CBD5E1] shadow-sm mb-8 space-y-4">
          
          {/* Top Row: Search Input + Platform Quick Switch */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#475569] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari shortcut, nama menu, kata kunci (misal: freeze row, split screen, screenshot)..."
                className="w-full pl-11 pr-16 py-3 bg-[#F8FAFC] rounded-xl border-2 border-[#CBD5E1] text-sm font-bold text-[#0F172A] placeholder:text-[#64748B] focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#BFDBFE] focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-2 py-1 rounded-md border border-[#BFDBFE]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Platform pills */}
            <div className="flex items-center bg-[#F1F5F9] p-1 rounded-xl border border-[#CBD5E1] shrink-0 text-xs font-bold">
              <button
                onClick={() => setPlatform('windows')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  platform === 'windows' ? 'bg-[#0F172A] text-white shadow-xs font-black' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                Windows ⊞
              </button>
              <button
                onClick={() => setPlatform('mac')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  platform === 'mac' ? 'bg-[#0F172A] text-white shadow-xs font-black' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                macOS 
              </button>
              <button
                onClick={() => setPlatform('all')}
                className={`px-3.5 py-2 rounded-lg transition-all ${
                  platform === 'all' ? 'bg-[#0F172A] text-white shadow-xs font-black' : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                Semua OS
              </button>
            </div>
          </div>

          {/* Middle Row: App Pills Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs custom-scrollbar">
            <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider mr-1 shrink-0">
              Aplikasi:
            </span>
            {appOptions.map((app) => (
              <button
                key={app.id}
                id={`filter-app-${app.id}`}
                onClick={() => setSelectedApp(app.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all text-xs ${
                  selectedApp === app.id
                    ? 'bg-[#1E293B] text-white font-black shadow-xs'
                    : 'bg-white text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] border-2 border-[#CBD5E1]'
                }`}
              >
                {app.label}
              </button>
            ))}
          </div>

          {/* Bottom Row: Tag Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs pt-3 border-t-2 border-[#F1F5F9] custom-scrollbar">
            <span className="text-xs font-black text-[#0F172A] uppercase tracking-wider mr-1 shrink-0">
              Kategori:
            </span>
            {tagOptions.map((tag) => (
              <button
                key={tag.id}
                id={`filter-tag-${tag.id}`}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all text-xs ${
                  selectedTag === tag.id
                    ? 'bg-[#2563EB] text-white font-black shadow-xs'
                    : 'bg-[#F8FAFC] text-[#334155] hover:text-[#0F172A] hover:bg-[#EFF6FF] border border-[#CBD5E1]'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

        </div>

        {/* Empty State */}
        {filteredShortcuts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-[#CBD5E1] p-8 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mx-auto mb-3 border border-[#BFDBFE]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-[#0F172A] mb-1">
              Shortcut tidak ditemukan
            </h3>
            <p className="text-sm font-semibold text-[#475569] max-w-sm mx-auto mb-5">
              Coba gunakan kata kunci umum seperti "paste", "screenshot", "filter", atau reset filter pilihan.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedApp('all');
                setSelectedTag('all');
                setPlatform('all');
              }}
              className="text-xs font-black text-white bg-[#0F172A] hover:bg-[#1E293B] px-5 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && filteredShortcuts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredShortcuts.map((item) => {
              const keys = getKeys(item);
              return (
                <div
                  key={item.id}
                  id={`shortcut-item-${item.id}`}
                  className="bg-white rounded-2xl border-2 border-[#CBD5E1] hover:border-[#2563EB] p-5 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: App + Category + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-2.5 py-0.5 rounded-md border border-[#BFDBFE]">
                          {item.app}
                        </span>
                        <span className="text-xs font-bold text-[#475569]">
                          {item.category}
                        </span>
                      </div>

                      {item.isWajibHafal && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] shrink-0">
                          WAJIB HAFAL
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-base font-black text-[#0F172A] group-hover:text-[#1D4ED8] mb-1.5 leading-snug transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#334155] font-semibold leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer: Keycaps & Action */}
                  <div className="pt-3 border-t-2 border-[#F1F5F9]">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <Keycap keys={keys} size="sm" variant="auto" />
                      </div>
                      
                      <button
                        onClick={() => handleCopy(item)}
                        className="p-2.5 text-[#1E293B] bg-[#F8FAFC] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] hover:border-[#2563EB] border-2 border-[#CBD5E1] rounded-xl transition-all shrink-0 active:scale-95 shadow-xs"
                        title="Salin shortcut"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    {item.tips && (
                      <p className="text-xs font-bold text-[#475569] bg-[#F8FAFC] p-2 rounded-lg mt-3 pt-2 border-t border-dashed border-[#CBD5E1] leading-relaxed">
                        💡 <span className="text-[#0F172A] font-extrabold">{item.tips}</span>
                      </p>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Table / List View */}
        {viewMode === 'table' && filteredShortcuts.length > 0 && (
          <div className="bg-white rounded-2xl border-2 border-[#CBD5E1] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#1E293B] text-white font-black text-xs">
                    <th className="py-3.5 px-4">Fungsi / Nama</th>
                    <th className="py-3.5 px-4">Aplikasi</th>
                    <th className="py-3.5 px-4">Kombinasi Shortcut</th>
                    <th className="py-3.5 px-4 hidden md:table-cell">Deskripsi & Trik</th>
                    <th className="py-3.5 px-3 text-center">Salin</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-[#F1F5F9]">
                  {filteredShortcuts.map((item) => {
                    const keys = getKeys(item);
                    return (
                      <tr key={item.id} className="hover:bg-[#EFF6FF]/50 transition-colors">
                        <td className="py-3.5 px-4 font-black text-[#0F172A]">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.name}</span>
                            {item.isWajibHafal && (
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]">
                                WAJIB
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="bg-[#EFF6FF] text-[#1E40AF] font-extrabold px-2.5 py-1 rounded-md border border-[#BFDBFE] text-xs">
                            {item.app}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <Keycap keys={keys} size="sm" variant="auto" />
                        </td>
                        <td className="py-3.5 px-4 text-[#334155] font-semibold hidden md:table-cell">
                          <div>{item.description}</div>
                          {item.tips && <div className="text-xs text-[#0F172A] font-bold mt-1">💡 {item.tips}</div>}
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={() => handleCopy(item)}
                            className="p-1.5 text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg"
                            title="Copy shortcut"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
