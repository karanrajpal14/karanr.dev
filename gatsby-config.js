module.exports = {
  siteMetadata: {
    title: `Karan Rajpal | Portfolio`,
    description: `This is my coding blog where I write about my coding journey.`,
    image: `/default-site-image.jpg`,
    siteUrl: `https://karanr.dev`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    authorName: `Karan Rajpal`,
    designation: `Software Developer`,
    careerStartYear: `2016`,
    twitterUsername: `@karanrajpal14`,
    githubUsername: `karanrajpal14`,
    linkedinUsername: `karan-rajpal`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#f5f0fa",
        height: "0.4em",
        paths: ["/blog/**", "/projects/**"],
        zIndex: 9999,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false // Flag for disabling animations
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#639`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
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
        path: `${__dirname}/projects`,
        name: `projects`,
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
