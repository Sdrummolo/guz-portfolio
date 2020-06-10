module.exports = {
  siteMetadata: {
    title: `Mattia Guzman Photographer`,
    description: `Mattia Guzman is an Italian photographer based in Rome.`,
    author: `Luigi Di Paolo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
