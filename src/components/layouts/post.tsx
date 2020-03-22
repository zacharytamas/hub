import React from 'react';

import BaseLayout from './BaseLayout';

interface Frontmatter {
  title: string;
  date: Date;
}

const dateFormatter = new Intl.DateTimeFormat('all', {});

export default ({title, date}: Frontmatter) => ({children: content}) => {
  return (
    <BaseLayout pageTitle={title}>
      <h1>{title}</h1>
      <p>{dateFormatter.format(date)}</p>
      {content}
    </BaseLayout>
  );
};
