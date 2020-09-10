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
    parent: { modifiedTimeFormatted },
  } = entry;

  return (
    <div className="mb-4">
      <div>
        <Link to={`/entries/${slug}`}>
          <b className="text-xl sm:text-2xl">{title}</b>
        </Link>
        <span className="block text-gray-500 sm:ml-4 sm:inline">
          updated {modifiedTimeFormatted}
        </span>
      </div>
      <p>{excerpt}</p>
    </div>
  );
};

export default EntryPreview;
