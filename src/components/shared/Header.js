import goalSvg from '../../assets/achievement.svg'
import userSvg from '../../assets/user.svg'

function Header() {
    return(
        <div className="Header">
            <div className="header-left">
                <img className="header-left_svg" src={goalSvg}></img>
                <a className="header-left_text" href="/">Goals App</a>
            </div>
            <nav>
                <a className="header-right_login" href="/">
                    <img className="header-left_loging-svg" src={userSvg}></img>
                </a>
            </nav>
        </div>
    );
}

export default Header;