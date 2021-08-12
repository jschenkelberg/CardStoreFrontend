import React,{Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/titlebar';
import ShoppingCart from './ShoppingCart/shoppingCart';
import axios from 'axios';

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
  getShoppingCart = async (event) => {
    var res = await axios (`https://localhost:44394/api/shoppingcart/${event}`)
    return(
      this.setState({
        shoppingCart: res.data
      })
    )
  }

  // we recieved a 200 code with the merch items from Db
  getAllItems = async () => {
    var res = await axios (`https://localhost:44394/api/merches`)
    return(
      this.setState({
        items: res.data
      })
    );
  }

  

  delete
render() {
  return (
    <React.Fragment>
      <TitleBar />
      <ShoppingCart/>
      
      <h1>Our React App</h1>
    </React.Fragment>
  );
}
}
export default App;
