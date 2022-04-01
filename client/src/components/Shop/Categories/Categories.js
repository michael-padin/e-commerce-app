import styled from "styled-components";
import { categories } from "../../../data.js";
import { mobile, tablet } from "../../../responsive.js";
import CategoryItem from "../CategoryItem/CategoryItem.js";

const Container = styled.div`
  display: flex;  
  padding: 20px;
  ${mobile({flexDirection: "column", padding: "8px"})}
  ${tablet({flexDirection: "column", padding: "8px"})}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item, idx) => (
        <CategoryItem item={item} key={idx} />
      ))}
    </Container>
  );
};

export default Categories;
