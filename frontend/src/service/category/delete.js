export default async function deleteCategory(category) {
  try {
    const result = await category.destroy();
    return result;
  } catch (e) {
    console.log('Não foi possível deletar a categoria:', e);
  }
}
