import goalSvg from '../../assets/achievement.svg'
import userSvg from '../../assets/user.svg'

function Header() {
    return(
        <div className="Header box-shadow">
            <div className="header-left">
                <img className="header-left_svg" src={goalSvg}></img>
                <a className="header-left_text" href="/">Goals App</a>
            </div>
            <div className="header-right">
                <a className="header-right_login" href="/">
                    <img className="header-left_loging-svg" src={userSvg}></img>
                </a>
            </div>
        </div>
    );
}

export default Header;