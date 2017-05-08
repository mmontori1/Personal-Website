import React from 'react';
import { render } from 'react-dom';
import { Helog } from './components';

let message = 'helog'
console.log(message)

const app = document.getElementById('app');
render(<Helog/>, app);