const stripeController = require('../../src/controller/stripeController');

Parse.Cloud.define('isSubscriptionActive', async (request) => {
	const { userId } = request.params;

	const response = await stripeController.isSubscriptionActive({ userId });
	return response;
});
