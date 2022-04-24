import styled from "styled-components";
import { mobile } from "../../responsive.js";
import { useSelector } from "react-redux";
import UserProfile from "../../components/UserAccount/UserProfile.js";

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  padding: 40px;
  ${mobile({ padding: "0" })}
`;

const Sidebar = styled.div`
  width: 20%; 
  height: 100%;
  padding: 20px;
  /* margin-right: 20px; */
  ${mobile({ display: "none" })}
`;
const AccountProfile = styled.div`
  padding: 10px 0;                                                                
  display: flex;
  align-items: center;
`;
const ProfilePicContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePic = styled.h2`
`;
const Username = styled.p``;


const UserInformation = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Sidebar>
        <AccountProfile>
          <ProfilePicContainer>
            <ProfilePic>
              {user?.fullName.slice(0,1).toUpperCase()}
            </ProfilePic>
          </ProfilePicContainer>
          <Username>{user?.fullName}</Username>
        </AccountProfile>
      </Sidebar>
      <UserProfile/>
    </Container>
  );
};

export default UserInformation;
