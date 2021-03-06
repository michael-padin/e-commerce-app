import React from 'react'
import {Wrapper, Title, Bottom, Container, Price } from './ProductSkeleton.styled.js'

const ProductSkeleton = ({item}) => {
  return (
    <Wrapper >
      <Container>
      </Container>
      <Bottom>
        <Title></Title>
        <Price>
        </Price>
      </Bottom>
    </Wrapper>
  )
}

export default ProductSkeleton