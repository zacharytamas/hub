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
      <h1 className="text-4xl mb-4 mt-8 sm:text-5xl">
        <span className="text-4xl mr-3 tracking-tighter inline-block sm:text-5xl">
          👋🏼
        </span>
        <span className="fancy-text">
          Hi, I'm Zachary<span className="hidden sm:inline">.</span>
        </span>
      </h1>

      <p className="text-xl font-semibold sm:text-3xl sm:leading-snug">
        I'm a multidisciplinary problem solver with 20+ years' experience living in
        Atlanta, Georgia.
      </p>

      <p>
        I craft digital solutions that are usually, but not always, on the Web and use
        modern tools with an emphasis on tool-building and efficiency.
      </p>

      <p>
        I currently work at{' '}
        <a href="https://squareup.com/" target="_blank">
          Square
        </a>{' '}
        as a Senior Software Engineer on platform infrastructure tooling. My work is seen
        and used by nearly every engineer at Square.
      </p>

      <section className="border-t-2 border-gray-300 pt-8">
        <h1>Entries</h1>

        <EntryPreviewList entries={entries} />
      </section>
    </Layout>
  );
};

export default IndexPage;
