const importSync = require('import-sync');
const orders = importSync("./orders");
const customers = importSync("./customers");

module.exports = {
  orders,
  customers,
};
