import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
const axios = require('axios');


const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
)


class Card extends React.Component{
  render(){
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    ) 
  }
}


class Form extends React.Component {

  state = { userName: "" }
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await 
      axios.get(`https://api.github.com/users/${this.state.userName}`)
      this.props.onSubmit(resp.data)
      this.setState({ userName: ''});

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value = {this.state.userName} 
          onChange={event => this.setState({userName: event.target.value})}
          placeholder="GitHub username"
          required 
        />
        <button>Add Card</button>
      </form>
    )
  }
}



class App extends React.Component {

state = {
  profiles: [],
};

addNewProfile = (profileData) => {
  this.setState(prevState => ({
    profiles: [...prevState.profiles, profileData]
  }))
}

  render () {
    return (
      <div className="header">
        {this.props.title}
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
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
