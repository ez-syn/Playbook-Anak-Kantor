import React, { useState } from 'react';
import { quickAccessActions } from '../data/quickAccessData';
import { Platform } from '../types';
import { Keycap } from './Keycap';
import { 
  HelpCircle,
  Copy,
  Camera,
  Layers,
  RotateCcw,
  Search,
  Activity,
  Lock,
  Edit3,
  Undo2,
  FileSearch,
  Columns2,
  XCircle,
  TableProperties,
  PlusSquare,
  Filter,
  Replace,
  Presentation,
  Mail,
  MicOff,
  ClipboardList,
  Sparkles
} from 'lucide-react';

interface MauNgapainSectionProps {
  platform: Platform;
  onSelectAction?: (actionName: string) => void;
  onCopySuccess: (text: string) => void;
}

export const MauNgapainSection: React.FC<MauNgapainSectionProps> = ({
  platform,
  onCopySuccess,
}) => {
  const [selectedActionId, setSelectedActionId] = useState<string>('screenshot');

  // Icon mapping with dynamic color support
  const renderIcon = (iconName: string, isSelected: boolean = false) => {
    const iconClass = `w-5 h-5 transition-colors ${isSelected ? 'text-white stroke-[2.5]' : 'text-[#1E293B] stroke-[2]'}`;
    const props = { className: iconClass };
    switch (iconName) {
      case 'Copy': return <Copy {...props} />;
      case 'Camera': return <Camera {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'RotateCcw': return <RotateCcw {...props} />;
      case 'Search': return <Search {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Edit3': return <Edit3 {...props} />;
      case 'Undo2': return <Undo2 {...props} />;
      case 'FileSearch': return <FileSearch {...props} />;
      case 'Columns2': return <Columns2 {...props} />;
      case 'XCircle': return <XCircle {...props} />;
      case 'TableProperties': return <TableProperties {...props} />;
      case 'PlusSquare': return <PlusSquare {...props} />;
      case 'Filter': return <Filter {...props} />;
      case 'Replace': return <Replace {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      case 'Mail': return <Mail {...props} />;
      case 'MicOff': return <MicOff {...props} />;
      case 'ClipboardList': return <ClipboardList {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const selectedAction = quickAccessActions.find(a => a.id === selectedActionId) || quickAccessActions[0];

  const getActiveKeys = (action: typeof quickAccessActions[0]) => {
    if (platform === 'mac') {
      return action.macShortcut;
    }
    return action.windowsShortcut;
  };

  return (
    <section id="mau-ngapain" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#BFDBFE]">
              <HelpCircle className="w-4 h-4 text-[#2563EB]" />
              <span>Cari Berdasarkan Aktivitas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#2563EB] rounded-full inline-block shrink-0"></span>
              <span>Mau Ngapain?</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-xl leading-relaxed">
              Nggak perlu ngafalin nama tombol. Pilih aja kegiatan yang mau kamu lakuin di bawah, shortcut-nya bakal langsung muncul.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-extrabold text-[#0F172A] bg-white border-2 border-[#CBD5E1] px-4 py-2.5 rounded-xl shadow-xs">
            <span className="text-[#475569]">Mode Keyboard:</span>
            <span className="font-black uppercase text-[#1E40AF]">
              {platform === 'mac' ? 'Mac ()' : platform === 'windows' ? 'Windows (⊞)' : 'Windows & Mac'}
            </span>
          </div>
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Interactive Activity Chips/Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[520px] overflow-y-auto pr-1 pb-2">
              {quickAccessActions.map((action) => {
                const isSelected = action.id === selectedActionId;
                return (
                  <button
                    key={action.id}
                    id={`mau-ngapain-${action.id}`}
                    onClick={() => setSelectedActionId(action.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border-2 text-left transition-all relative ${
                      isSelected
                        ? 'bg-[#EFF6FF] border-[#1D4ED8] shadow-sm ring-2 ring-[#BFDBFE]'
                        : 'bg-white hover:bg-[#F8FAFC] border-[#CBD5E1]'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isSelected ? 'bg-[#2563EB] text-white border-[#1D4ED8] shadow-xs' : 'bg-[#F1F5F9] text-[#1E293B] border-[#CBD5E1]'
                    }`}>
                      {renderIcon(action.iconName, isSelected)}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-xs sm:text-sm font-black truncate leading-tight ${
                        isSelected ? 'text-[#1D4ED8]' : 'text-[#0F172A]'
                      }`}>
                        {action.label}
                      </p>
                      <p className="text-xs font-bold text-[#475569] truncate mt-1">
                        {action.app}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Featured Card for Selected Activity */}
          <div className="lg:col-span-5">
            <div 
              id="mau-ngapain-preview-card"
              className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-7 shadow-md sticky top-24"
            >
              <div className="flex items-center justify-between border-b-2 border-[#F1F5F9] pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shadow-md border border-[#1D4ED8]">
                    {renderIcon(selectedAction.iconName, true)}
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-2.5 py-0.5 rounded-md border border-[#BFDBFE]">
                      {selectedAction.categoryTag} • {selectedAction.app}
                    </span>
                    <h3 className="text-xl font-black text-[#0F172A] mt-1.5">
                      {selectedAction.label}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#334155] font-semibold leading-relaxed mb-6">
                {selectedAction.description}
              </p>

              {/* Keycaps Windows vs Mac Display */}
              <div className="space-y-4 mb-6">
                
                {/* Windows Keycaps */}
                {(platform === 'windows' || platform === 'all') && (
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] shadow-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#0F172A] flex items-center gap-1.5 uppercase tracking-wider">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
                        <span>Windows Shortcut</span>
                      </span>
                      <button
                        onClick={() => {
                          const keysStr = selectedAction.windowsShortcut.join(' + ');
                          navigator.clipboard.writeText(keysStr);
                          onCopySuccess(`Shortcut Windows (${keysStr}) berhasil disalin!`);
                        }}
                        className="text-xs font-black text-[#1D4ED8] hover:text-[#1E40AF] bg-white px-2.5 py-1 rounded-lg border border-[#CBD5E1] shadow-2xs hover:bg-[#EFF6FF]"
                      >
                        Copy Shortcut
                      </button>
                    </div>
                    <div className="py-1">
                      <Keycap keys={selectedAction.windowsShortcut} size="lg" variant="auto" />
                    </div>
                  </div>
                )}

                {/* Mac Keycaps */}
                {(platform === 'mac' || platform === 'all') && (
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] shadow-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#0F172A] flex items-center gap-1.5 uppercase tracking-wider">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#475569]"></span>
                        <span>macOS (Apple) Shortcut</span>
                      </span>
                      <button
                        onClick={() => {
                          const keysStr = selectedAction.macShortcut.join(' + ');
                          navigator.clipboard.writeText(keysStr);
                          onCopySuccess(`Shortcut Mac (${keysStr}) berhasil disalin!`);
                        }}
                        className="text-xs font-black text-[#1D4ED8] hover:text-[#1E40AF] bg-white px-2.5 py-1 rounded-lg border border-[#CBD5E1] shadow-2xs hover:bg-[#EFF6FF]"
                      >
                        Copy Shortcut
                      </button>
                    </div>
                    <div className="py-1">
                      <Keycap keys={selectedAction.macShortcut} size="lg" variant="auto" />
                    </div>
                  </div>
                )}

              </div>

              {/* Pro Tip Callout */}
              {selectedAction.tips && (
                <div className="p-4 rounded-2xl bg-[#FEF3C7] border-2 border-[#FCD34D] text-xs sm:text-sm text-[#92400E]">
                  <div className="font-black flex items-center gap-1.5 mb-1 text-[#B45309]">
                    <Sparkles className="w-4 h-4 text-[#D97706]" />
                    <span>Trik Sat-Set:</span>
                  </div>
                  <p className="font-bold leading-relaxed">
                    {selectedAction.tips}
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
