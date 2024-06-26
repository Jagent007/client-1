import styled  from "styled-components";
import { Modal, Box } from "@mui/material";

export const Page = styled.div`
  height: 100%;
  width: 100%;

  /* background-color: red; */
`;

export const ImageContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30%;
  height: auto;
`;

export const FormContainer = styled.form<{ checked: boolean }>`
  margin-bottom: 2rem;
  width: 70vw;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: ${(props) => (props.checked ? "#fd0404" : "#61ce70")};

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

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  .saleType {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 1.5rem;
    color: #aca9ec;
    margin: 1rem;
  }
`;

export const ContainerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled(Box)`
  border-radius: 5px;
  background-color: #f0f7ff;
  padding: 2rem;

  #simple-modal-title{
    font-family: "Roboto";
    font-weight: 700;
    color: #413430;
    margin-bottom: 1rem;
  }
  
  .cripto-select{
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  
  }

  .modal-button{
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #61ce70;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 100%;
  }
`;

export const Boxinfo = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  color: #413430;
  margin-bottom: 1rem;
`;