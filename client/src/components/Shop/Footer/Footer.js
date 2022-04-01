import {
  FacebookTwoTone,
  Instagram,
  Twitter,
  Phone,
  EmailOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../../responsive.js";

const Container = styled.div`
  display: flex;
  background-color: #b5838d;
  ${mobile({ flexDirection: "column" })}
  color: #fff;
  text-align: left;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => props.color};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  text-decoration: none;
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Moka</Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          nulla quasi debitis et eaque, porro accusantium aspernatur veritatis
          error nobis, in voluptatum ipsa laboriosam ex autem sed fugiat
          dignissimos. Harum!
        </Description>
        <SocialContainer>
          <SocialIcon color="#1877F2">
            <FacebookTwoTone />
          </SocialIcon>
          <SocialIcon color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem> Woman Fashion</ListItem>
          <ListItem> My Account</ListItem>
          <ListItem> Order Tracking</ListItem>
          <ListItem> Wishlist</ListItem>
          <ListItem> Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +9 876 543 210
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> moka@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
