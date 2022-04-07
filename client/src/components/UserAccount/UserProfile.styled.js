import styled from "styled-components";
import { mobile } from "../../responsive.js";

export const UserProfileContainer = styled.div`
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  height: 100%;
  min-height: 760px;
  ${mobile({ margin: "0", borderRadius: "0" })}
`;
export const Top = styled.div`
  margin: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
`;
export const Title = styled.h1``;
export const SubHeading = styled.p``;

export const InfoParent = styled.div`
  margin: 40px 20px 0 20px;
`;

export const Form = styled.form``;

export const InfoSubParent = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  color: rgba(85, 85, 85, 0.8);
  text-transform: capitalize;
  overflow: hidden;
  ${mobile({ width: "35%", justifyContent: "flex-start" })}
`;
export const Label = styled.label``;

export const InputContainer = styled.div`
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #cccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #b5838d;
  padding: 10px;
  border: none;
  color: #fff;
  width: 30%;
  border-radius: 5px;
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
  padding: 5px 0 0 5px;
`;