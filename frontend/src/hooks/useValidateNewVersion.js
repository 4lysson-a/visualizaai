import { LocalStorage } from '@/helpers/LocalStorage';
import React from 'react';

const owner = '4lysson-a';
const repo = 'visualizaai';

const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

export default function useValidateNewVersion() {
  const version = LocalStorage.get('version');
  const today = new Date().toISOString().split('T')[0];

  if (version?.exp === today) return;

  React.useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao obter a última release: ${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(data => {
        const currentVersion = LocalStorage.get('version');
        if (currentVersion === data?.tag_name) return;

        const tag = data?.tag_name;

        if (version?.tag === tag) {
          return;
        } else {
          LocalStorage.set('version', { tag, exp: today });
          window.location.href = '/blog';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);
}
