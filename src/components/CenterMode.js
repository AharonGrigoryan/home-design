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
          dots: true,
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
          slidesToShow: 1,
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
            <div className="card">
              <div className="card-top">
                <GatsbyImage
                  className="img"
                  image={slidImgae}
                  alt={Name}
                  key={image.id}
                />
                <h1>{title}</h1>
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
  margin-bottom: 50px;

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .img {
    border: 1px solid #fff;
    border-radius: 8px;
    overflow: 8px;
    color: #fff;
  }
  .card-top h1 {
    font-size: 1rem;
    margin: 10px 20px;
  }
  .card-top > .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CenterMode;
