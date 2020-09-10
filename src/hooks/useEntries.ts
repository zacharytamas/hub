import { graphql, useStaticQuery } from 'gatsby';

import { EntryNode } from '../types';

export interface EntryExcerptNode extends EntryNode {
  excerpt: string;
}

const useEntries = () => {
  const entries = useStaticQuery<{ allMdx: { nodes: EntryExcerptNode[] } }>(graphql`
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

  return entries.allMdx.nodes;
};

export default useEntries;
