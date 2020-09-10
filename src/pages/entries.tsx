import React from 'react';

import EntryPreview from '../components/entries/EntryPreview';
import Layout from '../components/Layout';
import useEntries from '../hooks/useEntries';

export default () => {
  const entries = useEntries();

  return (
    <Layout>
      <h1>Entries</h1>

      <div>
        {entries
          .sort((a, b) => (a.parent.modifiedTime < b.parent.modifiedTime ? 1 : -1))
          .map((entry) => (
            <EntryPreview key={entry.frontmatter.slug} entry={entry} />
          ))}
      </div>
    </Layout>
  );
};
