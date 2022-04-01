import { useState } from "react";
import { useLocation } from "react-router";
import Products from "../../components/Shop/Products/Products.js";

import { Container, Filter, FilterContainer, FilterText, Option, Select, Title,} from "./ProductList.styled.js";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const search = location.search;
  const searchResult = new URLSearchParams(search).get('searchQuery');
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Title>{category === "search" ? `Result for ${searchResult}` : category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>tan</Option>
            <Option>blue</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Proucts:</FilterText>
          <Select name="price" onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="oldest">Oldest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      { (
        <Products cat={category} filters={filters} sort={sort} />
      )}
    </Container>
  );
};

export default ProductList;
