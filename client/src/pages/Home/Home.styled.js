import styled from "styled-components";
import { mobile, tablet } from "../../responsive.js";

export const Container = styled.div`
  margin: auto;
  background-color: #b5838d;
  padding: 50px 0;
  ${mobile({ padding: "0" })}
`;

export const PopularTitleContainer = styled.div`
  display: flex;
  padding: 80px 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  ${mobile({ padding: "50px 0 0 0" })}
  `;

export const ProductsContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  align-items: center;
  grid-gap: 10px;
  ${mobile({
    gridTemplateColumns: "repeat(2,minmax(100px, 1fr))",
    marginTop: "30px",
  })}
  ${tablet({
    gridTemplateColumns: "repeat(3,minmax(100px, 1fr))",
    marginTop: "30px",
  })}
`;

export const Title = styled.h1`
  padding: 30px;
  font-size: 60px;
  border-radius: 15px;
  ${mobile({ padding: "50px 0", fontSize: "45px" })}
  color: #ffff;
`;
