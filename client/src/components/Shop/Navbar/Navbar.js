import SearchRounded from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { persistor } from "../../../features/store.js";
import {AccountContainer,AccountProfile,ArrowUp,Center,Circle,Container,IconContainer,Input,Left,LinkStyle,List,ListContainer,ListItem,ListItems,Logo,LogoSidebarContainer,MenuItem,ModalContainer,Right,SearchContainer,Sidebar,Wrapper,} from "./Navbar.styled.js";
import { fethAsyncProductsBySearch } from "../../../features/productSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { quantity } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    persistor.purge();
    window.location.reload();
    history.push("/");
  };
  
  const handleSearch = () => {
    dispatch(fethAsyncProductsBySearch(search));
    history.push(`/products/search?searchQuery=${search}`);
    setSearch("");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <SearchContainer>
              <Input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <SearchRounded
                onClick={handleSearch}
                fontSize="medium"
                style={{ color: "gray" }}
              />
            </SearchContainer>
          </Left>
          <Center>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              <Logo color="#fff">Moka</Logo>
            </Link>
          </Center>
          <Right>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                  <ShoppingCartOutlinedIcon
                    sx={{ fontSize: 30 }}
                    style={{ color: "white" }}
                  />
                </Badge>
              </MenuItem>
            </Link>
            {user ? (
              <>
                <MenuItem>
                  <AccountContainer onClick={() => setVisible(!visible)} >
                    <Circle>
                      <AccountProfile>{user?.fullName.slice(0,1).toUpperCase()}</AccountProfile>
                    </Circle>
                  </AccountContainer>
                </MenuItem>
                <ModalContainer
                  isVisible={visible}
                  onMouseEnter={() => setVisible(visible)}
                  onMouseLeave={() => setVisible(!visible)}
                >
                  <ArrowUp />
                  <List>
                    <Link to="/user/account/myaccount" style={LinkStyle}>
                      <ListItem>My account</ListItem>
                    </Link>
                    <Link to="/user/account/mywishlist" style={LinkStyle}>
                      <ListItem>My wishlist</ListItem>
                    </Link>
                    <ListItem onClick={handleSubmit}>logout</ListItem>
                  </List>
                </ModalContainer>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  <MenuItem> Register </MenuItem>
                </Link>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  <MenuItem> Sign In </MenuItem>
                </Link>
              </>
            )}
          </Right>
        </Wrapper>
      </Container>

      {user ? (
        <Sidebar isOpen={visible}>
          <LogoSidebarContainer>
            <IconContainer onClick={() => setVisible(!visible)}>
              <KeyboardBackspaceOutlinedIcon />
            </IconContainer>
            <Logo color="#b5838d">Moka</Logo>
          </LogoSidebarContainer>
          <ListContainer>
            <Link to="/user/account/myaccount" style={LinkStyle}>
              <ListItems onClick={() => setVisible(!visible)}>
                <IconContainer>
                  <PersonOutlineIcon />
                </IconContainer>
                My Account
              </ListItems>
            </Link>
            <Link style={LinkStyle} to="/user/account/mywishlist">
              <ListItems onClick={() => setVisible(!visible)}>
                <IconContainer>
                  <FavoriteBorderIcon />
                </IconContainer>
                My Wishlists
              </ListItems>
            </Link>
            <ListItems onClick={handleSubmit}>
              <IconContainer>
                <LogoutIcon />
              </IconContainer>
              Logout
            </ListItems>
          </ListContainer>
        </Sidebar>
      ) : (
        <Sidebar isOpen={visible}>
          <LogoSidebarContainer>
            <Logo color="#b5838d">Moka</Logo>
          </LogoSidebarContainer>
          <ListContainer>
            <Link to="/user/acount/myaccount" style={LinkStyle}>
              <ListItems>
                <IconContainer>
                  <PersonOutlineIcon />
                </IconContainer>
                Sign In
              </ListItems>
            </Link>
            <Link style={LinkStyle}>
              <ListItems>
                <IconContainer>
                  <FavoriteBorderIcon />
                </IconContainer>
                Register
              </ListItems>
            </Link>
          </ListContainer>
        </Sidebar>
      )}
    </>
  );
};

export default Navbar;
