import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addProduct } from "../../features/cartSlice.js";
import { fetchAsyncSelectedProduct, refreshSelectedProduct } from "../../features/productSlice.js";
import { AddContainer,Amount,AmountContainer,Button,Container,Desc,Filter,FilterColor,FilterContainer,FilterSize,FilterSizeOption,FilterTitle,Image,ImgContainer,InfoContainer,Price,Title,Wrapper, SkeletonImgContainer, SkeletonInfoContainer, SkeletonTitle, SkeletonDesc} from "./Product.styled.js";

const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const {selectedProduct, status} = useSelector(state => state.products)
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  // fetch single product using the id
  useEffect(() => {
      dispatch(fetchAsyncSelectedProduct(id));
      return () => {
        dispatch(refreshSelectedProduct());
      }
    }, [dispatch, id]);

  
    


  const handleClick = (e) => {  
    // increase and descrease the quantity
    if (e === "increase") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleSubmit = () => {
    dispatch(addProduct({ ...selectedProduct, quantity, color, size })) ;
  };

  return (
    <Container>
      <Wrapper>
        { status === "pending" ?
        <>
        <SkeletonImgContainer/>
        <SkeletonInfoContainer>
        <SkeletonTitle/>
        <SkeletonDesc/>
        <SkeletonDesc/>
        <SkeletonDesc/>
        </SkeletonInfoContainer>
        </> : 
        <>
        <ImgContainer>
          <Image src={selectedProduct.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{selectedProduct.title}</Title>
          <Desc>{selectedProduct.desc}</Desc>
          <Price>PHP {selectedProduct.price}.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              {selectedProduct.color?.map((color, idx) => (
                <FilterColor color={color} key={idx} onClick={() => setColor(color)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {selectedProduct.size?.map((size, idx) => (
                  <FilterSizeOption key={idx}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleClick("decrease")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleClick("increase")} />
            </AmountContainer>
            <Button onClick={handleSubmit}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
        </>
        }
      </Wrapper>
    </Container>
  );
};

export default Product;
