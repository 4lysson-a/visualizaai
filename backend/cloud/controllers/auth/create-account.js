const stripeService = require("../../helpers/stripe-service");

Parse.Cloud.define("createAccount", async (request) => {
  let user;
  let stripe_created_customer;
  let stripeCustomerExists;

  try {
    const { email, password, name, sub } = request.params;

    if (!email || !password || !name || !sub) {
      throw new Error("Email, senha ou nome, não foram fornecidos");
    }

    const query = new Parse.Query(Parse.User);
    query.equalTo("email", email);

    const useMasterKey = process.env.ENV === "dev" ? true : false;
    const userExists = await query.first({ useMasterKey: useMasterKey });

    const stripeAllCustomers = await stripeService.listAllCustomers();
    const stripe_customer_founded = stripeAllCustomers.data.find(
      (customer) => customer.email === email
    );

    stripeCustomerExists = Boolean(stripe_customer_founded);

    if (userExists || stripeCustomerExists) {
      throw new Error("Este email já está em uso");
    }

    stripe_created_customer = await stripeService.createCustomer({
      email,
      name,
    });

    if (!stripe_created_customer) {
      throw new Error("Não foi possível criar o cliente");
    }

    user = new Parse.User();
    user.set("sub", sub);
    user.set("email", email);
    user.set("username", name);
    user.set("password", password);
    user.set("stripeCustomerId", stripe_created_customer.id);

    const response = await user.signUp();
    return response;
  } catch (error) {
    if (stripe_created_customer) {
      await stripeService.deleteCustomer(stripe_created_customer.id);
    }

    if (user && user.id) {
      await user.destroy({ useMasterKey: true });
    }

    if (error) {
      throw new Error(error);
    } else {
      throw new Error(
        "Não foi possível criar a conta, tente novamente mais tarde ou contate o nosso suporte"
      );
    }
  }
});
