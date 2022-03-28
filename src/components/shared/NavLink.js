function NavLink({children, title, href, isActive}) {
    return(
        <a className={`aside-links flex-hw-align ${isActive && 'aside-active'}`} href={href}>
            {children}
        </a>
    );
}

export default NavLink;