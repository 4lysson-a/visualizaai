const stripeController = require('../../src/controller/stripeController');

Parse.Cloud.define('createCheckoutSession', async (request) => {
  const { stripeCustomerId } = request.params;
  const response = await stripeController.createCheckoutSession({
    customerId: stripeCustomerId,
  });
  return response;
});
