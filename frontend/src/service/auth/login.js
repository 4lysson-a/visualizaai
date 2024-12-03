import { AppParse } from '@/service/Parse';

export const login = async (username, password) => {
  const user = await AppParse.User.logIn(username, password);

  return {
    ...user
  };
};
