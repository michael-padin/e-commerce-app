import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { register, removeStatus } from "../../features/userSlice.js";
import RegisterImage from "../../images/login.png";
import { BottomContainer, LinkContainer, linkStyle } from "../Login/Login.styled.js";
import {  Button, Container, Form, Input, Title, Wrapper, ImageContainer, Image, ErrorMessage, InputContainer,} from "./Register.styled.js";

const initialState = { fullName: "", email: "", password: ""};
//eslint-disable-next-line
const validEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const validPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/);
const validFullName = new RegExp(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/);

const Register = () => {
  const { status, message } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState(initialState);
  const [fullNameErr, setFullNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const { fullName, email, password } = registerData;
  
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setFullNameErr("");
    setEmailErr("")
    setPasswordErr("")
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (fullName === "") {
      setFullNameErr("This field is required");
    } else if (!validFullName.test(fullName)) {
      setFullNameErr("Full Name is not valid");
    } else {
      setFullNameErr("");
    }

    if (email === "") {
      setEmailErr("This field is required");
    } else if (!validEmail.test(email)) {
      setEmailErr("Email is not valid");
    } else {
      setEmailErr("");
    }

    if (password === "") {
      setPasswordErr("This field is required");
    } else if (!validPassword.test(password)) {
      setPasswordErr(
        "Password must contain 5 characters, 1 uppercase, lowercase, and number"
      );
    } else {
      dispatch(register({...registerData}));
    }

  };

  useEffect(() => {

    if (status === "rejected") {
      setServerErr(message);
    } 

    if (status === "fulfilled") {
      history.push("/login");
    }
    
    return () =>{
      dispatch(removeStatus())
    }
  },[status, history, dispatch, message]);


  return (
    <Container>
      <ImageContainer>
        <Image src={RegisterImage} />
      </ImageContainer>
      <Wrapper>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input name="fullName" placeholder="Full Name" onChange={handleChange}/>
            <ErrorMessage>{fullNameErr}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input name="email" type="email" onChange={handleChange} placeholder="Email"/>
            <ErrorMessage>{emailErr}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input name="password" type="password" placeholder="Password" onChange={handleChange}/>
            <ErrorMessage>{passwordErr ? passwordErr: serverErr}</ErrorMessage>
          </InputContainer>
          <BottomContainer>
          <Button>Create</Button>
          </BottomContainer>
          <LinkContainer>Already have an account? <Link to= "/login"style = {linkStyle}>Sign in</Link></LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
