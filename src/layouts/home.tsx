import React from 'react';

import BaseLayout from './BaseLayout';

export default () => ({children: content}) => (
  <BaseLayout>{content}</BaseLayout>
);
