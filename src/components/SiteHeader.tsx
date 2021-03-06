import React, { useState } from 'react';

import { Link } from 'gatsby';

interface MenuIconProps {
  open: boolean;
}

const MenuIcon = ({ open }: MenuIconProps) => (
  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="full-bleed site-header">
      <nav>
        <div className="site-width flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="brand font-bold no-underline">
              zacharytamas
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
