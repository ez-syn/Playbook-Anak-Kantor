import React, { useState } from 'react';
import { meetingSurvivalData } from '../data/meetingSurvivalData';
import { Keycap } from './Keycap';
import { Platform } from '../types';
import { 
  Video, 
  CheckSquare, 
  Square, 
  Clock, 
  Mic, 
  Share2, 
  Hand, 
  PhoneOff, 
  Sparkles,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface MeetingSurvivalSectionProps {
  platform: Platform;
  onCopySuccess: (text: string) => void;
}

export const MeetingSurvivalSection: React.FC<MeetingSurvivalSectionProps> = ({
  platform,
  onCopySuccess,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activePhase, setActivePhase] = useState<'sebelum' | 'saat' | 'setelah'>('sebelum');

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentPhaseData = meetingSurvivalData.find(g => g.phase === activePhase) || meetingSurvivalData[0];

  const meetingShortcuts = [
    {
      tool: 'Microsoft Teams',
      mute: platform === 'mac' ? ['⌘', 'Shift', 'M'] : ['Ctrl', 'Shift', 'M'],
      camera: platform === 'mac' ? ['⌘', 'Shift', 'O'] : ['Ctrl', 'Shift', 'O'],
      hand: platform === 'mac' ? ['⌘', 'Shift', 'K'] : ['Ctrl', 'Shift', 'K'],
    },
    {
      tool: 'Google Meet',
      mute: platform === 'mac' ? ['⌘', 'D'] : ['Ctrl', 'D'],
      camera: platform === 'mac' ? ['⌘', 'E'] : ['Ctrl', 'E'],
      hand: platform === 'mac' ? ['⌘', 'Ctrl', 'H'] : ['Ctrl', 'Alt', 'H'],
    },
    {
      tool: 'Zoom',
      mute: platform === 'mac' ? ['⌘', 'Shift', 'A'] : ['Alt', 'A'],
      camera: platform === 'mac' ? ['⌘', 'Shift', 'V'] : ['Alt', 'V'],
      hand: platform === 'mac' ? ['Option', 'Y'] : ['Alt', 'Y'],
    }
  ];

  return (
    <section id="meeting-kit" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#BFDBFE]">
              <Video className="w-4 h-4 text-[#2563EB]" />
              <span>Persiapan & Trik Rapat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#2563EB] rounded-full inline-block shrink-0"></span>
              <span>Meeting Survival Kit</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Panduan ringkas sebelum, saat, dan sesudah meeting: persiapan aman sebelum share screen, shortcut penting, dan format notulen (MoM) yang to-the-point.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-black text-[#0F172A] bg-white px-4 py-2.5 rounded-xl border-2 border-[#CBD5E1] shadow-xs">
              💡 Centang checklist saat sedang bersiap
            </span>
          </div>
        </div>

        {/* Phase Switcher Tabs */}
        <div className="grid grid-cols-3 gap-3 mb-6 bg-white p-2 rounded-2xl border-2 border-[#CBD5E1] shadow-sm">
          {meetingSurvivalData.map((group) => {
            const isSelected = activePhase === group.phase;
            return (
              <button
                key={group.id}
                onClick={() => setActivePhase(group.phase)}
                className={`py-3 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-black transition-all text-center ${
                  isSelected
                    ? 'bg-[#1E293B] text-white shadow-sm'
                    : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                }`}
              >
                <div className="truncate text-sm font-black">{group.phaseTitle}</div>
                <div className={`text-xs font-bold hidden sm:block truncate mt-0.5 ${
                  isSelected ? 'text-[#93C5FD]' : 'text-[#64748B]'
                }`}>
                  {group.phase === 'sebelum' ? 'Persiapan 10 menit' : group.phase === 'saat' ? 'Fokus keputusan' : 'Notulen & Follow-up'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Phase Active Content Box */}
        <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-7 shadow-md mb-8">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
              {currentPhaseData.phaseTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] font-semibold mt-1">
              {currentPhaseData.phaseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPhaseData.items.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-[#D1FAE5]/60 border-[#10B981]'
                      : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] border-[#CBD5E1]'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-[#047857]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#475569]" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-sm sm:text-base font-black leading-snug ${
                      isChecked ? 'line-through text-[#64748B]' : 'text-[#0F172A]'
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#334155] font-semibold mt-1 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-2.5 text-xs font-bold text-[#0F172A] bg-white p-2.5 rounded-xl border border-[#CBD5E1] flex items-start gap-1.5 shadow-xs">
                      <span className="shrink-0 font-black text-[#2563EB]">👉</span>
                      <span>{item.actionableTip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Meeting Keybinds Cheat Sheet */}
        <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-7 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-2">
            <div className="flex items-center gap-2">
              <Mic className="w-5 h-5 text-[#2563EB]" />
              <h3 className="text-base sm:text-lg font-black text-[#0F172A] uppercase tracking-wider">
                Cheat Sheet Shortcut Suara & Video Meeting
              </h3>
            </div>
            <span className="text-xs font-black text-[#0F172A] bg-[#EFF6FF] px-3 py-1 rounded-lg border border-[#BFDBFE] font-mono">
              Layout: {platform === 'mac' ? 'macOS ' : 'Windows ⊞'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {meetingShortcuts.map((m) => (
              <div key={m.tool} className="bg-[#F8FAFC] p-5 rounded-2xl border-2 border-[#CBD5E1]">
                <h4 className="text-base font-black text-[#0F172A] mb-4 pb-2.5 border-b-2 border-[#E2E8F0]">
                  {m.tool}
                </h4>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#334155] font-bold">Mute / Unmute:</span>
                    <Keycap keys={m.mute} size="sm" variant="auto" />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#334155] font-bold">Kamera On/Off:</span>
                    <Keycap keys={m.camera} size="sm" variant="auto" />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#334155] font-bold">Raise Hand:</span>
                    <Keycap keys={m.hand} size="sm" variant="auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 bg-[#FEF3C7] rounded-2xl border-2 border-[#FCD34D] text-xs sm:text-sm text-[#92400E] flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#D97706] shrink-0" />
            <span className="leading-relaxed">
              <strong className="font-black text-[#78350F]">Trik Emas Zoom:</strong> Kamu bisa tekan dan tahan <strong className="font-black text-[#78350F]">Spacebar</strong> (Spasi) di keyboard untuk bicara sementara (Push-to-Talk) tanpa perlu klik tombol unmute.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
