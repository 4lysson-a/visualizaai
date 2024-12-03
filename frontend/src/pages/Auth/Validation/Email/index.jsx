import React from 'react';
import Lottie from 'lottie-react';
import BackButton from '@/components/shared/BackButton';
import emailAnimation from '@/assets/animations/email.json';

import { GmailBtn, ReloadBtn } from './buttons';
import { useAuth0 } from '@auth0/auth0-react';

export default function EmailValidation() {
  const { logout } = useAuth0();

  return (
    <div className="p-10 py-20 flex justify-center items-center flex-col gap-10">
      <BackButton onClick={logout} />

      <div className="flex flex-col gap-4">
        <Lottie animationData={emailAnimation} />
        <h1 className="text-2xl font-medium">
                    Para finalizar a criação da sua conta <span className="text-primary">valide seu email</span>
        </h1>
        <p className="text-lg">
                    Após finalizar a validação volte nessa tela e clique no botão de recarregar, ou apenas faça login
                    novamente no site
        </p>
      </div>

      <div className="flex gap-4">
        <GmailBtn />
        <ReloadBtn />
      </div>
    </div>
  );
}
