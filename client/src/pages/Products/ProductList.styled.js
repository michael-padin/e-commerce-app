
import styled from "styled-components";
import { mobile } from "../../responsive.js";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1300px;
  padding: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 20px;
  ${mobile({ padding: "5px", boxShadow: "none", margin: "0"})}
  background-color: #fff;
  margin: 20px auto;
`;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ margin: " 0 20px", flexDirection: "column" })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

export const Select = styled.select`
  margin-right: 20px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  ${mobile({ margin: " 10px 0 0 0" })}
`;

export const Option = styled.option`
  border: none;
`;


