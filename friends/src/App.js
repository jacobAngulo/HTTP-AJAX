import React, { Component } from 'react';
import axios from 'axios'
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      // .then(res => console.log(res.data))
      .then(res => this.setState({
        friends: res.data
      }))
  }

  render() {
    return (
      <FriendsList
      friends = {this.state.friends}
      />
    );
  }
}

export default App;
