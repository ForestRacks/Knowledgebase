import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import type { DocsThemeConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config: DocsThemeConfig = {
  logo: <><span className="_font-extrabold">ForestRacks</span><span className="_ml-2 max-md:_hidden _font-normal _text-gray-600">Help Center</span></>,
  chat: {
    link: 'https://discord.forestracks.com'
  },
  docsRepositoryBase:
    'https://github.com/ForestRacks/Knowledgebase/blob/Production',
  editLink: {
    content: 'Edit this page on GitHub'
  },
  footer: {
    content: '© 2024 Forest Racks LLC',
  },
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – ForestRacks`
    const description =
      config.frontMatter.description || `${config.title} – ForestRacks Help`
    const image = config.frontMatter.image || 'https://forestracks.com/favicon.png'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="ForestRacks" />
        <meta name="twitter:site" content="https://help.forestracks.com" />
      </>
    )
  }
}

export default config