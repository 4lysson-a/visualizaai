import React from 'react';

import { LocalStorage } from '@/helpers/LocalStorage';

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

export default function useChangeTheme() {
  React.useEffect(() => {
    prefersDarkScheme.addEventListener('change', () => {
      if (prefersDarkScheme.matches) {
        LocalStorage.set('theme', 'dark');
      } else {
        LocalStorage.set('theme', 'light');
      }
    });
  }, []);

  return prefersDarkScheme;
}
