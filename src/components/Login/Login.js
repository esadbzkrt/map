import React from 'react'
import './Login.scss'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(props) {

let navigate = useNavigate();
    const route = () => {
        navigate('/')
    }

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.get('http://localhost:8000/users').then(res => {
                res.data.filter(user => {
                    if (user.username === e.target.username.value && user.password === e.target.password.value) {
                        localStorage.setItem('user', JSON.stringify(user.username));
                        console.log("user logged in: " + user.username)
                        route();
                    }else{
                        console.log("user not found")
                    }
                }
                )
            })
        } catch (error) {
            console.log(error)
        }
    }




  return (
    <div className='login'>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='username' name='username' id='username' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
            <button type='submit' >Login</button>
        </form>
        <h5>Kayıt ol </h5>
    </div>
  )
}



export default Login
