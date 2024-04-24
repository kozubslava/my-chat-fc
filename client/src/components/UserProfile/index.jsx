import React from 'react';
import styles from './UserProfile.module.scss'
import CONSTANTS from '../../constants';


const UserProfile = ({user}) => {
  
const fullName = `${user.firstName} ${user.lastName}`

  return (
    <div className={styles.userProfile}>
      <img src={ user.imgSrc || CONSTANTS.PLACEHOLDER_USER_PIC} alt={fullName} />
      <div className={styles.userInfo}>
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.isMale ? 'male' : 'female'}</p>
      </div>
    </div>
  );
}

export default UserProfile;
