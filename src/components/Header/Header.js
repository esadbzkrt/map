import './Header.scss'
import {TbMapSearch} from "react-icons/tb";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {useState} from "react";

function Header() {

    const [login, setLogin] = useState(true);

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
                    <BiLogOut size="1.5rem"/>
                    <h3>Logout</h3>

                </div>}

        </div>
    );
}

export default Header;