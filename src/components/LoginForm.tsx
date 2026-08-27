import React, { useState } from 'react';
import { BookmarkCheck, Lock, Eye, EyeOff, AlertCircle, FileText, ArrowRight } from 'lucide-react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Artificial tiny delay for nice premium professional feel
    setTimeout(() => {
      if (username.trim() === 'ezplan26' && password === 'ezplan@123') {
        localStorage.setItem('ez_playbook_logged_in', 'true');
        onLoginSuccess();
      } else {
        setError('Username atau Password tidak cocok. Silakan periksa kembali Panduan PDF Anda.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center px-4 py-12 font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#10B981]"></div>

      <div className="w-full max-w-md">
        
        {/* Brand Logo Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1E3A8A] text-white shadow-lg border-2 border-[#2563EB] mb-4">
            <BookmarkCheck className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-black text-[#1D4ED8] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase tracking-widest border border-[#BFDBFE] inline-block mb-2">
            Playbook by Ezplan
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            Playbook Anak Kantor
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] font-semibold mt-1">
            Shortcut & Bekal Sat-Set Kerja Harian
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl border-2 border-[#CBD5E1] p-6 sm:p-8 shadow-sm relative overflow-hidden">
          
          <div className="flex items-center gap-2 pb-4 mb-5 border-b-2 border-[#F1F5F9]">
            <Lock className="w-4 h-4 text-[#1E3A8A]" />
            <h2 className="text-sm sm:text-base font-black text-[#0F172A] uppercase tracking-wider">
              Akses Terproteksi
            </h2>
          </div>

          {/* Alert Message for Credentials Guide */}
          <div className="p-4 rounded-2xl bg-[#FFFBEB] border-2 border-[#FEF3C7] text-[#92400E] mb-6 flex gap-3">
            <AlertCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="text-xs font-semibold leading-relaxed">
              <p className="font-black text-[#78350F] mb-1">Butuh Akun Masuk?</p>
              Untuk <span className="font-bold text-[#78350F]">Username & Password</span>, silakan cek di dalam **File Panduan PDF** yang Anda terima ketika membeli e-book / paket Ezplan.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Username Input */}
            <div className="space-y-1.5">
              <label htmlFor="username-input" className="text-xs font-black text-[#334155] uppercase tracking-wider block">
                Username
              </label>
              <input
                id="username-input"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                className="w-full px-4 py-3 bg-[#F8FAFC] rounded-xl border-2 border-[#CBD5E1] text-sm font-bold text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label htmlFor="password-input" className="text-xs font-black text-[#334155] uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full pl-4 pr-11 py-3 bg-[#F8FAFC] rounded-xl border-2 border-[#CBD5E1] text-sm font-bold text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F172A]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Display Error Message */}
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold leading-relaxed animate-shake">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md active:translate-y-[2px] disabled:opacity-50 disabled:pointer-events-none mt-2 border-b-4 border-black`}
            >
              {loading ? (
                <span>Memverifikasi...</span>
              ) : (
                <>
                  <span>Masuk ke Playbook</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </>
              )}
            </button>

          </form>

        </div>

        {/* Login Footer */}
        <div className="mt-8 text-center text-xs text-[#64748B] font-semibold flex items-center justify-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>Kehilangan file PDF? Hubungi CS Ezplan</span>
        </div>

      </div>
    </div>
  );
};
