import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components";

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes },
  } = data;
  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="Latest projects" />
      <Slider customers={nodes} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 5
      sort: { data: { Name: DESC } }
    ) {
      nodes {
        id
        data {
          date
          Name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        data {
          Name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: DOMINANT_COLOR
                  width: 150
                  height: 150
                )
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default HomePage;
