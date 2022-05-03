import React from 'react';
import GoogleLogin from 'react-google-login';
import ToDosPage from './todos/_index';
import { useSelector } from 'react-redux';

import './App.css';

const App: React.FunctionComponent = () => {
  let authenticated = useSelector((state: any) => state.auth.authenticated);

  const handleSuccess = (res) => {
    console.log(res);
  };

  const handleFailure = (err) => {
    console.log(err);
  };
  
  if (authenticated === false) {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      ></GoogleLogin>
    );
  }

  return <ToDosPage />;
};

export default App;
