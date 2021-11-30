import { SEARCH_KEYS } from './constants';
import { mockProducts } from './mockProducts';
import { searchProduct } from './searchProduct';

describe('Should search products by string', () => {
  it('finds product by first letters', () => {
    const result = searchProduct('Бит', mockProducts, SEARCH_KEYS);
    expect(result.find(product => product.id === 4)).toBeTruthy();
  });
  it('is not case sensitive', () => {
    const result = searchProduct('бИТоЧ', mockProducts, SEARCH_KEYS);
    expect(result.find(product => product.id === 4)).toBeTruthy();
  });
  it('finds product by letters in the middle', () => {
    const result = searchProduct('ртоф', mockProducts, SEARCH_KEYS);
    expect(result.find(product => product.id === 4)).toBeTruthy();
  });
  it('finds product by letters at the end', () => {
    const result = searchProduct('ропом', mockProducts, SEARCH_KEYS);
    expect(result.find(product => product.id === 4)).toBeTruthy();
  });
  it('finds by multiple words', () => {
    const result = searchProduct('мягким сыром', mockProducts, SEARCH_KEYS);
    expect(result.find(product => product.id === 5)).toBeTruthy();
  });
  it('finds product when user forgot to switch language', () => {
    const result = searchProduct('<bn', mockProducts, SEARCH_KEYS);
    expect(result.find(product => product.id === 4)).toBeTruthy();
  });
  it('holds empty string', () => {
    const result = searchProduct('', mockProducts, SEARCH_KEYS);
    expect(result.length).toEqual(mockProducts.length);
  });
});
