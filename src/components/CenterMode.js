import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Title from "./Title";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

export const query = graphql`
  query MySlider {
    allAirtable(filter: { table: { eq: "Slider" } }) {
      nodes {
        data {
          title
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

const CenterMode = () => {
  const data = useStaticQuery(query);
  const {
    allAirtable: { nodes: slider },
  } = data;
  //   console.log(slider);
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          pauseOnHover: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          pauseOnHover: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnHover: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Title title="us instagram" />
      <Slider {...settings}>
        {slider.map((img) => {
          const {
            data: { image, title, Name },
          } = img;
          const slidImgae = getImage(image.localFiles[0]);
          return (
            <div className="image-container">
              <GatsbyImage
                className="img"
                image={slidImgae}
                alt={Name}
                key={image.id}
              />
              <div className="gradient-overlay"></div>
              <div className="text-container">
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .image-container {
    position: relative;
    border-radius: 50px;
  }

  .img {
    display: block;
    border-radius: 50px;
  }

  .gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    );
    border-radius: 50px;
  }

  .text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .text-container p {
    color: aliceblue;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(10%);
  }
  /* width: 70%;
  margin: 0 auto;

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .card {
    overflow: hidden;
    height: 15rem;
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    background: var(--clr-primary-7);
  }
  .card h1 {
    font-size: 1rem;
  }
  .img {
    width: 100%;
    height: 100%;
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
    p {
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
  } */
`;

export default CenterMode;
