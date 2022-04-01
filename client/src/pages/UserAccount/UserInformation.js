import styled from "styled-components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UserProfile from "../../components/UserAccount/UserProfile.js";
import UserWishlist from "./UserWishList.js";
import { useRouteMatch, Switch, Route, Redirect } from "react-router";
import { mobile } from "../../responsive.js";
import { Link } from "react-router-dom";
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

const LinkStyle = {
  textDecoration: 'none',
  color: '#000'
}


const UserInformation = () => {
  const { path, url } = useRouteMatch();
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
          <ListContainer  ontainer>
            <IconContainer>
              <PersonOutlineIcon />
            </IconContainer>
            <Link to={`${url}/myaccount` }  style = {LinkStyle}>
              <List>My Account</List>
            </Link>
          </ListContainer>
          <ListContainer>
            <IconContainer>
              <FavoriteBorderIcon />
            </IconContainer>
            <Link to={`${url}/mywishlist` } style = {LinkStyle}>
              <List>My Wishlist</List>
            </Link>
          </ListContainer>
        </ListItems>
      </Sidebar>

      <Switch>
        <Route exact path={`${path}/myaccount`}>
          {user ? <UserProfile /> : <Redirect to="/" />}
        </Route>
        <Route exact path={`${path}/mywishlist`}>
          {user ? <UserWishlist /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Container>
  );
};

export default UserInformation;
