import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login/login";
import NavBar from "./NavBar/navbar";
import Register from "./Register/register";
import Home from "./Home/home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import jwtDecode, { InvalidTokenError } from "jwt-decode";
import AddCards from "./AddCards/addCards";
import "bootstrap/dist/css/bootstrap.min.css";
import MerchModal from "./AddCards/addCards";
import DisplayMerch from "./DisplayMerch/displayMerch";
import MerchDetails from "./MerchDetails/merchDetailsModal";
import ShoppingCart from "./DisplayCartModal/displayCartModal";
import Logout from "./Logout/logout";

class App extends Component {
  constructor(props) {
    const tokenFromStorage = localStorage.getItem("token");
    localStorage.removeItem("token");
    super(props);
    this.state = {
      user: "",
      shoppingCart: [],
      items: [],
      userid: "",
      reviews: [],
      reviewsById: [],
      redirect: null,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.getAllItems();
    this.getAllReviews();
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
      console.log(user.id);
    } catch {}
  }

  getAllReviews = async () => {
    var res = await axios(`https://localhost:44394/api/review`);
    return this.setState({
      reviews: res.data,
    });
  };

  getReviewsbyId = async (merchid) => {
    var res = await axios(`https://localhost:44394/api/review`, merchid);
    return this.setState({
      reviewsById: res.data,
    });
  };

  getAllItems = async () => {
    var res = await axios(`https://localhost:44394/api/merches`);
    var tempItem = res.data;
    return this.setState({
      items: tempItem,
    });
  };

  getShoppingCart = async () => {
    var res = await axios(
      `https://localhost:44394/api/shoppingcart/3310cf10-8093-4a7b-84f3-327232cc5a7b`
    );
    var tempShoppingCart = res.data;

    return this.setState({
      shoppingCart: tempShoppingCart,
    });
  };

  newUser = async (event) => {
    try {
      var res = await axios.post(
        `https://localhost:44394/api/authentication`,
        event
      );
      console.log(res);
      return res.status;
    } catch (err) {
      alert(err);
    }
  };

  getUser = async (event) => {
    var res = await axios.post(
      `https://localhost:44394/api/authentication/login`,
      event
    );
    let token = res.data.token;
    localStorage.setItem("token", token);
    console.log(res.data.token);
    this.getUserInfo();
    this.setState({
      user: res.data,
      isLoggedIn: true,
    });
    console.log(res.data);
  };

  getUserInfo = async (event) => {
    const jwt = localStorage.getItem("token");
    var response = await axios.get(
      `https://localhost:44394/api/examples/user`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log(response.data);
    this.setState({
      userid: response.data.id,
    });
  };

  addReview = async (review) => {
    const jwt = localStorage.getItem("token");
    const res = await axios
      .post(`https://localhost:44394/api/review`, review, {
        headers: { Authorization: "Bearer " + jwt },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  addToCart = async (cart) => {
    const jwt = localStorage.getItem("token");
    let response = await axios
      .post("https://localhost:44394/api/shoppingcart", cart, {
        headers: { Authorization: "Bearer " + jwt },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert("Already in your cart."));

    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        cart: response.data,
      });
    }
  };

  deleteFromCart = async (id) => {
    try {
      await axios.delete(`https://localhost:44394/api/cart/remove/${id}/`);
    } catch (err) {
      console.log(err);
    }
  };

  logoutUser = async (event) => {
    localStorage.removeItem("token");
  };

  render() {
    const user = this.state.user;

    return (
      <React.Fragment>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn == false ? (
          <Switch>
            <Route
              path="/login"
              render={(props) => <Login {...props} getUser={this.getUser} />}
            />

            <Route
              path="/register"
              render={(props) => (
                <Register
                  {...props}
                  newUser={this.newUser}
                  Redirect
                  to="/login"
                />
              )}
            />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home}>
              <DisplayMerch
                items={this.state.items}
                addToCart={this.addToCart}
              />
              <AddCards getAllItems={this.getAllItems} />
              <ShoppingCart />
            </Route>
            <Redirect to="not-found" />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default App;
