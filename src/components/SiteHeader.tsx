import React, { useState } from 'react';

import cn from 'classnames';
import Link, { LinkProps } from 'next/link';

const MenuIcon = ({open}: {open: boolean}) => (
  <svg
    className="h-6 w-6"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      className={open ? 'hidden' : 'inline-flex'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
    <path
      className={!open ? 'hidden' : 'inline-flex'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const MenuItem: React.FC<LinkProps> = ({children, ...linkProps}) => (
  <Link {...linkProps}>
    <a className="menu-item mt-1 block px-3 -mx-3 py-2 rounded-md no-underline text-base font-medium focus:outline-none">
      {children}
    </a>
  </Link>
);

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="full-bleed site-header">
      <nav>
        <div className="site-width flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="brand font-bold no-underline">@zacharytamas</a>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpen(o => !o)}
              className="inline-flex items-center justify-center p-1 rounded-md text-blue-800 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        <div className={cn(`pb-4`, {hidden: !open})}>
          <MenuItem href="/posts">Posts</MenuItem>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
