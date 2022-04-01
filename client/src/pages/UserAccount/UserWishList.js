import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  width: 100%;
  min-height: 760px;

`;
const Top = styled.div`
  margin: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
`;
const Title = styled.h1``;
const SubHeading = styled.p``;

const UserWishList = () => {
  return (
    <Container>
      <Top>
        <Title>My Wishlists</Title>
        <SubHeading>Manage and Protect your account</SubHeading>
      </Top>
    </Container>
  );
};

export default UserWishList;
