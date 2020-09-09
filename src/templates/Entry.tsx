import React from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }

      body
    }
  }
`;

export default ({ data: { mdx: entry } }) => {
  return (
    <Layout>
      <h1>{entry.frontmatter.title}</h1>

      <MDXRenderer>{entry.body}</MDXRenderer>
    </Layout>
  );
};
