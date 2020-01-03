import React from 'react';

import styled from '@emotion/styled';

const SiteHeaderStyle = styled.header`
  background: #309eed;
  display: flex;
  height: 3rem;
  align-items: center;

  padding: 0 var(--site-edge-margin-h);

  .brand {
    font-weight: 500;
    color: white;
  }
`;

const SiteHeader = () => {
  return (
    <SiteHeaderStyle>
      <div className="brand">zacharytamas</div>
    </SiteHeaderStyle>
  );
};

export default SiteHeader;
