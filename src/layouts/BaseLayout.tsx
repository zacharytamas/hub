import React from 'react';

import Head from 'next/head';

import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

interface BaseLayoutProps {
  pageTitle?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, pageTitle}) => (
  <div>
    <Head>
      <title>zacharytamas{pageTitle && ` | ${pageTitle}`}</title>
    </Head>

    <SiteHeader />

    <main className="site-width">
      {children}
      <SiteFooter />
    </main>
  </div>
);

export default BaseLayout;
