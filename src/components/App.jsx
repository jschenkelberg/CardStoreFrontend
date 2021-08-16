import React,{Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/titlebar';
import axios from 'axios';
import DisplayMerch from './DisplayMerch/displayMerch';
import DisplayShoppingCart from './DisplayShoppingCart/displayShoppingCart';

class App  extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: [],
        shoppingCart: [], // by user Id
        items: [],
        filterProductId: [],
        userId: "3310cf10-8093-4a7b-84f3-327232cc5a7b",
      }
  }

  componentDidMount(){
    this.getAllItems();
    this.getShoppingCart();
  }
  // not yet tested 
  getUser = async (event) => {
    var res = await axios (`https://localhost:44394/api/user/${event}`)
    return(
      this.setState({
        user: res.data
      })
    )
  }

// tested but hard coded userId, gets shopping cart by userId, this needs to then have the merchId's filtered.
  getShoppingCart = async () => {
    var res = await axios (`https://localhost:44394/api/shoppingcart/3310cf10-8093-4a7b-84f3-327232cc5a7b`)
    var tempShoppingCart = res.data
    return(
      this.setState({
        shoppingCart: tempShoppingCart
      })
    )
  }


  // we recieved a 200 code with the merch items from Db
  getAllItems = async () => {
    var res = await axios (`https://localhost:44394/api/merches`)
    var tempItem = res.data
    //console.log(tempItem)
    return(
      this.setState({
        items: tempItem
      })
    );
  }

    // shopping cart functions 
    // add item to cart with "add to cart button"
    addToCart = async (cart) => {
      let response = await axios.post('https://localhost:44394/api/cart', cart);
      if (response === undefined){
            this.setState({
            });
        }else{
          this.setState({
            cart: response.data
        });
        }
    }

    // delete item in cart by id "remove from cart" button
    deleteFromCart = async (id) => {
      try{
        await axios.delete(`https://localhost:44394/api/cart/remove/${id}/`)
      }
      catch(err) {
        console.log(err);
      }
    }

  

render() {
  //console.log(this.state.items)
  console.log(this.state.shoppingCart)
  console.log(this.state.filterProductId)
  return (
    <React.Fragment>
      <TitleBar />
      <DisplayShoppingCart shoppingCart={this.state.shoppingCart} items={this.state.items}/>
      <DisplayMerch items={this.state.items} addToCart={this.addToCart}/>
      <h1>Our React App</h1>
    </React.Fragment>
  );
}
}
export default App;