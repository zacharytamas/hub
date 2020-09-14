import React from 'react';

import cn from 'classnames';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import LinkWithArrow from '../components/LinkWithArrow';
import SEO from '../components/SEO';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        datePublished(formatString: "Do MMMM YYYY")
      }
      body
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
  const { title, datePublished } = entry.frontmatter;
  const { body } = entry;

  return (
    <Layout>
      <SEO title={title} />
      <div className="relative">
        <h1 className={cn('text-3xl font-extrabold', sm('text-4xl'))}>{title}</h1>

        <section className={cn('mb-4 my-2 text-sm', sm('text-base'))}>
          <span>{datePublished}</span>
        </section>

        <MDXRenderer>{body}</MDXRenderer>

        <div className="border-t py-4">
          <LinkWithArrow arrowSide="left" to="/entries">
            back to all entries
          </LinkWithArrow>
        </div>
      </div>
    </Layout>
  );
};
