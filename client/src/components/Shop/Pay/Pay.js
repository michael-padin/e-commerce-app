import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const KEY = process.env.REACT_APP_KEY;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 120px;
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
`;

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const res = await axios.post(
        "http://localhost:5000/api/checkout/payment",
        { tokenId: stripeToken.id, amount: 2000 }
      );
      
      console.log(res.data);
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <Container>
      <StripeCheckout
        name="Shopshop"
        image="https://img.icons8.com/fluency/48/000000/shop.png"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>Pay now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
