import { graphql, useStaticQuery } from 'gatsby';

import { EntryNode } from '../types';

export interface EntryExcerptNode extends EntryNode {
  excerpt: string;
  parent: {
    changeTimeFormatted: string;
    changeTime: string;
  };
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

          parent {
            id
            ... on File {
              id
              name
              changeTime
              changeTimeFormatted: changeTime(formatString: "Do MMMM YYYY")
            }
          }
        }
      }
    }
  `);

  return entries.allMdx.nodes;
};

export default useEntries;
