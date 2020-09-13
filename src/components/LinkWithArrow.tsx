import React from 'react';

import cn from 'classnames';
import { GatsbyLinkProps, Link } from 'gatsby';

type Direction = 'left' | 'right';

interface LinkWithArrowProps<TState = any> extends GatsbyLinkProps<TState> {
  arrowSide: Direction;
}

interface ArrowProps {
  direction: Direction;
  className?: string;
}

const Arrow = ({ direction = 'left', className }: ArrowProps) => (
  <svg
    className={cn(
      `h-5 w-5`,
      direction === 'right' ? 'ml-3' : 'mr-3',
      direction === 'right' && 'transform -rotate-180',
      className
    )}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d={
        'M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 ' +
        '9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
      }
      clipRule="evenodd"
    />
  </svg>
);

const LinkWithArrow: React.FC<LinkWithArrowProps> = ({
  arrowSide,
  children,
  ...linkProps
}) => {
  return (
    <Link
      {...(linkProps as any)}
      className={cn(
        `inline-flex items-center p-2`,
        'no-underline border-2 rounded transition text-gray-900',
        { 'flex-row-reverse': arrowSide === 'right' },
        ['border-gray-600', 'font-normal'].map((c) => `hover:${c}`)
      )}
    >
      <Arrow direction={arrowSide} className="text-gray-500" />
      {children}
    </Link>
  );
};

export default LinkWithArrow;
