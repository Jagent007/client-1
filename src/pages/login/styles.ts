import styled, { css } from "styled-components";


export const Page = styled.div`
  height: 100%;
  width: 100%;

  /* background-color: red; */
`;

export const Title = styled.span`
  font-size: calc(4vw + 1rem);
  ${(props) =>
    css`
      color: ${props.color};
    `};
`;

export const ImageContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30%;
  height: auto;
`;
export const FormContainer = styled.form`
  width: 25vw;
  height: 25vh;
  margin: 0 auto;
  padding: 3rem;
  /* padding-bottom: 4rem; */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #61ce70;

  .input-mask,
  .input-form {
    border-radius: 4px;
    border-style: none;
    box-shadow: 1px 1px 4px #0000001f;
    padding: 8px 12px;
    margin-bottom: 1.6rem;
    box-sizing: border-box;
    background: white;
    transition: 0.2s all;
    color: #010205ff;
    width: 100%;

    &:focus {
      box-shadow: 1px 1px 4px #0000003f;
      outline: none;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  /* height: 40%; */
  width: 100%;
  color: #f1efef;

  
`;

export const Label = styled.label`
  font-family: "Roboto";
  font-weight: 500;
  color: #fff6f2;
  width: 100%;
  margin-bottom: 0.2rem;
`;
