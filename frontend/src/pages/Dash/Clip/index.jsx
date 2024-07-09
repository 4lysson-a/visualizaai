import React from 'react';

import PageTemplate from '@/pages/Dash/lib/PageTemplate';

import LinkMenu from '@/pages/Dash/Clip/LinkMenu';
import QrCode from '@/pages/Dash/Clip/QrCode';

import Separator from '@/components/shared/Separator';
import DownloadMenu from './DownloadMenu';
import Category from './Category';

export default function Clip() {
  return (
    <PageTemplate title={{ text: 'Gerenciar', highlight: 'Opções' }}>
      <Category />
      <Separator />
      <LinkMenu />
      <Separator />
      <DownloadMenu />
      <Separator />
      <QrCode />
    </PageTemplate>
  );
}
