import { Pipe, PipeTransform } from '@angular/core';

interface ExchangeRate {
  id: string;
  value: number;
}

const exchangeRates: ExchangeRate[] = [
  { id: 'USD', value: 1.126735 },
  { id: 'GBP', value: 0.876893 },
  { id: 'INR', value: 79.677056 },
];

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number | string {
    const sourceRate = this.getExchangeRate(fromCurrency);
    const targetRate = this.getExchangeRate(toCurrency);

    if (sourceRate && targetRate) {
      // Convert the amount from the source currency to the target currency
      const convertedAmount = (amount / sourceRate) * targetRate;
      return convertedAmount.toFixed(2);
    }

    return 'Invalid currency code';
  }

  private getExchangeRate(currencyCode: string): number | null {
    const exchangeRate = exchangeRates.find(rate => rate.id === currencyCode);
    return exchangeRate ? exchangeRate.value : null;
  }
}