import noData from "../../images/notFound.png";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  margin: auto;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const NotFound = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={noData} alt="image" />
      </ImageContainer>
    </Container>
  );
};

export default NotFound;
