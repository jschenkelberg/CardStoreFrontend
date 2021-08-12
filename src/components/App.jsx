import React,{Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/titlebar';
import ShoppingCart from './ShoppingCart/shoppingCart';

class App  extends Component {
  constructor(props) {
      super(props);
  }
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
