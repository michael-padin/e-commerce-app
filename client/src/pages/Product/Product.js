import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import { addProduct, addQuantity } from "../../features/cartSlice.js";
import {fetchAsyncSelectedProduct,refreshSelectedProduct} from "../../features/productSlice.js";
import { AddContainer, Button, Container, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper, SkeletonImgContainer, SkeletonInfoContainer, SkeletonTitle, SkeletonDesc, ModalContainer, Modal, CloseIconContainer, BackgroundContainer, QuantityButton, ProductQuantityContainer, ProductAmount,} from "./Product.styled.js";
import Products from "../../components/Shop/Products/Products.js";
import equal from 'fast-deep-equal/es6'

const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { selectedProduct, status } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [userProduct, setUserProduct] = useState();

  // fetch single product using the id
  useEffect(() => {
    dispatch(fetchAsyncSelectedProduct(id));
    return () => {
      dispatch(refreshSelectedProduct());
    };
  }, [dispatch, id]);

  // set chosen properties for the product
  useEffect(() => {
    setUserProduct(()=> ({ ...selectedProduct, quantity, size, color  }));
  }, [ quantity, size, color, selectedProduct ]);

  // compare objects, if same objects only quantity change
  const getProducts = () => {
    const totalPrice = products?.map(product => product.price).reduce((a, b) => a + b, 0) 
    const product = products?.find(product => product._id === userProduct._id && product.color === userProduct.color && product.size === userProduct.size);
    if (product) {
      const index = products.findIndex(product => product._id === userProduct._id && product.color === userProduct.color && product.size === userProduct.size)
      dispatch(addQuantity({quantity, index, totalPrice}))
    } else {
      dispatch(addProduct({...userProduct, totalPrice}))
    }
   }
   
   
 /*  const getIndex = () => {
    let{quantity, ...newUserProduct} = userProduct;
    console.log(equal(userProduct,product));
    console.log(product);
    console.log(userProduct);
   } 
 */
  // close modal
  const handleClose = () => {
    setIsStarting(false);
  };

  const handleClick = (e) => {
    // increase and descrease the quantity
    if (e === "increase") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleSubmit = () => {
    if (color ===  "") { 
      setIsStarting(true);
      setErrMessage("Please select a color");
    } else if (size === "") {
      setErrMessage("Please select a size");
      setIsStarting(true);
    } else {
      getProducts();
    }
    
  };

  return (
    <Container>
      <BackgroundContainer isStarting = {isStarting} onClick = {handleClose}  >
      <ModalContainer>
        <CloseIconContainer onClick={handleClose}>
          <CloseIcon />
        </CloseIconContainer>
        <Modal>{errMessage}</Modal>
      </ModalContainer>
      </BackgroundContainer>
      <Wrapper>
        {status === "pending" ? (
          <>
            <SkeletonImgContainer />
            <SkeletonInfoContainer>
              <SkeletonTitle />
              <SkeletonDesc />
              <SkeletonDesc />
              <SkeletonDesc />
            </SkeletonInfoContainer>
          </>
        ) : (
          <>
            <ImgContainer>
              <Image src={selectedProduct.img} alt={selectedProduct.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{selectedProduct.title}</Title>
              <Desc>{selectedProduct.desc}</Desc>
              <Price>PHP {selectedProduct.price}.00</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color: </FilterTitle>
                  {selectedProduct.color?.map((color, idx) => (
                    <FilterColor
                      isClick={isClick}
                      color={color}
                      key={idx}
                      onClick={() => {
                        setColor(color);
                        setIsClick(!isClick);
                      }}
                    />
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Size: </FilterTitle>
                  <FilterSize onChange={(e) => setSize(e.target.value)}>
                    <FilterSizeOption selected disabled hidden>
                      Select Size
                    </FilterSizeOption>
                    {selectedProduct.size?.map((size, idx) => (
                      <FilterSizeOption key={idx}>{size}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <ProductQuantityContainer>
                  <QuantityButton>
                  <Remove onClick={() => handleClick("decrease")} style={{ height: "15px", width: "15px" }} />
                  </QuantityButton>
                  <ProductAmount>{quantity}</ProductAmount>
                  <QuantityButton>
                  <Add onClick={() => handleClick("increase")} style={{ height: "15px", width: "15px" }}/>
                  </QuantityButton>
                </ProductQuantityContainer>
                <Button onClick={handleSubmit}>Add to cart</Button>
              </AddContainer>
            </InfoContainer>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Product;
