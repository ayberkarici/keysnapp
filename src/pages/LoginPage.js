import React from 'react';
import LoginImg from '../assets/img/boy_and_girl.png'
import LoginForm from '../components/LoginPage/LoginForm';

const LoginPage = () => {
  return (
    <div className='login'>
        <LoginForm />
        <section className='login-image'>
            <img src={LoginImg} />
        </section>
    </div>
  )
}

export default LoginPage