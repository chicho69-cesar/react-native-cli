export class Formatter {
  public static currency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }
}
