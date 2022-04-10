import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {UserProfileContainer, Top, Title, SubHeading, InfoParent, Form, InfoSubParent, LabelContainer, Label, InputContainer, Input, Button, ErrorMessage} from "./UserProfile.styled.js";
import { changeUserPass, removeStatus } from "../../features/userSlice.js";

const initialState = {currentPassword: "", password: "", confirmNewPassword: ""};
const validPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/);

const UserProfile = () => {
  const dispatch = useDispatch();
  const [currentPasswordErr, setCurrentPasswordErr] = useState("");
  const [newPasswordErr, setNewPasswordErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [formData, setFormData] = useState(initialState);
  const {currentPassword, password, confirmNewPassword} = formData;
  const {currentUser , status, error} = useSelector((state) => state.user);
  const {email, _id, fullName} = currentUser;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setCurrentPasswordErr("");
    setNewPasswordErr("");
    setConfirmPasswordErr("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPassword === "") {
      setCurrentPasswordErr("This field is required"); 
    } else if (password === "") {
      setNewPasswordErr("This field is required");
    } else if (!validPassword.test(password)) {
      setNewPasswordErr("Password must contain 5 characters, 1 uppercase, lowercase, and number");
    } else  if (confirmNewPassword !== password) {
     setConfirmPasswordErr("Password not match");
    } else {
      dispatch(changeUserPass({password, email, _id, currentPassword}));
    }
  }


  useEffect(() => {
   if (status === "rejected") {
    setServerErr(error);
   }

   return dispatch(removeStatus());
  },[status, dispatch, error]);

  return (
    <UserProfileContainer>
      <Top>
        <Title>My Profile</Title>
        <SubHeading>Manage and Protect your account</SubHeading>
      </Top>
      <InfoParent>
        <InfoSubParent>
          <LabelContainer>
            <Label>Full Name</Label>
          </LabelContainer>
          <InputContainer>{fullName}</InputContainer>
        </InfoSubParent>
        <InfoSubParent>
          <LabelContainer>
            <Label>Email</Label>
          </LabelContainer>
          <InputContainer padding="10">{email} </InputContainer>
        </InfoSubParent>
        <InfoSubParent></InfoSubParent>
      </InfoParent>

      <Top>
        <Title>Change Password</Title>
      </Top>
      <InfoParent>  
        <Form onSubmit = {handleSubmit}>
          <InfoSubParent>
            <LabelContainer>
              <Label>Current Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input name = "currentPassword" type="text" onChange = {handleChange} />
              <ErrorMessage>{currentPasswordErr ? currentPasswordErr: serverErr }</ErrorMessage>
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>New Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input name = "password" type="text" onChange = {handleChange} />
              <ErrorMessage>{newPasswordErr}</ErrorMessage>
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>Confirm Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input name = "confirmNewPassword" type="text" onChange = {handleChange} />
              <ErrorMessage>{confirmPasswordErr}</ErrorMessage>
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer></LabelContainer>
            <InputContainer>
              <Button>save</Button>
            </InputContainer>
          </InfoSubParent>
        </Form>
      </InfoParent>
    </UserProfileContainer>
  );
};

export default UserProfile;
