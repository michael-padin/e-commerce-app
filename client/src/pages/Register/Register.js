import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { register } from "../../features/userSlice.js";
import RegisterImage from "../../images/login.png";
import { Agreement, Button, Container, Form, Input, Title, Wrapper, ImageContainer, Image, ErrorMessage, InputContainer,} from "./Register.styled.js";

const initialState = { fullName: "", email: "", password: "", confirmPassword: "",};
//eslint-disable-next-line
const validEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/);
const validFullName = new RegExp(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/);

const Register = () => {
  const { status, error } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState(initialState);
  const [fullNameErr, setFullNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const { fullName, email, password, confirmPassword } = registerData;
  
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setFullNameErr("");
    setEmailErr("")
    setPasswordErr("")
    setConfirmPasswordErr("")
  };

  const handleSubmit = (e) => {
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
    } else if (confirmPassword !== password) {
      setConfirmPasswordErr("Password  not match.");
    } else {
      setConfirmPasswordErr(""); 
      dispatch(register({ ...registerData }));

      // Error
      if (status === "rejected" || status === "pending" || status === ""){
       setServerErr(error);
      } else {
        window.location.href = "/login";
      } 
    }
    e.preventDefault();
      
  };

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
            <ErrorMessage>{passwordErr}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange}/>
            <ErrorMessage>{confirmPasswordErr}</ErrorMessage>
          </InputContainer>
          <ErrorMessage>{serverErr}</ErrorMessage>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b> PRIVACY POLICY </b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
