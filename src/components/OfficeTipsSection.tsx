import React, { useState } from 'react';
import { fileNamingGuide, officeTipsData } from '../data/officeTipsData';
import { 
  FolderTree, 
  XCircle, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Wand2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface OfficeTipsSectionProps {
  onCopySuccess: (text: string) => void;
}

export const OfficeTipsSection: React.FC<OfficeTipsSectionProps> = ({
  onCopySuccess,
}) => {
  // Interactive File Name Generator State
  const [dateInput, setDateInput] = useState<string>('2026-08');
  const [projectInput, setProjectInput] = useState<string>('Report-Kinerja');
  const [topicInput, setTopicInput] = useState<string>('Divisi-Marketing');
  const [versionInput, setVersionInput] = useState<string>('v01');
  const [extInput, setExtInput] = useState<string>('.xlsx');
  const [expandedTip, setExpandedTip] = useState<string | null>(officeTipsData[0].id);

  const cleanString = (str: string) => str.trim().replace(/\s+/g, '-');

  const generatedFileName = `${dateInput}_${cleanString(projectInput)}_${cleanString(topicInput)}_${versionInput}${extInput}`;

  const handleCopyFileName = () => {
    navigator.clipboard.writeText(generatedFileName);
    onCopySuccess(`Nama file "${generatedFileName}" berhasil disalin!`);
  };

  return (
    <section id="tips-kerja" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#BFDBFE]">
              <FolderTree className="w-4 h-4 text-[#2563EB]" />
              <span>Manajemen File & Kerja Praktis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#2563EB] rounded-full inline-block shrink-0"></span>
              <span>Biar Kerjaan Nggak Bikin Muter-Muter</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Biar file gampang dicari kapan pun dibutuhin: standar penamaan file yang rapi, susunan folder 3 level, dan cara nyatet to-do harian.
            </p>
          </div>
        </div>

        {/* Section 1: File Naming Guide (Salah vs Lebih Rapi) */}
        <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-7 shadow-md mb-10">
          <div className="flex items-center justify-between mb-6 border-b-2 border-[#F1F5F9] pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                Panduan Nama File: Hindari "final_final_fix_banget"
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] font-semibold mt-1">
                Standar nama file biar gampang dicari kapan saja tanpa bingung versi mana yang paling baru.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Box Contoh Salah */}
            <div className="bg-[#FEF2F2] rounded-2xl p-5 sm:p-6 border-2 border-[#FCA5A5]">
              <div className="flex items-center gap-2 mb-3 text-xs font-black text-[#991B1B] uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>SALAH (Bikin Pusing & Rawan Tertukar)</span>
              </div>
              <div className="space-y-2">
                {fileNamingGuide.badExample.map((bad, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-[#FCA5A5] font-mono text-xs sm:text-sm text-[#991B1B] font-bold flex items-center gap-2 shadow-2xs">
                    <span className="text-[#DC2626] font-black select-none">✕</span>
                    <span className="truncate">{bad}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box Contoh Lebih Rapi */}
            <div className="bg-[#ECFDF5] rounded-2xl p-5 sm:p-6 border-2 border-[#6EE7B7]">
              <div className="flex items-center gap-2 mb-3 text-xs font-black text-[#065F46] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>LEBIH RAPI (Kronologis, Bersih, Jelas Versinya)</span>
              </div>
              <div className="space-y-2">
                {fileNamingGuide.goodExample.map((good, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-[#6EE7B7] font-mono text-xs sm:text-sm text-[#065F46] font-bold flex items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[#059669] font-black select-none">✓</span>
                      <span className="truncate">{good}</span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(good);
                        onCopySuccess(`Format "${good}" disalin!`);
                      }}
                      className="text-[#065F46] hover:text-[#0F172A] hover:bg-[#D1FAE5] p-1.5 rounded-md transition-colors"
                      title="Salin contoh nama file"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 4 Aturan Baku */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 border-t-2 border-[#F1F5F9]">
            {fileNamingGuide.rules.map((rule, idx) => (
              <div key={idx} className="bg-[#F8FAFC] p-4.5 rounded-2xl border-2 border-[#CBD5E1]">
                <h4 className="text-xs sm:text-sm font-black text-[#0F172A] mb-1.5 leading-snug">
                  {rule.title}
                </h4>
                <p className="text-xs text-[#334155] font-semibold leading-relaxed mb-3">
                  {rule.explanation}
                </p>
                <div className="bg-white p-2 rounded-lg border border-[#CBD5E1] text-xs font-mono font-bold text-[#0F172A] truncate">
                  {rule.sample}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Tool: Instant File Name Formatter */}
          <div className="mt-8 bg-[#EFF6FF] rounded-2xl p-6 border-2 border-[#BFDBFE]">
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="w-5 h-5 text-[#2563EB]" />
              <h4 className="text-sm font-black text-[#1E40AF] uppercase tracking-wider">
                Generator Nama File Standar
              </h4>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
              <div>
                <label className="block text-xs font-black text-[#1E40AF] uppercase mb-1">Tanggal (YYYY-MM):</label>
                <input
                  type="text"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full bg-white border-2 border-[#BFDBFE] rounded-xl px-3 py-2 text-xs sm:text-sm font-mono font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  placeholder="2026-08"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#1E40AF] uppercase mb-1">Nama Proyek / Klien:</label>
                <input
                  type="text"
                  value={projectInput}
                  onChange={(e) => setProjectInput(e.target.value)}
                  className="w-full bg-white border-2 border-[#BFDBFE] rounded-xl px-3 py-2 text-xs sm:text-sm font-mono font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  placeholder="Report-Kinerja"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#1E40AF] uppercase mb-1">Topik / Divisi / PIC:</label>
                <input
                  type="text"
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  className="w-full bg-white border-2 border-[#BFDBFE] rounded-xl px-3 py-2 text-xs sm:text-sm font-mono font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  placeholder="Marketing"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#1E40AF] uppercase mb-1">Versi Dokumen:</label>
                <select
                  value={versionInput}
                  onChange={(e) => setVersionInput(e.target.value)}
                  className="w-full bg-white border-2 border-[#BFDBFE] rounded-xl px-3 py-2 text-xs sm:text-sm font-mono font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                >
                  <option value="v01">_v01 (Draf Awal)</option>
                  <option value="v02">_v02 (Revisi 1)</option>
                  <option value="v03">_v03 (Revisi 2)</option>
                  <option value="FINAL">_FINAL (Siap Kirim)</option>
                  <option value="Clean">_Clean (Data Bersih)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-[#1E40AF] uppercase mb-1">Ekstensi File:</label>
                <select
                  value={extInput}
                  onChange={(e) => setExtInput(e.target.value)}
                  className="w-full bg-white border-2 border-[#BFDBFE] rounded-xl px-3 py-2 text-xs sm:text-sm font-mono font-bold text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                >
                  <option value=".xlsx">.xlsx (Excel)</option>
                  <option value=".docx">.docx (Word)</option>
                  <option value=".pptx">.pptx (PowerPoint)</option>
                  <option value=".pdf">.pdf (PDF Dokumen)</option>
                  <option value=".png">.png (Gambar)</option>
                </select>
              </div>
            </div>

            {/* Generated Output */}
            <div className="bg-white p-4 rounded-2xl border-2 border-[#BFDBFE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="min-w-0">
                <span className="text-xs text-[#1E40AF] font-black block uppercase">Hasil Nama File Standar:</span>
                <span className="font-mono font-black text-sm sm:text-base text-[#0F172A] break-all">
                  {generatedFileName}
                </span>
              </div>
              <button
                onClick={handleCopyFileName}
                className="px-5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-black rounded-xl transition-all shadow-sm shrink-0 flex items-center gap-2"
              >
                <Copy className="w-4 h-4 text-[#38BDF8]" />
                <span>Salin Nama File</span>
              </button>
            </div>

          </div>

        </div>

        {/* Section 2: 6 Praktik Kerja Anti Muter-Muter */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-2">
            6 Trik Ringan Biar Nggak Boros Waktu di Kantor
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {officeTipsData.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl border-2 border-[#CBD5E1] p-6 shadow-xs hover:border-[#2563EB] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE]">
                    {tip.badge}
                  </span>
                </div>

                <h4 className="text-base font-black text-[#0F172A] mb-2">
                  {tip.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-[#334155] font-semibold mb-4 leading-relaxed">
                  {tip.summary}
                </p>

                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0F172A] space-y-2">
                  <span className="text-xs font-black uppercase text-[#475569] block mb-1">
                    Langkah Eksekusi:
                  </span>
                  {tip.practicalSteps.map((step, sIdx) => (
                    <div key={sIdx} className="text-xs sm:text-sm font-semibold text-[#334155] leading-relaxed flex items-start gap-2">
                      <span className="text-[#2563EB] font-black">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
