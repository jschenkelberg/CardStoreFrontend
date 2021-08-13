import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';


const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

reactDom.render(<Router><App /></Router>, document.getElementById('root'));
