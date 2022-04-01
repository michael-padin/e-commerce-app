import styled from "styled-components";
import { mobile, tablet } from "../../responsive.js";

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  background-size: cover;
  ${mobile({ padding: "20px" })}
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  width: 50%;
  ${mobile({ display: "none" })}

`;
export const Image = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  flex-direction: column;
  margin: auto;
  width: 30%;
  ${mobile({ width: "100%" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;
export const Input = styled.input`
  font-size: 18px;
  border: 1px solid lightgray;
  min-width: 40%;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;

  &:focus {
    outline: 2px solid #b5838d;
    border: none;
  }
  ${mobile({
    margin: "10px 0 0 0",
    padding: "10px",
    fontSize: "15px",
    minWidth: "100%",
  })}
  ${tablet({
    margin: "10px 0 0 0",
    padding: "10px",
    fontSize: "15px",
    minWidth: "100%",
  })}
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  background-color: #b5838d;
  border-radius: 5px;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
  font-size: 20px;
  margin: 10px 0;
  color: #fff;

  &:hover {
    background-color: #ffb8c6;
    color: white;

    &:disabled {
      color: #06d6a0;
      cursor: not-allowed;
    }
  }
  ${mobile({
    margin: "20px 0 0 0",
    padding: "10px",
    fontSize: "15px",
    minWidth: "100%",
  })}
  ${tablet({
    margin: "20px 0 0 0",
    padding: "10px",
    fontSize: "15px",
    minWidth: "100%",
  })}
`;

export const Error = styled.div`
  color: red;
  padding: 10px;
`;

export const linkStyle = {
  margin: "5px 0",
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
};
