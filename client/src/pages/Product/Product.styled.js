import styled from "styled-components";
import { mobile, tablet } from "../../responsive.js";

export const Container = styled.div`
  max-width: 1300px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 20px auto;
  border-radius: 14px;
  ${mobile({ borderRadius: "none", boxShadow: "none", margin: "10px 0" })}
`;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
export const ImgContainer = styled.div`
  margin: auto;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "80vh" })}
  ${tablet({ height: "80vh" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
export const Title = styled.h1`
  font-weight: 500;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "100%" })}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #eee;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0 5px;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 3px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  cursor: pointer;
  border: 1px solid #b5838d;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "100%" })}
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 1px solid #b5838d;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;

  &:hover {
    background-color: #b5838d;
    border: 1px solid #b5838d;
    color: #ffff;
  }
`;

/* Skeleton Part */
export const SkeletonImgContainer = styled.div`
  height: 80vh;
  width: 50vh;
  background-color: #fafafa;
  border-radius: 10px;
`;

export const SkeletonInfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

export const SkeletonTitle = styled.div`
  background-color: #fafafa;
  width: 80%;
  height: 50px;
`;
export const SkeletonDesc = styled.div`
  background-color: #fafafa;
  width: 80%;
  height: 20px;
`;

export const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "0",
  })}
`;
export const ProductAmount = styled.div`
  font-size: 20px;
  border-top: 1px solid #5555;
  border-bottom: 1px solid #5555;
  width: 50px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ margin: "0", fontSize: "20px" })}
`;

export const QuantityButton = styled.button`
  border: 1px solid #5555;
  width: 32px;
  height: 32px;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  display: ${({ isStarting }) => (isStarting === true ? "block" : "none")};
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

export const ModalContainer = styled.div`
  position: relative;
  transform: scaleY(0.01) scaleX(0);
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
  background-color: #e4e6eb;
  border-radius: 50%;
`;
