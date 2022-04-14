import { Add, Remove } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userRequest } from "../../common/api/shopApi.js";
import StripeCheckout from "react-stripe-checkout";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {EmptyText, Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, EmptyCartContainer, EmptyCartImageContainer, EmptyCartImage, ProductColor, ProductDetail, DeleteIconContainer, ProductName, ProductPrice, ProductSize, Summary, SummaryButton, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Top, TopButton, Wrapper, ProductColorContainer, ProductQuantityContainer} from "./Cart.styled.js";
import emptyCart from "../../images/emptyCart.svg";

const Cart = () => {
  const KEY = process.env.REACT_APP_KEY;
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    console.log(cart);
    const makeRequest = async () => {
      const res = await userRequest.post("/checkout/payment", {
        tokenId: stripeToken.id,
        amount: 500,
      });
      history.push("/success", {
        stripeData: res.data,
        products: cart,
      }); 
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, history]);

  return (
    <Container>
      <Wrapper>
      {Object.keys(cart.products).length === 0 ? (
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
              {cart.products.map((product, index) => {
                return (
                  <div key={index}>
                    <Product >
                      <ProductDetail>
                        <Image src={product.img} alt={product.img}/>
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
                          <Button>
                            <Add style={{ height: "15px", width: "15px" }} />
                          </Button>
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Button>
                            <Remove style={{ height: "15px", width: "15px" }} />
                          </Button>
                        </ProductQuantityContainer>
                        <ProductPrice>₱{product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00
                        </ProductPrice>
                        <DeleteIconContainer>
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
                <SummaryItemPrice> ₱ {cart.totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00
                </SummaryItemPrice>
              </SummaryItem>
              {user ? (
                <StripeCheckout
                  image="https://img.icons8.com/fluency/48/000000/shop.png"
                  description={`Your total is ₱${cart.totalPrice}`}
                  name="Moka"
                  billingAddress
                  shippingAddress
                  amount={cart.totalPrice}
                  token={onToken}
                  stripeKey={KEY}
                  alt={"shop"}
                >
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
