import React from 'react'
import './Login.scss'
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';



function Login(props) {

    let navigate = useNavigate();
    const route = () => {
        navigate('/map')
    }

    function goSignup() {
        navigate('/signup')
    }

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.get('http://localhost:8000/users').then(res => {
                // eslint-disable-next-line array-callback-return
                res.data.filter(user => {
                    if (user.username === e.target.username.value && user.password === e.target.password.value) {
                        props.setUser(user.username);
                        props.setIsLogin(true);
                        localStorage.setItem('user', user.username);
                        route();
                    }
                }
                )
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        !localStorage.getItem('user') ?
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='username' name='username' id='username'/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password'/>
                <button type='submit'>Login</button>
            </form>
            <h5 onClick={goSignup} >Kayıt ol </h5>
        </div>
            :
            <Navigate to="/map" />

    )
}


export default Login
