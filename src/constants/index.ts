const API_HOSTS = {
  imageComponent: {
    localAPIHost: 'localhost',
    nasaAPIHost: 'api.nasa.gov',
  },
};

type IHosts = keyof typeof API_HOSTS.imageComponent;

export const IMAGE_LOAD_DOMAINS = Object.keys(API_HOSTS.imageComponent).map(
  itemId => API_HOSTS.imageComponent[itemId as IHosts],
);

export const ENTER_BUTTON = 'Enter';
export const BACKSPACE_BUTTON = 'Backspace';
export const EMPTY_STRING = '';

//margin for lazy loading
export const ROOT_MARGIN = '50% 50%';
export const API = 'http://localhost:3000/api';
export const CATALOG = 'catalog?category=';
export const DEPTH = '&depth=';
export const SEARCH = 'search?value=';
const LIMIT_VALUE = 5;
export const LIMIT = `&limit=${LIMIT_VALUE}`;
export const EMPTY_URL = '#';
export const STATUS_SUCCESS = 200;
