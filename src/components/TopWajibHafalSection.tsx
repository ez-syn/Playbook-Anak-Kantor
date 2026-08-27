import React from 'react';
import { shortcutsData } from '../data/shortcutsData';
import { Platform } from '../types';
import { Keycap } from './Keycap';
import { Award, Copy, Check, Flame } from 'lucide-react';

interface TopWajibHafalSectionProps {
  platform: Platform;
  onCopySuccess: (text: string) => void;
}

export const TopWajibHafalSection: React.FC<TopWajibHafalSectionProps> = ({
  platform,
  onCopySuccess,
}) => {
  // Filter only items with isWajibHafal === true and top 20
  const topList = shortcutsData.filter(item => item.isWajibHafal).slice(0, 20);

  const getKeys = (item: typeof topList[0]) => {
    if (platform === 'mac' && item.keysMac) {
      return item.keysMac;
    }
    if (platform === 'windows' && item.keysWindows) {
      return item.keysWindows;
    }
    return item.keysWindows || item.keysMac || item.keys || [];
  };

  const handleCopy = (item: typeof topList[0]) => {
    const keys = getKeys(item);
    const text = `${item.name}: ${keys.join(' + ')}`;
    navigator.clipboard.writeText(text);
    onCopySuccess(`Shortcut ${item.name} (${keys.join(' + ')}) disalin!`);
  };

  return (
    <section id="wajib-hafal" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#B45309] bg-[#FEF3C7] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#FCD34D]">
              <Flame className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
              <span>Prioritas Tertinggi (Wajib Hafal)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#D97706] rounded-full inline-block shrink-0"></span>
              <span>20 Shortcut Wajib Hafal</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Kalau waktumu terbatas dan baru mau mulai menghafal, kuasai 20 kombinasi tombol ini dulu. Pekerjaan harian dijamin langsung terasa 2x lebih sat-set.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-4 py-2.5 rounded-xl shadow-xs">
              <Award className="w-4 h-4 text-[#2563EB]" />
              <span>20 Shortcut Esensial Terpilih</span>
            </span>
          </div>
        </div>

        {/* 20 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topList.map((item, index) => {
            const keys = getKeys(item);
            const isHighlight = index === 0 || index === 2;
            return (
              <div
                key={item.id}
                id={`wajib-hafal-card-${item.id}`}
                className="bg-white rounded-2xl border-2 border-[#CBD5E1] hover:border-[#1E40AF] p-5 sm:p-6 transition-all shadow-xs hover:shadow-md relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Top Corner Ribbon Badge */}
                <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-black uppercase rounded-bl-xl tracking-wider ${
                  isHighlight ? 'bg-[#D97706] text-white' : 'bg-[#0F172A] text-white'
                }`}>
                  Top {index + 1}
                </div>

                <div>
                  {/* Top Bar: Number + App Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-lg bg-[#0F172A] text-white text-xs font-black flex items-center justify-center font-mono shadow-xs">
                      {index + 1}
                    </span>
                    <span className="text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-2 py-0.5 rounded-md border border-[#BFDBFE] uppercase tracking-wide">
                      {item.app}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] group-hover:text-[#1D4ED8] leading-snug mb-1.5 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] font-semibold leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Bar: Keycaps + Copy Button */}
                <div className="pt-3.5 border-t-2 border-[#F1F5F9] flex items-center justify-between gap-2 mt-auto">
                  <div className="min-w-0">
                    <Keycap keys={keys} size="md" variant={isHighlight ? "amber" : "auto"} />
                  </div>

                  <button
                    onClick={() => handleCopy(item)}
                    className="p-2.5 rounded-xl text-[#1E293B] bg-[#F8FAFC] hover:bg-[#EFF6FF] hover:text-[#1D4ED8] hover:border-[#2563EB] border-2 border-[#CBD5E1] transition-all shrink-0 active:scale-95 shadow-xs"
                    title="Copy shortcut"
                    aria-label={`Copy shortcut ${item.name}`}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Micro Tip */}
                {item.tips && (
                  <div className="mt-3 pt-2.5 border-t border-dashed border-[#CBD5E1] text-xs font-bold text-[#475569] bg-[#F8FAFC] p-2 rounded-lg leading-relaxed">
                    💡 <span className="text-[#0F172A] font-extrabold">{item.tips}</span>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
