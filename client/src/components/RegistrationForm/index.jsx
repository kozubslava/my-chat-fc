import React, {useContext} from "react";
import { Form, Formik, Field, ErrorMessage } from "formik"
import {createUser} from "../../api"
import { USER_REGISTRATION_SCHEMA } from "../../utils/validation";
import styles from "./RegistrationForm.module.scss"
import UserContext from "../../contexts/userContext";



  const initialValues = {
    imgSrc: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirm_password: ""
    
  };
  
  const RegistrationForm = (props) => {
    const[user, setUser] = useContext(UserContext);

    const handleSubmit = (values, formikBag) => {
      const {gender, ...restUser} = values;

      const newUserData = {
        ...restUser,
        isMale: gender === 'male',
      };
        
      createUser(newUserData).then((response) => {
        
        setUser(response.data.data);
      });

      

      formikBag.resetForm();
      
    };

  return(
  <Formik
  initialValues={initialValues}
      validationSchema={USER_REGISTRATION_SCHEMA}
      onSubmit={handleSubmit}>
    <Form className={styles.form}> 
      <div >
        <Field type="text" name="firstName" placeholder="first name" className = {styles.imput}/>
        <ErrorMessage name="firstName" component={ErrorDetail}  className={styles.error} />
      </div>
      <div>
        <Field type="text" name="lastName" placeholder="last name" className = {styles.imput} />
        <ErrorMessage name="lastName" component={ErrorDetail} className={styles.error} />
      </div>
      
      <div>
        <Field type="email" name="email"  label='email' placeholder="email" className = {styles.imput}/>
        <ErrorMessage name="email" component={ErrorDetail} className={styles.error} />
      </div>
      <div>
        <Field type="password" name="password" placeholder="password" className = {styles.imput} />
        <ErrorMessage name="password" component={ErrorDetail} className={styles.error}
          />
      </div>
      <div>
          <Field type="password" name="confirm_password" placeholder="confirm passwordord" className = {styles.imput} />
          <ErrorMessage name="confirm_password" component={ErrorDetail}className={styles.error}
          />

<fieldset className = {styles.submit}>
          <legend className={styles.genderHeading}>Gender: </legend>
          <div className={styles.radioContainer}>
            <Field type='radio' name='gender' id='male' value='male' />
            <label
              htmlFor='male'
              // className={cx(styles.label, styles.radioLabel)}
            >
              Male
            </label>
          </div>
          <div className={styles.radioContainer}>
            <Field type='radio' name='gender' id='female' value='female' />
            <label
              htmlFor='female'
              // className={cx(styles.label, styles.radioLabel)}
            >
              Female
            </label>
          </div>
          <ErrorMessage
            name='gender'
            component='div'
            className={styles.error}
          />
        </fieldset>
          
      </div>
      <div className = {styles.submit}>
        <button type="submit">
          Submit
          </button>
        <button type='reset' >
            Reset fields
          </button>
      </div>
      
    </Form>
  </Formik>
  )
}

function ErrorDetail({ children, ...rest }) {
  return <div {...rest}>Error: {children}</div>;
}

export default RegistrationForm;