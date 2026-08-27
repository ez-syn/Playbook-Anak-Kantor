import React from 'react';
import { useKeycapTheme } from '../context/KeycapThemeContext';

interface KeycapProps {
  keys: string[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'auto' | 'light' | 'dark' | 'amber' | 'blue' | 'slate';
  className?: string;
  showSymbols?: boolean;
}

// Map key names to display symbols and formatted labels
const formatKeyDisplay = (key: string, showSymbols = true): { symbol?: string; label: string; isModifier: boolean } => {
  const trimmed = key.trim();
  
  if (!showSymbols) {
    return { label: trimmed, isModifier: false };
  }

  const lower = trimmed.toLowerCase();

  switch (lower) {
    case 'ctrl':
    case 'control':
      return { symbol: '⌃', label: 'Ctrl', isModifier: true };
    case 'cmd':
    case 'command':
    case '⌘':
      return { symbol: '⌘', label: 'Cmd', isModifier: true };
    case 'shift':
      return { symbol: '⇧', label: 'Shift', isModifier: true };
    case 'alt':
      return { symbol: '⌥', label: 'Alt', isModifier: true };
    case 'opt':
    case 'option':
      return { symbol: '⌥', label: 'Option', isModifier: true };
    case 'win':
    case 'windows':
      return { symbol: '⊞', label: 'Win', isModifier: true };
    case 'enter':
    case 'return':
      return { symbol: '↵', label: 'Enter', isModifier: true };
    case 'tab':
      return { symbol: '⇥', label: 'Tab', isModifier: true };
    case 'esc':
    case 'escape':
      return { symbol: '⎋', label: 'Esc', isModifier: true };
    case 'backspace':
      return { symbol: '⌫', label: 'Back', isModifier: true };
    case 'del':
    case 'delete':
      return { symbol: '⌦', label: 'Del', isModifier: true };
    case 'space':
      return { symbol: '␣', label: 'Space', isModifier: true };
    case 'caps':
    case 'capslock':
      return { symbol: '⇪', label: 'Caps', isModifier: true };
    case 'up':
    case 'arrowup':
      return { symbol: '↑', label: 'Up', isModifier: false };
    case 'down':
    case 'arrowdown':
      return { symbol: '↓', label: 'Down', isModifier: false };
    case 'left':
    case 'arrowleft':
      return { symbol: '←', label: 'Left', isModifier: false };
    case 'right':
    case 'arrowright':
      return { symbol: '→', label: 'Right', isModifier: false };
    default:
      return { 
        label: trimmed, 
        isModifier: trimmed.startsWith('F') && !isNaN(Number(trimmed.slice(1))) // F1-F12
      };
  }
};

export const Keycap: React.FC<KeycapProps> = ({
  keys,
  size = 'md',
  variant = 'auto',
  className = '',
  showSymbols = true
}) => {
  const { keycapTheme } = useKeycapTheme();

  // Determine actual theme style to apply
  const effectiveTheme = variant === 'auto' ? keycapTheme : (
    variant === 'dark' ? 'creator-dark' :
    variant === 'amber' ? 'cyber-amber' :
    variant === 'blue' ? 'royal-blue' :
    variant === 'light' ? 'mechanical-light' : 'creator-dark'
  );

  // Generous dimensions and 3D step-downs for clear video visibility
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 min-w-[34px] min-h-[34px] border-b-[3.5px] rounded-lg gap-1.5',
    md: 'text-xs sm:text-sm px-4 py-2 min-w-[42px] min-h-[40px] border-b-4 rounded-xl gap-2',
    lg: 'text-sm sm:text-base px-5 py-2.5 min-w-[50px] min-h-[46px] border-b-[5px] rounded-xl gap-2.5',
    xl: 'text-base sm:text-lg px-6 py-3 min-w-[58px] min-h-[52px] border-b-[6px] rounded-2xl gap-3'
  };

  // Get theme styling
  const getThemeClasses = (isModifier: boolean) => {
    switch (effectiveTheme) {
      case 'creator-dark':
        return isModifier
          ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white border-2 border-[#475569] border-b-[#050914] shadow-md shadow-black/30 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.3)]'
          : 'bg-gradient-to-b from-[#334155] to-[#1E293B] text-white border-2 border-[#64748B] border-b-[#0F172A] shadow-md shadow-black/25 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.35)]';

      case 'cyber-amber':
        return isModifier
          ? 'bg-gradient-to-b from-[#F59E0B] to-[#D97706] text-black border-2 border-[#FCD34D] border-b-[#78350F] shadow-md shadow-amber-500/25 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.8)]'
          : 'bg-gradient-to-b from-[#FEF3C7] to-[#FDE68A] text-[#78350F] border-2 border-[#F59E0B] border-b-[#B45309] shadow-md shadow-amber-500/15 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9)]';

      case 'royal-blue':
        return isModifier
          ? 'bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white border-2 border-[#60A5FA] border-b-[#1E3A8A] shadow-md shadow-blue-600/30 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4)]'
          : 'bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE] text-[#1E40AF] border-2 border-[#3B82F6] border-b-[#1D4ED8] shadow-md shadow-blue-500/20 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9)]';

      case 'mechanical-light':
      default:
        return isModifier
          ? 'bg-gradient-to-b from-[#FFFFFF] to-[#F1F5F9] text-[#0F172A] border-2 border-[#94A3B8] border-b-[#475569] shadow-md shadow-slate-900/15 shadow-[inset_0_2px_0_rgba(255,255,255,1)]'
          : 'bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] text-[#0F172A] border-2 border-[#CBD5E1] border-b-[#64748B] shadow-md shadow-slate-900/10 shadow-[inset_0_2px_0_rgba(255,255,255,1)]';
    }
  };

  return (
    <div className={`inline-flex items-center flex-wrap gap-1.5 sm:gap-2 ${className}`}>
      {keys.map((key, index) => {
        const isSeparator = key === '+' || key === '→' || key === '/' || key === 'lalu';
        
        if (isSeparator) {
          return (
            <span
              key={index}
              className="text-[#64748B] font-black text-xs sm:text-sm px-0.5 select-none flex items-center justify-center opacity-70 shrink-0"
            >
              {key}
            </span>
          );
        }

        const { symbol, label, isModifier } = formatKeyDisplay(key, showSymbols);

        return (
          <kbd
            key={index}
            className={`font-mono-key font-black inline-flex items-center justify-center text-center transition-all cursor-default select-all tracking-tight whitespace-nowrap shrink-0 active:translate-y-[2px] active:border-b-[2px] ${sizeClasses[size]} ${getThemeClasses(isModifier)}`}
          >
            {symbol && (
              <span className={`font-sans text-sm sm:text-base leading-none font-bold ${
                effectiveTheme === 'creator-dark' ? 'text-[#93C5FD]' :
                effectiveTheme === 'cyber-amber' ? 'text-black opacity-85' :
                effectiveTheme === 'royal-blue' ? 'text-white' :
                'text-[#2563EB]'
              }`}>
                {symbol}
              </span>
            )}
            <span className="leading-none">{label}</span>
          </kbd>
        );
      })}
    </div>
  );
};


