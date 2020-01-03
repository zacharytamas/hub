import Head from 'next/head';
import React from 'react';

import {css, Global} from '@emotion/core';
import styled from '@emotion/styled';

const mq = {
  sm: `@media (min-width: 640px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 1024px)`,
  xl: `@media (min-width: 1280px)`
};

const SiteWidth = styled.section`
  max-width: 40rem;
`;

interface BaseLayoutProps {}

const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
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
            font-family: Recursive;
            background-color: #fbfbfb;
            color: #403f53;
            margin: 1rem 2rem;
            padding: 0;

            ${mq.md} {
              margin: 2rem 5rem;
            }
          }

          p {
            line-height: 1.5em;
          }
        `}
      />

      <SiteWidth>{children}</SiteWidth>
    </div>
  );
};

export default BaseLayout;
