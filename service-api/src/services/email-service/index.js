const importSync = require('import-sync');
const { sendEmail } = importSync("./utils");

const sendOrderConfirmation = importSync("./order-confirmation");
const sendUserMagicLink = importSync("./user-magic-link");

module.exports = {
  sendEmail,
  sendOrderConfirmation,
  sendUserMagicLink,
};
