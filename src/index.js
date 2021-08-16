import { BrowserRouter as Router} from 'react-router-dom'; 
import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'



const jsxElement = <h1>Our React App</h1>;

reactDom.render(
    <Router>
    <App />
    </Router>,
     document.getElementById('root')
     );
