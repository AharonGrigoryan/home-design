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

        <div className="instagram-button">
          <a href="https://www.instagram.com/">@instagram</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey-10);

  .section-center {
    margin-top: 4rem;
    width: 80vw;
    height: 350px;
    max-width: 800px;
    text-align: center;
    position: relative;
    /* display: flex; */
    /* overflow: hidden; */
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
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    );
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

  /* @media (min-width: 768px) {
    .image-container {
      height: 13rem;
    }
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    .image-container {
      height: 12.5rem;
    }
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    .image-container {
      height: 15rem;
    }
  } */
  /* a {
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
  } */

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
