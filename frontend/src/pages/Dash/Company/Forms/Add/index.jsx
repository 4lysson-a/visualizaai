import React from 'react';

import FormTemplate from '@/pages/Dash/Company/Forms/Template';

import createProduct from '@/service/product/create';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { paths } from '@/router/paths';

const AddForm = ({ onClose }) => {
  const params = useParams();
  const company_id = params[paths.dash.company.param];

  const [addNewProduct] = useAuth(s => [s.addNewProduct]);

  const initialData = {
    name: '',
    price: '',
    category: '',
    description: ''
  };

  const [formData, setFormData] = React.useState(initialData);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = e => {
    setFormData({
      ...formData,
      imageFile: e.target.files[0]
    });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const res = await createProduct({
        name: formData.name,
        userId: 'U6QWvRQxuT',
        companyId: company_id,
        imageFile: formData.imageFile,
        price: Number(formData.price),
        description: formData.description,
        categoryId: e.target.category.value
      });

      addNewProduct(company_id, res);
    } catch (error) {
      console.log(error);
      toast.error('Erro ao adicionar produto!');
    } finally {
      onClose();
    }
  };

  return (
    <FormTemplate
      onClose={onClose}
      title="Adicionar produto"
      formData={formData}
      onSubmit={handleSubmit}
      handleImage={handleImage}
      handleChange={handleChange}
    />
  );
};

export default AddForm;
