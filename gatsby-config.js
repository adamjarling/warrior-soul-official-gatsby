module.exports = {
  siteMetadata: {
    title: "Warrior Soul Official Website",
    author: "Adam J. Arling",
    imageUrl: "https://imgur.com/a/XiPIn1b",
    description: "Warrior Soul Official - Kory Clarke - Rock Punk Metal",
    keywords: `Warrior Soul, Soul Kory Clarke, Punk, Rock, Metal`,
    // twitter: "https://twitter.com/amanhimself",
    // github: `https://github.com/amandeepmittal`,
    // medium: "https://medium.com/@amanhimself",
    // gatsby: "https://www.gatsbyjs.org/",
    // bulma: "https://bulma.io/",
    siteUrl: `https://www.warriorsoulofficial.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Warrior Soul",
        short_name: "Warrior Soul",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/favicon.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
