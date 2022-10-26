import './Header.scss'
import {TbMapSearch} from "react-icons/tb";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

function Header(props) {

    const { setUser, setIsLogin} = props;

    let navigate = useNavigate();
    const route = () => {
        navigate('/')
    }
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLogin(false);
        route();
    }


    return (
        <div className="header">
            <div className="header-logo">
                <TbMapSearch size="32px"/>
                <h1>Map App</h1>
            </div>

            <div className="header-user">
                {props.isLogin?
                    <div className="header-user-container">
                        <AiOutlineUser size="24px"/>
                        <h4> username: {props.user} | </h4>
                        <div className="header-user-container-logout" onClick={logout}>
                            <BiLogOut size="24px"/>
                            <h4>Logout</h4>
                        </div>
                    </div> :
                    <h3> Login</h3>}
            </div>

        </div>
    );
}

export default Header;