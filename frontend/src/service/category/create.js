import { AppParse } from '../Parse';

export async function createNewCategory(company, name, color) {
  try {
    const user = await AppParse.User.currentAsync();

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const Category = AppParse.Object.extend('Category');
    const category = new Category();

    category.set('name', name);
    category.set('color', color);

    const categoryReturned = await category.save({ useMasterKey: true });

    const relation = company.relation('categories');
    relation.add(categoryReturned);

    await company.save({ useMasterKey: true });

    console.log('Categoria criada com sucesso!');

    return categoryReturned;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
  }
}
