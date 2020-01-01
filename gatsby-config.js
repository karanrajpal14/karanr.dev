module.exports = {
  siteMetadata: {
    title: `Karan Rajpal | Portfolio`,
    description: `This is my coding blog where I write about my coding journey.`,
    image: `/default-site-image.jpg`,
    siteUrl: `https://karanr.dev`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    authorName: `Karan Rajpal`,
    designation: `Full-stack Developer`,
    twitterUsername: `@karanrajpal14`,
    githubUsername: `karanrajpal14`,
    linkedinUsername: `karan-rajpal`
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
  ],
}
