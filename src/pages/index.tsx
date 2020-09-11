import React from 'react';

import EntryPreviewList from '../components/entries/EntryPreviewList';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useEntries from '../hooks/useEntries';

const IndexPage = () => {
  const entries = useEntries();

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="sm:text-5xl">Hi, I'm Zachary.</h1>

      <p>
        I'm a software craftsman with 20+ years' experience living in Atlanta,&nbsp;GA.
      </p>

      <p>
        I currently work at <a href="https://squareup.com/">Square</a> as a Senior
        Software Engineer building large-scale global payments infrastructure.
      </p>

      <p>
        I craft digital experiences that are usually, but not always, on the Web and use
        modern tools with an emphasis on tool-building and efficiency.
      </p>

      <section className="border-t-2 border-gray-300 pt-8">
        <h1>Entries</h1>

        <EntryPreviewList entries={entries} />
      </section>
    </Layout>
  );
};

export default IndexPage;
