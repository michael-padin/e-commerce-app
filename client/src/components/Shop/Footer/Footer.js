import {
  FacebookTwoTone,
  Instagram,
  Twitter,
  Phone,
  EmailOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../../responsive.js";
import { Link } from "react-router-dom";

const Container = styled.div`
margin: auto;
  border-top: 1px solid #eee;
  max-width: 1500px;
  display: flex;
  background-color: #ffff;
  color: rgba(0, 0, 0, 0.54);
  ${mobile({ flexDirection: "column", fontSize: ".75rem" })}
  text-align: left;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  margin: 10px 0;
  display: flex;
`;
const SocialIcon = styled.div`
  width: 25px;
  height: 25px;
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
  /* ${mobile({ display: "none" })} */
`;

const Title = styled.h3`
  margin-bottom: 20px;
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Left>
        <Logo>Moka</Logo>
        <SocialContainer>
          <SocialIcon color="#1877F2">
            <FacebookTwoTone fontSize="small" />
          </SocialIcon>
          <SocialIcon color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);">
            <Instagram fontSize="small" />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter fontSize="small" />
          </SocialIcon>
        </SocialContainer>
        © {year}. All Rights Reserved.
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <StyledLink to="/">Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/cart">Cart</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/user/account">My account</StyledLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +63 908 987 5407
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} />{" "}
          padinmichael201@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
