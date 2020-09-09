exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create entries', result.errors);
  }

  const entries = result.data.allMdx.nodes;

  entries.forEach((entry) => {
    actions.createPage({
      path: `entries/${entry.frontmatter.slug}`,
      component: require.resolve('./src/templates/Entry.tsx'),
      context: {
        slug: entry.frontmatter.slug,
      },
    });
  });
};
