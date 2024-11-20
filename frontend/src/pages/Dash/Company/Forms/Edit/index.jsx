import React from 'react';

import editProduct from '@/service/product/edit';
import FormTemplate from '@/pages/Dash/Company/Forms/Template';
import deleteProduct from '@/service/product/delete';
import { toast } from 'react-toastify';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { useParams } from 'react-router-dom';
import { paths } from '@/router/paths';
import { categoryEnum } from '@/utils/categoryEnum';

const EditForm = ({ product, onClose }) => {
  const params = useParams();
  const company_id = params[paths.dash.company.param];

  const [removeProduct, updateProduct] = useAuth(s => [s.removeProduct, s.updateProduct]);

  const initialData = {
    name: product?.get('name'),
    price: product?.get('price'),
    description: product?.get('description'),
    imageFile: product?.get('image')?.url(),
    category: product?.get('category_id')?.id
  };

  const [formData, setFormData] = React.useState(initialData);

  const handleResetCategory = () => {
    setFormData({
      ...formData,
      category: null
    });
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDelete = async () => {
    try {
      const confirmation = confirm('Tem certeza de que deseja excluir este produto?');

      if (!confirmation) {
        return;
      }

      await deleteProduct(product.id);
      removeProduct(company_id, product.id);
    } finally {
      onClose();
    }
  };

  const handleImage = e => {
    setFormData({
      ...formData,
      imageFile: e.target.files[0]
    });
  };

  const handleSubmit = async e => {
    try {
      if (formData.category === categoryEnum.NO_CATEGORY) {
        handleResetCategory();
      }

      e.preventDefault();

      const compareWhatChanged = (initialData, formData) => {
        const changed = {};

        for (const key in formData) {
          if (formData[key] !== initialData[key]) {
            changed[key] = formData[key];
          }
        }

        return changed;
      };

      const changed = compareWhatChanged(initialData, {
        ...formData,
        price: Number(formData.price)
      });

      if (Object.keys(changed).length === 0) {
        return;
      }

      const res = await editProduct(product.id, changed);
      updateProduct(company_id, res);
    } catch (error) {
      console.log(error);
      toast.error('Erro ao editar produto!');
    } finally {
      onClose();
    }
  };

  return (
    <FormTemplate
      handleResetCategory={handleResetCategory}
      onClose={onClose}
      title={product?.get('name')}
      formData={formData}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      handleImage={handleImage}
      handleChange={handleChange}
    />
  );
};

export default EditForm;
