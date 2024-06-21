// TODO: Add a comment explaining role of the index.js file and import statements
//This imports two functions boxClick and headerClick
import { boxClick } from './box';
import { headerClick } from './header';

// const boxClick = require('./box');
// const headerClick = require('./header')

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
//there are event listeners assigned to these functions/buttons