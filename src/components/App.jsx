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
  useHistory,
} from "react-router-dom";
import jwtDecode, { InvalidTokenError } from "jwt-decode";
import MerchForm from "./merchForm/merchForm";
import ReviewForm from "./reviewForm/reviewForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import MerchModal from "./Modal/Modal";

class App extends Component { 
  constructor(props) {
    //localStorage.setItem("token", resData.token);
    
    const tokenFromStorage = localStorage.getItem("token");
    localStorage.removeItem("token");
    super(props);
    this.state = {
      user: "",
      shoppingCart: [],
      items: [],
      userid: ""
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);      
      this.setState({user});     
      console.log(user.id);
    } catch {}      
  }
  


  getShoppingCart = async (event) => {
    var res = await axios.get(
      `https://localhost:44394/api/shoppingcart/${event}`
    );
    return this.setState({
      shoppingCart: res.data,
    });
  };

  // we recieved a 200 code with the merch items from Db
  getAllItems = async () => {
    var res = await axios.get(`https://localhost:44394/api/merches`);
    console.log(res);
    return this.setState({
      items: res.data,
    });
  };

  newUser = async (event) => {
    try{
    var res = await axios.post(
      `https://localhost:44394/api/authentication`,
      event);
    console.log(res);
    //setRedirect(true);
  
    return this.setState({
      user: res.data,
    });
        
  }
  catch(err){
    alert(err);
  }
  };

  getUser = async (event) =>{    
    var res = await axios.post(
      `https://localhost:44394/api/authentication/login`, event
    );
    let token = res.data.token;
    localStorage.setItem('token', token);
    console.log(res.data.token);
    this.getUserInfo();     
  this.setState({
    user:res.data
  }); console.log(res.data)}


  getUserInfo = async (event) => {
    const jwt = localStorage.getItem('token');
    var response = await axios.get(
      `https://localhost:44394/api/examples/user`, {headers: {Authorization: 'Bearer ' + jwt}});
      console.log(response.data);
      this.setState({
        userid: response.data.id
      })
  }

  addMerch = async (event) => {
    const jwt = localStorage.getItem("token");
    const res = await axios.post(
      `https://localhost:44394/api/merches`, event,{
        headers: { Authorization: "Bearer " + jwt },
      })
      .then((res) => {
        console.log(res);
      
        // this.props.getMerch(merchId)
        
      })     
      // .catch((err) => console.log(err));
  };


  render() {
    const user = this.state.user;
    return (
      <React.Fragment>
        <NavBar />
        
        <Switch>
          {/* <route path ='/register' render ={props => {
            if (!user){
              return <Redirect to='/login'/>;
            }else{
              return <Home{...props} user={user}/>
            }
          }} */}
        {/* /> */}
          <Route path="/" exact component={Home}>
          <MerchForm userid={this.getUserInfo}/>
          <ReviewForm userid={this.getUserInfo} />
          <MerchModal />
          </Route>

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
