import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="sm:text-5xl">Hi, I'm Zachary.</h1>

    <p>I'm a software craftsman with 20+ years' experience living in Atlanta,&nbsp;GA.</p>

    <p>I currently work at <a href="https://squareup.com/">Square</a> as a Senior Software Engineer building large-scale global payments infrastructure.</p>

    <p>I craft digital experiences that are usually, but not always, on the Web and use modern
tools with an emphasis on tool-building and efficiency.</p>

  </Layout>
)

export default IndexPage
