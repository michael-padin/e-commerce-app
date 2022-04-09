import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button,Container,Error,Form,Input,linkStyle,Title,Wrapper, ImageContainer,Image, InputContainer, ErrorMessage} from "./Login.styled.js";
import { Link } from "react-router-dom";
import LoginImage from "../../images/login.png";
import { login } from "../../features/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr , setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "")  {
      setEmailErr("This field is required");
    } else if (password === "") {
      setPasswordErr("This field is required");
    } else {
      dispatch(login({email, password}));
    }

  };

  return (
    <Container>
      <ImageContainer>
          <Image src = {LoginImage}></Image>
      </ImageContainer>
      <Wrapper>
        <Title>Sign in</Title>
        <Form onSubmit = {handleSubmit} >
          <InputContainer>
          <Input  placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
          <ErrorMessage>{emailErr}</ErrorMessage>
          </InputContainer>
          <InputContainer>
          <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <ErrorMessage>{passwordErr}</ErrorMessage>
          </InputContainer>
          <Button disabled={isFetching} >login</Button>
          <Error>{error} </Error>
          <Link to= "/"style = {linkStyle}>Forgot password?</Link>
          <Link to= "/register" style = {linkStyle}>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
