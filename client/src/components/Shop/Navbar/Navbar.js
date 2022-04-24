import SearchRounded from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {AccountContainer,AccountProfile,ArrowUp,Center,Circle,Container,IconContainer,Input,Left,LinkStyle,List,ListContainer,ListItem,ListItems,Logo,LogoSidebarContainer,MenuItem,ModalContainer,Right,SearchContainer,Sidebar,Wrapper,} from "./Navbar.styled.js";
import { fetchAsyncProductsBySearch } from "../../../features/productSlice.js";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { logoutStart } from "../../../features/userSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { quantity } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    setVisible(!visible);
    dispatch(logoutStart());
    history.push("/login");
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncProductsBySearch(search));
    history.push(`/products/search?searchQuery=${search}`);
    setSearch("");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
              <form onSubmit = {handleSearch} style = {{width: "100%"}}>
            <SearchContainer>
              <Input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search}/>
              <SearchRounded onClick = {handleSearch} fontSize="medium" style={{ color: "gray" }}/>
            </SearchContainer>
              </form>
          </Left>
          <Center>
            <Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "#fff",}}>
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
                <ModalContainer isVisible={visible} onMouseEnter={() => setVisible(visible)} onMouseLeave={() => setVisible(!visible)}>
                  <ArrowUp />
                  <List>
                    <Link to="/user/account" style={LinkStyle}>
                      <ListItem>Account</ListItem>
                    </Link>
                    <ListItem onClick={handleSubmit}>Sign out</ListItem>
                  </List>
                </ModalContainer>
              </>
            ) : (
              <>
               <MenuItem>
                  <AccountContainer onClick={() => setVisible(!visible)} >
                    <Circle>
                      <AccountProfile><PersonIcon fontSize= "small" color = "disabled"/></AccountProfile>
                    </Circle>
                  </AccountContainer>
                </MenuItem>
                <ModalContainer isVisible={visible} onMouseEnter={() => setVisible(visible)} onMouseLeave={() => setVisible(!visible)}>
                  <ArrowUp />
                  <List>
                    <Link to="/login" style={LinkStyle}>
                      <ListItem>Log in</ListItem>
                    </Link>
                    <Link to="/register" style={LinkStyle}>
                      <ListItem>Sign up</ListItem>
                    </Link>
                  </List>
                </ModalContainer>
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
          <Link to="/" style={LinkStyle} onClick={()=> setVisible(!visible)}>
              <ListItems>
                <IconContainer>
                  <HomeOutlinedIcon  />
                </IconContainer>
                Home
              </ListItems>
            </Link>
            <Link to="/user/account/" style={LinkStyle}>
              <ListItems onClick={() => setVisible(!visible)}>
                <IconContainer>
                  <PersonIcon />
                </IconContainer>
                My Account
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
          <IconContainer onClick={() => setVisible(!visible)}>
              <KeyboardBackspaceOutlinedIcon />
            </IconContainer>
            <Logo color="#b5838d">Moka</Logo>
          </LogoSidebarContainer>
          <ListContainer>
            <Link to="/" style={LinkStyle} onClick={()=> setVisible(!visible)}>
              <ListItems>
                <IconContainer>
                  <HomeOutlinedIcon  />
                </IconContainer>
                Home
              </ListItems>
            </Link>
            <Link to="/register" style={LinkStyle} onClick={()=> setVisible(!visible)}>
              <ListItems>
                <IconContainer>
                  <PersonIcon  />
                </IconContainer>
                Sign Up
              </ListItems>
            </Link>
            <Link to="/login" style={LinkStyle} onClick={()=> setVisible(!visible)}>
              <ListItems>
                <IconContainer>
                  <LoginIcon  />
                </IconContainer>
                Log In
              </ListItems>
            </Link>
          </ListContainer>
        </Sidebar>
      )}
    </>
  );
};

export default Navbar;
