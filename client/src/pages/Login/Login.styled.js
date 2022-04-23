import styled from "styled-components";
import { mobile, tablet } from "../../responsive.js";

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
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
  margin: auto;
  border-radius: 5px;
  padding: 20px;
  width: 30%;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: white;
  flex-direction: column;
  ${mobile({ width: "100%" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const InputContainer = styled.div`
  margin: 20px 15px 0 15px;
  border-radius: 5px;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: 1px solid #b5838d;
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

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
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
  color: white;

  &:hover {
    background-color: #ffb8c6;
    color: white;
  }
  ${mobile({
    margin: "10px 0 0 0",
    padding: "10px",
    fontSize: "15px",
    minWidth: "100%",
  })}
`;

export const linkStyle = {
  margin: "5px 0",
  textDecoration: "none",
  cursor: "pointer",
  color: "#ffb8c6",
};

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
  padding: 5px 0 0 5px;
`;
export const BottomContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  margin: 15px 0 0 0;
`;

export const LinkContainer = styled.div`
  font-size: 14px;
`;
