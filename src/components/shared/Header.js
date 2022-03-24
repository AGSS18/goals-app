import goalSvg from '../../assets/achievement.svg'
import userSvg from '../../assets/user.svg'

function Header() {
    return(
        <header className="Header box-shadow">
            <div className="header-left">
                <img className="header-left_svg" src={goalSvg}></img>
                <a className="header-left_text" href="/">Goals App</a>
            </div>
            <nav className="header-right">
                <a className="header-right_login" href="/">
                    <img className="header-right_login-svg" src={userSvg}></img>
                </a>
            </nav>
        </header>
    );
}

export default Header;