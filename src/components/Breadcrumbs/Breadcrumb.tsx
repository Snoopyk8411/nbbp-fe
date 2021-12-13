import cn from 'classnames';

import { Link } from 'components/link/Link';
import { Appearance } from 'tools/types/api-catalog-items-types';
import { AreaCurrent } from 'components/link/constants';

import { IBreadcrumb } from './types';
import breadcrumbStyles from './breadcrumbs.module.css';

type BreadcrumbProp = {
  breadcrumb: IBreadcrumb;
  isLastCrumb?: boolean;
};

export const Breadcrumb = ({ breadcrumb, isLastCrumb }: BreadcrumbProp): JSX.Element => {
  const isBreadcrumbClickable = !!breadcrumb.url;
  if (isBreadcrumbClickable) {
    return (
      <Link
        className={breadcrumbStyles['breadcrumb-link']}
        url={breadcrumb.url}
        name={breadcrumb.name}
        appearance={Appearance.PLAIN}
        areaCurrent={isLastCrumb ? AreaCurrent.PAGE : undefined}
      />
    );
  }
  return (
    <div className={cn(breadcrumbStyles['breadcrumb-link'], breadcrumbStyles['breadcrumb-location'])}>
      {breadcrumb.name}
    </div>
  );
};
