import React from 'react';
import { BookmarkCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="app-footer" className="bg-white border-t-2 border-[#CBD5E1] pt-12 pb-24 md:pb-12 text-[#334155] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-[#F1F5F9]">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shadow-xs">
              <BookmarkCheck className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div>
              <div className="font-black text-[#0F172A] text-base tracking-tight">
                PLAYBOOK ANAK KANTOR
              </div>
              <p className="text-xs text-[#475569] font-bold">
                Shortcut, trik kerja, dan bekal praktis biar kerjaan lebih sat-set.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-black text-[#0F172A]">
            <a href="#mau-ngapain" className="hover:text-[#2563EB] transition-colors">Mau Ngapain?</a>
            <a href="#shortcut-library" className="hover:text-[#2563EB] transition-colors">Shortcut Library</a>
            <a href="#excel-khusus" className="hover:text-[#2563EB] transition-colors">Excel Master</a>
            <a href="#bank-kalimat" className="hover:text-[#2563EB] transition-colors">Bank Kalimat</a>
            <a href="#tips-kerja" className="hover:text-[#2563EB] transition-colors">Tips File</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] border-2 border-[#CBD5E1] text-[#0F172A] transition-all flex items-center gap-1.5 shadow-2xs font-bold"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4 text-[#2563EB]" />
              <span className="hidden sm:inline">Ke Atas</span>
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] font-semibold">
          <p>
            © {new Date().getFullYear()} Playbook Anak Kantor. Dibuat untuk produktivitas harian pekerja kantor Indonesia.
          </p>
          <p className="bg-[#EFF6FF] text-[#1E40AF] px-3 py-1 rounded-md border border-[#BFDBFE] font-bold">
            Aplikasi statis ringan, aman, tanpa tracking pihak ketiga.
          </p>
        </div>
      </div>
    </footer>
  );
};
