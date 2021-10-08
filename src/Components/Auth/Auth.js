import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import './Auth.css';

const Auth = () => {
     const user = useContext(userContext);
     const history = useHistory();

     console.log('Authorized Page:', user);

     if(!user.isAuthenticated){
          history.push('/login');
     }

     const logmeOut = () => {
          user.isAuthenticated = false;
          history.push('/login');
     }

     return (
          <div className="homepage">
               <h1>Hi {user.userName}</h1>
               <button onClick={logmeOut}>Logout</button>
          </div>
     );
};

export default Auth;