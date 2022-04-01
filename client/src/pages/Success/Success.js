import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../../common/api/shopApi.js";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 5px;
  border: none;
  outline: none;
`;

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const { currentUser } = useSelector((state) => state.user);
  const [orderId, setOrderId] = useState(null);

  console.log(cart);
  console.log(data);

  useEffect(() => {
    const createOrder = async () => {
      const response = await userRequest.post("/orders", {
        productId: data,
        product: cart.products.map((product) => ({
          productId: product._id,
          quantity: product.quantity,
        })),
        amount: cart.total,
        address: data.billing_details.address,
      });
      setOrderId(response.data._id);
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <Container>
      {orderId
        ? `Order has been created successfully, Your order number is ${orderId}`
        : `Successfull. Your order is being prepared`}
      <Link to="/">
        <Button> Go Back to Home Page</Button>
      </Link>{" "}
    </Container>
  );
};

export default Success;
