import styled, { css } from "styled-components";

export const TermsOfUseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
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
