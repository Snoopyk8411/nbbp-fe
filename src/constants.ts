export const API = 'http://localhost:3000/api';
export const COOKBOOK = 'cookbook';
export const PRODUCTS = 'products';

const API_HOSTS = {
  cookbook: {
    products: `${API}/${COOKBOOK}/${PRODUCTS}`,
  },
};

export const COOKBOOK_API = API_HOSTS.cookbook;
