import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { Wrapper, Container, Image, Info, Icon, Bottom, Title, Price, styledLink} from "./Product.styled.js";



const Product = ({ item }) => {
  return (
    <Wrapper>
      <Container>
        <Image src={item.img} alt = {item.title}/>
        <Info>
          <Icon>
          <Link to = {`/product/${item._id}`} style = {styledLink}>
            <SearchOutlinedIcon />
            </Link>
          </Icon>
        </Info>
      </Container>
      <Bottom>
        <Title>{item.title}</Title>
        <Price>
          <b>₱ </b> {item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}.00
        </Price>
      </Bottom>
    </Wrapper>
  );
};

export default Product;
