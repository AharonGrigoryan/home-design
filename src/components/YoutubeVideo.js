import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Title";

const YoutubeVideo = () => {
  return (
    <Wrapper className="section">
      <Title title="Video" />
      <Container>
        <div className="ratio ratio-21x9">
          <iframe
            src="https://www.youtube.com/embed/vb0AIXefG5I"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey-10);
`;

export default YoutubeVideo;
