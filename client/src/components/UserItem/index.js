import React from 'react';

const UserItem = ({user}) => {
  return (
      <article key={user.id}>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </article>
  );
}

export default UserItem;
