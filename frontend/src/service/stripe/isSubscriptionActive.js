import { AppParse } from '../Parse';

export default async function isSubscriptionActive({ userId }) {
  const response = await AppParse.Cloud.run('isSubscriptionActive', { userId: userId });
  return response;
}
