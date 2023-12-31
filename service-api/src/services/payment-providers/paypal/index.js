const importSync = require('import-sync');
const createPaypalPayment = importSync("./create-payment");
const confirmPaypalPayment = importSync("./confirm-payment");

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

module.exports = {
  enabled: Boolean(PAYPAL_CLIENT_ID && PAYPAL_CLIENT_SECRET),
  frontendConfig: {
    clientId: PAYPAL_CLIENT_ID,
    currency: "",
  },
  createPaypalPayment,
  confirmPaypalPayment,
};
