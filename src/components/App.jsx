import React, { Component } from "react";
import "./App.css";
import TitleBar from "./TitleBar/titlebar";
import ShoppingCart from "./ShoppingCart/shoppingCart";
import axios from "axios";
import Login from "./Login/login";
import NavBar from "./NavBar/navbar";
import Register from "./Register/register";
import Home from "./Home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      shoppingCart: [],
      items: [],
    };
  }

  // componentDidMount() {
  //   this.getAllItems();
  // }
  getUser = async (event) => {
    var res = await axios.get(`https://localhost:44394/api/user/${event}`);
    return this.setState({
      user: res.data,
    });
  };

  getShoppingCart = async (event) => {
    var res = await axios.get(`https://localhost:44394/api/shoppingcart/${event}`);
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

  newUser = async () => {
    var res = await axios.post(`https://localhost:44394/api/authentication`);
    return this.setState({
      user: res.data,
    });
  };

  delete;
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" render={ props => <Register{...props}   newUser={this.newUser}/>} />
        </Router>
        {/* <TitleBar /> */}
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
export default App;
