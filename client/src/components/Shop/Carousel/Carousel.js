import styled from "styled-components";
import { mobile, tablet } from "../../../responsive.js";
import happy from "../../../images/happy.jpg";

const Container = styled.div`
  display: flex;
  background-image: url(${happy});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  justify-content: center;
  
  margin: auto;
  overflow: hidden;
  ${mobile({ height: "50vh" })}
  ${tablet({ height: "70vh" })}
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(74, 64, 58, 0.3);

  ${mobile({
    textAlign: "left",
    backdropFilter: "none",
    webkitBackdropFilter: "none",
  })}
  ${tablet({
    textAlign: "left",
    backdropFilter: "none",
    webkitBackdropFilter: "none",
  })}
`;

const ParentContainer = styled.div`
  display: flex;
  max-width: 1500px;
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
`;

const InfoContainer = styled.div`
  margin-left: 30px;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  flex-direction: column;
  color: #fff;
  width: 700px;
  ${mobile({
    width: "100%",
    margin: "0",
    padding: "20px",
  })}
  ${tablet({
    width: "80%",
    margin: "0",
    padding: "20px",
  })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "40px" })}
`;

const Description = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin: 50px 0px;
  line-height: 60px;
  word-spacing: 10px;
  ${mobile({ margin: "50px 0 0 0 ", lineHeight: "30px", fontSize: "20px" })}
  ${tablet({ margin: "50px 0 0 0 ", lineHeight: "40px" })}
`;


const Carousel = () => {
  return (
    <Container>
      <Overlay>
        <ParentContainer>
          <InfoContainer>
            <Title>LOUNGEWEAR LOVE</Title>
            <Description>
              DON'T COMPORMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Description>
          </InfoContainer>
        </ParentContainer>
      </Overlay>
    </Container>
  );
};

export default Carousel;
