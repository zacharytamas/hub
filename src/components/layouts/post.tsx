import React from 'react';

import BaseLayout from './BaseLayout';

interface Frontmatter {
  title: string;
}

export default ({title}: Frontmatter) => ({children: content}) => {
  return (
    <BaseLayout pageTitle={title}>
      <h1>{title}</h1>
      {content}
    </BaseLayout>
  );
};
