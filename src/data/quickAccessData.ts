import { QuickAccessAction } from '../types';

export const quickAccessActions: QuickAccessAction[] = [
  {
    id: 'copy-paste',
    label: 'Copy & Paste',
    iconName: 'Copy',
    description: 'Duplikasi teks, tabel, file, atau elemen objek tanpa mengetik ulang.',
    windowsShortcut: ['Ctrl', 'C', '→', 'Ctrl', 'V'],
    macShortcut: ['⌘', 'C', '→', '⌘', 'V'],
    app: 'Semua Aplikasi',
    categoryTag: 'Dasar',
    tips: 'Di Windows tekan Win + V untuk buka riwayat Clipboard (bisa simpan banyak copy).'
  },
  {
    id: 'screenshot',
    label: 'Screenshot Area',
    iconName: 'Camera',
    description: 'Tangkap area tertentu layar lalu langsung masuk ke clipboard/file.',
    windowsShortcut: ['Win', 'Shift', 'S'],
    macShortcut: ['⌘', 'Shift', '4'],
    app: 'OS / Sistem',
    categoryTag: 'Sering Dipakai',
    tips: 'Di Mac tekan ⌘ + Shift + 5 untuk kontrol screenshot lengkap + recording layar.'
  },
  {
    id: 'pindah-tab',
    label: 'Pindah Tab Browser',
    iconName: 'Layers',
    description: 'Beralih ke tab sebelah kanan atau kiri secara instan.',
    windowsShortcut: ['Ctrl', 'Tab'],
    macShortcut: ['⌘', 'Option', '→'],
    app: 'Chrome / Edge',
    categoryTag: 'Navigasi',
    tips: 'Gunakan Ctrl + Shift + Tab (atau ⌘ + Option + ←) untuk pindah ke tab sebelah kiri.'
  },
  {
    id: 'reopen-tab',
    label: 'Reopen Tab Tertutup',
    iconName: 'RotateCcw',
    description: 'Kembalikan tab browser yang tidak sengaja tertutup.',
    windowsShortcut: ['Ctrl', 'Shift', 'T'],
    macShortcut: ['⌘', 'Shift', 'T'],
    app: 'Chrome / Edge',
    categoryTag: 'Produktivitas',
    tips: 'Bisa ditekan berkali-kali untuk membuka tab-tab sebelumnya yang tertutup.'
  },
  {
    id: 'cari-file',
    label: 'Cari File / App',
    iconName: 'Search',
    description: 'Pencarian global cepat untuk membuka dokumen, folder, atau program.',
    windowsShortcut: ['Win', 'S'],
    macShortcut: ['⌘', 'Space'],
    app: 'Windows / Mac Spotlight',
    categoryTag: 'Navigasi',
    tips: 'Spotlight di Mac juga bisa untuk kalkulator cepat dan konversi mata uang.'
  },
  {
    id: 'task-manager',
    label: 'Buka Task Manager',
    iconName: 'Activity',
    description: 'Tutup paksa aplikasi yang hang / not responding tanpa restart komputer.',
    windowsShortcut: ['Ctrl', 'Shift', 'Esc'],
    macShortcut: ['⌘', 'Option', 'Esc'],
    app: 'Sistem',
    categoryTag: 'Produktivitas',
    tips: 'Shortcut ini langsung membuka Task Manager tanpa harus lewat layar Ctrl+Alt+Del.'
  },
  {
    id: 'lock-pc',
    label: 'Lock Komputer',
    iconName: 'Lock',
    description: 'Kunci layar sebelum beranjak dari meja kerja (ke toilet/makan).',
    windowsShortcut: ['Win', 'L'],
    macShortcut: ['Ctrl', '⌘', 'Q'],
    app: 'Sistem',
    categoryTag: 'Dasar',
    tips: 'Praktik keamanan paling penting di kantor agar data & chat kerja tidak diintip.'
  },
  {
    id: 'rename-file',
    label: 'Rename File Cepat',
    iconName: 'Edit3',
    description: 'Ganti nama file atau folder yang dipilih langsung tanpa klik kanan.',
    windowsShortcut: ['F2'],
    macShortcut: ['Enter'],
    app: 'File Explorer / Finder',
    categoryTag: 'Editing',
    tips: 'Di Mac tekan Return/Enter untuk rename, atau tekan Space untuk Quick Preview.'
  },
  {
    id: 'undo-redo',
    label: 'Undo & Redo',
    iconName: 'Undo2',
    description: 'Membatalkan kesalahan ketik/edit atau mengulangi perintah terakhir.',
    windowsShortcut: ['Ctrl', 'Z', '→', 'Ctrl', 'Y'],
    macShortcut: ['⌘', 'Z', '→', '⌘', 'Shift', 'Z'],
    app: 'Semua Aplikasi',
    categoryTag: 'Dasar',
    tips: 'Di Excel/Word, F4 juga bisa berfungsi mengulang perintah formatting terakhir.'
  },
  {
    id: 'cari-kata',
    label: 'Cari Kata / Find',
    iconName: 'FileSearch',
    description: 'Temukan kata tertentu di halaman dokumen, browser, spreadsheet, atau PDF.',
    windowsShortcut: ['Ctrl', 'F'],
    macShortcut: ['⌘', 'F'],
    app: 'Semua Aplikasi',
    categoryTag: 'Navigasi',
    tips: 'Untuk ganti kata secara massal di Word/Excel, gunakan Find & Replace (Ctrl + H).'
  },
  {
    id: 'split-screen',
    label: 'Split Screen (2 Layar)',
    iconName: 'Columns2',
    description: 'Bagi jendela ke sisi kiri dan kanan layar secara rapi dalam 1 detik.',
    windowsShortcut: ['Win', '← / →'],
    macShortcut: ['Fn', 'Ctrl', 'F'],
    app: 'OS Window Management',
    categoryTag: 'Produktivitas',
    tips: 'Di Windows tekan Win + ↑ untuk maximize, Win + ↓ untuk minimize/restore.'
  },
  {
    id: 'tutup-app',
    label: 'Tutup / Quit Aplikasi',
    iconName: 'XCircle',
    description: 'Menutup jendela atau mematikan aplikasi yang sedang aktif.',
    windowsShortcut: ['Alt', 'F4'],
    macShortcut: ['⌘', 'Q'],
    app: 'Semua Aplikasi',
    categoryTag: 'Dasar',
    tips: 'Di Mac ⌘ + W hanya menutup tab/jendela, sedangkan ⌘ + Q benar-benar mematikan aplikasi.'
  },
  {
    id: 'pindah-sheet',
    label: 'Pindah Sheet Excel',
    iconName: 'TableProperties',
    description: 'Pindah ke lembar kerja (tab sheet) berikutnya atau sebelumnya.',
    windowsShortcut: ['Ctrl', 'PageDown / PageUp'],
    macShortcut: ['Fn', 'Ctrl', '↓ / ↑'],
    app: 'Excel / Sheets',
    categoryTag: 'Navigasi',
    tips: 'Di Mac juga bisa menggunakan Option + → / ← tergantung pengaturan keyboard.'
  },
  {
    id: 'insert-row',
    label: 'Tambah Baris / Row',
    iconName: 'PlusSquare',
    description: 'Sisipkan baris baru di Excel atau Google Sheets.',
    windowsShortcut: ['Ctrl', 'Shift', '+'],
    macShortcut: ['⌘', 'Option', '='],
    app: 'Excel / Google Sheets',
    categoryTag: 'Editing',
    tips: 'Pilih seluruh baris dulu dengan Shift + Space, lalu tekan shortcut ini.'
  },
  {
    id: 'filter-excel',
    label: 'Nyalakan Filter Data',
    iconName: 'Filter',
    description: 'Pasang atau lepas filter di kepala tabel secara cepat.',
    windowsShortcut: ['Ctrl', 'Shift', 'L'],
    macShortcut: ['⌘', 'Shift', 'F'],
    app: 'Excel / Sheets',
    categoryTag: 'Data',
    tips: 'Cukup klik salah satu cell dalam tabel lalu tekan shortcut tanpa perlu blok semua.'
  },
  {
    id: 'find-replace',
    label: 'Find & Replace',
    iconName: 'Replace',
    description: 'Cari kata atau angka lalu ganti secara serentak di dokumen/tabel.',
    windowsShortcut: ['Ctrl', 'H'],
    macShortcut: ['Ctrl', 'H'],
    app: 'Excel / Word / Sheets',
    categoryTag: 'Editing',
    tips: 'Sangat hemat waktu untuk merevisi nama orang, format tanggal, atau kode produk.'
  },
  {
    id: 'presentasi',
    label: 'Mulai Slide Show',
    iconName: 'Presentation',
    description: 'Masuk ke mode presentasi layar penuh di PowerPoint atau Google Slides.',
    windowsShortcut: ['F5'],
    macShortcut: ['⌘', 'Shift', 'Enter'],
    app: 'PowerPoint / Slides',
    categoryTag: 'Presentasi',
    tips: 'Tekan Shift + F5 (atau ⌘ + Enter) untuk mulai dari slide yang sedang aktif.'
  },
  {
    id: 'email-baru',
    label: 'Tulis Email Baru',
    iconName: 'Mail',
    description: 'Buka popup jendela pembuatan pesan baru di email.',
    windowsShortcut: ['Ctrl', 'N', '(Outlook) /', 'C', '(Gmail)'],
    macShortcut: ['⌘', 'N', '(Outlook) /', 'C', '(Gmail)'],
    app: 'Outlook / Gmail',
    categoryTag: 'Produktivitas',
    tips: 'Di Gmail, pastikan Keyboard Shortcuts sudah diaktifkan di menu Settings (⚙).'
  },
  {
    id: 'meeting-mute',
    label: 'Mute / Unmute Mic',
    iconName: 'MicOff',
    description: 'Matikan atau hidupkan suara mikrofon saat online meeting.',
    windowsShortcut: ['Ctrl', 'Shift', 'M', '(Teams) /', 'Ctrl', 'D', '(Meet)'],
    macShortcut: ['⌘', 'Shift', 'M', '(Teams) /', '⌘', 'D', '(Meet)'],
    app: 'Teams / Meet / Zoom',
    categoryTag: 'Sering Dipakai',
    tips: 'Di Zoom: Tekan & tahan Spasi untuk Temporary Unmute saat ingin berbicara singkat.'
  },
  {
    id: 'clipboard-history',
    label: 'Riwayat Clipboard',
    iconName: 'ClipboardList',
    description: 'Lihat daftar semua teks & gambar yang pernah di-copy sebelumnya.',
    windowsShortcut: ['Win', 'V'],
    macShortcut: ['Memerlukan Raycast / Paste app'],
    app: 'Windows 10/11',
    categoryTag: 'Produktivitas',
    tips: 'Fitur dewa Windows! Aktifkan sekali, kamu bisa paste item yang di-copy 30 menit lalu.'
  }
];
