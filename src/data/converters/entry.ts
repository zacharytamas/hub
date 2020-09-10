import { Entry, EntryNode } from '../../types';

const entryNodeToEntry = ({ frontmatter: { title, slug } }: EntryNode): Entry => ({
  title,
  slug,
});

export { entryNodeToEntry };
