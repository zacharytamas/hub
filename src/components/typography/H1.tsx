import styled from '@emotion/styled';

import { mq } from '../../style/theme';

const H1 = styled.h1`
  font-size: 2.75rem;
  color: var(--color-accent);

  ${mq.md} {
    font-size: 3rem;
  }
`;

export default H1;
