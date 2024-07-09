const stripeService = require('../../helpers/stripe-service');

Parse.Cloud.define('isSubscriptionActive', async (request) => {
  const { userId } = request.params;

  const response = await stripeService.isSubscriptionActive({ userId });
  return response;
});
