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
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="Latest projects" />
      <Slider />
    </Layout>
  );
};

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 6
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
  }
`;

export default HomePage;
