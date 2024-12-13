const Stripe = require('stripe');
require('dotenv').config(); // Carga las variables

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;
