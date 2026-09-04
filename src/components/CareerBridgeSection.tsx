import React from 'react';
import { careerPillars } from '../data/careerBridgeData';
import { 
  Compass, 
  Sparkles, 
  Award, 
  FolderGit2, 
  GraduationCap, 
  Target, 
  FileSpreadsheet,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface CareerBridgeSectionProps {
  onCopySuccess: (text: string) => void;
}

export const CareerBridgeSection: React.FC<CareerBridgeSectionProps> = ({
  onCopySuccess,
}) => {
  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#2563EB]" };
    switch (name) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Award': return <Award {...props} />;
      case 'FolderGit2': return <FolderGit2 {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Compass': return <Compass {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="karier-bridge" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#BFDBFE]">
              <Compass className="w-4 h-4 text-[#2563EB]" />
              <span>Catatan Progres Karier</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#2563EB] rounded-full inline-block shrink-0"></span>
              <span>Kerjaan Hari Ini, Karier Besok</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Selain ngerjain tugas harian, catat juga skill dan pencapaianmu secara berkala biar nggak nguap begitu aja pas evaluasi atau bikin CV.
            </p>
          </div>
        </div>

        {/* 6 Career Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {careerPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-6 shadow-xs hover:border-[#2563EB] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4">
                  {renderIcon(pillar.iconName)}
                </div>
                <h3 className="text-base font-black text-[#0F172A] group-hover:text-[#2563EB] mb-2 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] font-semibold leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3.5 border-t-2 border-[#F1F5F9] text-xs text-[#0F172A] font-bold bg-[#F8FAFC] p-2.5 rounded-xl">
                💡 <span className="text-[#2563EB] font-black">{pillar.actionPrompt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Companion Sheet Integration Card (Tasteful, soft nudge) */}
        <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-md uppercase tracking-wider mb-3 border border-[#6EE7B7]">
                <FileSpreadsheet className="w-4 h-4 text-[#047857]" />
                <span>Template Pendukung</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-2">
                Dokumentasikan Rekam Jejakmu di Google Sheets Karier
              </h3>
              <p className="text-sm text-[#334155] font-semibold leading-relaxed mb-5">
                Playbook ini fokus buat bantu kerjaan teknis harian. Buat nyatet progres jangka panjang seperti skill, proyek penting, dan pencapaian kerja, kamu bisa pakai template Google Sheets yang sudah disediakan di paket Ezplan.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0F172A] font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Jurnal pencapaian kuartalan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Pelacak skill gap & training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Daftar proyek & portfolio internal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Bahan diskusi 1-on-1 & performance review</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border-2 border-[#CBD5E1] text-center w-full max-w-xs shadow-xs">
                <FileSpreadsheet className="w-10 h-10 text-[#047857] mx-auto mb-3" />
                <div className="text-sm font-black text-[#0F172A] mb-1">
                  Bundling Template Karier
                </div>
                <p className="text-xs text-[#475569] font-semibold mb-4 leading-relaxed">
                  Akses langsung template Google Sheets yang sudah kamu dapatkan bersama playbook ini.
                </p>
                <a
                  href="https://lynk.id/ezplanid/kyqdyn048n62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-black rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Buka Template Sheets</span>
                  <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
