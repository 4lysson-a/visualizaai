import React from 'react';

import Loading from '@/components/shared/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import emailAnimation from '@/assets/animations/email.json';

import Lottie from 'lottie-react';

export default function Page() {
  const { logout, user } = useAuth0();

  if (!user?.email_verified) {
    return (
      <div className="h-full p-10 flex justify-center items-center flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Lottie animationData={emailAnimation} />
          <h1 className="text-2xl font-medium">
                        Para finalizar a criação da sua conta <span className="text-primary">valide seu email</span>
          </h1>
        </div>

        <button
          onClick={() => {
            window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
          }}
          type="button"
          className="flex gap-2 items-center font-medium text-lg bg-card border border-colorBorderContrsat p-2 rounded-full px-4"
        >
          <svg
            className="w-6 h-6"
            width="211"
            height="158"
            viewBox="0 0 211 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3263 157.631H47.7551V76.448L0 40.6314V143.305C0 151.232 6.42307 157.631 14.3263 157.631Z"
              fill="#4285F4"
            />
            <path
              d="M162.372 157.631H195.801C203.728 157.631 210.127 151.208 210.127 143.305V40.6314L162.372 76.448"
              fill="#34A853"
            />
            <path
              d="M162.372 14.3673V76.4487L210.127 40.6326V21.5304C210.127 3.81311 189.903 -6.28669 175.744 4.33843"
              fill="#FBBC04"
            />
            <path
              d="M47.7511 76.4475V14.3661L105.057 57.3458L162.363 14.3661V76.4475L105.057 119.427"
              fill="#EA4335"
            />
            <path
              d="M0 21.5304V40.6326L47.7551 76.4487V14.3673L34.3837 4.33843C20.2004 -6.28669 0 3.81311 0 21.5304Z"
              fill="#C5221F"
            />
          </svg>
                    Abrir Gmail
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-between flex-col h-full p-6 gap-4">
      <div className="h-full flex justify-center items-center flex-col gap-4">
        <div>
          <Loading />
        </div>
      </div>
      <p className="animate-fade-up text-primary font-bold text-xl">Estamos validando o seu login</p>
      <button onClick={logout} type="button">
                Logout
      </button>
    </div>
  );
}
