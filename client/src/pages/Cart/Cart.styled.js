import styled from "styled-components";
import { mobile } from "../../responsive.js";

export const Container = styled.div`
  min-height: 80vh;
  max-width: 1500px;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  ${mobile({ padding: "10px" })}

`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  border: ${(props) => props.type === "filled" ? "none" : "2px solid #b5838d"};
  background-color: ${(props) =>props.type === "filled" ? "#b5838d" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;

  &:hover {
    background-color: #b5838d;
    color: white;
    border: 2px solid #b5838d;
  }

`;

export const EmptyCartContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyCartImageContainer = styled.div`
  height: 200px;
`;

export const EmptyCartImage = styled.img`
  height: 100%;
`;

export const EmptyText  = styled.p`
  margin: 15px 0;
`;


export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  /* min-height: 50vh; */
  min-height: 50vh;

  max-height: 100%;

  ${mobile({ hieght: "auto"})}

`;

export const Product = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", margin: "0"})}
`;

export const ProductDetail = styled.div`
  display: flex;
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "20px",
    marginTop: "20px"
  })}
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

export const Button = styled.button`
  border: 1px solid #5555;
  width: 32px;
  height: 32px;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const ProductPrice = styled.div`
  font-size: 30px;

  font-weight: 200;
  ${mobile({ marginBottom: "0", fontSize: "20px" })}
`;

export const DeleteIconContainer = styled.div`
  margin-top: 20px ;
  ${mobile({ marginBottom: "0", marginTop: "0" })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  ${mobile({display: "none"})}
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  ${mobile({height: "150px", width: "auto"})}
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span``;
export const ProductId = styled.span``;
export const ProductColorContainer= styled.div`
  display: flex;
  flex-direction: row;

`
export const ProductColor = styled.div`
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${({color}) => color};
`;

export const ProductSize = styled.span``;

export const Summary = styled.div`
  position: sticky;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  padding: 20px;
  margin-top: 50px;
  bottom: 0;
  background-color: #fff;
  ${mobile({ margin: "0"})}
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const SummaryButton = styled.button`
  width: 20%;
  padding: 10px;
  background-color: #b5838d;
  float: right;
  border: none;
  color: #fff;
  height: 50px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({width: "50%"})}

  &:hover {
    background-color: transparent;
    background-color: #db9eaa;
  }


  
`;
