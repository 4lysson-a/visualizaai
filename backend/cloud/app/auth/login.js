Parse.Cloud.define('login', async (request) => {
  const { username, password } = request.params;

  if (!username || !password) {
    throw new Error('Email ou senha não foram fornecidos');
  }

  try {
    const user = await Parse.User.logIn(username, password);

    return user;
  } catch (error) {
    return error;
  }
});
