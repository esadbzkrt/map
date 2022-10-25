import './Header.scss'
import {TbMapSearch} from "react-icons/tb";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

function Header(user) {

    let navigate = useNavigate();
    const route = () => {
        navigate('/')
    }
    const logout = () => {
        localStorage.removeItem('user');
        user.setUser();
        route();
    }


    return (
        <div className="header">
            <div className="header-logo">
                <TbMapSearch size="2rem"/>
                <h1>Map App</h1>
            </div>
            {user &&
                <div className="header-user">
                    <AiOutlineUser size="1.5rem"/>
                    {user.user ? <div>
                            <h3>{user.user}</h3>
                            <BiLogOut onClick={logout} size="1.5rem"/>
                        </div> :
                        <h3> Login</h3>}


                </div>}

        </div>
    );
}

export default Header;