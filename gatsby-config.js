module.exports = {
  siteMetadata: {
    title      : `ochronus online`,
    author     : `Csaba Okrona`,
    description: `where the rising ape meets the falling angel`,
    siteUrl    : `https://ochronus.online`,

    social: {
      twitter: `ochronus`,
    },
    siteimage: `/images/zen.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'ochronus.online',
        protocol  : 'https',
        hostname  : 'ochronus.online',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://ochronus.online',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lora`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
          {
            family: `Merriweather`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-69017316-7',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date       : edge.node.frontmatter.date,
                  url        : 
                    site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.url,
                  guid: 
                    site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.url,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                      }
                      frontmatter {
                        url
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title : "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name            : `Ochronus online`,
        short_name      : `ochronus_online`,
        start_url       : `/`,
        background_color: `#ffffff`,
        theme_color     : `#663399`,
        display         : `minimal-ui`,
        icon            : `content/assets/site-logo.original.png`,
      },
    },
    `gatsby-plugin-draft`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
