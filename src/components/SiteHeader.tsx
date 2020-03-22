import React from 'react';

import Link from 'next/link';

const SiteHeader = () => (
  <header className="full-bleed bg-blue-200 h-12">
    <div className="site-width flex items-center h-full">
      <Link href="/">
        <a className="brand font-bold no-underline text-blue-800">
          @zacharytamas
        </a>
      </Link>
    </div>
  </header>
);

export default SiteHeader;
