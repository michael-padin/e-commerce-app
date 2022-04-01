import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Product from "./pages/Product/Product.js";
import Home from "./pages/Home/Home.js";
import Register from "./pages/Register/Register.js";
import Login from "./pages/Login/Login.js";
import Cart from "./pages/Cart/Cart.js";
import Success from "./pages/Success/Success.js";
import { useSelector } from "react-redux";
import Footer from "./components/Shop/Footer/Footer.js";
import Pay from "./components/Shop/Pay/Pay.js";
import ProductList from "./pages/Products/ProductList.js";
import Navbar from "./components/Shop/Navbar/Navbar.js";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
import UserInformation from "./pages/UserAccount/UserInformation.js";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="wrapper">
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/products/:category"  component={ProductList} />
            <Route exact path="/"  component={Home} />
            <Route exact path="/product/:id"  component={Product} />
            <Route exact path="/cart"  component={Cart} />
            <Route exact path="/success"  component={Success} />
            <Route exact path="/pay"  component={Pay} />
            <Route exact path="/register" >
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route exact path="/login" >
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route  path="/user/account" component = {UserInformation}/>
            <Route path = "*" component = {NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

