import { Link } from "react-router-dom";

function NavLink({children, href, isActive}) {
    return(
        <Link className={`aside-links flex-hw-align ${isActive && 'aside-active'}`} to={href}>
            {children}
        </Link>
    );
}

export default NavLink;