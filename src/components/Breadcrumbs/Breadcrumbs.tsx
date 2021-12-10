import cn from 'classnames';

import { IBreadcrumb } from './types';
import breadcrumbStyles from './breadcrumbs.module.css';
import { Breadcrumb } from './Breadcrumb';

type BreadcrumbsProps = {
  path: IBreadcrumb[];
};

export const Breadcrumbs = ({ path }: BreadcrumbsProps): JSX.Element => {
  return (
    <nav aria-label='Breadcrumb'>
      <ol className={cn(breadcrumbStyles.theme, breadcrumbStyles.breadcrumbs)}>
        {path.map((breadcrumb, index) => {
          const isLastCrumb = index === path.length - 1;
          return (
            <li key={`breadcrumb-${breadcrumb.name}-${index}`} className={breadcrumbStyles['breadcrumb-item']}>
              <Breadcrumb breadcrumb={breadcrumb} isLastCrumb={isLastCrumb} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
