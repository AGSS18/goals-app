import { Link } from 'react-router-dom';
import goalSvg from '../../assets/achievement.svg'
import userSvg from '../../assets/user.svg'

function Header() {
    return(
        <header className="Header box-shadow">
            <div className="header-left">
                <img className="header-left_svg" src={goalSvg}></img>
                <Link className="header-left_text" to="/">Goals App</Link>
            </div>
            <nav className="header-right">
                <Link className="header-right_login" to="/login">
                    <img className="header-right_login-svg" src={userSvg}></img>
                </Link>
            </nav>
        </header>
    );
}

export default Header;