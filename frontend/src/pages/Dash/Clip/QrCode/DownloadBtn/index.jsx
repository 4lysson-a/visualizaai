import React from 'react';

import useAuth from '@/hooks/zustand/(private)/useAuth';
import { useShallow } from 'zustand/react/shallow';

export default function DownloadBtn({ qrCode, setLoading }) {
  const companys = useAuth(useShallow(s => s.companys));

  const dataURLtoBlob = dataurl => {
    const arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length; // Mude para 'let' aqui
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  const shareQRCode = async blob => {
    if (navigator.share) {
      const file = new File([blob], 'qrcode.png', { type: blob.type });
      try {
        await navigator.share({
          files: [file],
          title: 'Compartilhe este QR Code',
          text: 'Aqui está o QR Code!'
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      console.log('Web Share API não disponível.');
    }
  };

  const handleDownload = () => {
    setLoading(true);

    qrCode.update({
      width: 1000,
      height: 1000
    });

    qrCode
      .download({
        name: companys[0].get('name'),
        extension: 'png'
      })
      .then(() => {
        const dataUrl = qrCode._canvas.toDataURL();
        const blob = dataURLtoBlob(dataUrl);
        shareQRCode(blob);

        qrCode.update({
          width: 250,
          height: 250
        });
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="bg-primary p-3 rounded-full font-bold active:scale-90 text-[var(--full)]"
    >
            Baixar QR Code
    </button>
  );
}
