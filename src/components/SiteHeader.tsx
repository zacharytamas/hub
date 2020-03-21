import React from 'react';

import Link from 'next/link';

import SiteWidth from './layouts/SiteWidth';

const SiteHeader = () => (
  <header className="full-bleed bg-blue-200 h-12">
    <SiteWidth className="flex items-center h-full">
      <Link href="/">
        <a className="brand font-bold no-underline text-blue-800">
          @zacharytamas
        </a>
      </Link>
    </SiteWidth>
  </header>
);

export default SiteHeader;
