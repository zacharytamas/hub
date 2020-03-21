import React from 'react';

import Head from 'next/head';

import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

interface BaseLayoutProps {
  pageTitle?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, pageTitle}) => (
  <div className="p-8">
    <Head>
      <title>zacharytamas{pageTitle && ` | ${pageTitle}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <section className="container mx-auto sm:max-w-xl lg:max-w-2xl">
      <SiteHeader></SiteHeader>
      {children}
      <SiteFooter />
    </section>
  </div>
);

export default BaseLayout;
