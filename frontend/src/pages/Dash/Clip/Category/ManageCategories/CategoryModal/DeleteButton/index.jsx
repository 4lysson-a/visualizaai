import X from '@/assets/svgComponents/X';
import SimpleCircularLoading from '@/components/shared/Loading/SimpleCircularLoading';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import React from 'react';
import { toast } from 'react-toastify';

export default function DeleteButton({ category }) {
  const [loading, setLoading] = React.useState(false);
  const [removeCategory, companys] = useAuth(s => [s.removeCategory, s.companys]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await removeCategory(companys[0].id, category);
    } catch {
      toast.error('Erro ao deletar categoria');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-red-400 font-bold bg-background p-1 shadow-xl rounded-full active:scale-90">
        <SimpleCircularLoading />
      </div>
    );
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-400 font-bold bg-background p-1 shadow-xl rounded-full active:scale-90"
    >
      <X />
    </button>
  );
}
