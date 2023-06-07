// import React from "react";
// import styled from "styled-components";
// import { Link } from "gatsby";
// import { useState } from "react";

// const SearchButton = ({ projects }) => {
//   const [index, setIndex] = useState(0);
//   const types = [
//     "all",
//     ...new Set(
//       projects.map((project) => {
//         return project.data.type;
//       })
//     ),
//   ];
//   const showProjects = (type, typeIndex) => {
//     setIndex(typeIndex);
//   };
//   return (
//     <Wrapper>
//       {" "}
//       {types.map((type, typeIndex) => {
//         return (
//           <Link to={`/${type}`} key={typeIndex}>
//             <button
//               className={index === typeIndex ? "active" : undefined}
//               onClick={() => showProjects(type, typeIndex)}
//             >
//               {type}
//             </button>
//           </Link>
//         );
//       })}
//     </Wrapper>
//   );
// };
// const Wrapper = styled.section`
//   display: flex;
//   margin-bottom: 0;
//   justify-content: center;
//   flex-wrap: wrap;
//   button {
//     margin: 0.5rem;
//     text-transform: capitalize;
//     background: transparent;
//     border: transparent;
//     color: var(--clr-grey-6);
//     letter-spacing: var(--spacing);
//     font-size: 1rem;
//     padding: 0.25rem;
//     cursor: pointer;
//     outline: none;
//     transition: var(--transition);
//   }
//   button:hover,
//   button.active {
//     box-shadow: 0px 1.5px 0 var(--clr-grey-6);
//   }
// `;

// export default SearchButton;
