import { FC } from 'react';
import cn from 'classnames';

import cardStyles from './card.module.css';

type CardProps = {
  title: string;
  className?: string;
};

export const Card: FC<CardProps> = ({ title, className, children }) => (
  <div className={cn(cardStyles.card, className)}>
    <h2 className={cardStyles.title}>{title}</h2>
    <div className={cardStyles.content}>{children}</div>
  </div>
);
