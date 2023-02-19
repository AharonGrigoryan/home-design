import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { GoThreeBars } from "react-icons/go";
import { Link } from "gatsby";
import NavLink from "./NavLink";
import { GatsbyContext } from "../context/context";
import { window } from "browser-monads";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobilMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Wrapper style={{ display: navbar ? "block" : "" }}>
      <div className={navbar ? "nav-center active" : "nav-center"}>
        <div className="nav-header">
          <Link to="/">
            {" "}
            <img src={logo} alt="desing" />
          </Link>
          <button className="toggle-btn">
            <GoThreeBars className="nav" />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button>products</button>
          </li>
          <li>
            <button>developers</button>
          </li>
          <li>
            <button>company</button>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;

  .nav-center {
    /* position: fixed; */
    width: 100%;
    margin: 0 auto;
    max-width: 100%;
  }
  .nav-center.active {
    position: fixed;
    background: linear-gradient(90deg, hsl(21, 84%, 25%), rgba(0, 0, 0, 0));
    @media (min-width: 800px) {
      height: 3rem;
    }
    li {
      padding: 0;

      position: relative;
    }
  }

  .toggle-btn {
    margin-right: 30px;
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-left: 20px;
      width: auto;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
    button {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }
`;

// const Wrapper = styled.nav`
//   position: relative;
//   background: transparent;
//   z-index: 1;
//   height: 5rem;
//   display: flex;
//   align-items: center;

//   .nav-center {
//     width: 100vw;
//     background: transparent;
//     /* height: 80px; */
//     /* display: flex;
//     justify-content: center;
//     align-items: center; */
//     font-size: 1.2rem;
//     position: sticky;
//     top: 0;
//     z-index: 999;
//     position: fixed;
//     top: 0;
//     width: 100vw;
//     z-index: 9999;
//     /* width: 100vw; */
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }

//   .nav-header {
//     color: var(--clr-white);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     img {
//       width: auto;
//     }
//     .toggle-btn {
//       width: 3.5rem;
//       height: 2.25rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 1.5rem;
//       border-radius: 2rem;
//       border: transparent;
//       color: var(--clr-white);
//       background: var(--clr-primary-5);
//       cursor: pointer;
//       transition: var(--transition);
//       &:hover {
//         background: var(--clr-primary-3);
//       }
//     }
//   }
//   .nav-links {
//     display: none;
//   }
//   @media (min-width: 800px) {
//     .nav-header {
//       .toggle-btn {
//         display: none;
//       }
//     }
//     .nav-center {
//       display: grid;
//       grid-template-columns: auto 1fr;
//       gap: 0 2rem;
//       grid-gap: 0 4rem;
//       align-items: center;
//     }
//     .nav-links {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       max-width: 500px;
//     }
//     li {
//       padding: 1rem 0;
//       position: relative;
//     }
//     button {
//       color: black;
//       background: transparent;
//       border: transparent;
//       font-size: 1rem;
//       letter-spacing: 2px;
//       font-weight: 500;
//       padding: 10px 20px;
//       width: 100%;
//       text-transform: capitalize;
//       position: relative;
//     }
//   }
// `;

export default Navbar;
