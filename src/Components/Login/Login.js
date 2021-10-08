import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import './Login.css';

const Login = () => {
     const value = useContext(userContext);

     const [userName, setUserName] = useState('');
     const [pass, setPass] = useState('');

     let history = useHistory();
     console.log('Login Page: ', value);


     const handleInput = (e) => {
          e.preventDefault();
          
          authenticateUser();
     }

     const authenticateUser = () => {
          if(value.userName === userName && value.password === pass){
               value.isAuthenticated = true; 
               history.push("/auth");
          }

          else{
               console.log('Oh no');
               history.push('/login');
          }
     }

     const handleUsername = (e) => {
          setUserName(e.target.value);
     }

     const handlePass = (e) => {
          setPass(e.target.value);
     }

     

     return (
          <div className="login">
               <form onSubmit={handleInput} className="login-form">
                    <input type="text" placeholder="Username" onBlur={handleUsername} />
                    <br /> <br />
                    <input type="password" placeholder="Password" onBlur={handlePass}/>
                    <br /> <br />
                    <button type="submit">Login</button>
               </form>
          </div>
     );
};

export default Login;