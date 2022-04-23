import { useEffect, useState } from "react";
import { mobile, tablet } from "../../../responsive.js";
import {  useSelector } from "react-redux";
import styled from "styled-components";
import Product from "../Product/Product.js";
import {getAllProductsByCat} from "../../../features/productSlice.js";
import noFoundImage from "../../../images/noSearchItem.png";
import ProductSkeleton from "../Product/Product_Skeleton.js"

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  align-items: center;
  grid-gap: 10px;
  margin: auto;
  position: relative;
  ${mobile({
    gridTemplateColumns: "repeat(2,minmax(100px, 1fr))",
    marginTop: "30px",
  })}
  ${tablet({
    gridTemplateColumns: "repeat(3,minmax(100px, 1fr))",
    marginTop: "30px",
  })}
`;
const NoFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 500px;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  ${mobile({
    height: "300px",
  })}
`;

const NoFoundImageContainer = styled.div`
  height: 300px;
  ${mobile({
    height: "200px",
  })}
`;
const NoFoundImage = styled.img`
  height: 100%;
`;

const NoFoundTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NoFoundText = styled.p`
  margin-bottom: 10px;
`;

const Products = ({ cat, filters, sort }) => {
  const productsByCat = useSelector(getAllProductsByCat);
  const { productsBySearch } = useSelector((state) => state.products);
  const productStatus = useSelector((state) => state.products.status);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const length = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
  useEffect(() => {
    cat === "search"
      ? setFilteredProducts(
          productsBySearch.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        )
      : setFilteredProducts(
          productsByCat.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
  }, [cat, productsByCat, filters, productsBySearch]);

  

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "oldest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {productStatus === "pending" ? (
        length.map((item, i) => 
          <ProductSkeleton item =  {item} key = {i}/>
        )
      ) : productStatus === "fulfilled" &&   Object.keys(filteredProducts).length !== 0 ?(
        filteredProducts.map((item, idx) => <Product item={item} key={idx} />)
      ) : (
          <NoFoundContainer>
            <NoFoundImageContainer>
              <NoFoundImage src={noFoundImage} alt  = "no Found Image"/>
            </NoFoundImageContainer>
            <NoFoundTextContainer>
              <NoFoundText>No results found</NoFoundText>
              <NoFoundText>Try different or more general keywords</NoFoundText>
            </NoFoundTextContainer>
          </NoFoundContainer>
        )
      }
    </Container>
  );
};

export default Products;
