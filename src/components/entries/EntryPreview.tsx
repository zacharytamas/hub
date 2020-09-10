import React from 'react';

import { Link } from 'gatsby';

import { EntryExcerptNode } from '../../hooks/useEntries';

interface EntryPreviewProps {
  entry: EntryExcerptNode;
}

const EntryPreview = ({ entry }: EntryPreviewProps) => {
  const {
    excerpt,
    frontmatter: { title, slug },
    parent: { changeTimeFormatted },
  } = entry;

  return (
    <div>
      <div>
        <Link to={`/entries/${slug}`}>
          <b>{title}</b>
        </Link>
        <span className="ml-4 text-gray-500">updated {changeTimeFormatted}</span>
      </div>
      <p>{excerpt}</p>
    </div>
  );
};

export default EntryPreview;
