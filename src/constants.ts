export const API = 'http://localhost:3000/api';
export const COOKBOOK = 'cookbook';
export const PRODUCTS = 'products';
export const RECIPES = 'recipes';

export const ROOT_ID = '__next';

const API_HOSTS = {
  cookbook: {
    products: `${API}/${COOKBOOK}/${PRODUCTS}`,
    recipes: `${API}/${COOKBOOK}/${RECIPES}`,
  },
};

export const COOKBOOK_API = API_HOSTS.cookbook;
