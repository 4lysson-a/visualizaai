import React from 'react';
import ImagePreview from '@/components/shared/ImagePreview';
import Category from './Category';

const FormTemplate = ({
  title,
  onSubmit,
  formData,
  handleChange,
  onDelete,
  handleImage,
  onClose,
  handleResetCategory
}) => {
  return (
    <>
      <header className="bg-[var(--card)] w-full fixed left-0 top-0 p-3 pr-5 pl-5 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--primary)]">{title}</h1>
        <div className="text-2xl font-bold text-[var(--primary)]">
          <button onClick={() => onClose()}>x</button>
        </div>
      </header>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-[var(--card)] rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="p-3 bg-[var(--card)] rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="p-3 bg-[var(--card)] rounded-xl"
            />
          </div>

          <Category
            handleResetCategory={handleResetCategory}
            handleChange={handleChange}
            formData={formData}
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="image">Imagem</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImage}
              className="p-3 bg-[var(--card)] rounded-xl"
            />

            <div>
              {formData.imageFile && (
                <ImagePreview
                  className="w-32 h-32 rounded-xl object-cover"
                  alt={formData.name}
                  key={formData.imageFile}
                  source={formData.imageFile}
                />
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="submit"
              className="p-3 bg-[var(--card)] rounded-xl font-bold text-[var(--texts)] transition duration-200 text-center active:scale-95"
            >
                            Salvar
            </button>

            {onDelete && (
              <button
                onClick={onDelete}
                type="button"
                className="p-3 bg-red-500 rounded-xl font-bold text-white transition duration-200 text-center active:scale-95"
              >
                                Excluir
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormTemplate;
