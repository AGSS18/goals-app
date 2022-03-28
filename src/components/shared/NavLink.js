function NavLink({children, title, href, isActive}) {
    return(
        <a className={`aside-links flex-hw-align ${isActive && 'aside-active'}`} href={href}>
            {children}
            <span className="aside-links_title">{title}</span>
        </a>
    );
}

export default NavLink;