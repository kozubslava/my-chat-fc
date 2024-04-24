import React from "react";
import UserItem from "../UserItem";

const UsersList = ({ users }) => {
  const usersItems = users.map((user) => <UserItem key = {user.id} user = {user}/>
    
);

  return <div>{usersItems}</div>;
};

export default UsersList;
