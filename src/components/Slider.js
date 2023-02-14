import React, { useState, useEffect } from "react";

import Title from "./Title";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { graphql, useStaticQuery } from "gatsby";

export const query = graphql`
  query MyCustomers {
    allAirtable(filter: { table: { eq: "Customers" } }) {
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

const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const data = useStaticQuery(query);
  const {
    allAirtable: { nodes: customers },
  } = data;

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > customers.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = customers.length - 1;
      }
      return index;
    });
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > customers.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper className="section">
      <Title title="reviews" />
      <div className="section-center">
        {customers.map((customer, customerIndex) => {
          const {
            data: { image, Name, title, quote },
          } = customer;
          const customerImg = getImage(image.localFiles[0]);

          let position = "nextSlide";
          if (customerIndex === index) {
            position = "activeSlide";
          }
          if (
            customerIndex === index - 1 ||
            (index === 0 && customerIndex === customers.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={customerIndex}>
              <GatsbyImage
                image={customerImg}
                className="img"
                alt={Name}
              ></GatsbyImage>
              <h4>{Name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    /* background: red; */
    .img {
      border-radius: 50%;
      margin-bottom: 1rem;
      display: inline-block !important;
    }
    h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
    }
    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
    }
    .text {
      max-width: 40em;
      margin: 0 auto;
      line-height: 2;
      color: var(--clr-grey-5);
    }
    .icon {
      font-size: 3rem;
      margin-top: 1.5rem;
      color: var(--clr-primary-5);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }
    article.lastSlide {
      transform: translateX(-100%);
    }
    article.nextSlide {
      transform: translateX(100%);
    }
  }
`;
export default Slider;

// {carousel.map((item) => {
//       const {
//         data: { image, Name },
//       } = item;
//       const customerImg = getImage(image.localFiles[0]);
//       return (
//         <GatsbyImage
//         image={customerImg}
//         alt={Name}
//         className="img"
//         ></GatsbyImage>
