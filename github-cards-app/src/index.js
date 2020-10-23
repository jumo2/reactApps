import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class Card extends React.Component{
  render(){
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" alt="" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    ) 
  }
}

class App extends React.Component {
  render () {
    return (
      <div className="header">
        {this.props.title}
        <Card />
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App title = "The GitHub Cards App" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
