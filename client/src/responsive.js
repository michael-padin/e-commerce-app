import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media (min-width: 0px) and (max-width: 767px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media  (min-width: 768px) and (max-width: 1024px) {
      ${props}
    }
  `;
};
