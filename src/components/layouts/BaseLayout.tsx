import Head from 'next/head';
import React from 'react';

import {css, Global} from '@emotion/core';
import styled from '@emotion/styled';

import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

const mq = {
  sm: `@media (min-width: 640px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 1024px)`,
  xl: `@media (min-width: 1280px)`
};

const SiteWidth = styled.section`
  max-width: 40rem;
  margin: var(--site-edge-margin-v) var(--site-edge-margin-h);
`;

interface BaseLayoutProps {
  pageTitle?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, pageTitle}) => {
  return (
    <div>
      <Head>
        <title>zacharytamas{pageTitle && ` | ${pageTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx>{`
        @font-face {
          font-family: 'Recursive';
          src: url('/Recursive.woff2') format('woff2-variations');
          font-weight: 300 1000;
        }
      `}</style>

      <Global
        styles={css`
          html,
          body {
            font-size: 16px;
          }

          body {
            font-family: Recursive, mono;
            background-color: #fbfbfb;
            color: #403f53;
            padding: 0;
            margin: 0;
          }

          p {
            line-height: 1.5em;
          }

          :root {
            --site-edge-margin-v: 1rem;
            --site-edge-margin-h: 2rem;

            ${mq.md} {
              --site-edge-margin-v: 2rem;
              --site-edge-margin-h: 5rem;
            }
          }
        `}
      />

      <SiteHeader></SiteHeader>

      <SiteWidth>
        {children}

        <SiteFooter />
      </SiteWidth>
    </div>
  );
};

export default BaseLayout;
