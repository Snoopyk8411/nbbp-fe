export const API = 'http://localhost:3000/api';
export const COOKBOOK = 'cookbook';
export const PRODUCTS = 'products';
export const RECIPES = 'recipes';

const API_HOSTS = {
  cookbook: {
    products: `${API}/${COOKBOOK}/${PRODUCTS}`,
    recipes: `${API}/${COOKBOOK}/${RECIPES}`,
  },
};

export const COOKBOOK_API = API_HOSTS.cookbook;
