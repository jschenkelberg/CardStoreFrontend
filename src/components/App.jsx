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
        shoppingCart: [],
        items: []
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

// not tested yet
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

  

render() {
  //console.log(this.state.items)
  console.log(this.state.shoppingCart)
  return (
    <React.Fragment>
      <TitleBar />
      <DisplayShoppingCart shoppingCart={this.state.shoppingCart}/>
      <DisplayMerch items={this.state.items}/>
      <h1>Our React App</h1>
    </React.Fragment>
  );
}
}
export default App;