import React, { useState } from 'react';
import { bankKalimatData } from '../data/bankKalimatData';
import { BankKalimatItem } from '../types';
import { 
  MessageSquareText, 
  Copy, 
  Check, 
  Sparkles, 
  Send,
  Sliders,
  HelpCircle,
  Clock,
  ThumbsUp
} from 'lucide-react';

interface BankKalimatSectionProps {
  onCopySuccess: (text: string) => void;
}

export const BankKalimatSection: React.FC<BankKalimatSectionProps> = ({
  onCopySuccess,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('follow-up');
  const [tone, setTone] = useState<'formal' | 'semiFormal' | 'santaiProfesional'>('semiFormal');

  const currentItem = bankKalimatData.find(item => item.category === selectedCategory) || bankKalimatData[0];

  const getContent = () => {
    switch (tone) {
      case 'formal':
        return currentItem.formal;
      case 'santaiProfesional':
        return currentItem.santaiProfesional;
      case 'semiFormal':
      default:
        return currentItem.semiFormal;
    }
  };

  const currentContent = getContent();

  const handleCopyBody = () => {
    navigator.clipboard.writeText(currentContent.text);
    onCopySuccess(`Teks ${currentItem.categoryLabel} (${tone}) berhasil disalin ke clipboard!`);
  };

  const handleCopySubject = () => {
    if (currentContent.subject) {
      navigator.clipboard.writeText(currentContent.subject);
      onCopySuccess(`Subjek email "${currentContent.subject}" berhasil disalin!`);
    }
  };

  return (
    <section id="bank-kalimat" className="py-8 sm:py-12 border-b-2 border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#CBD5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#BFDBFE]">
              <MessageSquareText className="w-4 h-4 text-[#2563EB]" />
              <span>Template Chat & Email</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight flex items-center gap-2.5">
              <span className="w-3 h-8 bg-[#2563EB] rounded-full inline-block shrink-0"></span>
              <span>Bank Kalimat Kantor</span>
            </h2>
            <p className="text-base text-[#334155] font-semibold mt-2 max-w-2xl leading-relaxed">
              Butuh chat atasan, follow up vendor, atau izin telat tapi bingung nyusun kata-kata? Pilih situasinya, tentukan gayanya, lalu tinggal copy-paste & sesuaikan sedikit.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-black text-[#0F172A] bg-white px-4 py-2.5 rounded-xl border-2 border-[#CBD5E1] shadow-xs">
              12 Situasi Umum Kantor
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: 12 Category Buttons List */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-wider mb-3">
              Pilih Situasi:
            </h3>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 max-h-[520px] lg:overflow-y-auto pr-1 custom-scrollbar">
              {bankKalimatData.map((item) => {
                const isSelected = item.category === selectedCategory;
                return (
                  <button
                    key={item.id}
                    id={`bank-kalimat-${item.category}`}
                    onClick={() => setSelectedCategory(item.category)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-black transition-all shrink-0 lg:shrink w-auto lg:w-full ${
                      isSelected
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                        : 'bg-white text-[#0F172A] hover:bg-[#EFF6FF] border-[#CBD5E1]'
                    }`}
                  >
                    <span>{item.categoryLabel}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                      isSelected ? 'bg-[#1E293B] text-[#38BDF8]' : 'bg-[#F1F5F9] text-[#475569]'
                    }`}>
                      3 Gaya
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Template Viewer & Tone Switcher */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-7 shadow-md">
              
              {/* Header: Title + Situation Context */}
              <div className="border-b-2 border-[#F1F5F9] pb-4 mb-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    {currentItem.categoryLabel}
                  </h3>
                  <span className="text-xs bg-[#D1FAE5] text-[#047857] font-black px-3 py-1 rounded-lg border border-[#6EE7B7]">
                    Siap Pakai
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#334155] font-semibold leading-relaxed">
                  📌 <span className="font-black text-[#0F172A]">Kapan dipakai:</span> {currentItem.situation}
                </p>
              </div>

              {/* Tone Switcher Tabs */}
              <div className="mb-6">
                <label className="block text-xs font-black text-[#0F172A] uppercase tracking-wider mb-2.5">
                  Pilih Nada Bicara (Tone):
                </label>
                <div className="grid grid-cols-3 gap-2 bg-[#F1F5F9] p-1.5 rounded-2xl border border-[#CBD5E1]">
                  <button
                    onClick={() => setTone('formal')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
                      tone === 'formal'
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'text-[#334155] hover:text-[#0F172A]'
                    }`}
                  >
                    1. Formal
                  </button>
                  <button
                    onClick={() => setTone('semiFormal')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
                      tone === 'semiFormal'
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'text-[#334155] hover:text-[#0F172A]'
                    }`}
                  >
                    2. Semi Formal
                  </button>
                  <button
                    onClick={() => setTone('santaiProfesional')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all ${
                      tone === 'santaiProfesional'
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'text-[#334155] hover:text-[#0F172A]'
                    }`}
                  >
                    3. Santai Profesional
                  </button>
                </div>
                <div className="text-xs font-bold text-[#475569] mt-2 px-1">
                  {tone === 'formal' && '💼 Cocok untuk: Email resmi ke Direksi, Klien Eksternal, atau Departemen Audit.'}
                  {tone === 'semiFormal' && '⚡ Cocok untuk: Email harian ke Atasan langsung, Tim lintas divisi, atau WhatsApp Group kerja.'}
                  {tone === 'santaiProfesional' && '💬 Cocok untuk: Direct Message (Slack/Teams/WA) ke rekan selevel (peer).'}
                </div>
              </div>

              {/* Subject Line (if available) */}
              {currentContent.subject && (
                <div className="mb-4 bg-[#EFF6FF] rounded-2xl p-3.5 border-2 border-[#BFDBFE] flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1E40AF]">
                      Contoh Subjek Email:
                    </span>
                    <p className="text-xs sm:text-sm font-black text-[#0F172A] truncate mt-0.5 font-mono">
                      {currentContent.subject}
                    </p>
                  </div>
                  <button
                    onClick={handleCopySubject}
                    className="px-3 py-1.5 bg-white hover:bg-[#DBEAFE] text-[#1E40AF] text-xs font-black rounded-lg border border-[#BFDBFE] transition-colors shrink-0 flex items-center gap-1 shadow-xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Subjek</span>
                  </button>
                </div>
              )}

              {/* Message Body Box */}
              <div className="relative mb-5">
                <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border-2 border-[#CBD5E1] font-sans text-xs sm:text-sm text-[#0F172A] font-semibold leading-relaxed whitespace-pre-wrap">
                  {currentContent.text}
                </div>
              </div>

              {/* Copy Primary Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="text-xs font-bold text-[#475569]">
                  💡 Ganti tanda kurung siku <code className="bg-[#EFF6FF] px-2 py-0.5 rounded-md text-[#1E40AF] font-black border border-[#BFDBFE]">[Nama / Tanggal]</code> dengan data aslimu.
                </div>
                <button
                  id="btn-salin-kalimat"
                  onClick={handleCopyBody}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-black rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4 text-[#38BDF8]" />
                  <span>Salin Seluruh Pesan</span>
                </button>
              </div>

              {/* Pro Tips Box */}
              {currentItem.tips && (
                <div className="mt-5 p-4 rounded-2xl bg-[#FEF3C7] border-2 border-[#FCD34D] text-xs sm:text-sm text-[#92400E]">
                  <div className="font-black flex items-center gap-1.5 mb-1 text-[#B45309]">
                    <Sparkles className="w-4 h-4 text-[#D97706]" />
                    <span>Tips Komunikasi Praktis:</span>
                  </div>
                  <p className="font-bold leading-relaxed">
                    {currentItem.tips}
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
