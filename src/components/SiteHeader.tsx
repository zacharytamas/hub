import React from 'react';

import styled from '@emotion/styled';

const SiteHeaderStyle = styled.header`
  display: flex;
  height: 5rem;
  align-items: center;
  margin-bottom: 1rem;

  color: rgba(0, 0, 0, 0.56);

  .brand {
    font-weight: 600;
    font-size: 1.25rem;

    &:hover {
      color: rgba(0, 0, 0, 0.87);
      transition: 0.25s linear all;
    }
  }
`;

const SiteHeader = () => (
  <SiteHeaderStyle>
    <div className="brand">@zacharytamas</div>
  </SiteHeaderStyle>
);

export default SiteHeader;
