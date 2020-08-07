import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../images/login-img.svg'

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect
  } = useAuth0();
  return !isAuthenticated && (
    <div className='container-fluid m-0 p-0'>
      <div className="banner">
        <img className="loading-img" src={Logo} alt='logo-img' />
        <button className="btn px-4" onClick={loginWithRedirect}>Log in / Sign in</button>
      </div>
    </div>
  );
}

export default LoginButton;