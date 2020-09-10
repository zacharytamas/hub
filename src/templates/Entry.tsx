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
      parent {
        id
        ... on File {
          id
          name
          changeTime(formatString: "Do MMMM YYYY")
          birthTime(formatString: "Do MMMM YYYY")
        }
      }
    }
  }
`;

export default ({ data: { mdx: entry } }) => {
  const { changeTime, birthTime } = entry.parent;
  const { title } = entry.frontmatter;
  const { body } = entry;

  return (
    <Layout>
      <h1>{title}</h1>

      <section className="mb-4">
        <span>
          Published: {birthTime}{' '}
          {birthTime !== changeTime && <> | Updated {changeTime}</>}
        </span>
      </section>

      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};
