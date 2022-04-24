import { Add, Remove } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userRequest } from "../../common/api/shopApi.js";
import StripeCheckout from "react-stripe-checkout";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {EmptyText, Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, EmptyCartContainer, EmptyCartImageContainer, EmptyCartImage, ProductColor, ProductDetail, DeleteIconContainer, ProductName, ProductPrice, ProductSize, Summary, SummaryButton, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Top, TopButton, Wrapper, ProductColorContainer, ProductQuantityContainer} from "./Cart.styled.js";
import emptyCart from "../../images/emptyCart.svg";
import {  addQuantityInCart, removeProduct } from "../../features/cartSlice.js";
import logo from "../../images/logo.png"

const Cart = () => {
  const dispatch = useDispatch();
  const KEY = process.env.REACT_APP_KEY;
  const history = useHistory();
  const {products, totalPrice} = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => { 
    const makeRequest = async () => {
      const res = await userRequest.post("/checkout/payment", {
        tokenId: stripeToken.id,
        amount: 500,
      });
      history.push("/success", {
        stripeData: res.data,
        products: products,
      }); 
    };
    stripeToken && makeRequest();
  }, [stripeToken, products, history]);


  const handleClick = (clickedProduct, type) => {  
    const index = products.findIndex(product => product._id === clickedProduct._id && product.color === clickedProduct.color && product.size === clickedProduct.size)
    let quantity = clickedProduct.quantity;
    let price = clickedProduct.price;
    if (type === "increase") {
       quantity += 1;
      dispatch(addQuantityInCart({index, quantity: quantity, totalPrice: price}))
    } else  if (type === "decrease") {
      quantity -= 1;
      quantity >= 1 ? dispatch(addQuantityInCart({index, quantity: quantity, totalPrice: price})) : dispatch(removeProduct({index}));
    } 
  }

  const handleDelete = (clickedProduct) => {
    const index = products.findIndex(product => product._id === clickedProduct._id && product.color === clickedProduct.color && product.size === clickedProduct.size)  
    dispatch(removeProduct({index}));
  }

  return (
    <Container>
      <Wrapper>
      {Object.keys(products).length === 0 ? (
          <EmptyCartContainer>
          <EmptyCartImageContainer>
            <EmptyCartImage src={emptyCart} alt={emptyCart} />
          </EmptyCartImageContainer>
          <EmptyText>Your shopping cart is empty</EmptyText>
          <Link to = "/">  <TopButton>Go Shopping Now</TopButton></Link>
          </EmptyCartContainer>
        ) : (
          <>
         <Top>
           <Link to = "/">
          <TopButton>CONTINUE SHOPPING</TopButton>
           </Link>
         </Top>
       
          <Bottom>
            <Info>
              {products.map((product, index) => {
                return (
                  <div key={index}>
                    <Product>
                      <ProductDetail>
                        <Link to = {`/product/${product._id}`}>
                        <Image src={product.img} alt={product.img}/>
                        </Link>
                        <Details >
                          <ProductName >
                            <b>Product: </b> {product.title}
                          </ProductName>
                          <ProductColorContainer>
                            <b>Color: </b>   <ProductColor color={product.color} />
                          </ProductColorContainer>
                          <ProductSize>
                            <b>Size:</b> {product.size}
                          </ProductSize>
                          <ProductSize>
                            <b>Price:</b> {product.price}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail >
                        <ProductQuantityContainer>
                          <Button onClick={() => handleClick(product, "increase")}>
                            <Add style={{ height: "15px", width: "15px" }} />
                          </Button>
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Button onClick={() => handleClick(product, "decrease")}>
                            <Remove style={{ height: "15px", width: "15px" }} />
                          </Button>
                        </ProductQuantityContainer>
                        <ProductPrice>₱{product.totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") ?? product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }.00
                        </ProductPrice>
                        <DeleteIconContainer onClick = {() => handleDelete(product)}>
                          <DeleteOutlineOutlinedIcon fontSize="medium" style={{ color: "gray", fontSize: "30px" }}/>
                        </DeleteIconContainer>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </div>
                );
              })}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice> ₱ {totalPrice?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00
                </SummaryItemPrice>
              </SummaryItem>
              {user ? (
                <StripeCheckout image={logo} description={`Your total is ₱${totalPrice}`} name="Moka" billingAddress shippingAddress amount={totalPrice} token={onToken} stripeKey={KEY} alt={"shop"}>
                  <SummaryButton>CHECKOUT</SummaryButton>
                </StripeCheckout>
              ) : (
                <Link to="/login">
                  <SummaryButton>CHECKOUT</SummaryButton>
                </Link>
              )}
            </Summary>
          </Bottom>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Cart;
