import styled from "styled-components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { mobile } from "../../responsive.js";
import { useSelector } from "react-redux";

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
  margin-right: 20px;
  ${mobile({ display: "none" })}
`;
const AccountProfile = styled.div`
  padding: 10px 0;                                                                
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
const ProfilePicContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ProfilePic = styled.h2`
`;
const Username = styled.p``;

const ListItems = styled.ul``;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const IconContainer = styled.div`
  color: #b5838d;
`;

const List = styled.li`
  list-style: none;
  padding: 10px;
`;


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
        <ListItems>
          <ListContainer>
            <IconContainer>
              <PersonOutlineIcon />
            </IconContainer>
              <List>My Account</List>
          </ListContainer>
        </ListItems>
      </Sidebar>
    </Container>
  );
};

export default UserInformation;
