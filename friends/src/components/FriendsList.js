import React from "react";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return (
          <li key={friend.id}>
            <Link to={`/friends/${friend.id}`}>
              <p>name: {friend.name}</p>
              <p>{friend.age ? `age: ${friend.age}` : ""}</p>
              <p>{friend.email ? `email: ${friend.email}` : ""}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
