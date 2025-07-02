import { writable } from 'svelte/store';

export type Language = 'fr' | 'en';

// Create a writable store for the current language
export const currentLanguage = writable<Language>('fr');

// Function to change language
export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lang);
  }
}

// Function to get initial language from localStorage or browser
export function getInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('preferred-language') as Language;
    if (stored && ['fr', 'en'].includes(stored)) {
      return stored;
    }
    
    // Fallback to browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('en')) return 'en';
  }
  
  return 'fr'; // Default to French
}