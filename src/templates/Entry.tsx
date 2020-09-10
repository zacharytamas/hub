import React from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
      parent {
        id
        ... on File {
          id
          name
          modifiedTime(formatString: "Do MMMM YYYY")
          birthTime(formatString: "Do MMMM YYYY")
        }
      }
    }
  }
`;

export default ({ data: { mdx: entry } }) => {
  const { modifiedTime, birthTime } = entry.parent;
  const { title } = entry.frontmatter;
  const { body } = entry;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>

      <section className="mb-4">
        <span>
          Published: {birthTime}{' '}
          {birthTime !== modifiedTime && <> | Updated {modifiedTime}</>}
        </span>
      </section>

      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};
