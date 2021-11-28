import { useState, useEffect } from 'react';

import { Appearance } from 'tools/types/api-catalog-items-types';
import { IconComponent } from 'components/icon/Icon';

import linkStyles from './link.module.css';

type LinkProps = {
  url: string;
  name: string;
  svgName?: string;
  appearance: Appearance | String;
};

export const Link = ({ url, name, svgName, appearance }: LinkProps): JSX.Element => {
  const accentStyle = linkStyles.accent;
  const highlightStyle = linkStyles.highlight;
  const [style, setStyle] = useState<String>();

  useEffect(() => {
    if (appearance === Appearance.ACCENT) {
      setStyle(accentStyle);
    }
    if (appearance == Appearance.HIGHLIGHT) {
      setStyle(highlightStyle);
    }
  }, [appearance]);

  return (
    <div className={`${linkStyles.link_container} ${style}`}>
      {svgName && <IconComponent name={svgName} className={linkStyles.svg} fill={'currentColor'} />}
      <a href={url} className={linkStyles.name} role='menuitem'>
        {name}
      </a>
    </div>
  );
};
