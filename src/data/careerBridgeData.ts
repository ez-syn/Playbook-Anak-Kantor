export interface CareerBridgePillar {
  id: string;
  title: string;
  iconName: string;
  description: string;
  actionPrompt: string;
}

export const careerPillars: CareerBridgePillar[] = [
  {
    id: 'pillar-skills',
    title: 'Skill & Kompetensi Baru',
    iconName: 'Sparkles',
    description: 'Catat kemampuan teknis atau tools baru yang kamu kuasai selama bekerja (misal: Excel XLOOKUP, Data Modeling, Pitching).',
    actionPrompt: 'Catat tools atau rumus baru yang bikin kerjaanmu beres lebih cepat.'
  },
  {
    id: 'pillar-achievements',
    title: 'Achievement & Dampak Terukur',
    iconName: 'Award',
    description: 'Dokumentasikan hasil kerja berupa angka (misal: berhasil efisiensi waktu 4 jam/minggu, memangkas 20% komplain, merapikan 500+ database).',
    actionPrompt: 'Catat angka hasil kerjaanmu selagi datanya masih gampang dicari.'
  },
  {
    id: 'pillar-projects',
    title: 'Project Penting & Portofolio',
    iconName: 'FolderGit2',
    description: 'Simpan ringkasan proyek besar yang pernah kamu tangani beserta peran dan kontribusimu di dalamnya.',
    actionPrompt: 'Modal penting buat bahan evaluasi tahunan atau update CV.'
  },
  {
    id: 'pillar-training',
    title: 'Training & Sertifikasi',
    iconName: 'GraduationCap',
    description: 'Rekap riwayat pelatihan internal kantor, webinar eksternal, atau workshop yang telah kamu selesaikan.',
    actionPrompt: 'Biar nggak lupa pernah ikut pelatihan atau webinar apa aja.'
  },
  {
    id: 'pillar-target-role',
    title: 'Target Peran & Growth Plan',
    iconName: 'Target',
    description: 'Tuliskan gap skill apa yang masih perlu kamu pelajari untuk mencapai jenjang atau spesialisasi yang kamu minati.',
    actionPrompt: 'Biar pas 1-on-1 bareng atasan, kamu tau mau minta arahan apa.'
  },
  {
    id: 'pillar-evaluasi',
    title: 'Evaluasi & Refleksi Berkala',
    iconName: 'Compass',
    description: 'Luangkan waktu tiap akhir kuartal untuk melihat apa yang berjalan baik dan apa yang perlu diperbaiki.',
    actionPrompt: 'Biar kamu sadar kalau usaha dan hasil kerjamu selama ini beneran ada.'
  }
];
