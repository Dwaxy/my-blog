module.exports = {
  siteMetadata: {
    title: 'Strange Words Blog',
    siteUrl: `https://tinywords.netlify.com`,
  },
  plugins: [
  
    
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
  
  
    // {
    //   resolve: 'gatsby-plugin-purify-css',
    //   options: {
    //     /* Defaults */
    //     styleId: 'gatsby-inlined-css',
    //     purifyOptions: {
    //       info: true,
    //       minify: true
    //     }
    //   }
    // },
  
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-100204166-2",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
        
           // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}