import useAuth from "@/hooks/zustand/(private)/useAuth";
import { AppParse } from "@/service/Parse";
import React from "react";

export default function Phone() {
  const auth = useAuth((s) => s.auth);

  console.log(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value.replace(/[\s()+-]/g, "");

    const response = await AppParse.Cloud.run("updatePhone", { phone });
    console.log(response);
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Número de telefone</h2>
      <p>
        Para habilitara opção de pedidos via WhatsApp, insira o número de
        telefone
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-card p-5 box-border flex flex-col gap-5 rounded-xl shadow-xl">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+55 (00) 00000-0000"
          className="w-full p-2 rounded-md border border-card bg-background"
        />
        <button
          type="submit"
          className="w-full bg-background p-2 rounded-lg font-bold text-white gap-3 flex items-center justify-center active:scale-95 outline-none">
          Salvar
        </button>
      </form>
    </div>
  );
}
