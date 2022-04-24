import styled from "styled-components";
import { mobile, tablet } from "../../responsive.js";

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  max-width: 1000px;
  margin: 5rem auto;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  ${mobile({
    padding: "20px",
    display: "block",
    boxShadow: "none",
    margin: "30px auto",
  })}
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 10px;
  width: 50%;
  background-color: #f5f4f9;
  ${mobile({ display: "none" })}
  ${tablet({
    height: "100%",
  })}
`;
export const Image = styled.img`
  width: 100%;
`;
export const Wrapper = styled.div`
  margin: auto;
  border-radius: 5px;
  /* padding: 20px; */
  width: 35%;
  background-color: white;
  flex-direction: column;
  ${mobile({ width: "100%", padding: "0" })}
  ${tablet({
    padding: "0",
    width: "40%",
  })}
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
  margin: 5px 0 5px 0;
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
    minWidth: "100%",
  })}
`;

export const BottomContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
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
`;
export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
  padding: 5px 0 0 5px;
`;

export const LinkContainer = styled.div`
  font-size: 14px;
`;

export const linkStyle = {
  margin: "5px 0",
  textDecoration: "none",
  cursor: "pointer",
  color: "#ffb8c6",
};
