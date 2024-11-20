import React from 'react';

import createCheckoutSession from '@/service/stripe/createCheckoutSession';

export default function SubscriptionSubscribe() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await createCheckoutSession();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full pt-10 pb-10 p-5 flex flex-col justify-around">
      <p className="text-xl">Finalize sua assinatura para aproveitar todos os beneficios do app</p>
      <h1 className="text-5xl font-bold text-primary text-center">
                R$ 14,99 <span className="text-2xl opacity-80">/mes</span>
      </h1>
      {loading ? (
        <div className="bg-primary text-background font-bold shadow-xl text-xl p-4 pl-10 pr-10 rounded-full active:scale-90">
          <p className="text-xl text-center">Carregando...</p>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="bg-primary text-background font-bold shadow-xl text-xl p-4 pl-10 pr-10 rounded-full active:scale-90"
        >
                    Assinar
        </button>
      )}
    </div>
  );
}
