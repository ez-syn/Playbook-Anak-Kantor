import { MeetingChecklistGroup } from '../types';

export const meetingSurvivalData: MeetingChecklistGroup[] = [
  {
    id: 'phase-sebelum',
    phase: 'sebelum',
    phaseTitle: 'SEBELUM MEETING',
    phaseSubtitle: 'Persiapan 10 menit sebelum masuk room agar tidak kagok dan meeting efisien.',
    items: [
      {
        id: 'seb-1',
        title: 'Cek Tujuan & Expected Output',
        description: 'Pastikan kamu tahu kenapa meeting ini diadakan: apakah untuk brainstorming, briefing, atau pengambilan keputusan.',
        actionableTip: 'Kalau tujuan belum jelas, tanyakan ke organizer: "Output yang diharapkan dari meeting ini apa ya Kak?"'
      },
      {
        id: 'seb-2',
        title: 'Buka Bahan & File Presentasi Lebih Dulu',
        description: 'Buka semua tab dokumen, sheet analitik, atau slide presentasi di jendela terpisah sebelum jam meeting mulai.',
        actionableTip: 'Hindari momen panik mencari file di folder saat giliranmu share screen.'
      },
      {
        id: 'seb-3',
        title: 'Tutup Tab & Chat Pribadi (Privasi)',
        description: 'Tutup WhatsApp Web, Telegram, email pribadi, dan tab bank sebelum share screen ke seluruh peserta.',
        actionableTip: 'Gunakan mode "Share a Window / Tab" dibanding "Share Entire Screen" untuk keamanan.'
      },
      {
        id: 'seb-4',
        title: 'Tes Audio, Mic, dan Posisi Kamera',
        description: 'Pastikan mikrofon headset tidak kemresek dan background di belakang terlihat bersih / gunakan blur background.',
        actionableTip: 'Ingat shortcut Mute: Teams (Ctrl+Shift+M), Meet (Ctrl+D), Zoom (Alt+A).'
      }
    ]
  },
  {
    id: 'phase-saat',
    phase: 'saat',
    phaseTitle: 'SAAT MEETING',
    phaseSubtitle: 'Fokus tangkap keputusan penting, jangan hanya jadi pendengar pasif tanpa catatan.',
    items: [
      {
        id: 'sat-1',
        title: 'Catat Keputusan (Bukan Debatnya)',
        description: 'Notulensi yang baik tidak perlu mencatat setiap kalimat orang, melainkan kesepakatan akhir yang disetujui.',
        actionableTip: 'Tulis dengan format: [KEPUTUSAN] Opsi A dipilih karena pertimbangan waktu rilis.'
      },
      {
        id: 'sat-2',
        title: 'Kunci PIC (Person In Charge) untuk Setiap Task',
        description: 'Setiap ide atau tugas harus ada 1 nama orang yang bertanggung jawab secara tunggal.',
        actionableTip: 'Tulis dengan format: [ACTION ITEM] Revisi banner -> PIC: Dimas.'
      },
      {
        id: 'sat-3',
        title: 'Kunci Deadline yang Masuk Akal',
        description: 'Tugas tanpa tanggal batas waktu (deadline) hampir pasti tidak akan dikerjakan tepat waktu.',
        actionableTip: 'Tulis dengan format: Deadline: Jumat, 28 Agustus 2026 pukul 16.00 WIB.'
      },
      {
        id: 'sat-4',
        title: 'Konfirmasi Ulang di 5 Menit Terakhir',
        description: 'Sebelum meeting ditutup, bacakan ringkasan 3 poin action item kepada seluruh peserta.',
        actionableTip: '"Izin konfirmasi ulang ya bapak/ibu, untuk action item utama kita ada 3 poin..."'
      }
    ]
  },
  {
    id: 'phase-setelah',
    phase: 'setelah',
    phaseTitle: 'SETELAH MEETING',
    phaseSubtitle: 'Langkah penutup paling menentukan agar hasil diskusi benar-benar dieksekusi.',
    items: [
      {
        id: 'set-1',
        title: 'Kirim Ringkasan MoM (Minutes of Meeting) Maks. 2 Jam',
        description: 'Kirimkan notulensi ringkas via chat grup atau email selagi ingatan semua peserta masih segar.',
        actionableTip: 'Cukup 4 bagian: Ringkasan Keputusan, Action Items + PIC + Deadline, Link Dokumen, Next Sync.'
      },
      {
        id: 'set-2',
        title: 'Masukkan Task Sendiri ke To-Do List Harian',
        description: 'Pindahkan poin tugas yang menjadi tanggung jawabmu ke catatan kerja atau kalender pribadi.',
        actionableTip: 'Blok 1 jam di kalender (Focus Time) untuk langsung mulai mengerjakan task tersebut.'
      },
      {
        id: 'set-3',
        title: 'Simpan File / Recording di Folder Proyek Terpusat',
        description: 'Jika rapat direkam, simpan tautan rekaman dan salinan slide ke folder Google Drive proyek tim.',
        actionableTip: 'Beri nama file sesuai standar: 2026-08-26_MoM-Kickoff-Proyek-X.docx.'
      },
      {
        id: 'set-4',
        title: 'Follow Up H-1 Sebelum Deadline PIC',
        description: 'Lakukan reminder santai kepada rekan kerja yang memegang action item sebelum batas waktu tiba.',
        actionableTip: 'Gunakan template Bank Kalimat kategori "Reminder" untuk menyapa rekan kerja dengan sopan.'
      }
    ]
  }
];
