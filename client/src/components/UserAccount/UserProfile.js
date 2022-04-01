import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../responsive.js";

const UserProfileContainer = styled.div`
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  height: 100%;
  min-height: 760px;
  ${mobile({margin: "0", borderRadius: "0", })}

`;
const Top = styled.div`
  margin: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
`;
const Title = styled.h1``;
const SubHeading = styled.p``;

const InfoParent = styled.div`
  margin: 40px 20px 0 20px;
`;

const Form = styled.form``;

const InfoSubParent = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  width: 50%;
  ${mobile({width: '100%', })}
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  color: rgba(85, 85, 85, 0.8);
  text-transform: capitalize;
  overflow: hidden;
  ${mobile({width: '35%',justifyContent: "flex-start" })}
  
`;
const Label = styled.label``;

const InputContainer = styled.div`
  padding-left: 1.25rem;
  display: flex;
  flex: 1;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #cccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #b5838d;
  padding: 10px;
  border: none;
  color: #fff;
  width: 30%;
  border-radius: 5px;
`;

const UserProfile = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <UserProfileContainer>
      <Top>
        <Title>My Profile</Title>
        <SubHeading>Manage and Protect your account</SubHeading>
      </Top>
      <InfoParent>
        <Form>
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
            <InputContainer padding="10">
              <Input type="text" value={user.email} />
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>Name</Label>
            </LabelContainer>
            <InputContainer>
              {" "}
              <Input type="text" value="padinmichael201@gmail.com" />
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

      <Top>
        <Title>Change Password</Title>
      </Top>
      <InfoParent>
        <Form>
          <InfoSubParent>
            <LabelContainer>
              <Label>Current Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input type="text" value="padinmichael201@gmail.com" />
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>New Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input type="text" value="padinmichael201@gmail.com" />
            </InputContainer>
          </InfoSubParent>
          <InfoSubParent>
            <LabelContainer>
              <Label>Confirm Password</Label>
            </LabelContainer>
            <InputContainer>
              <Input type="text" value="padinmichael201@gmail.com" />
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
