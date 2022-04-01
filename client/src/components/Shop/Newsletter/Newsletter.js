import newsLetterImage from "../../../images/newsletter.png"
import styled from "styled-components";
import { Send } from "@mui/icons-material";
import { mobile, tablet } from "../../../responsive.js";

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #fff;
  flex-wrap: wrap;

  ${mobile({height: "100%"})}
`;

const ImageContainer = styled.div`
  height: 70%;
  margin: 20px;
  display: flex;
  align-items: center;

  ${mobile({display: "none"})}
  ${tablet({display: "none"})}
`;
const Image = styled.img`
    height: 100%;

`;
const Wrapper = styled.div`
  height: 60%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  margin: 20px;
  flex-wrap: wrap;
  ${mobile({height: '100%', margin: '0', borderRadius: "0", width: "100%", padding: "20px"})}
`;



const Title = styled.h1`
  font-size: 70px;
  margin: 0 0 20px 0;
  color: #2F2E41;
  ${mobile({fontSize: "40px"})}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "15px" })}
`;
const InputContainer = styled.div`
  border: 1px solid #b5838d;
  height: 60px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;

  ${mobile({ width: "100%", marginTop: "10px", height: "40px"  })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  padding: 20px;
  border-radius: 8px; 
${mobile({padding: "10px", fontSize: "15px", width: "100%"})}
`;

const Button = styled.button`
  height: 100%;
  width: 50px;
  border: none;
  background-color: #b5838d;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  color: #ffff;
`;

const Newsletter = () => {
  return (
    <Container>
    <ImageContainer>
        <Image src = {newsLetterImage} alt = {newsLetterImage}></Image>
    </ImageContainer>
      <Wrapper>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email" type="email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
