import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../../../responsive.js";
import { useDispatch } from "react-redux";
import { fetchAsyncProductsByCat } from "../../../features/productSlice.js";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  transition: transform .2s;
  ${mobile({ height: "auto" })}
  ${tablet({ height: "auto" })}

  &:hover{
    transform: scale(1.01);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(74, 64, 58, 0.4);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
  ${tablet({ height: "50vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 50px;
  text-align: center; 

`;


const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchAsyncProductsByCat(item.cat));
  }


  return (
    <Container onClick = {handleClick}>
        <Link to={`products/${item.cat}`}>  
      <Overlay/>
          <Image src={item.img} alt = {item.title}/>
          <Info>
            <Title>{item.title}</Title>
          </Info>
        </Link>
    </Container>
  );
};

export default CategoryItem;
