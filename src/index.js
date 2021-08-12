import React from 'react';
import reactDom from 'react-dom';

const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

reactDom.render(jsxElement, document.getElementById('root'));