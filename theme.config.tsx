import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – ForestRacks'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ForestRacks" />
      <meta property="og:description" content="ForestRacks Help Center" />
    </>
  ),
  logo: <span>ForestRacks</span>,
  project: {
    link: 'https://github.com/ForestRacks/Knowledgebase',
  },
  chat: {
    link: 'https://discord.forestracks.com',
  },
  docsRepositoryBase: 'https://github.com/ForestRacks/Knowledgebase/blob/Production',
  footer: {
    text: '© 2023 Forest Racks LLC',
  },
}

export default config
