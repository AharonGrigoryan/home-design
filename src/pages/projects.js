import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout, Projects, Algolia } from "../components";
import YoutubeVideo from "../components/YoutubeVideo";
import BackToTop from "../components/BackToTop";

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data;
  return (
    <Wrapper>
      <Layout>
        <Projects title="our projects" projects={projects} page />
        <YoutubeVideo />
        <BackToTop />
      </Layout>
    </Wrapper>
  );
};

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`;

export default ProjectsPage;
