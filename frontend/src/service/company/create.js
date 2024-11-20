import { AppParse } from '../Parse';

export async function createNewCompany({ name, imageFile }) {
  try {
    const user = await AppParse.User.currentAsync();

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const Company = AppParse.Object.extend('Company');
    const company = new Company();

    company.set('name', name);

    if (imageFile) {
      const safeFileName = imageFile?.name?.replace(/[^a-zA-Z0-9-_]/g, '_');
      const parseFile = new AppParse.File(safeFileName, imageFile);
      await parseFile.save();
      company.set('image', parseFile);
    }

    const companyReturned = await company.save();

    const relation = user.relation('user_companys');
    relation.add(companyReturned);
    await user.save();

    console.log('Empresa criada com sucesso!');
    return companyReturned;
  } catch (error) {
    console.error('Erro ao criar empresa:', error);
  }
}
