import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

import { Layout } from "../components";
import SearchButtons from "../components/SearchButtons";

const BlogPgae = ({ pageContext }) => {
  const { pageCount, group, index, first, last, alldata } = pageContext;

  const [projects, setProjects] = useState(group);

  console.log("projects", projects);

  const setBackToAll = () => {
    setProjects(group);
  };

  const previousIndex = index - 1;
  const nextIndex = index + 1;

  const previousPageUrl =
    previousIndex === 1 ? "/blog" : `/blog/${previousIndex}`;
  const nextPageUrl = `/blog/${nextIndex}`;

  const pathimages = [
    ...new Set(
      projects.map((i) => {
        return i.data.image.localFiles[0].publicURL;
      })
    ),
  ];
  console.log(pathimages);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }

  return (
    <Layout>
      <Wrapper className="section">
        {pageCount && (
          <SearchButtons
            projects={alldata}
            setProjects={setProjects}
            setBackToAll={setBackToAll}
          />
        )}
        <div className="section-center">
          {projects.map((img, index) => {
            const { Name, type, image } = img.data;

            return (
              <article key={image.id}>
                <div
                  className="container"
                  onClick={() => openLightboxOnSource(index)}
                  role="presentation"
                >
                  <GatsbyImage
                    image={getImage(image.localFiles[0])}
                    alt={Name}
                    className="img"
                  ></GatsbyImage>
                  <div className="info">
                    <p>- {type} -</p>
                    <h3>{Name}</h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {!!pageCount && !first && (
          <Link to={previousPageUrl}>Previous Paga</Link>
        )}
        {!!pageCount && !last && <Link to={nextPageUrl}>Next Paga</Link>}
        <FsLightbox
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.sourceIndex}
          thumbs={pathimages}
          sources={pathimages}
        />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      width: 100%;
      height: 100%;

      position: initial;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      height: 15rem;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }

    @media (min-width: 768px) {
      .container {
        height: 13rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .container {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .container {
        height: 15rem;
      }
    }
  }
  .btn {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;

export default BlogPgae;
