# 🌍 @sctg/currencies

A comprehensive TypeScript library providing easy access to ISO currency codes and related information.

[![npm version](https://badge.fury.io/js/%40sctg%2Fcurrencies.svg)](https://badge.fury.io/js/%40sctg%2Fcurrencies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- Complete list of ISO currency codes
- Static utility methods for currency operations
- Detailed information for each currency, including:
  - ISO code
  - Fraction digits
  - Currency name
  - Symbol (where available)
  - Unicode representation
  - HTML and Hex codes
  - Countries using the currency

## 📦 Installation

```bash
npm install @sctg/currencies
```

## 🛠️ Usage

```typescript
import { Currencies, IsoCode, IsoCodes, isoCodes } from '@sctg/currencies';

// Get information about a specific currency
let usdInfo = isoCodes.USD;
console.log(usdInfo);

// Output:
// {
//   isoCode: '840',
//   fractionDigit: 2,
//   symbol: '$',
//   unicode: 'U+00024',
//   htmlCode: '&#x24;',
//   hexCode: '&#36;',
//   currencyName: 'US Dollar',
//   countries: ['United States of America (The)', 'Puerto Rico', ...]
// }

usdInfo = Currencies.getCurrency('USD');
// Returns: {
//   isoCode: '840',
//   fractionDigit: 2,
//   symbol: '$',
//   unicode: 'U+00024',
//   htmlCode: '&#x24;',
//   hexCode: '&#36;',
//   currencyName: 'US Dollar',
//   countries: ['United States of America (The)', 'Puerto Rico', ...]
// }

// Get specific currency properties
const symbol = Currencies.getCurrencySymbol('EUR');        // Returns: '€'
const name = Currencies.getCurrencyName('GBP');            // Returns: 'Pound Sterling'
const digits = Currencies.getCurrencyFractionDigit('JPY'); // Returns: 0
```

## 📚 API

### `Currencies` Static Methods

| Method | Description | Parameters | Return Type |
|--------|-------------|------------|-------------|
| `getCurrencyByCountry` | Find currency code by country name | `country: string` | `string \| undefined` |
| `getCurrency` | Get complete currency information | `currency: IsoCode` | `Currency` |
| `getCurrencyName` | Get currency name | `currency: IsoCode` | `string` |
| `getCurrencyFractionDigit` | Get number of fraction digits | `currency: IsoCode` | `number` |
| `getCurrencySymbol` | Get currency symbol | `currency: IsoCode` | `string` |
| `getCurrencyUnicode` | Get Unicode representation | `currency: IsoCode` | `string` |
| `getCurrencyHtmlCode` | Get HTML code | `currency: IsoCode` | `string` |
| `getCurrencyHexCode` | Get hexadecimal code | `currency: IsoCode` | `string \| undefined` |
| `getCurrencyByNumberCode` | Find currency by ISO number code | `code: string` | `Currency \| undefined` |

### Types

#### `IsoCode`

A type representing all available ISO currency codes (e.g., 'USD', 'EUR', 'GBP').

#### `Currency`

An interface describing the structure of currency information:

```typescript
interface Currency {
    isoCode: string;
    fractionDigit: number;
    symbol: string;
    unicode: string;
    htmlCode: string;
    hexCode?: string;
    currencyName: string;
    countries: string[];
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/currencies/issues).

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
