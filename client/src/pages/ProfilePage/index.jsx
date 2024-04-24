import React, { useContext, useState } from 'react';
import UserProfile from '../../components/UserProfile';
import Header from '../../components/Header';
import Footer from '../../components/Footer/indexs';
import UserContext from '../../contexts/userContext';
import Button from '../../components/Button';
import styles from './ProfilePage.module.scss'
import UpdateUserForm from '../../components/formComponents/UpdateUserForm';
import { useHistory } from 'react-router-dom';

const ProfilePage = (props) => {
    
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const [isProfileUpdating, setIsProfileUpdating] = useState(false)
  const handleDeleteProfile = () => {
    setUser(null);
    history.replace('/');
  }; 
  
  return (
    <>
      <Header/>
      <section className={styles.container}>
        <section className={styles.aside}>
          <Button onClick={() =>  setIsProfileUpdating(false)}>Profile</Button>
          <Button onClick={() => setIsProfileUpdating(true)}>Edit</Button>
          <Button onClick={handleDeleteProfile}>Delete</Button>
        </section>
        <section className={styles.section}>
          {isProfileUpdating ? (
          console.log('Кнопка була натиснута'),<>
          <h1>Edit</h1>
          <UpdateUserForm/>
          </>
          ) : (
            
          <>
          
          <UserProfile user ={user}/>
          </>)}
          
        </section>
      </section>
      <Footer/>
    </>
  );
};

export default ProfilePage;
