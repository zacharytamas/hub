import React from 'react';

import { EntryExcerptNode } from '../../hooks/useEntries';
import EntryPreview from './EntryPreview';

interface EntryPreviewListProps {
  entries: EntryExcerptNode[];
}

const EntryPreviewList = ({ entries }: EntryPreviewListProps) => {
  return (
    <div>
      {entries
        .sort((a, b) => (a.parent.modifiedTime < b.parent.modifiedTime ? 1 : -1))
        .map((entry) => (
          <EntryPreview key={entry.frontmatter.slug} entry={entry} />
        ))}
    </div>
  );
};

export default EntryPreviewList;
