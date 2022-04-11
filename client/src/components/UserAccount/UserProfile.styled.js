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

export const BackgroundContainer = styled.div`
  display: ${({isStarting}) => isStarting === true ? 'block' : 'none'} ;
  position: fixed; /* Stay in place */
  overflow: hidden; /* Enable scroll if needed */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%; /* Full width */
  height: 100%;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const LoadingBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`;

export const ModalContainer = styled.div`
position: relative;
transform:scaleY(.01) scaleX(0);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 100px;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div``;

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #E4E6EB;
  border-radius: 50%;
`;

