import React from "react";

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const id = this.props.match.params.id;
    const friend = this.props.friends.find(
      friend => friend.id === parseInt(id)
    );
    console.log(friend);

    if (!friend) {
      return <p>WAIT</p>;
    } else {
      return (
        <div>
          <p>name: {friend.name}</p>
          <p>age: {friend.age}</p>
          <p>email: {friend.email}</p>
          <button onClick={(e) => this.props.deleteFriend(e, friend.id)}>delete</button>
          <button>update</button>
        </div>
      );
    }
  }
}

export default Friend;
