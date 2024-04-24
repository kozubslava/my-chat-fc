import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer/indexs';

const RegistrationPage = (props)  => {
  return(
    <>
      <Header/>
      <RegistrationForm/>
      <Footer/>
    </>
  )
};

export default RegistrationPage;