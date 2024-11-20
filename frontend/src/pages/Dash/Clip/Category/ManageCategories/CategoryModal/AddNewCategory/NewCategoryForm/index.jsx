import useAuth from '@/hooks/zustand/(private)/useAuth';
import React from 'react';

export default function NewCategoryForm({ onClick }) {
  const [addNewCategory, companys] = useAuth(s => [s.addNewCategory, s.companys]);

  const company = companys[0];

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!company) throw new Error('Company not found');

      const { name, color } = e.target;
      await addNewCategory(company, name.value, color.value);
      onClick();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border w-full p-5 rounded-md shadow-xl flex flex-col gap-6 absolute bottom-16 left-0"
    >
      <p
        onClick={onClick}
        className="absolute top-[-50px] right-0 bg-red-500 font-bold text-white p-3 flex items-center justify-center rounded-full w-10 h-10"
      >
                X
      </p>

      <div className="flex flex-col gap-3">
        <input
          name="name"
          type="name"
          placeholder="Nome da categoria"
          className="shadow-xl text-texts bg-background font-bold w-full p-3 rounded-md"
        />
        <input name="color" type="color" className="shadow-xl w-full p-2 bg-background rounded-md h-14" />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-background font-bold rounded-md p-4 active:scale-95"
      >
                Adicionar
      </button>
    </form>
  );
}
