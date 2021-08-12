import React,{Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/titlebar';

class App  extends Component {
  constructor(props) {
      super(props);
  }
render() {
  return (
    <React.Fragment> 
      <TitleBar/>
    <h1>Our React App</h1>
    </React.Fragment>
  );
}
}
export default App;
