export type Platform = 'windows' | 'mac' | 'all';

export type AppFilter = 
  | 'all'
  | 'excel'
  | 'word'
  | 'powerpoint'
  | 'browser'
  | 'file'
  | 'sheets'
  | 'email'
  | 'meeting'
  | 'os';

export type TagFilter = 
  | 'all'
  | 'wajib-hafal'
  | 'sering-dipakai'
  | 'produktivitas'
  | 'editing'
  | 'navigasi'
  | 'presentasi'
  | 'formula';

export interface ShortcutItem {
  id: string;
  name: string;
  keysWindows?: string[];
  keysMac?: string[];
  keys?: string[]; // If same or unified representation
  platform: 'windows' | 'mac' | 'both';
  app: string;
  category: string;
  description: string;
  tips?: string;
  isWajibHafal?: boolean;
  tag: 'Dasar' | 'Sering Dipakai' | 'Produktivitas' | 'Editing' | 'Navigasi' | 'Presentasi' | 'Formula' | 'Data' | 'Formatting' | 'File' | 'Finder' | 'Review' | 'Inbox' | 'Audio & Video' | 'Meeting Controls' | string;
  synonyms?: string[];
}

export interface QuickAccessAction {
  id: string;
  label: string;
  iconName: string;
  description: string;
  windowsShortcut: string[];
  macShortcut: string[];
  app: string;
  categoryTag: string;
  tips?: string;
}

export interface BankKalimatItem {
  id: string;
  category: string;
  categoryLabel: string;
  situation: string;
  formal: {
    subject?: string;
    text: string;
  };
  semiFormal: {
    subject?: string;
    text: string;
  };
  santaiProfesional: {
    subject?: string;
    text: string;
  };
  tips?: string;
}

export interface MeetingChecklistGroup {
  id: string;
  phase: 'sebelum' | 'saat' | 'setelah';
  phaseTitle: string;
  phaseSubtitle: string;
  items: {
    id: string;
    title: string;
    description: string;
    actionableTip: string;
  }[];
}

export interface FileNamingGuide {
  badExample: string[];
  goodExample: string[];
  rules: {
    title: string;
    explanation: string;
    sample: string;
  }[];
}

export interface OfficeTipItem {
  id: string;
  title: string;
  summary: string;
  whyItMatters: string;
  practicalSteps: string[];
  badge: string;
}

export interface OfficeFormulaItem {
  id: string;
  name: string;
  category: 'basic' | 'lookup' | 'logic' | 'aggregation' | 'text' | 'date' | 'dynamic' | 'gsheets';
  categoryLabel: string;
  supportedIn: 'both' | 'excel' | 'gsheets';
  difficulty: 'Wajib Dasar' | 'Menengah' | 'Power User';
  purpose: string;
  syntax: string;
  formulaExample: string;
  sampleCase: string;
  proTip: string;
}
