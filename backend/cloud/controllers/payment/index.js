const stripeService = require("../../helpers/stripe-service");

Parse.Cloud.define('createCheckoutSession', async (request) => {
  const { stripeCustomerId } = request.params;
  const response = await stripeService.createCheckoutSession({
    customerId: stripeCustomerId,
  });
  return response;
});
