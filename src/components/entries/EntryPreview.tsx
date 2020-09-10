import React from 'react';

import { Link } from 'gatsby';

import { EntryExcerptNode } from '../../hooks/useEntries';

interface EntryPreviewProps {
  entry: EntryExcerptNode;
}

const EntryPreview = ({ entry }: EntryPreviewProps) => (
  <div>
    <Link to={`/entries/${entry.frontmatter.slug}`}>
      <b>{entry.frontmatter.title}</b>
    </Link>
    <p>{entry.excerpt}</p>
  </div>
);

export default EntryPreview;
