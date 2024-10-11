# 🌍 @sctg/currencies

A comprehensive TypeScript library providing easy access to ISO currency codes and related information.

[![npm version](https://badge.fury.io/js/%40sctg%2Fcurrencies.svg)](https://badge.fury.io/js/%40sctg%2Fcurrencies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- Complete list of ISO currency codes
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
import { IsoCode, IsoCodes, isoCodes } from '@sctg/currencies';

// Get information about a specific currency
const usdInfo = isoCodes.USD;
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
```

## 📚 API

### `IsoCode`

A type representing all available ISO currency codes.

### `IsoCodes`

An interface describing the structure of the currency information object.

### `isoCodes`

An object containing detailed information for all ISO currencies.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/currencies/issues).

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
