import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import CloseIcon from '@mui/icons-material/Close';
import {UserProfileContainer, Top, Title, SubHeading, InfoParent, Form, InfoSubParent, LabelContainer, Label, InputContainer, Input, Button, ErrorMessage, LoadingBackground, BackgroundContainer, ModalContainer, Modal, CloseIconContainer,} from "./UserProfile.styled.js";
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
  const [isStarting, setIsStarting] = useState(false);
  const {currentPassword, password, confirmNewPassword} = formData;
  const {currentUser , status, message} = useSelector((state) => state.user);
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
      setIsStarting(true);
      setFormData({currentPassword: "", password: "", confirmNewPassword: ""});
    }
  }

  const handleClose =  () => {

  setIsStarting(false);
   dispatch(removeStatus())

  }
  useEffect(() => {
   if (status === "rejected" || status === "fulfilled") {
    setServerErr(message);
   }

   return () => {}

  },[status, message]);

  return (
    <>
      <BackgroundContainer isStarting = {isStarting} onClick = {handleClose}>
      {
        status === 'pending' ?
        <LoadingBackground>
      <LoadingOverlay
          active={true}// spinner={<BounceLoader />}
          spinner={true}
          text="Loading ..."
          >
          {/* <p>Some content or children or something.</p> */}
        </LoadingOverlay>
      </LoadingBackground> :
        <ModalContainer >
          <CloseIconContainer onClick = {handleClose}>
            <CloseIcon/>
          </CloseIconContainer>
        <Modal>
          {serverErr}
        </Modal>
      </ModalContainer>
          }
          </BackgroundContainer>
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
              <Input name = "currentPassword" type="password" onChange = {handleChange} value = {currentPassword}/>
              <ErrorMessage>{currentPasswordErr}</ErrorMessage>
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>New Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input name = "password" type="password" onChange = {handleChange}  value = {password}/>
              <ErrorMessage>{newPasswordErr}</ErrorMessage>
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>Confirm Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input name = "confirmNewPassword" type="password" onChange = {handleChange}  value = {confirmNewPassword}/>
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
</>
  );
};

export default UserProfile;
