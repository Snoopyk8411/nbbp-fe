import cn from 'classnames';

import loaderStyles from './loader.module.css';

export const Loader = (): JSX.Element => <div className={cn(loaderStyles.loader, loaderStyles.theme)}></div>;
