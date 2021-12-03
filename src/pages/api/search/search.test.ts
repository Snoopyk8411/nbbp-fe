import { IProduct } from 'tools/types/api-product-types';
import { SEARCH_KEYS } from './constants';
import { searchProduct } from './searchProduct';

const mockProducts: IProduct[] = [
  {
    id: 1,
    title: 'Арбуз',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 2,
    title: 'Ассорти "Мини-макарон"',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 3,
    title: 'Батончик "Соленая карамель в шоколаде"',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 4,
    title: 'Биточки куриные с сыром и картофелем с укропом',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 5,
    title: 'Блины с заварным кремом, мягким сыром и клубникой',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 6,
    title: 'Букет Гербера 11 шт',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 7,
    title: 'Вареники с абрикосами',
    price: 123,
    description: 'string',
    category: ['category'],
    image: 'image',
    rating: {
      rate: 1,
      count: 2,
    },
  },
];

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
