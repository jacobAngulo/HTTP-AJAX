import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import AddFriendForm from "./components/AddFriendForm";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      // .then(res => console.log(res.data))
      .then(res =>
        this.setState({
          friends: res.data
        })
      );
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => console.log("ERR", err));
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => console.log("ERR", err));
  };

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">friends list</NavLink>
          <NavLink to="/add-friend-form">add friend</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={() => <FriendsList friends={this.state.friends} />}
        />
        <Route
          path="/add-friend-form"
          render={() => <AddFriendForm addFriend={this.addFriend} />}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
