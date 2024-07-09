const stripeController = require('../../src/controller/stripeController');

Parse.Cloud.define('createAccount', async (request) => {
	const { email, password, name } = request.params;

	if (!email || !password || !name) {
		throw new Error('Email, senha, nome ou telefone não foram fornecidos');
	}

	const query = new Parse.Query(Parse.User);
	query.equalTo('email', email);

	const useMasterKey = process.env.ENV === 'dev' ? true : false;
	const userExists = await query.first({ useMasterKey: useMasterKey });

	const stripeAllCustomers = await stripeController.listAllCustomers();
	const stripeCustomerExists = stripeAllCustomers.data.find((customer) => customer.email === email);

	if (userExists || stripeCustomerExists) {
		throw new Error('Email já está em uso');
	}

	const stripeCustomer = await stripeController.createCustomer({ email, name });

	if (!stripeCustomer) {
		throw new Error('Não foi possível criar o cliente');
	}

	const user = new Parse.User();
	user.set('username', name);
	user.set('email', email);
	user.set('password', password);
	user.set('stripeCustomerId', stripeCustomer.id);

	try {
		const response = await user.signUp();
		return response;
	} catch (error) {
		return error;
	}
});
