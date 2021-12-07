import { useState, useEffect } from 'react';
import cn from 'classnames';

import { Appearance } from 'tools/types/api-catalog-items-types';
import { IconComponent } from 'components/icon/Icon';

import linkStyles from './link.module.css';

type LinkProps = {
  url: string;
  name: string;
  svgName?: string;
  appearance: Appearance | String;
  className?: string;
};

export const Link = ({ url, name, svgName, appearance, className }: LinkProps): JSX.Element => {
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
    <div className={cn(linkStyles.link_container, style, className)}>
      {svgName && <IconComponent name={svgName} className={linkStyles.svg} fill={'currentColor'} />}
      <a href={url} className={linkStyles.name} role='menuitem'>
        {name}
      </a>
    </div>
  );
};
