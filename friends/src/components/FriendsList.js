import React from "react";

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return (
          <li key={friend.id}>
            <p>name: {friend.name}</p>
            <p>{friend.age ? `age: ${friend.age}` : ""}</p>
            <p>{friend.email ? `email: ${friend.email}` : ""}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
