import React from 'react';
import "./Login.scss";
import { Button } from '@mui/material';

const Login = () => {

  const signIn = () => {
    
  }

  return (
    <div className='login'>
      <div className='loginLogo'>
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={signIn}>Login</Button>
    </div>
  )
}

export default Login