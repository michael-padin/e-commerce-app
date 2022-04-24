import styled from "styled-components";
import { mobile } from "../../../responsive.js";

export const Container = styled.div`
  margin: auto;
  background-color: #b5838d;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  ${mobile({ padding: "0" })}
  color: white;
`;

export const Wrapper = styled.div`
  height: 90px;
  padding: 10px 100px;
  position: relative;
  margin: auto;
  display: flex;
  max-width: 1500px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px", height: "80px" })}
`;

export const Left = styled.div`
  align-items: center;
  display: flex;

  flex: 1;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 25px;
  border-radius: 10px;
  height: 40px;
  background-color: #ffff;
  ${mobile({ marginLeft: "0", height: "40px" })}
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 10px;
  font-size: 1rem;
  ${mobile({ width: "100%" })}

  &:focus {
    outline: none;
  }
`;

export const Center = styled.div`
  align-items: center;
  text-align: center;
  flex: 1;
  ${mobile({ display: "none" })}
`;

export const Logo = styled.h1`
  font-weight: bold;
  /* ${mobile({ display: "none" })} */
  color: ${(props) => props.color};
`;

export const LogoSidebarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ArrowUp = styled.div`
  position: absolute;
  margin: auto;
  top: -10px;
  left: 0;
  right: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  width: 0;
  height: 0;
  border-bottom: 10px solid #fff;
`;

export const List = styled.ul``;
export const ListItem = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    outline: 1px solid #b5838d;
    /* border: 5px; */
  }
`;

export const AccountContainer = styled.div`
  padding: 10px;
  ${mobile({ padding: "0", })}
`;

export const Circle = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: black;
  background-color: #fff;

`;

export const AccountProfile = styled.h2``;

export const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  ${mobile({ fontSize: "14px", marginLeft: "15px" })}
`;
export const ModalContainer = styled.div`
  display: ${(props) => (props.isVisible === true ? "block" : "none")};
  position: absolute;
  right: 80px;
  bottom: -85px;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  z-index: 6;
  transition: all 0.5s;

  ${MenuItem}:hover & {
    display: none;
  }

  ${mobile({ display: "none" })}
`;

export const Sidebar = styled.div`
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  margin-right: ${(props) => (props.isOpen === true ? "0" : "-100%")};
  padding: 20px;
  top: 0;
  right: 0;
  background-color: #ffff;
  z-index: 5;
  overflow: hidden;
  ${mobile({ display: "block" })}
`;
export const ListContainer = styled.ul``;

export const ListItems = styled.li`
  display: flex;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #fafafa;
`;

export const IconContainer = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
  color: #b5838d;
`;

export const LinkStyle = {
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
};
