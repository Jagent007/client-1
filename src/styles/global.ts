import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url("/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Roboto;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
