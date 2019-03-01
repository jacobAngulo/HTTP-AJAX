import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import FriendForm from "./components/FriendForm";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: []
    };
  }

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

  setUpUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friend-form");
    console.log(this.state.activeFriend);
  };

  updateFriend = (e, updatedFriend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({
          activeFriend: null,
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
          <NavLink to="/friend-form">add friend</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={() => <FriendsList friends={this.state.friends} />}
        />
        <Route
          path="/friend-form"
          render={() => (
            <FriendForm
              addFriend={this.addFriend}
              activeFriend={this.state.activeFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setUpUpdateForm={this.setUpUpdateForm}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
