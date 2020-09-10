import React from 'react';

import cn from 'classnames';
import { graphql, Link } from 'gatsby';
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

const tailwindScoped = (prefix: string) => (classes: string) =>
  classes
    .split(' ')
    .map((c) => `${prefix}:${c}`)
    .join(' ');

const sm = tailwindScoped('sm');
const md = tailwindScoped('md');

export default ({ data: { mdx: entry } }) => {
  const { modifiedTime, birthTime } = entry.parent;
  const { title } = entry.frontmatter;
  const { body } = entry;

  return (
    <Layout>
      <SEO title={title} />
      <div className="relative">
        <h1 className={cn('text-3xl font-extrabold', sm('text-4xl'))}>{title}</h1>

        <section className={cn('mb-4 my-2 text-sm', sm('text-base'))}>
          <span>
            <b>Published:</b> {birthTime}
            {birthTime !== modifiedTime && <> | Updated {modifiedTime}</>}
          </span>
        </section>

        <MDXRenderer>{body}</MDXRenderer>

        <div className="border-t py-4">
          <Link to="/entries">&larr; back to all entries</Link>
        </div>
      </div>
    </Layout>
  );
};
