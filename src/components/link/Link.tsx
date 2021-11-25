import { useState, useEffect } from 'react';

import { accentStyle, highlightStyle } from './constants';

import linkStyles from './link.module.css';

type LinkProps = {
  url: string;
  title: string;
  svg?: string;
  accent: any; // после добавления типов заменить тип на Appearance
};

export const Link = ({ url, title, svg, accent }: LinkProps): JSX.Element => {
  const [style, setStyle] = useState<String>();

  useEffect(() => {
    if (accent === 1) {
      setStyle(accentStyle);
    }
    if (accent === 2) {
      setStyle(highlightStyle);
    }
  }, [accent]);

  return (
    <div className={`${linkStyles.link_container} ${style}`}>
      {svg && <img src={svg} alt={title} className={linkStyles.svg} />}
      <a href={url} className={linkStyles.title} role='menuitem'>
        {title}
      </a>
    </div>
  );
};
