import React from 'react';

const FriendsList = props => {
    return (
        <ul>
            {props.friends.map((friend) => {
                return(
                    <li>
                        <div key={friend.id}>
                            <p>name: {friend.name}</p>
                            <p>age: {friend.age}</p>
                            <p>email: {friend.email}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendsList