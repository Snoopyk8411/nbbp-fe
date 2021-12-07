import { Link } from 'components/link/Link';
import { Appearance } from 'tools/types/api-catalog-items-types';
import { IBreadcrumb } from './types';

import breadcrumbStyles from './breadcrumbs.module.css';

type BreadcrumbsProps = {
  path: IBreadcrumb[];
  separator?: string | JSX.Element;
};

const drawBreadcrump = (breadcrumb: IBreadcrumb): JSX.Element => {
  if (breadcrumb.url) {
    return (
      <Link
        className={breadcrumbStyles.breadcrumb}
        url={breadcrumb.url}
        name={breadcrumb.name}
        appearance={Appearance.PLAIN}
      />
    );
  }
  return <div className={breadcrumbStyles.breadcrumb}>{breadcrumb.name}</div>;
};

export const Breadcrumbs = ({ path, separator = '/' }: BreadcrumbsProps): JSX.Element => {
  return (
    <div className={breadcrumbStyles.breadcrumbs}>
      {path.map((breadcrumb, idx) => {
        const isLast = idx === path.length - 1;
        return (
          <>
            {drawBreadcrump(breadcrumb)}
            {!isLast && <div>{separator}</div>}
          </>
        );
      })}
    </div>
  );
};
