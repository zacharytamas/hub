import { graphql, useStaticQuery } from 'gatsby';

interface QueryNode {
  frontmatter: {
    title: string;
    slug: string;
  };
  excerpt: string;
}

const useEntries = () => {
  const entries = useStaticQuery<{ allMdx: { nodes: QueryNode[] } }>(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }

          excerpt
        }
      }
    }
  `);

  return entries.allMdx.nodes.map(
    ({ excerpt, frontmatter: { title, slug } }: QueryNode) => ({
      title,
      excerpt,
      slug,
    })
  );
};

export default useEntries;
