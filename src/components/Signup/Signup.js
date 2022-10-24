import React , {useEffect, useRef} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

function Signup(props) {

    useEffect((e)  => {
        e.preventDefault();
        axios.get('http://localhost:8000/users')
        .then(res => {
            console.log(res.data.length)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    let navigate = useNavigate();
    const route = () => {
        navigate('/login')
    }

    const onSubmit = async e => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8000/users',
        {
            username: e.target.username.value,
            password: e.target.password.value,
        });
        route();
    } catch (error) {
        console.log(error)
    }
   
  }

  

  return (
    <div className='signup'>
        <h1>Signup</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='username' name='username' id='username' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
            <button type='submit' >Signup</button>
        </form>
    </div>
  )
}



export default Signup
