import React from 'react';

const FeedbackForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <textarea
        placeholder="Digite aqui sua mensagem"
        id="feedback"
        name="feedback"
        rows="5"
        className="p-2 rounded-md bg-card text-texts border border-[var(--primary)]"
      />
      <button className="bg-card p-2 rounded-xl active:scale-95">Enviar</button>
    </form>
  );
};

const SendFeedback = () => {
  const [open, setOpen] = React.useState(false);

  if (open) {
    return <FeedbackForm />;
  }

  return (
    <button onClick={() => setOpen(!open)} className="bg-card p-2 rounded-xl active:scale-95">
      {open ? 'Fechar' : 'Enviar feedback'}
    </button>
  );
};

export default function Feedback() {
  return (
    <div className="flex flex-col gap-5 relative">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl">Nós queremos ouvir você {':)'}</h2>
        <p>Envie-nos um feedback sobre o que você acha do nosso app.</p>
        <p>Podem ser sugestões de melhorias, reclamações elogios o que você quiser !</p>
      </div>

      <SendFeedback />
    </div>
  );
}
