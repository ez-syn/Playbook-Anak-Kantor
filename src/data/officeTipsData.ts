import { FileNamingGuide, OfficeTipItem } from '../types';

export const fileNamingGuide: FileNamingGuide = {
  badExample: [
    'Report Final Fix.xlsx',
    'Report Final Final.xlsx',
    'Report Final Banget.xlsx',
    'Proposal revisi baru ok fix.docx',
    'Design Banner fix revisi pak budi (1).png',
    'Data sales 2026 fix banget (copy).xlsx'
  ],
  goodExample: [
    '2026-08_Report-Kinerja_v01.xlsx',
    '2026-08_Report-Kinerja_v02.xlsx',
    '2026-08_Report-Kinerja_FINAL.xlsx',
    '20260826_Proposal-Kerjasama-ABC_Draf-v01.docx',
    '2026-Q3_Banner-Promo-IG-Story_1080x1920_v02.png',
    '2026-08_Data-Penjualan-Cabang-Jakarta_Clean.xlsx'
  ],
  rules: [
    {
      title: '1. Format Tanggal Standar ISO (YYYY-MM-DD atau YYYY-MM)',
      explanation: 'Selalu awali nama file dengan tahun di depan (contoh: 2026-08-26 atau 2026-08). Saat folder disortir berdasarkan "Name", file akan otomatis berurutan secara kronologis tanpa berantakan.',
      sample: '2026-08_Laporan-Keuangan_v01.xlsx'
    },
    {
      title: '2. Gunakan Penomoran Versi (v01, v02, v03, bukan kata "baru")',
      explanation: 'Kata "baru" atau "revisi" akan kehilangan arti setelah 3 hari. Gunakan format _v01, _v02, _v03. Kata _FINAL hanya disematkan jika file sudah disetujui atasan dan siap dikirim ke klien.',
      sample: '2026-08_Presentasi-AllHands_v03.pptx'
    },
    {
      title: '3. Hindari Spasi Berlebihan & Simbol Terlarang',
      explanation: 'Gunakan tanda hubung (-) atau underscore (_) sebagai pemisah kata. Hindari simbol seperti ?, %, #, /, \\, *, :, " yang sering merusak link saat diunggah ke cloud storage atau email.',
      sample: '2026-08_Brief-Konten-Agustus_v01.pdf'
    },
    {
      title: '4. Format Ringkas: [Tanggal]_[Nama Proyek]_[Detail/PIC]_[Versi]',
      explanation: 'Rumus baku nama file profesional: Siapa pun yang mendownload file kamu dari email 2 tahun lagi tetap langsung tahu apa isi file tersebut tanpa harus membukanya.',
      sample: '2026-08_Audit-Internal_Divisi-Finance_FINAL.xlsx'
    }
  ]
};

export const officeTipsData: OfficeTipItem[] = [
  {
    id: 'tip-folder-per-project',
    title: 'Struktur Folder 3 Level (Bukan Simpan di Desktop)',
    badge: 'Organisasi File',
    summary: 'Desktop yang dipenuhi 80 file bikin laptop lambat dan otak gampang stres mencari dokumen darurat.',
    whyItMatters: 'Mencari 1 file di antara tumpukan desktop bisa makan waktu 10 menit berharga saat meeting.',
    practicalSteps: [
      'Buat Folder Utama: 📁 [Tahun / Departemen] (Contoh: 2026_Marketing)',
      'Subfolder: 📁 [Nama Proyek / Klien] (Contoh: 08_Campaign-Kemerdekaan)',
      'Sub-subfolder standar di dalam proyek: 📁 01_Bahan-Mentah, 📁 02_Draf-Kerja, 📁 03_Final-Kirim'
    ]
  },
  {
    id: 'tip-pisah-draft-final',
    title: 'Pisahkan Draf Kerja dengan File Final',
    badge: 'Anti Salah Kirim',
    summary: 'Salah satu insiden kantor paling memalukan adalah mengirim file yang berisi coretan kasar ke klien atau atasan.',
    whyItMatters: 'Memastikan kamu hanya mengekspor atau membagikan file yang sudah 100% tervalidasi.',
    practicalSteps: [
      'Simpan draf kerja di folder khusus / tambahkan akhiran _DRAFT pada nama file.',
      'Ketika disetujui, export dalam format PDF atau beri akhiran _FINAL lalu pindahkan ke folder 03_Final-Kirim.',
      'Jangan biarkan file draf dan file final bercampur dalam 1 folder tanpa label yang tegas.'
    ]
  },
  {
    id: 'tip-bookmark-management',
    title: 'Manajemen Link Penting di Bookmark Bar Browser',
    badge: 'Kecepatan Browsing',
    summary: 'Jangan terus-terusan minta link Google Drive atau dashboard di grup WhatsApp setiap pagi.',
    whyItMatters: 'Menghemat puluhan interaksi chat berulang dan membuatmu mandiri mengakses sistem internal.',
    practicalSteps: [
      'Gunakan Bookmark Folder di Chrome/Edge: Buat folder "Harian", "Tools Kantor", "Form HR".',
      'Hapus nama teks di bookmark dan sisakan logonya saja untuk menghemat ruang di toolbar.',
      'Simpan sheet catatan meeting tim dan dashboard analitik di posisi tab terdepan.'
    ]
  },
  {
    id: 'tip-pending-action-tracker',
    title: 'Catat "Pending" & "Menunggu Siapa" Setiap Sore',
    badge: 'Manajemen Tugas',
    summary: 'Sering kali pekerjaan mandek bukan karena kita belum kerja, tapi karena kita lupa mem-follow up orang lain.',
    whyItMatters: 'Menghindari tuduhan "pekerjaan mandek di kamu" saat atasan menanyakan status proyek.',
    practicalSteps: [
      'Luangkan 5 menit sebelum jam pulang untuk mencatat 3 daftar sederhana.',
      'Daftar 1: Apa yang sudah selesai hari ini (Done).',
      'Daftar 2: Apa yang harus saya kerjakan besok pagi (To-Do).',
      'Daftar 3: Apa yang sedang menunggu pihak lain (Waiting on: Nama Orang + Tanggal Follow Up).'
    ]
  },
  {
    id: 'tip-inbox-search-filter',
    title: 'Kuasai Filter Pencarian Email Kantor',
    badge: 'Email Sat-Set',
    summary: 'Mencari email lampiran 6 bulan lalu dengan scroll manual adalah pemborosan energi.',
    whyItMatters: 'Menemukan dokumen kontrak atau invoice dalam 3 detik menggunakan syntax filter.',
    practicalSteps: [
      'Di Gmail/Outlook: ketik "from:budi filename:pdf" untuk mencari PDF dari Pak Budi.',
      'Ketik "has:attachment larger:5M" untuk mencari email yang memakan kuota inbox paling besar.',
      'Ketik "after:2026/01/01 before:2026/06/30" untuk membatasi rentang tanggal tertentu.'
    ]
  },
  {
    id: 'tip-komunikasi-jelas',
    title: 'Terapkan Format Pesan 3 Bagian: Konteks, Inti, Deadline',
    badge: 'Komunikasi',
    summary: 'Hindari mengirim pesan chat hanya bertuliskan "Pagi Mas" lalu menunggu 15 menit baru mengetik intinya.',
    whyItMatters: 'Rekan kerja dan atasan punya jadwal padat; pesan yang to-the-point akan direspon jauh lebih cepat.',
    practicalSteps: [
      '1. Konteks Singkat: "Terkait pengajuan vendor laptop..."',
      '2. Inti Pertanyaan/Kebutuhan: "...kami butuh tanda tangan Bapak di form terlampir."',
      '3. Tenggat Waktu Jelas: "Mohon bantuannya sebelum jam 14.00 WIB hari ini ya Pak, terima kasih."'
    ]
  }
];
