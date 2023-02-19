import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BackToTop = () => {
  const [bactToTop, setBacktoTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBacktoTop(true);
      } else {
        setBacktoTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      {bactToTop && (
        <button onClick={scrollUp} className="noselect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    position: fixed;
    display: inline-block;
    right: 30px;
    bottom: 30px;
    line-height: 60px;
    width: 55px;
    height: 55px;
    cursor: pointer;
    background-color: var(--clr-primary-8);
    background-image: linear-gradient(
      90deg,
      hsl(211, 39%, 23%),
      hsl(210, 22%, 49%)
    );
    border: none;
    border-radius: 50%;
    /* transition: 200ms; */
  }

  button svg {
    fill: white;
    width: 30px;
    height: 30px;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
  }

  button:before {
    content: "Back to Top";
    position: absolute;
    transform: translateX(-50%) translateY(45px);
    font-size: 15px;
    transition: 200ms;
    color: transparent;
    font-weight: bold;
  }

  button:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    width: 60px;
    height: 60px;
  }

  button:hover::before {
    color: #fff;
  }

  button:hover svg {
    animation: bounce 2s infinite linear;
  }

  @keyframes bounce {
    0% {
      transform: translateX(-50%) translateY(-50%);
    }
    25% {
      transform: translateX(-50%) translateY(-65%);
    }
    50% {
      transform: translateX(-50%) translateY(-50%);
    }
    75% {
      transform: translateX(-50%) translateY(-35%);
    }
    100% {
      transform: translateX(-50%) translateY(-50%);
    }
  }

  button:focus {
    outline: none;
  }
`;

export default BackToTop;
