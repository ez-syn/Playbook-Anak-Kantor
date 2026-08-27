import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      id="toast-notification"
      className="fixed bottom-20 md:bottom-8 right-6 z-50 flex items-center gap-3 bg-[#0F172A] text-white px-5 py-3.5 rounded-2xl shadow-xl border-2 border-[#334155] text-sm font-black transition-all animate-bounce-short"
      role="alert"
    >
      <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
        <Check className="w-4 h-4 stroke-[3]" />
      </div>
      <span className="text-[#F8FAFC]">{message}</span>
    </div>
  );
};
