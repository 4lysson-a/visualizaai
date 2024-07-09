Parse.Cloud.define('createCompany', async (request) => {
  const { name, imageFile, userId } = request.params;

  if (!name || !userId) {
    throw new Error('Nome da empresa ou usuário não foi fornecido');
  }

  const query = new Parse.Query(Parse.User);
  query.equalTo('objectId', userId);

  const user = await query.first({ useMasterKey: true });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const Company = Parse.Object.extend('Company');
  const company = new Company();

  company.set('name', name);

  if (imageFile) {
    const safeFileName = imageFile?.name?.replace(/[^a-zA-Z0-9-_]/g, '_');
    const parseFile = new Parse.File(safeFileName, imageFile);
    await parseFile.save();
    company.set('image', parseFile);
  }

  const companyReturned = await company.save();

  const relation = user.relation('user_companys');
  relation.add(companyReturned);
  await user.save();

  console.log('Empresa criada com sucesso!');
  return companyReturned;
});
