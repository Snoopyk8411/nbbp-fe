import cn from 'classnames';

import { Link } from 'components/link/Link';
import { Appearance } from 'tools/types/api-catalog-items-types';

import { IBreadcrumb } from './types';
import breadcrumbStyles from './breadcrumbs.module.css';

type BreadcrumbsProps = {
  path: IBreadcrumb[];
};

const drawBreadcrump = (breadcrumb: IBreadcrumb, isCurrent?: boolean): JSX.Element => {
  if (breadcrumb.url) {
    return (
      <Link
        className={breadcrumbStyles['breadcrumb-link']}
        url={breadcrumb.url}
        name={breadcrumb.name}
        appearance={Appearance.PLAIN}
        areaCurrent={isCurrent ? 'page' : undefined}
      />
    );
  }
  return (
    <div className={cn(breadcrumbStyles['breadcrumb-link'], breadcrumbStyles['breadcrumb-location'])}>
      {breadcrumb.name}
    </div>
  );
};

export const Breadcrumbs = ({ path }: BreadcrumbsProps): JSX.Element => {
  return (
    <nav aria-label='Breadcrumb'>
      <ol className={cn(breadcrumbStyles.theme, breadcrumbStyles.breadcrumbs)}>
        {path.map((breadcrumb, idx) => {
          const isLast = idx === path.length - 1;
          return (
            <li key={`breadcrumb-${breadcrumb.name}-${idx}`} className={breadcrumbStyles['breadcrumb-item']}>
              {drawBreadcrump(breadcrumb, isLast)}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
