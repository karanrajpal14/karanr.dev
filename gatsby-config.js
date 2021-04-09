const path = require("path")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    description:
      "This is my portfolio / blog where I write about my professional and personal journey.",
    url: "https://www.karanr.dev",
    image: "/header.jpg",
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    authorName: `Karan Rajpal`,
    designation: `Software Developer`,
    careerStartYear: `2016`,
    twitterUsername: "@karanrajpal14",
    githubUsername: `karanrajpal14`,
    linkedinUsername: `karan-rajpal`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `static/logo.svg`,
        background_color: `#663399`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        defaultSizes: "gzip",
        devMode: false,
      },
    },
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
        disable: false, // Flag for disabling animations
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
