import { AppParse } from '../Parse';

export default async function createCheckoutSession({ stripeCustomerId }) {
  const response = await AppParse.Cloud.run('createCheckoutSession', { stripeCustomerId });
  return response;
}
