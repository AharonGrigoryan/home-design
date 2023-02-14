import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Carousel from "react-bootstrap/Carousel";

export const query = graphql`
  query MyCarousel {
    allAirtable(filter: { table: { eq: "Carousel" } }) {
      nodes {
        data {
          Name
          image {
            id
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
const Hero = () => {
  const data = useStaticQuery(query);
  const {
    allAirtable: { nodes: carousel },
  } = data;
  console.log(carousel);
  return (
    <Wrapper>
      <Carousel>
        {carousel.map((item) => {
          const {
            data: { image, Name },
          } = item;
          const customerImg = getImage(image.localFiles[0]);
          return (
            <Carousel.Item key={image.id}>
              <GatsbyImage image={customerImg} alt={Name} className="img" />
              <div className="info">
                <article>
                  <h3>If you can dream it, we can create it</h3>
                  <h1>let your home be inique and stylish</h1>
                  <Link to="/projects">Projects</Link>
                </article>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  margin-top: -5rem;
  position: relative;
  .img {
    width: 100vw;
    height: 100vh;
    object-fit: fill;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
      font-family: "Caveat", cursive;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
`;

export default Hero;
