import { render } from '@testing-library/react';
import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

reactDom.render(<App />, document.getElementById('root'));
