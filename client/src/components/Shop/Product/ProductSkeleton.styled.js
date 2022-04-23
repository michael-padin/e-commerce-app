import { mobile } from "../../../responsive.js";
import styled, {keyframes} from "styled-components";

const BreatheAnimation = keyframes`
    0% {
        background-color: #ffff;
    }
    100% {
        background-color: #fafafa
    }
`;



export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  border-radius: 14px;
  background-color: #ffff;
  
  `;
export const Container = styled.div`
border-radius: 14px  14px 0 0;
animation:    .8s ${BreatheAnimation} linear infinite alternate;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${mobile({height: "200px"})}

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

export const Title = styled.div`
  height: 50%    ;

animation:    .8s ${BreatheAnimation} linear infinite alternate;
  width: 50%    ;
`;
export const Price = styled.div` height: 50%    ;

animation:    .8s ${BreatheAnimation} linear infinite alternate;
  width: 30%   `;
