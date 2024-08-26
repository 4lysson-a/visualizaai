Parse.Cloud.define("updatePhone", async (request) => {
  const { phone } = request.params;

  if (!phone) {
    throw new Error("Telefone não foi fornecido");
  }

  const user = request.user;

  if (!user) {
    throw new Error("Usuário não está autenticado");
  }

  user.set("phone", phone);

  try {
    const response = await user.save(null, { useMasterKey: true });
    return response;
  } catch (error) {
    return error;
  }
});
