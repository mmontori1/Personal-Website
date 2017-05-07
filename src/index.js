import React from 'react';
import { render } from 'react-dom';
import App from 'components/app.jsx';

let message = 'helog'
console.log(message)

const app = document.getElementById('app');
render(<App/>, app);