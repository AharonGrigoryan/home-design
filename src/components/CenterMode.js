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

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          pauseOnHover: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 500,
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
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnHover: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper className="section">
      <Title title="us instagram" />
      <div className="section-center">
        <Slider {...settings}>
          {slider.map((img) => {
            const {
              data: { image, title, Name },
            } = img;
            const slidImgae = getImage(image.localFiles[0]);
            return (
              <div className="image-container" key={image.id}>
                <GatsbyImage className="img" image={slidImgae} alt={Name} />
                <div className="gradient-overlay"></div>
                <div className="text-container">
                  <p>{title}</p>
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="instagram-button">
          <a href="https://www.instagram.com/">@instagram</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .section-center {
    margin-top: 4rem;
    width: 95%;
    height: 450px;
    max-width: 100%;
    text-align: center;
    position: relative;
    /* display: flex; */
    /* overflow: hidden; */
  }
  @media (max-width: 760px) {
    .section-center {
      height: 250px;
    }
  }
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
    border-radius: 30px;
  }

  .gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(60, 60, 60));
    border-radius: 30px;
  }

  .text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .text-container p {
    font-family: "Caveat", cursive;
    font-size: 0.8rem;
    color: aliceblue;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(10%);
  }
  a {
    display: inline-block;
    color: #ffffff;
    background: #797979;
    padding: 6px 24px;
    text-decoration: none;
    border-radius: 6px;
  }
  .instagram-button {
    margin-top: 1rem;
    /* margin-bottom: 0.25rem; */
    text-align: center;
    padding: 0 20px;
  }
`;

export default CenterMode;
