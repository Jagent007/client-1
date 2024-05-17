import styled, { css } from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const Title = styled.span`
  font-size: calc(4vw + 1rem);
  ${(props) =>
    css`
      color: ${props.color};
    `};
`;

export const TitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 20vh;
`;

export const Logo = styled.img`
  width: 50%; 
  height: auto;
`