import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let currentdate=new Date();
currentdate=currentdate.getHours();
let greeting='';
const cssstyle={};
if(currentdate>=1 && currentdate<12)
{
    greeting='Good Morning';
    cssstyle.color='green';
}
else if(currentdate>=12&& currentdate<19)
{
  greeting='Good Evening';
  cssstyle.color='orange'
}
else
{
  greeting='Good afternoon';
  cssstyle='blue';
}
ReactDOM.render(
<div>
<h1>
  Hello Sir,<span style={cssstyle}> {greeting} </span>
</h1>
</div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
