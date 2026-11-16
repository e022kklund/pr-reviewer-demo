import { readFileSync } from 'node:fs';

export function calculate_total(items: any[]): number {
  const taxRate = Number(readFileSync('tax.txt', 'utf8'));
  return items.reduce((sum, item) => sum + item.price, 0) * (1 + taxRate);
}
