import React from 'react';
import QRCodeStyling from 'qr-code-styling';

import { useShallow } from 'zustand/react/shallow';

import useAuth from '@/hooks/zustand/(private)/useAuth';

import { sty } from '@/utils';
import { initialQrCodeValue } from './utils';

import DownloadBtn from './DownloadBtn';
import VariantOptions from './VariantOptions';

export default function QrCode() {
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState(initialQrCodeValue);

  const ref = React.useRef(null);
  const isFirstRender = React.useRef(true);

  const companys = useAuth(useShallow(s => s.companys));

  const qrCode = React.useMemo(() => {
    const qrCodeInstance = new QRCodeStyling({
      width: 250,
      height: 250,
      type: 'png',
      cornersSquareOptions: options.cornersSquareOptions,
      image: options.logo,
      data: `${import.meta.env.VITE_CLIENT_URL}/${companys[0].id}`,
      dotsOptions: options.dotsOptions,
      backgroundOptions: {
        color: 'transparent'
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 5
      }
    });

    return qrCodeInstance;
  }, []);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      qrCode.append(ref.current);

      return;
    }
  }, []);

  React.useEffect(() => {
    qrCode.update({
      cornersSquareOptions: options.cornersSquareOptions,
      dotsOptions: options.dotsOptions,
      image: options.logo
    });
  }, [options]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl">Gerar QRCode</h2>
        <p>Escolha entre uma das variantes disponiveis para fazer o download do seu QR Code.</p>
        <p className="text-sm opacity-80">
          <span className="text-primary">Aviso:</span> O fundo apresentado na pré visualização abaixo, é
                    apenas para demonstração, ao fazer o download do seu QR Code, ele virá com um fundo transparente
        </p>
      </div>

      <DownloadBtn setLoading={setLoading} qrCode={qrCode} />

      <VariantOptions options={options} setOptions={setOptions} />

      <div
        style={{ background: options.demoBackground }}
        className="flex flex-col justify-center items-center rounded-xl pt-5 pb-5 shadow-xl overflow-hidden"
      >
        {loading ? (
          <div className="h-[250px] w-[250px] bg-card rounded-xl animate-pulse" />
        ) : (
          <div className={sty(loading && 'hidden')} ref={ref} />
        )}
      </div>
    </div>
  );
}
