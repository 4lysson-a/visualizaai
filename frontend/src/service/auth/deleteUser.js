import { AppParse } from '../Parse';

export default async function deleteUser({ userId }) {
  const response = await AppParse.Cloud.run('deleteUser', { userId });
  return response;
}
