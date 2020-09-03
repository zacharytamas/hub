import React from 'react';

import BaseLayout from './BaseLayout';

interface Frontmatter {
  title: string;
  date?: Date;
}

const dateFormatter = new Intl.DateTimeFormat('all', {});

const PostLayout = ({title, date}: Frontmatter) => ({children: content}) => (
  <BaseLayout pageTitle={title}>
    <h1>{title}</h1>
    {date && <p>{dateFormatter.format(date)}</p>}
    {content}
  </BaseLayout>
);

export default PostLayout;
