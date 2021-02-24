import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
    posts: [
        {id: '0', like: '11', postText: "Wake fucking up, Samurai."},
        {id: '2', like: '56', postText: "We have a city to burn!"},
        {id: '3', like: '42', postText: "Hello, I'm Johny!"}
    ],
    messages: [
        {id: '0', my_message: true, text: 'Hey, V, how are you?'},
        {id: '1', my_message: false, text: "I'm okay."},
        {id: '2', my_message: true, text: 'Wake fucking up, Samurai!'},
        {id: '3', my_message: true, text: 'We have a city to burn!'}
    ],
    dialogs: [
        {id: '0', name: 'Johny Silverhand'},
        {id: '1', name: 'V'},
        {id: '2', name: 'Rogue'},
        {id: '3', name: 'Adam Smasher'},
        {id: '4', name: 'Judy Alvarez'},
        {id: '5', name: 'Saburo Arasaka'}
    ]
}


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
