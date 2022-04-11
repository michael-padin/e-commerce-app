import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button,Container,Error,Form,Input,linkStyle,Title,Wrapper, ImageContainer,Image, InputContainer, ErrorMessage} from "./Login.styled.js";
import { Link } from "react-router-dom";
import LoginImage from "../../images/login.png";
import { login, removeStatus} from "../../features/userSlice.js";

const initialState = {email: "", password: ""};

const Login = () => {
  const dispatch = useDispatch();
  const { error, status } = useSelector((state) => state.user);
  const [formData, setFormData]  = useState(initialState);
  const [emailErr , setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const {email, password} = formData; 

  const handleChange = (e) => { 
    setFormData({...formData, [e.target.name]: e.target.value});
    setEmailErr("");
    setPasswordErr("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "")  {
      setEmailErr("This field is required");
    } else if (password === "") {
      setPasswordErr("This field is required");
    } else {
      dispatch(login({...formData}));
    }

  };

  useEffect(() => {
    if (status === "pending") {
      setIsFetching(true); 
    }

    if (status === "rejected") {
      setIsFetching(false); 
      setServerErr(error);
    } 
    
    
    return  () => {dispatch(removeStatus());}

  },[dispatch, status, isFetching, error]);

  return (
    <Container>
      <ImageContainer>
          <Image src = {LoginImage}></Image>
      </ImageContainer>
      <Wrapper>
        <Title>Sign in</Title>
        <Form onSubmit = {handleSubmit} >
          <InputContainer>
          <Input  name = "email" placeholder="Email" type = "email" onChange={handleChange}/>
          <ErrorMessage>{emailErr}</ErrorMessage>
          </InputContainer>
          <InputContainer>
          <Input name = "password" placeholder="Password" type="password"  onChange={handleChange}/>
          <ErrorMessage>{passwordErr}</ErrorMessage>
          </InputContainer>
          <Button disabled={isFetching} >login</Button>
          <Error>{serverErr} </Error>
          <Link to= "/"style = {linkStyle}>Forgot password?</Link>
          <Link to= "/register" style = {linkStyle}>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
