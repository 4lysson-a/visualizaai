import React from "react";

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

export default function useChangeTheme() {
  React.useEffect(() => {
    prefersDarkScheme.addEventListener('change', () => {
      if (prefersDarkScheme.matches) {
        localStorage.setItem('theme', 'dark');
      }

      else {
        localStorage.setItem('theme', 'light');
      }
    });
  }, [])

  return prefersDarkScheme;
}