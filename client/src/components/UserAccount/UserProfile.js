import { useState } from "react";
import { useSelector } from "react-redux";
import {UserProfileContainer, Top, Title, SubHeading, InfoParent, Form, InfoSubParent, LabelContainer, Label, InputContainer, Input, Button, ErrorMessage} from "./UserProfile.styled.js";

const initialState = {currentPassword: "", newPassword: "", confirmNewPassword: ""};
const validPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/);

const UserProfile = () => {
  const [currentPasswordErr, setCurrentPasswordErr] = useState("");
  const [newPasswordErr, setNewPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [changePassword, setChangePassword] = useState(initialState);
  const {currentPassword, newPassword, confirmNewPassword} = changePassword;
  const user = useSelector((state) => state.user.currentUser);

  const handleChange = (e) => {
    setChangePassword({...changePassword, [e.target.name]: e.target.value});
    setCurrentPasswordErr("");
    setNewPasswordErr("");
    setConfirmPasswordErr("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPassword === "") {
      setCurrentPasswordErr("This field is required");
    } else if (newPassword === "") {
      setNewPasswordErr("This field is required");
    } else if (!validPassword.test(newPassword)) {
      setNewPasswordErr("Password must contain 5 characters, 1 uppercase, lowercase, and number");
    } else if (confirmNewPassword !== newPassword) {
     setConfirmPasswordErr("Password not match");
    } else {
      console.log({...changePassword});
      console.log(user._id);
    }
  }

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
          <InputContainer>{user.fullName}</InputContainer>
        </InfoSubParent>
        <InfoSubParent>
          <LabelContainer>
            <Label>Email</Label>
          </LabelContainer>
          <InputContainer padding="10">{user.email} </InputContainer>
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
              <ErrorMessage>{currentPasswordErr}</ErrorMessage>
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>New Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input name = "newPassword" type="text" onChange = {handleChange} />
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
