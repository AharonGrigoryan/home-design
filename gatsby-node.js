const createPaginatedPages = require("gatsby-paginate");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query MyQuery {
      allAirtable(filter: { table: { eq: "Projects" } }) {
        nodes {
          data {
            Name
            type
            image {
              id
              localFiles {
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: DOMINANT_COLOR
                    height: 300
                    width: 600
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  createPaginatedPages({
    edges: result.data.allAirtable.nodes,
    createPage: createPage,
    pageTemplate: "src/templates/temp.js",
    pageLength: 6, // This is optional and defaults to 10 if not used
    pathPrefix: "blog", // This is optional and defaults to an empty string if not used
    context: { alldata: result.data.allAirtable.nodes }, // This is optional and defaults to an empty object if not used
  });
};
