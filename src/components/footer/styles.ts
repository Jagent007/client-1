import styled, { css } from "styled-components";

export const PageFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14.1%;
  /* background-color: #11360c; */
  color: #dfddf8;
  left: 0;
  bottom: 0;
  width: 100%;

  .links {
    font-weight: bold;
    font-size: 1.6rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 20px;
    text-decoration: none;
    color: inherit;
    -webkit-text-stroke: 0.5px black; /* Adds a black border around the text */
  }
`;
