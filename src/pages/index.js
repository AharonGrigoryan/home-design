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
import CenterMode from "../components/CenterMode";
import YoutubeVideo from "../components/YoutubeVideo";
import BackToTop from "../components/BackToTop";
import YetAnother from "../components/YetAnother";

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero />
      <YetAnother />
      <About />
      <GridProjects projects={projects} title="Latest projects" />
      <Survey />
      <Slider />
      <CenterMode />
      <YoutubeVideo />
      <BackToTop />
    </Layout>
  );
};

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
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
