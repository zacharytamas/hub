import React from 'react';

import { GatsbyLinkProps, Link } from 'gatsby';

interface LinkWithArrowProps<TState = any> extends GatsbyLinkProps<TState> {
  arrowSide: 'left' | 'right';
}

const LeftArrow = () => (
  <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
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
      className="no-underline inline-flex items-center p-2 border rounded hover:border-gray-600 hover:font-normal transition text-gray-900"
    >
      {/* TODO Make it actually support arrows on the right side. */}
      <LeftArrow />
      {children}
    </Link>
  );
};

export default LinkWithArrow;
