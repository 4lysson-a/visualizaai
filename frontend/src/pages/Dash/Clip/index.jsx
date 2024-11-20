import React from 'react';

import QrCode from '@/pages/Dash/Clip/QrCode';
import LinkMenu from '@/pages/Dash/Clip/LinkMenu';
import Phone from '@/pages/Dash/Clip/Phone/index.jsx';
import Separator from '@/components/shared/Separator';
import PageTemplate from '@/pages/Dash/lib/PageTemplate';
import Category from '@/pages/Dash/Clip/Category/index.jsx';
import UserForm from '@/pages/Dash/Clip/UserForm/index.jsx';
import DownloadMenu from '@/pages/Dash/Clip/DownloadMenu/index.jsx';

export default function Clip() {
  return (
    <PageTemplate title={{ text: 'Gerenciar', highlight: 'Opções' }}>
      <Phone />
      <Separator />
      <UserForm />
      <Separator />
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
