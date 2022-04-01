import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button,Container,Error,Form,Input,linkStyle,Title,Wrapper, ImageContainer,Image} from "./Login.styled.js";
import { Link } from "react-router-dom";
import LoginImage from "../../images/login.png";
import { login } from "../../features/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <Container>
      <ImageContainer>
          <Image src = {LoginImage}></Image>
      </ImageContainer>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input  placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <Button disabled={isFetching} onClick={handleSubmit}>login</Button>
          {error && <Error>{error}  </Error>}
          <Link to= "/"style = {linkStyle}>Forgot password?</Link>
          <Link to= "/register" style = {linkStyle}>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
