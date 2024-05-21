import React from 'react'
import Main from '../components/Main';
import LoginRegisterForm from '../components/LoginRegisterForm';

const Login = () => {
   
  
    return (
     <Main>
        <LoginRegisterForm formType={"login"}/>
     </Main>
    );
}

export default Login