import React, { createContext, useContext, useState, useEffect } from 'react';

export type KeycapTheme = 'creator-dark' | 'mechanical-light' | 'cyber-amber' | 'royal-blue';

export interface KeycapThemeInfo {
  id: KeycapTheme;
  name: string;
  badge: string;
  description: string;
}

export const KEYCAP_THEMES: KeycapThemeInfo[] = [
  {
    id: 'creator-dark',
    name: 'Creator Dark (Obsidian 3D)',
    badge: 'Paling Jelas di Video',
    description: 'Tombol gelap kontras tinggi dengan teks putih tebal & bevel mekanikal 3D'
  },
  {
    id: 'cyber-amber',
    name: 'Cyber Amber (Highlighter)',
    badge: 'Eye-Catching',
    description: 'Tombol kuning/amber neon terang untuk thumbnail & short video yang mencolok'
  },
  {
    id: 'royal-blue',
    name: 'Royal Blue (Studio)',
    badge: 'Brand Playbook',
    description: 'Gaya biru elektrik premium selaras dengan tema Playbook Ezplan'
  },
  {
    id: 'mechanical-light',
    name: 'Mechanical White (Taktil)',
    badge: 'Klasik Minimalis',
    description: 'Tombol putih bersih dengan basis bayangan 3D tebal dan kontras tajam'
  }
];

interface KeycapContextType {
  keycapTheme: KeycapTheme;
  setKeycapTheme: (theme: KeycapTheme) => void;
}

const KeycapThemeContext = createContext<KeycapContextType>({
  keycapTheme: 'creator-dark',
  setKeycapTheme: () => {}
});

export const KeycapThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [keycapTheme, setKeycapThemeState] = useState<KeycapTheme>('creator-dark');

  // Load persisted preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('playbook_keycap_theme') as KeycapTheme;
      if (saved && ['creator-dark', 'mechanical-light', 'cyber-amber', 'royal-blue'].includes(saved)) {
        setKeycapThemeState(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setKeycapTheme = (theme: KeycapTheme) => {
    setKeycapThemeState(theme);
    try {
      localStorage.setItem('playbook_keycap_theme', theme);
    } catch {
      // Ignore
    }
  };

  return (
    <KeycapThemeContext.Provider value={{ keycapTheme, setKeycapTheme }}>
      {children}
    </KeycapThemeContext.Provider>
  );
};

export const useKeycapTheme = () => useContext(KeycapThemeContext);
