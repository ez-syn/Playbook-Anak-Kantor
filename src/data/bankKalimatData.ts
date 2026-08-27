import { BankKalimatItem } from '../types';

export const bankKalimatData: BankKalimatItem[] = [
  {
    id: 'follow-up',
    category: 'follow-up',
    categoryLabel: 'Follow Up',
    situation: 'Menanyakan kabar kelanjutan dokumen, proposal, atau balasan email yang belum direspon.',
    formal: {
      subject: 'Tindak Lanjut Mengenai Dokumen Proposal [Nama Proyek]',
      text: 'Selamat pagi/siang Bapak/Ibu [Nama],\n\nSemoga Bapak/Ibu senantiasa dalam keadaan sehat. Menindaklanjuti email kami sebelumnya tertanggal [Tanggal] terkait [Nama Dokumen/Topik], kami ingin menanyakan apakah ada informasi tambahan yang diperlukan dari pihak kami untuk proses peninjauan tersebut.\n\nBesar harapan kami untuk dapat mendiskusikan hal ini lebih lanjut. Terima kasih banyak atas perhatian dan kerja samanya.'
    },
    semiFormal: {
      subject: 'Follow Up: Update Terkait [Nama Topik/Proyek]',
      text: 'Halo Kak [Nama],\n\nSemoga harinya menyenangkan. Boleh izin follow up terkait [Nama Topik/Dokumen] yang kami kirimkan kemarin? Kira-kira apakah sudah ada arahan atau feedback dari tim Kakak?\n\nJika butuh penyesuaian data, kabari saja ya Kak. Terima kasih banyak!'
    },
    santaiProfesional: {
      subject: 'Quick Check: [Nama File/Task]',
      text: 'Halo Mas/Mbak [Nama], mau izin cross-check sebentar yaa terkait file [Nama File] kemarin. Kira-kira apakah sudah sempat dicek atau ada catatan yang perlu aku revisi dulu? Thank you!'
    },
    tips: 'Beri jeda minimal 1-2 hari kerja sebelum melakukan follow up pertama, kecuali jika urgensinya tinggi.'
  },
  {
    id: 'minta-approval',
    category: 'minta-approval',
    categoryLabel: 'Minta Approval',
    situation: 'Meminta persetujuan atasan, tim finance, atau klien untuk dokumen/pengajuan.',
    formal: {
      subject: 'Permohonan Persetujuan: [Nama Dokumen / Anggaran / Proposal]',
      text: 'Yth. Bapak/Ibu [Nama Atasan/Pimpinan],\n\nBersama email ini, kami melampirkan draf [Nama Dokumen/Kegiatan] yang telah disesuaikan dengan hasil evaluasi terakhir. Dokumen ini memerlukan persetujuan Bapak/Ibu sebelum dapat kami proses ke tahap pelaksanaan.\n\nMohon kesediaan Bapak/Ibu untuk memeriksa dan memberikan persetujuan (approval) pada lampiran berikut. Apabila terdapat hal yang perlu disesuaikan, kami siap melakukan revisi segera. Terima kasih.'
    },
    semiFormal: {
      subject: 'Approval Needed: [Nama Draf / Pengajuan]',
      text: 'Selamat pagi/siang Pak/Bu [Nama],\n\nBerikut terlampir draf final untuk [Nama Pengajuan] yang sudah dirapikan. Mohon bantuannya untuk approval dokumen ini agar bisa segera kami teruskan ke tim terkait ya Pak/Bu.\n\nDetail poin perubahan sudah kami rangkum di bagian pembuka draf. Terima kasih banyak atas waktunya!'
    },
    santaiProfesional: {
      subject: 'Review & Approval: [Nama Desain/Laporan]',
      text: 'Pagi/Siang Kak [Nama], file [Nama File] sudah selesai kami finalisasi yaa. Boleh tolong dicek dan di-approve jika sudah sesuai, biar bisa langsung kita eksekusi ke vendor hari ini. Thank you Kak!'
    },
    tips: 'Sertakan ringkasan 2-3 poin perubahan utama di badan email agar approver tidak perlu membaca dari nol.'
  },
  {
    id: 'minta-data',
    category: 'minta-data',
    categoryLabel: 'Minta Data',
    situation: 'Meminta bahan laporan, data spreadsheet, atau lampiran dari divisi lain.',
    formal: {
      subject: 'Permintaan Data [Nama Data/Laporan] Periode [Bulan/Tahun]',
      text: 'Dengan hormat Tim [Nama Divisi/Bapak/Ibu],\n\nSehubungan dengan penyusunan laporan [Nama Kegiatan/Audit] untuk periode [Bulan/Tahun], kami bermaksud memohon bantuan penyediaan data terkait [Daftar Data yang Dibutuhkan].\n\nAgar proses konsolidasi dapat berjalan sesuai jadwal, kami sangat berterima kasih apabila data tersebut dapat kami terima sebelum [Hari/Tanggal, Pukul WIB]. Atas kerja sama dan bantuannya, kami ucapkan terima kasih.'
    },
    semiFormal: {
      subject: 'Kebutuhan Data [Nama Data] untuk Laporan [Nama Proyek]',
      text: 'Halo Tim [Nama Divisi/Kak Nama],\n\nSemoga lancar kegiatannya. Untuk melengkapi bahan presentasi/laporan [Nama Proyek], kami memerlukan data terkait:\n1. [Poin Data 1]\n2. [Poin Data 2]\n\nBisa tolong dibantu kirimkan filenya paling lambat [Hari/Tanggal] ya Kak? Jika ada kendala pada format datanya, kita bisa diskusikan bersama. Terima kasih banyak!'
    },
    santaiProfesional: {
      subject: 'Minta Data [Nama Sheet/File] yaa',
      text: 'Halo Mas/Mbak [Nama], boleh minta tolong kirimkan rekapan data [Nama Data] yang terbaru? Mau kami pakai untuk update weekly report hari ini. Kalau ada sebelum jam 3 sore ini sangat membantu banget. Makasih banyak ya!'
    },
    tips: 'Selalu berikan batasan waktu (deadline) yang jelas dan realistis saat meminta data dari divisi lain.'
  },
  {
    id: 'kirim-revisi',
    category: 'kirim-revisi',
    categoryLabel: 'Kirim Revisi',
    situation: 'Mengirimkan kembali dokumen atau desain yang sudah diperbaiki berdasarkan masukan.',
    formal: {
      subject: 'Pengiriman Dokumen Hasil Revisi: [Nama Dokumen]',
      text: 'Yth. Bapak/Ibu [Nama],\n\nTerima kasih banyak atas catatan dan masukan yang telah diberikan. Bersama ini kami lampirkan dokumen [Nama Dokumen] versi terbaru (v02) yang telah kami sesuaikan dengan arahan Bapak/Ibu pada diskusi sebelumnya.\n\nBerikut ringkasan poin perbaikan yang telah kami laksanakan:\n1. [Poin Revisi 1]\n2. [Poin Revisi 2]\n\nMohon kesediaan Bapak/Ibu untuk memeriksa kembali. Kami terbuka terhadap masukan selanjutnya. Terima kasih.'
    },
    semiFormal: {
      subject: 'Update Dokumen Revisi [Nama Proyek] - Ready for Review',
      text: 'Halo Kak [Nama],\n\nFile revisi untuk [Nama Proyek] sudah selesai kami perbaiki sesuai feedback meeting kemarin ya Kak. Bagian [Sebut Bagian] sudah kami tambahkan data pelengkapnya.\n\nBoleh dicek kembali di link/lampiran berikut yaa. Jika ada yang masih kurang pas, langsung kabari saja. Thank you Kak!'
    },
    santaiProfesional: {
      subject: 'Ini file revisinya yaa: [Nama File]',
      text: 'Siang Mas/Mbak [Nama], ini draf yang sudah di-update sesuai masukan tadi yaa. Sudah aku tandai juga bagian yang diubah biar gampang di-crosscheck. Silakan dilihat, makasih banyak atas feedback-nya!'
    },
    tips: 'Tuliskan poin-poin yang sudah kamu perbaiki secara bernomor agar reviewer langsung fokus ke bagian tersebut.'
  },
  {
    id: 'reminder',
    category: 'reminder',
    categoryLabel: 'Reminder Deadline',
    situation: 'Mengingatkan tenggat waktu pengumpulan tugas atau konfirmasi agenda yang mendekat.',
    formal: {
      subject: 'Pengingat Batas Waktu: [Nama Tugas/Laporan] - [Tanggal Deadline]',
      text: 'Selamat pagi Bapak/Ibu [Nama],\n\nMelalui email ini, kami ingin mengingatkan kembali mengenai batas waktu pengumpulan [Nama Dokumen/Formulir] yang dijadwalkan pada hari [Hari/Tanggal, Pukul WIB].\n\nBagi Bapak/Ibu yang belum sempat mengunggah atau menyerahkan berkas tersebut, mohon dapat segera menyelesaikannya sebelum tenggat waktu tersebut. Terima kasih atas perhatian dan kerja samanya.'
    },
    semiFormal: {
      subject: 'Friendly Reminder: Deadline [Nama Task] Besok Sore',
      text: 'Halo teman-teman / Kak [Nama],\n\nSekadar mengingatkan kembali untuk submission [Nama Form/Task] yaa, batas akhirnya adalah besok [Hari/Tanggal] pukul 17.00 WIB.\n\nBagi yang sudah selesai, terima kasih banyak! Jika ada rekan yang mengalami kendala teknis saat submit, silakan hubungi tim kami segera. Semangat!'
    },
    santaiProfesional: {
      subject: 'Gentle Reminder: [Nama Tugas]',
      text: 'Pagi guys / Kak [Nama], izin ngingetin yaa draf untuk [Nama Proyek] ditunggu hari ini sampai jam 5 sore yaa supaya bisa langsung dikompilasi. Thank you so much!'
    },
    tips: 'Gunakan frasa "Friendly reminder" atau "Sekadar mengingatkan" agar terdengar suportif dan tidak menekan.'
  },
  {
    id: 'minta-waktu',
    category: 'minta-waktu',
    categoryLabel: 'Minta Waktu Diskusi',
    situation: 'Mengajak rekan kerja atau atasan untuk sync singkat 10-15 menit.',
    formal: {
      subject: 'Permohonan Waktu Diskusi Terkait [Nama Topik/Isu]',
      text: 'Selamat pagi Bapak/Ibu [Nama],\n\nSehubungan dengan perkembangan implementasi [Nama Proyek], ada beberapa poin krusial yang memerlukan arahan dan keputusan dari Bapak/Ibu.\n\nApakah kami diperkenankan memohon waktu diskusi selama kurang lebih 15–20 menit pada [Pilihan Hari/Tanggal] di waktu luang Bapak/Ibu? Kami siap menyesuaikan dengan jadwal Bapak/Ibu. Terima kasih.'
    },
    semiFormal: {
      subject: 'Izin Minta Waktu Sync 15 Menit: [Nama Topik]',
      text: 'Halo Pak/Bu / Kak [Nama],\n\nBoleh izin minta waktunya sekitar 15 menit hari ini atau besok untuk quick catch-up terkait [Nama Topik]? Ada 2 opsi solusi yang ingin kami konsultasikan sebelum difinalisasi.\n\nKira-kira di jam berapa yang paling nyaman untuk Kakak? Nanti kami yang siapkan link meeting-nya ya. Terima kasih!'
    },
    santaiProfesional: {
      subject: 'Quick 10-min Sync: [Nama Topik]',
      text: 'Halo Mas/Mbak [Nama], apakah ada waktu luang sekitar 10 menit siang ini? Mau minta feedback singkat soal [Nama Topik]. Nanti aku samperin / call sebentar yaa kalau lagi santai. Makasih!'
    },
    tips: 'Selalu sebutkan estimasi durasi (misal: "10-15 menit") dan agenda spesifik agar lawan bicara tidak ragu menerima.'
  },
  {
    id: 'izin-telat',
    category: 'izin-telat',
    categoryLabel: 'Izin Telat Masuk',
    situation: 'Mengabarkan kepada tim atau atasan bahwa kamu akan tiba di kantor sedikit terlambat karena kendala jalan/darurat.',
    formal: {
      subject: 'Pemberitahuan Keterlambatan Hadir di Kantor - [Nama Kamu]',
      text: 'Yth. Bapak/Ibu [Nama Atasan],\n\nMelalui pesan ini, saya ingin menyampaikan permohonan maaf karena diperkirakan akan hadir terlambat di kantor sekitar [30/45] menit pada hari ini dikarenakan [Kendala Transportasi / Keperluan Medis Darurat].\n\nSaat ini saya tetap memantau komunikasi melalui handphone dan akan segera melanjutkan pekerjaan setibanya di kantor sekitar pukul [Estimasi Jam Tiba]. Mohon maaf atas ketidaknyamanan ini dan terima kasih atas pengertiannya.'
    },
    semiFormal: {
      subject: 'Izin Telat Masuk Kantor - [Nama Kamu]',
      text: 'Selamat pagi Pak/Bu [Nama] dan tim,\n\nMohon maaf, pagi ini saya kemungkinan terlambat sampai di kantor sekitar 30 menit karena [Kendala Lalu Lintas/KRL Macet]. Estimasi saya tiba di kantor sekitar pukul [Jam:Menit].\n\nUntuk koordinasi pekerjaan tetap bisa via WhatsApp yaa. Terima kasih dan mohon maaf sebelumnya!'
    },
    santaiProfesional: {
      subject: 'Izin agak telat pagi ini yaa',
      text: 'Pagi Kak [Nama], mohon izin pagi ini aku agak telat sekitar 20-30 menit ya karena ada kendala di perjalanan. Estimasi sampai jam [Jam:Menit]. Urgent tasks sudah aku pantau dari HP. Makasih pengertiannya Kak!'
    },
    tips: 'Kirimkan pesan secepat mungkin saat kamu tahu akan terlambat, jangan baru kirim saat jam kerja sudah lewat.'
  },
  {
    id: 'izin-tidak-masuk',
    category: 'izin-tidak-masuk',
    categoryLabel: 'Izin Sakit / Tidak Masuk',
    situation: 'Mengabarkan tidak bisa masuk kerja karena sakit atau urusan keluarga penting.',
    formal: {
      subject: 'Permohonan Izin Tidak Masuk Kerja (Sakit) - [Nama Kamu]',
      text: 'Yth. Bapak/Ibu [Nama Atasan],\n\nDengan hormat, melalui email ini saya bermaksud mengajukan izin tidak dapat hadir bekerja pada hari ini, [Hari/Tanggal], dikarenakan kondisi kesehatan saya yang kurang baik (sakit) dan memerlukan istirahat/pemeriksaan medis.\n\nSurat keterangan dokter akan saya lampirkan segera setelah pemeriksaan selesai. Terkait tugas yang mendesak, saya telah berkoordinasi dengan [Nama Rekan Kerja] untuk membantu penanganannya sementara waktu. Terima kasih banyak atas izin dan pengertian Bapak/Ibu.'
    },
    semiFormal: {
      subject: 'Izin Sakit Hari Ini - [Nama Kamu]',
      text: 'Selamat pagi Pak/Bu [Nama],\n\nMohon maaf, hari ini saya izin tidak bisa masuk kerja dikarenakan kondisi badan drop dan demam sejak semalam, sehingga perlu beristirahat terlebih dahulu. Surat dokter akan saya susulkan ya Pak/Bu.\n\nTugas urgent hari ini sudah saya infokan ke [Nama Rekan] untuk backup sementara. Terima kasih banyak atas doanya.'
    },
    santaiProfesional: {
      subject: 'Izin Sakit Hari Ini ya Kak - [Nama]',
      text: 'Pagi Kak [Nama], maaf banget hari ini aku harus izin sakit dulu yaa karena badan lagi meriang dan tidak fit untuk kerja. Untuk tugas meeting harian sudah aku titip ke [Nama Rekan]. Kabar selanjutnya nanti aku update ya Kak, makasih!'
    },
    tips: 'Sebutkan rekan kerja (buddy/PIC backup) yang telah kamu briefing untuk menangani hal mendesak saat kamu absen.'
  },
  {
    id: 'tolak-meeting',
    category: 'tolak-meeting',
    categoryLabel: 'Tolak / Tolak Hadir Meeting',
    situation: 'Menolak undangan meeting secara sopan karena jadwal bentrok atau bukan ranah kamu.',
    formal: {
      subject: 'Konfirmasi Ketidakhadiran Rapat: [Nama Undangan Rapat]',
      text: 'Yth. [Nama Pengundang/Bapak/Ibu],\n\nTerima kasih atas undangan rapat [Nama Rapat] yang telah dikirimkan. Mohon maaf sebesar-besarnya, saya belum dapat menghadiri pertemuan tersebut dikarenakan terdapat agenda prioritas lain yang jadwalnya bersamaan pada jam tersebut.\n\nAgar tetap mendapatkan konteks pembahasan, saya telah menugaskan [Nama Rekan/Delegasi] untuk mewakili divisi kami / mohon kesediaannya untuk membagikan Minutes of Meeting (MoM) setelah rapat selesai. Terima kasih atas pengertiannya.'
    },
    semiFormal: {
      subject: 'Declined Invitation: [Nama Rapat] - Jadwal Bentrok',
      text: 'Halo Kak [Nama],\n\nTerima kasih banyak atas undangannya. Mohon maaf sekali, di jam yang sama saya ada meeting internal dengan klien yang tidak bisa di-reschedule. Sebagai gantinya, rekan saya [Nama Rekan] akan hadir mewakili tim kami / bolehkah saya minta rangkuman notulensinya setelah meeting selesai? Terima kasih ya Kak!'
    },
    santaiProfesional: {
      subject: 'Maaf bentrok jadwal meeting: [Nama Agenda]',
      text: 'Halo Mas/Mbak [Nama], maaf banget yaa di slot jam ini aku lagi ada jadwal bentrok dengan agenda lain. Nanti tolong titip notulensi atau action point-nya yaa, kalau ada yang perlu aku bantu follow up langsung kabari saja. Thank you!'
    },
    tips: 'Selalu berikan alternatif: tawarkan delegasi pengganti atau minta dikirimi rangkuman notulen (MoM).'
  },
  {
    id: 'reschedule',
    category: 'reschedule',
    categoryLabel: 'Reschedule Jadwal',
    situation: 'Meminta perubahan jadwal pertemuan karena ada keperluan darurat atau prioritas tinggi yang mendadak.',
    formal: {
      subject: 'Permohonan Penjadwalan Ulang (Reschedule) Pertemuan: [Nama Pertemuan]',
      text: 'Yth. Bapak/Ibu [Nama],\n\nTerima kasih atas kesediaannya berdiskusi pada pertemuan yang telah dijadwalkan pada [Hari/Tanggal Awal]. Sehubungan dengan adanya agenda mendesak dari manajemen yang tidak dapat dihindarkan, kami memohon maaf dan bermaksud mengajukan permohonan penjadwalan ulang.\n\nApakah kiranya Bapak/Ibu berkenan apabila pertemuan digeser ke salah satu opsi waktu berikut:\n- Opsi 1: [Hari/Tanggal, Pukul WIB]\n- Opsi 2: [Hari/Tanggal, Pukul WIB]\n\nKami mohon maaf yang sebesar-besarnya atas ketidaknyamanan ini dan menantikan konfirmasi Bapak/Ibu. Terima kasih.'
    },
    semiFormal: {
      subject: 'Permintaan Reschedule: [Nama Diskusi/Meeting]',
      text: 'Halo Kak [Nama],\n\nMohon maaf sekali sebelumnya, sepertinya jadwal meeting kita di hari [Hari/Tanggal] besok perlu kita geser karena ada agenda mendadak dari direksi yang bertepatan.\n\nKira-kira apakah Kakak ada slot luang di hari [Pilihan Hari/Jam Alternatif]? Nanti kalender undangannya akan kami sesuaikan ya. Sekali lagi mohon maaf dan terima kasih atas fleksibilitasnya!'
    },
    santaiProfesional: {
      subject: 'Boleh izin geser jam meeting [Nama Proyek]?',
      text: 'Halo Mas/Mbak [Nama], maaf banget yaa mau izin minta tolong geser meeting kita nanti siang ke jam [Pilihan Jam Baru] atau besok pagi apakah memungkinkan? Ada urusan mendesak yang harus diselesaikan dulu. Kabari yaa kalau slot tersebut oke. Makasih banyak!'
    },
    tips: 'Selalu berikan 2 hingga 3 opsi waktu alternatif secara spesifik agar proses penentuan jadwal baru berlangsung cepat.'
  },
  {
    id: 'thank-you',
    category: 'thank-you',
    categoryLabel: 'Ucapan Terima Kasih',
    situation: 'Mengucapkan apresiasi atas bantuan tim, penyelesaian proyek, atau kolaborasi yang sukses.',
    formal: {
      subject: 'Apresiasi dan Ucapan Terima Kasih atas Kerja Sama [Nama Proyek]',
      text: 'Yth. Tim [Nama Divisi / Mitra / Bapak/Ibu],\n\nSeiring dengan telah terselesaikannya implementasi [Nama Kegiatan/Proyek], kami segenap tim ingin menyampaikan apresiasi setinggi-tingginya dan terima kasih yang tulus atas dedikasi, kerja sama, dan dukungan luar biasa yang telah diberikan sepanjang proses ini.\n\nKeberhasilan proyek ini tidak lepas dari sinergi yang terjalin dengan baik. Semoga kolaborasi ini dapat terus berlanjut di inisiatif-inisiatif mendatang. Salam hangat dan sukses selalu.'
    },
    semiFormal: {
      subject: 'Big Thanks! Proyek [Nama Proyek] Sukses Dijalankan',
      text: 'Halo teman-teman semua / Kak [Nama],\n\nThank you so much atas bantuan dan kerja kerasnya untuk peluncuran [Nama Proyek] minggu ini! Senang sekali bisa bekerja sama dengan tim yang solid dan serba sat-set seperti kalian.\n\nSemoga capaian ini jadi awal yang baik untuk target kita berikutnya. Istirahat yang cukup yaa teman-teman!'
    },
    santaiProfesional: {
      subject: 'Makasih banyak bantuannya yaa [Nama]!',
      text: 'Halo Mas/Mbak [Nama], mau ngucapin makasih banyak yaa atas bantuannya kemarin beresin data dan presentasi. Hasilnya tadi di-praise sama user/atasan. Really appreciate your help and support!'
    },
    tips: 'Menyebutkan dampak spesifik dari bantuan rekan kerja membuat ucapan terima kasih terasa tulus dan bermakna.'
  },
  {
    id: 'update-progress',
    category: 'update-progress',
    categoryLabel: 'Update Progress Kerja',
    situation: 'Memberikan kabar berkala terkait progres pekerjaan yang sedang kamu garap tanpa perlu ditanya.',
    formal: {
      subject: 'Laporan Perkembangan Pekerjaan (Progress Update): [Nama Proyek] per [Tanggal]',
      text: 'Yth. Bapak/Ibu [Nama Pimpinan/Manajemen],\n\nBerikut kami sampaikan ringkasan progres pengerjaan [Nama Proyek] untuk periode [Minggu Ini / Tanggal]:\n\n1. Selesai Dilaksanakan:\n- [Poin Capaian 1]\n- [Poin Capaian 2]\n\n2. Sedang Berjalan (In Progress):\n- [Poin Pekerjaan Berjalan] - Estimasi selesai [Tanggal]\n\n3. Kendala & Kebutuhan Mitigasi:\n- [Poin Kendala / Tidak Ada Kendala Signifikan]\n\nKami akan menyampaikan laporan berikutnya sesuai jadwal. Terima kasih atas perhatian dan arahannya.'
    },
    semiFormal: {
      subject: 'Weekly Progress Update: [Nama Proyek]',
      text: 'Halo Pak/Bu / Tim [Nama],\n\nIzin memberikan update berkala untuk pengerjaan [Nama Proyek] minggu ini yaa:\n\n✅ Done:\n- [Task Selesai 1]\n- [Task Selesai 2]\n\n⏳ Next Focus:\n- [Task Berikutnya]\n\n⚠️ Blocker/Notes:\n- [Catatan jika butuh bantuan / Aman]\n\nJika ada arahan tambahan, silakan beri tahu kami. Terima kasih banyak!'
    },
    santaiProfesional: {
      subject: 'Status update: [Nama Task]',
      text: 'Halo Kak [Nama], mau update singkat yaa untuk task [Nama Task] per siang ini progresnya sudah [80% / tahap finalisasi]. Draf akan dikirimkan sebelum jam 5 sore ini untuk di-review. Thanks!'
    },
    tips: 'Gunakan format "Done, In Progress, Blockers" agar mudah dibaca dalam waktu kurang dari 30 detik.'
  }
];
