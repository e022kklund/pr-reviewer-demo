export function calculateTotal(items: { price: number }[], taxRate: number): number {
  return items.reduce((sum, item) => sum + item.price, 0) * (1 + taxRate);
}
