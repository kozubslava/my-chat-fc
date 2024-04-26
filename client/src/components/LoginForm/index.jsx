import React, {useContext} from "react";
import { Form, Formik, Field, ErrorMessage } from "formik"
import {login} from "../../api"
import styles from "./LoginForm.module.scss"
import UserContext from "../../contexts/userContext";
import { USER_LOGIN_SCHEMA } from "../../utils/validation";



  const initialValues = {
    
    email: '',
    password: ''
    
  };
  
  const LoginForm = (props) => {
    const[ _ , setUser] = useContext(UserContext);

    const handleSubmit = async(values, formikBag) => {
      
      const response = await login(values)

      setUser(response.data.data);
      
      formikBag.resetForm();
      
    };

  return(
  <Formik
  initialValues={initialValues}
      validationSchema={USER_LOGIN_SCHEMA}
      onSubmit={handleSubmit}>
    <Form className={styles.form}> 
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
         


          
      </div>
      <div className = {styles.submit}>
        <button type="submit">
          Login
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

export default LoginForm;
