import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import useEntries from '../hooks/useEntries';

export default () => {
  const entries = useEntries();

  return (
    <Layout>
      <h1>Entries</h1>

      <div>
        {entries.map((entry) => (
          <div key={entry.slug}>
            <Link to={`/entries/${entry.slug}`}>
              <b>{entry.title}</b>
            </Link>
            <p>{entry.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
