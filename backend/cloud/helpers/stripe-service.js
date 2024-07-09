const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PRICE_ID = process.env.STRIPE_PRICE_ID;

class StripeService {
  constructor() {
    this.stripe = stripe;
    this.price = {
      default: process.env.STRIPE_PRICE_ID,
      premium: 'NOT_WORKING',
    };
  }

  getStripePriceId(type) {
    if (!this.price[type]) {
      throw new Error('Invalid price type');
    }

    return this.price[type];
  }

  async createPaymentIntent({ amount, customerId }) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'brl',
      customer: customerId,
    });

    return paymentIntent;
  }

  async listAllCustomers() {
    const customers = await stripe.customers.list();
    return customers;
  }

  async createCustomer({ email, name, phone }) {
    const customer = await stripe.customers.create({
      name,
      email,
      phone,
    });

    return customer;
  }

  async createCheckoutSession({ customerId }) {
    const session = await this.stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
    });

    return session;
  }

  async deleteCustomer({ customerId }) {
    const deleted = await stripe.customers.del(customerId);
    return deleted;
  }

  async listAllUserActiveSubscriptions({ customerId }) {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
    });

    return subscriptions;
  }

  async isSubscriptionActive({ userId }) {
    const userQuery = new Parse.Query(Parse.User);

    userQuery.equalTo('objectId', userId);

    const user = await userQuery.first({ useMasterKey: true });
    const createdAt = user.get('createdAt');

    const today = new Date();
    const diffTime = Math.abs(today - createdAt);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const customerId = user.get('stripeCustomerId');

    const subscriptions = await this.listAllUserActiveSubscriptions({
      customerId,
    });

    const subscription = subscriptions?.data[0];
    if (subscription?.status) {
      if (subscription?.status === 'active') {
        return {
          status: 'ACTIVE',
          message: 'Sua assinatura esta ativa.',
        };
      }
    }

    if (diffDays < 7) {
      return {
        status: 'TEST_PERIOD',
        message: 'Sua conta esta no período de testes.',
      };
    }

    if (subscriptions.data.length === 0) {
      return {
        status: 'NO_SUBSCRIPTION',
        message: 'Você não tem nenhuma assinatura ativa.',
      };
    }

    return {
      status: 'INACTIVE',
      message: 'Sua assinatura esta inativa.',
    };
  }

  async createSubscription({ customerId, priceId }) {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: priceId,
        },
      ],
      expand: ['latest_invoice.payment_intent'],
    });

    return subscription;
  }
}

module.exports = new StripeService();
