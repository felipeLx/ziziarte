const importSync = require('import-sync');
const create = importSync("./create-order");
const update = importSync("./update-order");
const get = importSync("./get-order");
const waitForOrderToBePersistated = importSync("./wait-for-order-to-be-persistated");
const updateStock = importSync("./update-stock")

module.exports = {
  create,
  update,
  get,
  waitForOrderToBePersistated,
  updateStock
};
