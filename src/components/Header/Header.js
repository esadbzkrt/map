import './Header.scss'
import {TbMapSearch} from "react-icons/tb";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {useState} from "react";
import { Navigate, useNavigate } from 'react-router-dom';

function Header(login) {

    let navigate = useNavigate();
    const route = () => {
        navigate('/login')
    }
    const logout = () => {
        localStorage.removeItem('user');
        route();
    }


    return (
        <div className="header">
            <div className="header-logo">
                <TbMapSearch size="2rem"/>
                <h1>Map App</h1>
            </div>
            {login &&
                <div className="header-user">
                    <AiOutlineUser size="1.5rem"/>
                    <h3>username</h3>
                    <BiLogOut onClick={logout} size="1.5rem"/>

                </div>}

        </div>
    );
}

export default Header;