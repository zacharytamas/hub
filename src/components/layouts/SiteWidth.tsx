import React from 'react';

import cn from 'classnames';

const SiteWidth: React.FC<JSX.IntrinsicElements['div']> = ({
  className,
  ...rest
}) => (
  <div
    className={cn(
      'container',
      'mx-auto',
      'sm:max-w-xl',
      'lg:max-w-2xl',
      className
    )}
    {...rest}
  />
);

export default SiteWidth;
