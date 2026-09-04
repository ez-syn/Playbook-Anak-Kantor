import React from 'react';
import { Home, Flame, Zap, Layers, Grid } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'wajib-hafal', label: '20 Wajib', icon: Flame },
    { id: 'mau-ngapain', label: 'Aksi Cepat', icon: Zap },
    { id: 'shortcut-library', label: 'Pustaka', icon: Layers },
    { id: 'excel-khusus', label: 'Excel & More', icon: Grid },
  ];

  const handleNav = (id: string) => {
    setActiveSection(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="mobile-bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t-2 border-[#CBD5E1] px-2 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-5 gap-1.5 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all text-[11px] font-bold ${
                isActive
                  ? 'text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] font-black shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              <Icon className={`w-4 h-4 mb-1 ${isActive ? 'text-[#2563EB] stroke-[2.5]' : 'text-[#64748B]'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

