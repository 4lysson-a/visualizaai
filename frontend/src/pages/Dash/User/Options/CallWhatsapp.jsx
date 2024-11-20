import React from 'react';

export default function CallWhatsapp() {
  const phone = import.meta.env.VITE_PHONE_NUMBER;

  const handleCallWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phone}`, '_blank');
  };

  return (
    <div className="h-full flex flex-col gap-5 text-center">
      <div className="h-full flex flex-col gap-5 text-center">
        <button
          onClick={handleCallWhatsApp}
          type="button"
          className="bg-transparent font-bold p-3 text-green-400 border border-green-400 rounded-md shadow-md active:scale-90 active:bg-primary active:border-primary active:text-background"
        >
                    Entre em contato
        </button>
      </div>
    </div>
  );
}
