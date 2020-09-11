import React from 'react';

import EntryPreviewList from '../components/entries/EntryPreviewList';
import Layout from '../components/Layout';
import useEntries from '../hooks/useEntries';

export default () => {
  const entries = useEntries();

  return (
    <Layout>
      <h1>Entries</h1>

      <EntryPreviewList entries={entries} />
    </Layout>
  );
};
