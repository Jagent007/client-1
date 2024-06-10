import styled, { css } from "styled-components";

export const TermsOfUseContainer = styled.div`
  display: flex;
  height: 95vh;
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 1rem auto;
  background-color: #61ce70;
  color: #fff;
  border-radius: 10px;

  p,
  h1,
  h2,
  li,
  ul {
    margin-bottom: 20px;
    line-height: 1.5; /* Adiciona espaçamento entre as linhas */
  }
`;
