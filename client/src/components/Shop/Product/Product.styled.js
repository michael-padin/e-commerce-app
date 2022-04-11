import { mobile } from "../../../responsive.js";
import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  background-color: #ffff;
`;
export const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${mobile({height: "200px"})}

`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 2;
`;
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  border-top-left-radius: 15px;
  background-color: gray;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;

  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #edf2fb;
    transform: scale(1.3);
  }
`;

export const Bottom = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  font-size: 1.2rem;
  ${mobile({fontSize: ".8rem", height:"40px"})}

`;

export const Title = styled.p`
  width: 50%;
`;
export const Price = styled.p``;


export const styledLink  = {
  margin: "5px 0",
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
}