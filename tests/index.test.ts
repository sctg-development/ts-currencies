import { Currencies } from '../index';

// index.test.ts

describe('Currencies.getCurrencySymbol', () => {
    it('should return the correct symbol for a currency that has a symbol', () => {
        expect(Currencies.getCurrencySymbol('USD')).toBe('$');
        expect(Currencies.getCurrencySymbol('EUR')).toBe('€');
        expect(Currencies.getCurrencySymbol('GBP')).toBe('£');
    });

    it('should return undefined for a currency that does not have a symbol', () => {
        expect(Currencies.getCurrencySymbol('AED')).toBeUndefined();
        expect(Currencies.getCurrencySymbol('AFN')).toBeUndefined();
    });

    it('should return undefined for an invalid currency code', () => {
        expect(Currencies.getCurrencySymbol('INVALID' as any)).toBeUndefined();
    });
});

describe('Currencies.getCurrencyUnicode', () => {
    it('should return the correct unicode for a currency that has a unicode', () => {
        expect(Currencies.getCurrencyUnicode('USD')).toBe('U+0024');
        expect(Currencies.getCurrencyUnicode('EUR')).toBe('U+20AC');
        expect(Currencies.getCurrencyUnicode('GBP')).toBe('U+00A3');
    });

    it('should return undefined for a currency that does not have a unicode', () => {
        expect(Currencies.getCurrencyUnicode('AED')).toBeUndefined();
        expect(Currencies.getCurrencyUnicode('AFN')).toBeUndefined();
    });

    it('should return undefined for an invalid currency code', () => {
        expect(Currencies.getCurrencyUnicode('INVALID' as any)).toBeUndefined();
    });
});

describe('Currencies.getCurrencyHtmlCode', () => {
    it('should return the correct html code for a currency that has a html code', () => {
        expect(Currencies.getCurrencyHtmlCode('USD')).toBe('&#36;');
        expect(Currencies.getCurrencyHtmlCode('EUR')).toBe('&#8364;');
        expect(Currencies.getCurrencyHtmlCode('GBP')).toBe('&#163;');
        expect(Currencies.getCurrencyHtmlCode('JPY')).toBe('&#165;');
        expect(Currencies.getCurrencyHtmlCode('RUB')).toBe('&#8381;');
    });

    it('should return undefined for a currency that does not have a html code', () => {
        expect(Currencies.getCurrencyHtmlCode('AED')).toBeUndefined();
        expect(Currencies.getCurrencyHtmlCode('AFN')).toBeUndefined();
    });

    it('should return undefined for an invalid currency code', () => {
        expect(Currencies.getCurrencyHtmlCode('INVALID' as any)).toBeUndefined();
    });
});