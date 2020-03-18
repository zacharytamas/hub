import React from 'react';

import Head from 'next/head';

import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

import { mq } from '../../style/theme';
import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

const SiteWidth = styled.section`
  max-width: 48rem;
  margin: 0 auto;
`;

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

    <Global
      styles={css`
        html,
        body {
          font-size: 16px;
        }

        body {
          font-family: 'Quattrocento Sans', sans-serif;
          background-color: #fbfbfb;
          color: #403f53;
          padding: var(--site-edge-margin-v) var(--site-edge-margin-h);
          margin: 0;
          font-size: 1.125rem;
        }

        p {
          line-height: 1.5em;
        }

        ul {
          padding-left: 1em;
        }

        ul li {
          line-height: 1.5em;
        }

        a {
          color: var(--color-accent);
        }

        :root {
          --site-edge-margin-v: 1rem;
          --site-edge-margin-h: 2rem;
          --color-accent: #285ba9;

          ${mq.md} {
            --site-edge-margin-v: 2rem;
            --site-edge-margin-h: 5rem;
          }
        }
      `}
    />

    <SiteWidth>
      <SiteHeader></SiteHeader>
      {children}
      <SiteFooter />
    </SiteWidth>
  </div>
);

export default BaseLayout;
