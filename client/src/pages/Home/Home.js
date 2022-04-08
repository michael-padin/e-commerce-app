import React from "react";
import Carousel from "../../components/Shop/Carousel/Carousel.js";
import Categories from "../../components/Shop/Categories/Categories.js";
import { PopularTitleContainer, Title, Container, ProductsContainer,} from "./Home.styled.js";
import Newsletter from "../../components/Shop/Newsletter/Newsletter.js";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Shop/Product/Product.js";
import {  fetchAsyncProducts,  getAllProducts, } from "../../features/productSlice.js";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const popularProducts = useSelector(getAllProducts);
  
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <Container>
        <PopularTitleContainer>
          <Title type="category">CATEGORY</Title>
        </PopularTitleContainer>
        <Categories />
        <PopularTitleContainer>
          <Title type="popular">POPULAR PRODUCTS</Title>
        </PopularTitleContainer>
        <ProductsContainer>
          {popularProducts?.slice(0, 8).map((item, idx) => (
            <Product item={item} key={idx} />
          ))}
        </ProductsContainer>
      </Container>
      <Newsletter />
    </>
  );
};

export default Home;
