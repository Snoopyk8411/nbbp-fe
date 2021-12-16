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
