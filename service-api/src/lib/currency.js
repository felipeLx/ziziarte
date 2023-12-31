function formatCurrency({ amount, currency }) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(
    amount
  );
}

module.exports = {
  formatCurrency,
};
