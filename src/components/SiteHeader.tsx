import React from 'react';

import Link from 'next/link';

import styled from '@emotion/styled';

const SiteHeaderStyle = styled.header`
  display: flex;
  height: 4rem;
  align-items: center;
  margin-bottom: 1rem;

  color: rgba(0, 0, 0, 0.56);

  .brand {
    font-weight: 600;
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.56);
    text-decoration: none;

    &:hover {
      color: rgba(0, 0, 0, 0.87);
      transition: 0.25s linear all;
    }
  }
`;

const SiteHeader = () => (
  <SiteHeaderStyle>
    <Link href="/">
      <a className="brand">@zacharytamas</a>
    </Link>
  </SiteHeaderStyle>
);

export default SiteHeader;
