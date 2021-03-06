import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  console.log(props);
  return (
    <div>
      <h1>My Friends</h1>
      <div className="friends-container">
        {props.friendsList.map(friend => {
          return <Friend friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendsList;
