import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  banner: {
    content: 'ForestRacks Wiki',
    key: 'ForestRacks'
  },
  chat: {
    link: 'https://discord.forestracks.com' // discord server,
  },
  docsRepositoryBase:
    'https://github.com/ForestRacks/Knowledgebase',
  editLink: {
    content: 'Edit this page on GitHub'
  },
  faviconGlyph: '✦',
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – ForestRacks`
    const description =
      config.frontMatter.description || 'ForestRacks Knowledgebase'
    const image = config.frontMatter.image || 'https://forestracks.com/favicon.png'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="ForestRacks" />
        <meta name="twitter:site" content="https://help.forestracks.com" />
      </>
    )
  }
}
