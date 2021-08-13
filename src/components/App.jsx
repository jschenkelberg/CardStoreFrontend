import React, { Component } from "react";
import "./App.css";
import TitleBar from "./TitleBar/titlebar";
import ShoppingCart from "./ShoppingCart/shoppingCart";
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
} from "react-router-dom";
import jwtDecode, { InvalidTokenError } from "jwt-decode";

class App extends Component {
  constructor(props) {
    // localStorage.setItem("token", resData.token);
    // const tokenFromStorage = localStorage.getItem("token");
    // localStorage.removeItem("token");
    super(props);
    this.state = {
      user: "",
      shoppingCart: [],
      items: [],
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch {}
  }

  getUser = async (event) => {
    var res = await axios.get(`https://localhost:44394/api/user/${event}`);
    return this.setState({
      user: res.data,
    });
  };

  getShoppingCart = async (event) => {
    var res = await axios.get(
      `https://localhost:44394/api/shoppingcart/${event}`
    );
    return this.setState({
      shoppingCart: res.data,
    });
  };

  getAllItems = async () => {
    var res = await axios.get(`https://localhost:44394/api/merches`);
    console.log(res);
    return this.setState({
      items: res.data,
    });
  };

  newUser = async (event) => {
    var res = await axios.post(
      `https://localhost:44394/api/authentication`,
      event
    );
    console.log(res);
    return this.setState({
      user: res.data,
    });
  };

  getUser = async (event) =>{
    var res = await axios.post(
      `https://localhost:44394/api/authentication/login`, event
    ); 
  this.setState({
    user:res.data
  }) }

  render() {
    const user = this.state.user;
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          {/* <route path ='/profile' render ={props => {
            if (!user){
              return <Redirect to='/login'/>;
            }else{
              return <ProfileScreen{...props} user={user}/>
            }
          }}
        /> */}
          <Route path="/" exact component={Home}></Route>

          <Route
            path="/login"
            render={(props) => <Login {...props} getUser={this.getUser} />}
          />

          <Route
            path="/register"
            render={(props) => <Register {...props} newUser={this.newUser} />}
          />

          {/* <TitleBar /> */}
          <ShoppingCart />
          <Redirect to="not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
