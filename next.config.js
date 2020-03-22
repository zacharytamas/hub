const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'src/components/layouts',
  fileExtensions: ['mdx']
})();
