import React, { Component } from 'react';
import axios from 'axios'
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import { Route, NavLink } from 'react-router-dom'
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
      <div>
        <nav>
          <NavLink to='/'>friends list</NavLink>
          <NavLink to='/add-friend-form'>add friend</NavLink>
        </nav>
        <Route exact path='/' render={() => <FriendsList friends = {this.state.friends}/>}/>
        <Route path='/add-friend-form' render={() => <AddFriendForm/>}/>
      </div>
    );
  }
}

export default App;