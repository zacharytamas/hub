import React from 'react';

import Head from 'next/head';

import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';
import SiteWidth from './SiteWidth';

interface BaseLayoutProps {
  pageTitle?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, pageTitle}) => (
  <div>
    <Head>
      <title>zacharytamas{pageTitle && ` | ${pageTitle}`}</title>
    </Head>

    <SiteHeader />

    <SiteWidth>
      {children}
      <SiteFooter />
    </SiteWidth>
  </div>
);

export default BaseLayout;
