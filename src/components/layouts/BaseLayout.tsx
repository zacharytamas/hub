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
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <SiteHeader />

    <SiteWidth>
      {children}
      <SiteFooter />
    </SiteWidth>
  </div>
);

export default BaseLayout;
