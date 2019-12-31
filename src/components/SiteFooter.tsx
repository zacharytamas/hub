import React from 'react';
import styled from '@emotion/styled';

const SiteFooterStyled = styled.footer`
  border-top: 2px #90a7b2 solid;
  display: inline-block;
  padding-top: 1rem;
  margin-top: 1rem;
`;

export default () => (
  <SiteFooterStyled>
    &copy; {new Date().getFullYear()} Zachary Jones
  </SiteFooterStyled>
);
