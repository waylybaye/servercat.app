module.exports = {
  siteMetadata: {
    title: `ServerCat`,
    description: `Server status, docker management and ssh terminal `,
    author: `@waylybaye`,
    siteUrl: `https://servercat.app`,
  },
  plugins: [
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/docs`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-images`,
    //     path: `${__dirname}/docs/images`
    //   }
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Roboto",
          `DM Mono`
        ],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // trackingId: "G-6P0C5XJ5SF",
        trackingId: "UA-161224840-1",
        anonymize: true,
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    }
  ]
}
