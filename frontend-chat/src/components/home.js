import React, { useState } from 'react';
import './home.css';
import Login from './login';
import Register from './register';
const Home = (props) => {
  const [loginPage, setLoginPage] = useState(true)

  const funcSetLogin = (val) => {
    // watch the video for the full code 
    // 
    // 
    // 
    // 
    // 
    // 
    //     
  }
  return (
    <div className='home'>
      {
        loginPage ? <Login setLoginFunc={props.setLoginFunc} funcSetLogin={funcSetLogin} /> : <Register funcSetLogin={funcSetLogin} />
      }

    </div>
  )
}

export default Home