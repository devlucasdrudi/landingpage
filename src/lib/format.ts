export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

export function formatInstallments(value: number, installments = 6) {
  return `${installments}x sem juros de ${formatCurrency(value / installments)}`;
}
